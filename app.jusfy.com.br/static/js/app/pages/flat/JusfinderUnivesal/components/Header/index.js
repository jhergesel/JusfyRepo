import {
    useContext
} from "react";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";
import Button from "../../../../../components/flat/ui/Button";
import {
    jusfinderContext
} from "../../context";
import * as S from "./Header.styles";
import {
    ButtonRedirect
} from "./Header.styles";
import {
    useHeaderPage
} from "./useHeaderPage";
// import ChatLauncher from "../../../../../modules/ChatLauncher";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
    ButtonSuggestionQueries
} from "../../../components/ButtonSugestionQueries/ButtonSuggestionQueries";

const Header = () => {
    const {
        title,
        subtitle,
        buttonText,
        buttonIcon,
        redirect,
        openModalSuggestion,
    } = useHeaderPage();

    const {
        page,
        isLoading
    } = useContext(jusfinderContext);

    const isQueriesPage = page === "query" || page === "history";
    const isPageHistory = page === "history";
    const isMultipleQueriesPage = page === "MultipleQueriesPage";

    return ( <
        S.Container isPageQueries = {
            isQueriesPage
        }
        isMultipleQueries = {
            isMultipleQueriesPage
        } >
        <
        div >
        <
        span > {
            isQueriesPage ? "Consultas" : subtitle
        } < /span> <
        h1 > {
            isPageHistory ?
            "Consultas realizadas" :
                isQueriesPage ?
                "Nova consulta" :
                title
        } <
        /h1> <
        /div> <
        ButtonSuggestionQueries text = {
            "Fazer sugestão"
        }
        onClick = {
            openModalSuggestion
        }
        /> <
        S.ButtonWrapper isVisible = {
            isQueriesPage
        } > {
            /* <ChatLauncher
            					variant="button"
            					label="Tirar dúvidas com IA"
            					icon={<AutoAwesomeIcon size={18} sx={{color: '#4F05BE !important'}} />}
            					style={{ border: '1px solid #D1B4FD', background: '#EEE4FE', borderRadius: '5px', color: '#4F05BE', height: '44.5px' }}
            					tag="JUSFINDER"
            					context="Seu objetivo é ajudar o usuário com dúvidas sobre a feature JusFinder Jusfy, que é responsável pelas buscas de localização, veículos, dados profissionais entre outras. Utilize sua base de conhecimento sobre essas consultas para responder dúvidas sobre essas buscas. Não especifique informações sobre quantidade de créditos e plano do usuário. Qualquer dúvida nesse sentido direcione para atendimento do Suporte da Jusfy."
            					defaultMessage={`Olá! 👋 Sou o assistente da Jusfy. Posso te ajudar a entender melhor sobre o JusFinder. 😊\n\nSe tiver dúvidas sobre como usar a ferramenta, realizar alguma consulta ou aproveitar ao máximo os recursos, é só perguntar!`}
            				/> */
        } {
            buttonText && page === "history_batch" ? ( <
                ButtonRedirect onClick = {
                    redirect
                }
                disabled = {
                    isLoading
                } >
                <
                SVG width = "10px"
                height = "10px"
                fill = "#323232"
                src = {
                    toAbsoluteUrl(`/media/flat/${buttonIcon}.svg`)
                }
                /> {
                    buttonText
                } <
                /ButtonRedirect>
            ) : (
                buttonText && ( <
                    Button borderRadius = "5px"
                    padding = "10px 40px"
                    variant = "contained"
                    onClick = {
                        redirect
                    }
                    disabled = {
                        isLoading
                    } >
                    <
                    S.ButtonContent > {
                        buttonIcon ? ( <
                            SVG width = "16px"
                            height = "16px"
                            fill = "#323232"
                            src = {
                                toAbsoluteUrl(`/media/flat/${buttonIcon}.svg`)
                            }
                            />
                        ) : null
                    } {
                        buttonText
                    } <
                    /S.ButtonContent> <
                    /Button>
                )
            )
        } <
        /S.ButtonWrapper> <
        /S.Container>
    );
};

export default Header;