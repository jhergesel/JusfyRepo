import React, {
    useEffect,
    useState
} from "react";
import {
    useParams
} from "react-router-dom";
import {
    useSelector
} from "react-redux";
import {
    toast
} from "react-toastify";
import {
    MAINTENANCE_FEATURES,
    NEW_FEATURES,
    PLAN_FEATURES
} from "./constants";
import CardBadge from "../../../../../components/flat/ui/CardBadge";
import useFeatureFlag from "../../../../../hooks/useFeatureFlag";
export const useCardContent = (queryOption, onClick, openModal) => {
    const {
        isFeatureFlagEnable: unavailableLawsuit
    } = useFeatureFlag(
        "unavailable_lawsuit"
    );
    const {
        isFeatureFlagEnable: unavailableListVehicles
    } = useFeatureFlag(
        "unavailable_list_vehicles"
    );
    const [UNAVAILABLE_FEATURES, setUnavailableFeatures] = useState([]);

    const {
        name,
        identification,
        credit
    } = queryOption;

    const params = useParams();

    const isLawsuitUnlimited = useSelector(
        state => state.auth.user.lawsuit_unlimited
    );

    const isMaintenance =
        MAINTENANCE_FEATURES.includes(identification) ||
        UNAVAILABLE_FEATURES.includes(identification);

    const hasUnlimitedCredits = identification === "lawsuit" && credit > 10000;

    useEffect(() => {
        let toUpdateUnavailables = UNAVAILABLE_FEATURES;
        if (unavailableLawsuit && !UNAVAILABLE_FEATURES.includes("lawsuit")) {
            toUpdateUnavailables = [...UNAVAILABLE_FEATURES, "lawsuit"];
        }
        if (!unavailableLawsuit && UNAVAILABLE_FEATURES.includes("lawsuit")) {
            toUpdateUnavailables = UNAVAILABLE_FEATURES.filter(
                feature => feature !== "lawsuit"
            );
        }

        if (
            unavailableListVehicles &&
            !UNAVAILABLE_FEATURES.includes("list_vehicles")
        ) {
            toUpdateUnavailables = [...UNAVAILABLE_FEATURES, "list_vehicles"];
        }
        if (!unavailableListVehicles &&
            UNAVAILABLE_FEATURES.includes("list_vehicles")
        ) {
            toUpdateUnavailables = UNAVAILABLE_FEATURES.filter(
                feature => feature !== "list_vehicles"
            );
        }

        setUnavailableFeatures(toUpdateUnavailables);
    }, [unavailableLawsuit, unavailableListVehicles]);

    useEffect(() => {
        if (params.query !== identification) {
            return;
        }
        params.query = "";

        if (!credit) {
            openModal("BUY_CREDITS_MODAL", {
                queryOption
            });
            toast.error(`Você não possui créditos para consulta de ${name}`);
            return;
        }

        onClick();
    }, []);

    const getCardBadge = () => {
        const badgeType = [{
                type: "maintenance",
                condition: MAINTENANCE_FEATURES.includes(identification),
            },
            {
                type: "plan",
                condition: !credit && PLAN_FEATURES.includes(identification),
            },
            {
                type: "new",
                condition: NEW_FEATURES.includes(identification)
            },
        ].find(badge => badge.condition) ? .type;
        return badgeType ? < CardBadge type = {
            badgeType
        }
        /> : null;
    };

    return {
        unavailableLawsuit,
        unavailableListVehicles,
        UNAVAILABLE_FEATURES,
        setUnavailableFeatures,
        isLawsuitUnlimited,
        hasUnlimitedCredits,
        identification,
        credit,
        name,
        getCardBadge,
        isMaintenance,
    };
};