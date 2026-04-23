import * as S from "./SelectCardForm.styles";
import Select from "../../Select";
import Button from "../../Button";
import {
    useEffect,
    useState
} from "react";
import axios from "axios";
import CreditCardFlagIcon from "./CreditCardFlagIcon";
import {
    config
} from "../../../../../../config/env";
import {
    toast
} from "react-toastify";
import traceId from "../../../../../../redux/traceId";
import useFeatureFlag from "../../../../../hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../../../../constants/FeatureFlag";

const SelectCardForm = ({
        buttonText,
        onNewCard,
        onSubmit
    }) => {
        const {
            isFeatureFlagEnable: isSetPrimaryCardEnabled,
            flagsReady
        } = useFeatureFlag(
            FEATURE_FLAGS.KILL_SWITCH.JUSBILL_SET_PRIMARY_CARD
        );
        const [userCards, setUserCards] = useState([]);
        const [selectedCardId, setSelectedCardId] = useState("default");
        const [isLoading, setIsLoading] = useState(true);

        const loadUserCards = () => {
            setIsLoading(true);
            axios
                .get(`${config.jusfyBackend.apiUrl}/subscription/cards`, {
                    headers: {
                        "x-trace-id": traceId
                    }
                })
                .then(response => {
                    const loadedCards = response.data.data;

                    setUserCards(loadedCards);

                    const mainCard = loadedCards.find(card => card.in_use);

                    if (mainCard) {
                        setSelectedCardId(mainCard.id);
                    }
                })
                .catch(() => {
                    setUserCards([]);
                    toast.error("Falha ao carregar cartões.");
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

        return ( <
            >
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
                    isLoading || userCards.length === 0
                }
                MenuProps = {
                    {
                        disablePortal: true
                    }
                } >
                {
                    userCards.length ? (
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
                        S.CustomOption value = "default" > {
                            isLoading ? "Carregando..." : "Nenhum cartão encontrado"
                        } < /S.CustomOption>
                    )
                } <
                /Select> <
                Button
                color = "#01AB7D"
                backgroundColor = "transparent"
                onClick = {
                    onNewCard
                } >
                <
                S.ButtonText secondary > Utilizar um novo cartão < /S.ButtonText> <
                /Button> <
                /S.Container> <
                Button
                padding = "10px 40px"
                width = "100%"
                height = "40px"
                borderRadius = {
                    "5px"
                }
                backgroundColor = {
                    "#01AB7D"
                }
                color = {
                    "#FFF"
                }
                onClick = {
                    () => onSubmit(getSelectedCardById(selectedCardId))
                } >
                <
                S.ButtonText > {
                    buttonText
                } < /S.ButtonText> <
                /Button> <
                />
            );
        };

        export default SelectCardForm;