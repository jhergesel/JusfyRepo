import React from "react";
import SVG from "react-inlinesvg";

import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import {
    cpfMask,
    cnpjMask,
} from "../../../../../_metronic/_helpers/MasksHelper";
import useClickOutside from "../../../../hooks/useClickOutside";
import InfoCard from "./components/InfoCard";
import AddressCard from "./components/AddressCard";
import PhoneCard from "./components/PhoneCard";
import ActivitiesCard from "./components/ActivitiesCard";

import * as S from "./Aside.styles";

const InfoSection = ({
    info,
    type
}) => ( <
    S.InfoWrapper >
    <
    S.IconContainer >
    <
    SVG src = {
        toAbsoluteUrl(
            `/media/relationQuery/${type === "CNPJ" ? "company" : "person"}.svg`
        )
    }
    /> <
    /S.IconContainer> <
    div >
    <
    h1 > {
        info.name || info.trade_name
    } < /h1> <
    p >
    <
    span > {
        type
    } < /span> {
        info ? .document ?
            type === "CNPJ" ?
            cnpjMask(info.document) :
            cpfMask(info.document) :
            null
    } <
    /p> <
    /div> <
    /S.InfoWrapper>
);

const QueryCardSection = ({
    nameFormated,
    navigateToJusfinder
}) => ( <
    S.QueryCard onClick = {
        navigateToJusfinder
    } >
    <
    h1 > Destrave mais informações agora! < /h1> <
    S.QueryButton onClick = {
        navigateToJusfinder
    } >
    <
    SVG src = {
        toAbsoluteUrl("/media/relationQuery/key.svg")
    }
    /> <
    span >
    Consultar dados adicionais de < span > {
        nameFormated
    } < /span>! <
    /span> <
    /S.QueryButton> <
    /S.QueryCard>
);

const Aside = ({
        info = {},
        type = "",
        isOpen,
        onClose
    }) => {
        const asideRef = useClickOutside(() => (isOpen ? onClose() : null));

        const {
            official_name,
            name,
            document,
            pdf,
            phones,
            addresses,
            activities,
        } = info;

        const nameFormated =
            (name || official_name) ? .split(" ")[0] ? .toLowerCase() ? ? "";

        const hasPDF = pdf !== "PDF_NOT_IMPLEMENTED";

        const navigateToJusfinder = () => {
            window.analytics.track("Relationship Tree Additional Data Unlocked");
            window.open(`/jusfinder/query/default/${type}/${document}`);
        };

        return ( <
                S.Container open = {
                    isOpen
                }
                ref = {
                    asideRef
                } >
                <
                S.CloseIcon src = {
                    toAbsoluteUrl("/media/relationQuery/close.svg")
                }
                onClick = {
                    onClose
                }
                /> <
                S.ScrollView >
                <
                InfoSection info = {
                    info
                }
                type = {
                    type
                }
                /> <
                QueryCardSection nameFormated = {
                    nameFormated
                }
                navigateToJusfinder = {
                    navigateToJusfinder
                }
                /> <
                S.Wrapper > {
                    hasPDF && ( <
                        S.DownloadButton onClick = {
                            () => {
                                window.analytics.track("Relationship Tree PDF Downloaded", {
                                    context: "drawer",
                                });
                            }
                        }
                        href = {
                            pdf
                        }
                        target = "_BLANK" >
                        <
                        SVG width = "13"
                        height = "13"
                        src = {
                            toAbsoluteUrl("/media/relationQuery/download.svg")
                        }
                        /> <
                        span > Baixar PDF completo < /span> <
                        /S.DownloadButton>
                    )
                } <
                S.CardsWrapper >
                <
                InfoCard type = {
                    type
                }
                info = {
                    info
                }
                /> {
                    phones ? .length ? < PhoneCard data = {
                        phones
                    }
                    /> : null} {
                        activities ? .length ? < ActivitiesCard data = {
                            activities
                        }
                        /> : null} {
                            addresses ? .length ? < AddressCard data = {
                                addresses
                            }
                            /> : null} <
                            /S.CardsWrapper> <
                            /S.Wrapper> <
                            /S.ScrollView> <
                            /S.Container>
                        );
                    };

                    export default Aside;