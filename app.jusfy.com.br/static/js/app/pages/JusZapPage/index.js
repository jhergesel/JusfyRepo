import React, {
    useState,
    useEffect,
    useRef
} from "react";
import {
    useSelector,
    useDispatch,
    useStore,
    shallowEqual
} from "react-redux";
import * as S from "./styles";
import {
    useHistory
} from "react-router-dom";
import {
    EventsSegment
} from "../JusPage/helpers/EventsSegmentJusPage";
import {
    juszapCheckout,
    checkJusZapCheckoutStatus
} from "../JusZap/api/juszapConfiguration";
import JusZapVerifyingLoader from "../JusZap/components/JusZapVerifyingLoader";
import {
    toast
} from "react-toastify";
import ModalLoading from "../JusZap/components/ConfigurationForm/ModalLoading";
import ModalPayment from "../JusZap/components/ConfigurationForm/ModalPayment";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SmsIcon from '@mui/icons-material/Sms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GroupsIcon from '@mui/icons-material/Groups';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TuneIcon from '@mui/icons-material/Tune';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const {
    EventUpdateSegment
} = EventsSegment();

const shouldShowJusZapLandingLoader = ({
    authToken,
    isJuszapConfigurationLoading,
    juszapConfiguration,
    isCheckingCheckout,
}) => {
    if (!authToken) return false;
    if (isJuszapConfigurationLoading) return true;
    return (
        Boolean(juszapConfiguration ? .hasConfiguration) &&
        juszapConfiguration ? .configuration ? .status !== "CANCELLED" &&
        isCheckingCheckout
    );
};

const JusZapPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useStore();
    const juszapConfiguration = useSelector(state => state.app.juszap_configuration);
    const isJuszapConfigurationLoading = useSelector(
        state => state.app.is_juszap_configuration_loading,
    );
    const isJuszapConfigurationError = useSelector(
        state => state.app.is_juszap_configuration_error,
    );
    const user = useSelector(state => state.auth.user, shallowEqual);
    const authToken = useSelector(state => state.auth.authToken, shallowEqual);

    const modalLoadingRef = useRef(null);
    const juszapLandingLoadIssuedRef = useRef(false);

    const [businessName, setBusinessName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const [isCheckingCheckout, setIsCheckingCheckout] = useState(true);
    const [hasExistingCheckout, setHasExistingCheckout] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const showLandingLoader = shouldShowJusZapLandingLoader({
        authToken,
        isJuszapConfigurationLoading,
        juszapConfiguration,
        isCheckingCheckout,
    });

    const faqItems = [{
            id: 1,
            question: "Como a IA entende o que o cliente precisa?",
            answer: "A IA utiliza processamento de linguagem natural para compreender o contexto da conversa e identificar a necessidade do cliente, encaminhando para o profissional mais adequado."
        },
        {
            id: 2,
            question: "IA responde mesmo fora do horário comercial?",
            answer: "Sim! O assistente funciona 24 horas por dia, 7 dias por semana, garantindo que seus clientes sempre recebam uma resposta, mesmo quando sua equipe está offline."
        },
        {
            id: 3,
            question: "Posso acompanhar e distribuir as conversas para minha equipe?",
            answer: "Claro! Você pode criar subusuários para sua equipe e a IA distribui automaticamente as conversas para os profissionais mais adequados com base na especialidade de cada um."
        },
        {
            id: 4,
            question: "Dá para personalizar o jeito que o robô fala?",
            answer: "Sim, você pode personalizar o tom de voz, respostas padrão e informações do seu escritório para que a IA converse de forma alinhada com a identidade da sua marca."
        }
    ];

    const toggleFAQ = (id, question) => {
        const isOpening = openFAQ !== id;
        setOpenFAQ(isOpening ? id : null);

        if (isOpening) {
            EventUpdateSegment("JusZapPage FAQ Opened", {
                faq_id: id,
                faq_question: question,
                context: 'how_it_works_section'
            });
        }
    };

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
        EventUpdateSegment("JusZapPage Video Played", {
            context: 'how_it_works_section'
        });
    };

    // Scroll para o topo quando a página é carregada
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        juszapLandingLoadIssuedRef.current = false;
    }, [authToken]);

    useEffect(() => {
        const hasPositiveConfig = juszapConfiguration ? .hasConfiguration === true;
        const shouldFetchJusZapConfiguration =
            Boolean(authToken) &&
            !isJuszapConfigurationLoading &&
            !isJuszapConfigurationError &&
            !hasPositiveConfig &&
            !juszapLandingLoadIssuedRef.current;
        if (shouldFetchJusZapConfiguration) {
            juszapLandingLoadIssuedRef.current = true;
            dispatch({
                type: "LOAD_JUSZAP_CONFIGURATION",
                payload: {
                    authToken
                },
            });
        }
    }, [
        authToken,
        dispatch,
        juszapConfiguration,
        isJuszapConfigurationLoading,
        isJuszapConfigurationError,
    ]);

    useEffect(() => {
        if (!authToken) {
            return;
        }

        if (store.getState().app.is_juszap_configuration_loading) {
            return;
        }

        const checkAndRedirect = async () => {
            // Se não tem configuração, é usuário novo (free trial)
            if (!juszapConfiguration || !juszapConfiguration ? .hasConfiguration) {
                setHasExistingCheckout(false);
                setIsCheckingCheckout(false);
                EventUpdateSegment("JusZapPage Viewed", {
                    context: 'new_user'
                });
                return;
            }

            // Se foi cancelado, precisa pagar de novo
            if (juszapConfiguration ? .configuration ? .status === 'CANCELLED') {
                setHasExistingCheckout(true);
                setIsCheckingCheckout(false);
                EventUpdateSegment("JusZapPage Viewed", {
                    context: 'cancelled'
                });
                return;
            }

            // Tem configuração, verificar se checkout está válido
            try {
                const {
                    data: checkoutStatus
                } = await checkJusZapCheckoutStatus(authToken);

                // Se checkout expirou, precisa pagar de novo
                if (checkoutStatus ? .expired === true) {
                    setHasExistingCheckout(true);
                    setIsCheckingCheckout(false);
                    EventUpdateSegment("JusZapPage Viewed", {
                        context: 'expired_plan'
                    });
                    return;
                }

                // Checkout válido, redireciona para o whatsapp
                history.push('/space/whatsapp');
            } catch (error) {
                console.error('Erro ao verificar checkout:', error);
                // Em caso de erro, assume que precisa pagar
                setHasExistingCheckout(true);
                setIsCheckingCheckout(false);
                EventUpdateSegment("JusZapPage Viewed");
            }
        };

        checkAndRedirect();
    }, [juszapConfiguration, history, authToken, isJuszapConfigurationLoading, store]);

    const handleStartNow = () => {
        if (!businessName.trim()) {
            toast.error('Por favor, informe o nome do seu escritório');
            return;
        }

        // Evento: Botão clicado na LP
        EventUpdateSegment("JusZapPage Activate Button Clicked", {
            business_name: businessName.trim(),
            context: 'landing_page'
        });

        // Abrir modal de pagamento
        setShowPaymentModal(true);
    };

    const handlePaymentSubmit = async (card_id) => {
        setShowPaymentModal(false);
        setIsLoading(true);
        setShowModal(true);

        // Iniciar o modal com tipo "configuration"
        if (modalLoadingRef.current) {
            modalLoadingRef.current.setType("configuration");
        }

        try {
            // Criar o checkout com o cartão selecionado
            await juszapCheckout(authToken, {
                name: businessName.trim(),
                email: user.email,
                card_id
            });

            EventUpdateSegment("JusZapPage Configuration Created", {
                business_name: businessName.trim()
            });

            // Mudar para estado de sucesso
            if (modalLoadingRef.current) {
                modalLoadingRef.current.setType('complete');
            }

            // Após 2 segundos, redirecionar
            setTimeout(() => {
                history.push('/space/whatsapp');
            }, 2000);
        } catch (error) {
            console.error('Erro ao criar configuração:', error);

            // Evento: Erro na criação
            EventUpdateSegment("JusZapPage Configuration Error", {
                error_message: error ? .message || 'Unknown error'
            });

            // Mostrar erro no modal
            if (modalLoadingRef.current) {
                modalLoadingRef.current.setError();
            }

            toast.error('Erro ao processar pagamento. Tente novamente.');

            // Fechar modal após 3 segundos em caso de erro
            setTimeout(() => {
                setShowModal(false);
                setIsLoading(false);
            }, 3000);
        }
    };

    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsLoading(false);
    };

    const handleModalComplete = () => {
        history.push('/space/whatsapp');
    };

    const onboardingSlides = [{
            id: 1,
            image: '/media/juszap/frame-subusers.svg',
            title: 'Crie sua equipe de atendimento',
            description: 'Adicione subcontas e defina as áreas de especialidade de cada profissional para direcionar melhor os atendimentos.',
        },
        {
            id: 2,
            image: '/media/juszap/frame-agent.svg',
            title: 'Não se preocupe com a triagem',
            description: 'O robô coleta as informações iniciais do cliente e encaminha automaticamente para o especialista mais adequado.',
        },
        {
            id: 3,
            image: '/media/juszap/frame-resolved.svg',
            title: 'Finalize e mantenha tudo organizado',
            description: 'Encerrar atendimentos concluídos deixa sua lista de conversas limpa e destaca apenas o que é mais urgente.',
        },
    ];

    if (showLandingLoader) {
        return ( <
            S.Container >
            <
            JusZapVerifyingLoader / >
            <
            /S.Container>
        );
    }

    return ( <
        S.Container > { /* Hero Section */ } <
        S.HeroSection >
        <
        S.HeroContent >
        <
        S.BetaBadge >
        <
        S.IconPurple >
        <
        AutoAwesomeIcon sx = {
            {
                color: '#FFF !important'
            }
        }
        /> <
        /S.IconPurple> <
        S.BadgeText >
        <
        S.BadgeTitle >
        IA Assistente WhatsApp <
        /S.BadgeTitle> <
        S.BadgeDescription >
        Apenas R$ 49, 90 / mês <
        /S.BadgeDescription> <
        /S.BadgeText> <
        /S.BetaBadge>

        <
        S.MainTitle >
        Robô com IA que atende seus clientes 24 h por dia direto no WhatsApp. <
        /S.MainTitle>

        <
        S.SubTitle >
        Com o IA Assistente WhatsApp, seu escritório nunca para.Atenda clientes a qualquer hora do dia, mesmo quando sua equipe estiver offline. <
            /S.SubTitle>

            <
            S.FormCard >
            <
            S.InputContainer >
            <
            S.InputLabel > Nome do seu escritório < /S.InputLabel> <
                S.Input
            type = "text"
        placeholder = "Ex: Silva & Advogados Associados"
        value = {
            businessName
        }
        onChange = {
            (e) => setBusinessName(e.target.value)
        }
        disabled = {
            isLoading
        }
        /> <
        /S.InputContainer>

        <
        S.ActionButton onClick = {
            handleStartNow
        }
        disabled = {
            isLoading
        } > {
            isLoading ? 'Configurando...' : 'Ativar meu assistente'
        } <
        /S.ActionButton>

        {
            /* <S.TermsOptionContainer>
                          <S.TermsOptionCheckBox
                            checked={hasAcceptedTerms}
                            onClick={() => setHasAcceptedTerms(state => !state)}
                            disabled={isLoading}
                          />
                          <S.TermsOptionLabel>
                            Eu li e concordo com os{" "}
                            <a target="_blank" rel="noopener noreferrer" href="/terms">
                              termos de uso
                            </a>{" "}
                            referentes ao uso do JusZap.
                          </S.TermsOptionLabel>
                        </S.TermsOptionContainer> */
        } <
        /S.FormCard> <
        /S.HeroContent>

        <
        S.HeroImageContainer >
        <
        S.HeroImage src = "/media/juszap/frame-phone.svg"
        alt = "JusZap" / >
        <
        /S.HeroImageContainer> <
        /S.HeroSection>

        { /* How It Works Section */ } <
        S.HowItWorksSection >
        <
        S.HowItWorksHeader >
        <
        S.HowItWorksGreenText >
        Como funciona a IA Assistente WhatsApp <
        /S.HowItWorksGreenText> <
        S.HowItWorksTitle >
        Triagem de mensagens, automatização e gestão colaborativa de conversas via WhatsApp. <
        /S.HowItWorksTitle> <
        /S.HowItWorksHeader>

        <
        S.HowItWorksContent > { /* Video Side */ } <
        S.VideoContainer >
        <
        S.VideoWrapper onClick = {
            handleVideoPlay
        } > {
            isVideoPlaying ? ( <
                iframe src = "https://www.youtube.com/embed/50I3z6AvTug?autoplay=1"
                title = "Como funciona o IA Assistente WhatsApp"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen /
                >
            ) : ( <
                >
                <
                S.ImageThumbail src = "/media/juszap/video-thumbnail.svg"
                alt = "Vídeo demonstrativo" / >
                <
                S.PlayButton >
                <
                PlayArrowIcon sx = {
                    {
                        color: '#FFF !important'
                    }
                }
                /> <
                /S.PlayButton> <
                />
            )
        } <
        /S.VideoWrapper>

        <
        S.VideoFeatures >
        <
        S.VideoFeatureItem >
        <
        WhatsAppIcon / >
        <
        S.VideoFeatureText > Conectado com seu WhatsApp < /S.VideoFeatureText> <
        /S.VideoFeatureItem> <
        S.VideoFeatureItem >
        <
        GroupsIcon / >
        <
        S.VideoFeatureText > Gerencie com subusuários < /S.VideoFeatureText> <
        /S.VideoFeatureItem> <
        S.VideoFeatureItem >
        <
        ScheduleIcon / >
        <
        S.VideoFeatureText > Atendimento 24 h por dia < /S.VideoFeatureText> <
        /S.VideoFeatureItem> <
        S.VideoFeatureItem >
        <
        TuneIcon / >
        <
        S.VideoFeatureText > Personalize o atendimento < /S.VideoFeatureText> <
        /S.VideoFeatureItem> <
        /S.VideoFeatures> <
        /S.VideoContainer>

        { /* FAQ Side */ } <
        S.FAQContainer >
        <
        S.FAQHeader >
        <
        S.FAQTitle >
        Assistente com IA que atende seus clientes 24 h por dia, direto no WhatsApp. <
        /S.FAQTitle> <
        /S.FAQHeader>

        {
            faqItems.map((item) => ( <
                S.FAQItem key = {
                    item.id
                } >
                <
                S.FAQQuestion isOpen = {
                    openFAQ === item.id
                }
                onClick = {
                    () => toggleFAQ(item.id, item.question)
                } > {
                    item.question
                } <
                KeyboardArrowDownIcon / >
                <
                /S.FAQQuestion> <
                S.FAQAnswer isOpen = {
                    openFAQ === item.id
                } > {
                    item.answer
                } <
                /S.FAQAnswer> <
                /S.FAQItem>
            ))
        }

        <
        S.FAQButton onClick = {
            () => {
                EventUpdateSegment("JusZapPage Scroll to Top Clicked", {
                    context: 'how_it_works_section'
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } >
        Ativar meu assistente <
        /S.FAQButton> <
        /S.FAQContainer> <
        /S.HowItWorksContent> <
        /S.HowItWorksSection>

        { /* Free Solution Section */ } <
        S.FreeSolutionSection >
        <
        S.FreeGreenText >
        Conheça o poder do IA Assistente WhatsApp por apenas R$ 49, 90 / mês!
            <
            /S.FreeGreenText> <
            S.SectionTitle >
            Veja o que a IA de atendimento para WhatsApp faz:
            <
            /S.SectionTitle> <
            /S.FreeSolutionSection>

        { /* Features Section */ } <
        S.FeaturesSection id = "features-section" >
        <
        S.FeaturesGrid > {
            onboardingSlides.map((slide) => ( <
                S.FeatureCard key = {
                    slide.id
                } >
                <
                S.SlideImage >
                <
                img src = {
                    slide.image
                }
                alt = {
                    slide.title
                }
                /> <
                /S.SlideImage> <
                S.FeatureTitle > {
                    slide.title
                } < /S.FeatureTitle> <
                S.FeatureDescription > {
                    slide.description
                } < /S.FeatureDescription> <
                /S.FeatureCard>
            ))
        } <
        /S.FeaturesGrid> <
        S.ActionButton onClick = {
            () => {
                EventUpdateSegment("JusZapPage Scroll to Top Clicked", {
                    context: 'features_section'
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } >
        Ativar meu assistente <
        /S.ActionButton> <
        /S.FeaturesSection>

        { /* Purple CTA Section */ } <
        S.PurpleCTASection >
        <
        S.PurpleCTALeft >
        <
        S.PurpleCTATitle >
        Com a IA de atendimento, você:
        <
        /S.PurpleCTATitle> <
        S.PurpleCTAList >
        <
        S.PurpleCTAItem >
        <
        AccessTimeIcon sx = {
            {
                color: '#fff !important',
                fontSize: '1.5rem'
            }
        }
        /> <
        S.PurpleCTADescription >
        Ganha horas por semana <
        /S.PurpleCTADescription> <
        /S.PurpleCTAItem> <
        S.PurpleCTAItem >
        <
        AutoAwesomeIcon sx = {
            {
                color: '#fff !important',
                fontSize: '1.5rem'
            }
        }
        /> <
        S.PurpleCTADescription >
        Reduz interrupções no meio do dia <
            /S.PurpleCTADescription> <
            /S.PurpleCTAItem> <
            S.PurpleCTAItem >
            <
            SmsIcon sx = {
                {
                    color: '#fff !important',
                    fontSize: '1.5rem'
                }
            }
        /> <
        S.PurpleCTADescription >
        Mantém conversas organizadas <
        /S.PurpleCTADescription> <
        /S.PurpleCTAItem> <
        /S.PurpleCTAList> <
        S.PurpleCTAButton onClick = {
            () => {
                EventUpdateSegment("JusZapPage Scroll to Top Clicked", {
                    context: 'purple_cta_section'
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } >
        Quero começar agora mesmo!
        <
        /S.PurpleCTAButton> <
        /S.PurpleCTALeft> <
        S.PurpleCTARight >
        <
        img src = "/media/juszap/frame-skeleton.svg"
        alt = "WhatsApp Chat" / >
        <
        /S.PurpleCTARight> <
        /S.PurpleCTASection>

        { /* Footer com link de Termos/Privacidade */ } <
        div style = {
            {
                textAlign: "center",
                padding: "24px 20px",
            }
        } >
        <
        a href = "/privacidade-ia-whatsapp"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            {
                fontSize: 13,
                color: "#666",
                textDecoration: "underline",
            }
        } >
        Política de Privacidade e Termos de Uso <
        /a> <
        /div>

        { /* Modal Payment */ } <
        ModalPayment isOpen = {
            showPaymentModal
        }
        closeModal = {
            handleClosePaymentModal
        }
        onSubmit = {
            handlePaymentSubmit
        }
        />

        { /* Modal Loading */ } <
        ModalLoading ref = {
            modalLoadingRef
        }
        isOpen = {
            showModal
        }
        onComplete = {
            handleModalComplete
        }
        closeModal = {
            handleCloseModal
        }
        /> <
        /S.Container>
    );
};

export default JusZapPage;