import * as S from "./SelectCardForm.styles";
import Select from "../../../../components/flat/ui/Select";
import Button from "../../../../components/flat/ui/Button";
import {
    useEffect,
    useState
} from "react";
import axios from "axios";
import CreditCardFlagIcon from "./CreditCardFlagIcon";
import AddCardIcon from '@mui/icons-material/AddCard';
import {
    toast
} from "react-toastify";
import ReactLoading from "react-loading";
import {
    EventsSegment
} from "../../../JusPage/helpers/EventsSegmentJusPage";
import useFeatureFlag from "../../../../hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../../../constants/FeatureFlag";

const SelectCardForm = ({
        buttonText,
        onNewCard,
        onSubmit
    }) => {
        const {
            EventDashboardSegment
        } = EventsSegment();
        const {
            isFeatureFlagEnable: isSetPrimaryCardEnabled,
            flagsReady
        } = useFeatureFlag(
            FEATURE_FLAGS.KILL_SWITCH.JUSBILL_SET_PRIMARY_CARD
        );

        const [userCards, setUserCards] = useState([]);
        const [selectedCardId, setSelectedCardId] = useState("default");
        const [isLoading, setIsLoading] = useState(true);
        const [isSubmitting, setIsSubmitting] = useState(false);

        // Reset do estado quando o componente for desmontado
        useEffect(() => {
            return () => {
                setIsSubmitting(false);
            };
        }, []);

        const loadUserCards = () => {
            setIsLoading(true);
            axios
                .get(process.env.REACT_APP_API_URL + `/subscription/cards`)
                .then(response => {
                    const loadedCards = response.data.data;

                    setUserCards(loadedCards);

                    const mainCard = loadedCards.find(card => card.in_use);

                    if (mainCard) {
                        setSelectedCardId(mainCard.id);
                    }
                })
                .catch((error) => {
                    setUserCards([]);

                    // Evento de falha ao carregar cartões
                    EventDashboardSegment("JusMailLoad Cards Failed", {
                        error_type: "api_error",
                        error_message: error.message || "Falha ao carregar cartões"
                    });

                    toast.error("Falha ao carregar cartões");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        useEffect(() => {
            loadUserCards();
        }, []);

        const onChangeCardSelected = e => {
            const inputSelectValue = e.target.value;

            setSelectedCardId(inputSelectValue);
        };

        const getSelectedCardById = id =>
            userCards.find(userCard => userCard.id === id);

        const handleSubmit = () => {
            // Previne múltiplos cliques
            if (isSubmitting || isLoading || selectedCardId === "default") return;

            setIsSubmitting(true);

            try {
                onSubmit(getSelectedCardById(selectedCardId));
                // Reset do estado após sucesso (com delay para permitir que o componente pai processe)
                setTimeout(() => {
                    setIsSubmitting(false);
                }, 1000);
            } catch (error) {
                console.error('Erro ao processar pagamento:', error);

                // Evento de falha ao processar pagamento com cartão selecionado
                EventDashboardSegment("JusMail Selected Card Payment Failed", {
                    error_type: "payment_processing_error",
                    error_message: error.message || "Erro ao processar pagamento",
                    card_id: selectedCardId
                });

                toast.error('Erro ao processar pagamento. Tente novamente.');
                setIsSubmitting(false);
            }
        };

        return ( <
            div style = {
                {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }
            } >
            <
            S.Container >
            <
            Select label = { < S.InputLabel > Selecione um cartão de crédito < /S.InputLabel>}
                value = {
                    selectedCardId
                }
                onChange = {
                    onChangeCardSelected
                }
                disabled = {
                    isLoading
                } >
                {!isLoading ? (
                        userCards.length > 0 ? (
                            userCards.map(userCard => ( <
                                S.CustomOption key = {
                                    userCard.id
                                }
                                value = {
                                    userCard.id
                                } >
                                <
                                CreditCardFlagIcon flag = {
                                    userCard.brand
                                }
                                /> **
                                ** {
                                    userCard.last_digits
                                } {
                                    userCard.in_use && flagsReady && isSetPrimaryCardEnabled ? ( <
                                        S.MainCardBadge > Em uso < /S.MainCardBadge>
                                    ) : null
                                } <
                                /S.CustomOption>
                            ))
                        ) : ( <
                            S.CustomOption value = "default" > Nenhum cartão cadastrado < /S.CustomOption>
                        )
                    ) : ( <
                        S.CustomOption value = "default" > Carregando... < /S.CustomOption>
                    )
                } <
                /Select> <
                S.Separator >
                <
                span > ou < /span> <
                /S.Separator> <
                div
                style = {
                    {
                        backgroundColor: "#FAFBFF",
                        border: '1px solid #E7E8EC',
                        borderRadius: "5px",
                        padding: "10px",
                        cursor: "pointer",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        height: '40px'
                    }
                }
                onClick = {
                    onNewCard
                } >
                <
                AddCardIcon sx = {
                    {
                        color: "#01AB7D !important"
                    }
                }
                /> <
                span style = {
                    {
                        color: "#01AB7D",
                        fontSize: '14px',
                        fontWeight: '600'
                    }
                } >
                Utilizar um novo cartão <
                /span> <
                /div> <
                /S.Container> <
                Button
                padding = "10px"
                borderRadius = "5px"
                width = "100%"
                disabled = {
                    isLoading || selectedCardId === "default" || isSubmitting
                }
                onClick = {
                    handleSubmit
                } >
                <
                S.ButtonText > {
                    isSubmitting ? ( <
                        ReactLoading type = "spin"
                        color = "#fff"
                        width = "20px"
                        height = "20px" / >
                    ) : (
                        buttonText
                    )
                } <
                /S.ButtonText> <
                /Button> <
                /div>
            );
        };

        export default SelectCardForm;