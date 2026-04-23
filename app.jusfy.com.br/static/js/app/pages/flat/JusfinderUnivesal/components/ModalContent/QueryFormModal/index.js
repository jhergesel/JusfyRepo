import SVG from "react-inlinesvg";

import {
    toAbsoluteUrl
} from "../../../../../../../_metronic/_helpers";

import {
    FormControlLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
import Button from "../../../../../../components/flat/ui/Button";
import * as S from "./QueryFormModal.styles";
import {
    INFO_QUERIES_MODAL,
    QUERIES_ENUM,
    QUERY_ERRORS
} from "./constants";
import {
    useQueryForm
} from "./useQueryForm";
import {
    ListQueries
} from "./ListQueries";
import {
    InfoBuyCredits
} from "./InfoBuyCredits";

const QueryFormModal = ({
        queryOption,
        creditAvailable
    }) => {
        const {
            closeModal,
            modalRef,
            documentTypeLabel,
            documentTypeLabelPrefix,
            onChangeQueryInput,
            onQueryDocument,
            hasInputError,
            setHasAcceptedterms,
            error,
            queryDocument,
            hasAcceptedTerms,
            documentType,
            setDocumentType,
            getDescriptionInfo,
            openModalFromBox,
            getTextButtonForm,
            clickOnTheCameraQuantityButton,
        } = useQueryForm(queryOption, creditAvailable);

        const {
            messageEconomicGroup,
            messageOtherQueries,
            hasCredit,
            icon,
            qtdQueries,
            needsCreditsOtherQueries,
        } = getDescriptionInfo();

        const isEconomicGroup =
            queryOption.identification === QUERIES_ENUM.ECONOMIC_GROUP;
        const message = isEconomicGroup ? messageEconomicGroup : messageOtherQueries;

        const hasCreditMessage =
            (isEconomicGroup && hasCredit) ||
            creditAvailable < queryOption.universal_price;

        return ( <
                S.Container ref = {
                    modalRef
                } >
                <
                S.WrapperHeader >
                <
                S.CloseIcon onClick = {
                    closeModal
                } >
                <
                SVG src = {
                    toAbsoluteUrl("/media/flat/close.svg")
                }
                /> <
                /S.CloseIcon> <
                S.Header >
                <
                p > Consulta < /p> <
                h1 > {
                    queryOption.name
                } < /h1> <
                /S.Header>

                <
                S.CardInfoDataQueries >
                <
                span >
                <
                strong > Resultados possíveis da busca: < /strong> {
                    INFO_QUERIES_MODAL[queryOption.identification]
                } <
                /span>

                {
                    queryOption.identification === QUERIES_ENUM.VEHICLE_TRACKING && ( <
                        S.ButtonLink onClick = {
                            clickOnTheCameraQuantityButton
                        } >
                        Confira a quantidade de câmeras por estado <
                        /S.ButtonLink>
                    )
                } <
                /S.CardInfoDataQueries> <
                /S.WrapperHeader>

                <
                S.ChooseTypeFile type = {
                    queryOption.identification
                } >
                <
                span >
                Consulta dados de um:
                <
                span className = "text-danger" > & nbsp;* < /span> <
                /span> <
                div className = "step-document" >
                <
                RadioGroup className = "flex"
                onChange = {
                    e => setDocumentType(e.target.value)
                }
                value = {
                    documentType
                } >
                <
                FormControlLabel value = "CPF"
                control = { < Radio / >
                }
                label = { < span className = "title" > CPF < /span>} /
                    >
                    <
                    FormControlLabel
                    value = "CNPJ"
                    control = { < Radio / >
                    }
                    label = { < span className = "title" > CNPJ < /span>} /
                        >
                        <
                        /RadioGroup> <
                        /div> <
                        /S.ChooseTypeFile> <
                        ListQueries
                        queryOption = {
                            queryOption
                        }
                        error = {
                            error
                        }
                        hasInputError = {
                            hasInputError
                        }
                        creditAvailable = {
                            creditAvailable
                        }
                        />

                        <
                        S.InputContainer >
                        <
                        S.Label >
                        Informe {
                            documentTypeLabelPrefix
                        } < span > {
                            documentTypeLabel
                        } < /span>{" "}
                        para consulta <
                        span className = "text-danger" > & nbsp;* < /span> <
                        /S.Label> <
                        S.Input
                        value = {
                            queryDocument
                        }
                        onChange = {
                            onChangeQueryInput
                        }
                        placeholder = {
                            `Digite ${documentTypeLabelPrefix} ${documentTypeLabel}`
                        }
                        error = {
                            hasInputError &&
                            (error === "DOCUMENT_ERROR" || error === "EMPTY_ERROR")
                        }
                        /> {
                            hasInputError &&
                                (error === "DOCUMENT_ERROR" || error === "EMPTY_ERROR") ? ( <
                                    S.Error > {
                                        QUERY_ERRORS.get(error)
                                    } < /S.Error>
                                ) : null
                        }

                        <
                        InfoBuyCredits
                        isVisible = {
                            isEconomicGroup || needsCreditsOtherQueries
                        }
                        message = {
                            message
                        }
                        icon = {
                            icon
                        }
                        hasCredit = {
                            hasCreditMessage
                        }
                        openModal = {
                            openModalFromBox
                        }
                        /> <
                        /S.InputContainer>

                        <
                        Button
                        width = "100%"
                        padding = "10px 40px"
                        height = "40px"
                        onClick = {
                            hasCreditMessage ? openModalFromBox : onQueryDocument
                        } >
                        <
                        S.ButtonText > {
                            getTextButtonForm(hasCreditMessage, qtdQueries)
                        } <
                        /S.ButtonText> <
                        /Button> <
                        S.TermsOptionContainer >
                        <
                        S.TermsOptionCheckBox
                        checked = {
                            hasAcceptedTerms
                        }
                        onClick = {
                            () => setHasAcceptedterms(state => !state)
                        }
                        /> <
                        S.TermsOptionLabel >
                        Eu li e concordo com os {
                            " "
                        } <
                        a target = "_blank"
                        rel = "noopener noreferrer"
                        href = "/terms" >
                        termos de uso <
                        /a>{" "}
                        referentes a consulta de dados dentro do JusFinder. <
                            /S.TermsOptionLabel> <
                            /S.TermsOptionContainer> {
                                error === "TERMS_ACCEPTED_ERROR" ? ( <
                                    S.Error > {
                                        QUERY_ERRORS.get(error)
                                    } < /S.Error>
                                ) : null
                            } <
                            /S.Container>
                    );
                };

                export default QueryFormModal;