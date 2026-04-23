import {
    useEffect,
    useState,
    useContext,
    useRef
} from "react";
import axios from "axios";
import {
    useParams,
    useHistory
} from "react-router-dom";

import Aside from "../Aside";
import Header from "../Header";
import ListingRelations from "../ListingRelations";
import PrincipalCard from "../PrincipalCard";
import Search from "../Search";

import * as S from "./Relations.styles";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";

const RelationQuery = () => {
    const [data, setData] = useState(null);
    const [isColapsed, setIsColapsed] = useState(false);
    const [showAside, setShowAside] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(true);

    const {
        isCompanySearch,
        setIsCompanySearch
    } = useContext(
        SearchRelationsContext
    );

    const history = useHistory();
    const {
        document_type,
        id
    } = useParams();

    const loadRelationInfo = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/queries/${id}`
        );

        if (!response.data.query_info ? .provider_response) {
            history.push("/jusfinder/query");
            return;
        }

        setData(response.data.query_info);
    };

    useEffect(() => {
        setIsCompanySearch(document_type === "CNPJ");

        if (!data) {
            loadRelationInfo();
        }
    }, [data, document_type, setIsCompanySearch]);

    useEffect(() => {
        if (!isOpenSearch) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [isOpenSearch]);

    const providerData = isCompanySearch ?
        data ? .provider_response.company_data :
        data ? .provider_response.personal_data;

    return ( <
        S.Container >
        <
        Header / >

        {
            data && ( <
                >
                <
                S.Wrapper >
                <
                PrincipalCard isColapsed = {
                    isColapsed
                }
                onColpase = {
                    () => setIsColapsed(prevState => !prevState)
                }
                onViewInfo = {
                    () => setShowAside(true)
                }
                pdf = {
                    data ? .pdf
                }
                name = {
                    providerData ? .name || providerData ? .official_name
                }
                type = {
                    document_type
                }
                />

                <
                ListingRelations { ...providerData
                }
                isColapsed = {
                    isColapsed
                }
                type = {
                    document_type
                }
                isOpenSearch = {
                    isOpenSearch
                }
                onOpenSearch = {
                    () => setIsOpenSearch(true)
                }
                isMinor = {
                    data ? .provider_response ? .minor_error
                }
                isPersonalDataError = {
                    data ? .provider_response ? .personal_data_error
                }
                />

                {
                    isCompanySearch && ( <
                        Search isOpen = {
                            isOpenSearch
                        }
                        setIsOpen = {
                            setIsOpenSearch
                        }
                        />
                    )
                } <
                /S.Wrapper> <
                Aside isOpen = {
                    showAside
                }
                onClose = {
                    () => setShowAside(false)
                }
                info = {
                    { ...providerData,
                        pdf: data ? .pdf
                    }
                }
                type = {
                    document_type
                }
                /> <
                />
            )
        } <
        /S.Container>
    );
};

export default RelationQuery;