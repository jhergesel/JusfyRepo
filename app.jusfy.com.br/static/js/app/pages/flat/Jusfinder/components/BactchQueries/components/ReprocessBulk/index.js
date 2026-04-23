import React, {
    useState
} from "react";
import axios from "axios";
import {
    TextField,
    Button
} from "@material-ui/core";
import useFeatureFlag from "../../../../../../../hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../../../../../../constants/FeatureFlag";

export const ReprocessBulk = () => {
    const {
        isFeatureFlagEnable: enableReprocessBulk
    } = useFeatureFlag(
        FEATURE_FLAGS.PERMISSION.REPROCESS_BULK_QUERY
    );

    const [bulkQueryId, setBulkQueryId] = useState("");
    const [loading, setLoading] = useState(false);

    if (!enableReprocessBulk) return null;

    const handleSubmit = async e => {
        e ? .preventDefault ? .();
        if (!bulkQueryId) {
            alert("Informe um ID de Bulk Query válido.");
            return;
        }
        setLoading(true);
        try {
            const id = bulkQueryId.trim();
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/bulk-queries/${encodeURIComponent(
          id
        )}/force-generate-result`, {}, {
                    headers: {
                        "x-trace-id": `reprocess-bulk-${Date.now()}`
                    }
                }
            );
        } catch (err) {
            console.error("Falha ao enfileirar export:", err);
        } finally {
            setLoading(false);
        }
    };

    return ( <
        form onSubmit = {
            handleSubmit
        }
        style = {
            {
                display: "grid",
                gap: 8,
                maxWidth: 480
            }
        } >
        <
        TextField label = "Bulk Query ID"
        placeholder = "ex.: bq_123456"
        variant = "outlined"
        size = "small"
        margin = "dense"
        fullWidth value = {
            bulkQueryId
        }
        onChange = {
            e => setBulkQueryId(e.target.value)
        }
        /> <
        Button type = "submit"
        disabled = {
            loading
        } > {
            loading ? "Publicando..." : "Reprocessar consulta"
        } <
        /Button> <
        /form>
    );
};