import {
    lazy,
    Suspense,
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';

import {
    ContentRoute,
    LayoutSplashScreen
} from '../_metronic/layout';
import ModalCalculo from '../_metronic/layout/components/aside/aside-menu/ModalCalculo';
import {
    CSATSurveyModal
} from './components/CSATSurveyModal';
import ModalMonitoringSales from './components/ModalMonitoringSales';
import TimeBasedDisplay from './components/ModalMonitoringSales/TimeBasedDisplay';
import {
    MODAL_MONITORING_INTERVAL_MS
} from './constants/CronTimes';
import {
    ROUTES_PATH
} from './constants/Routes';
import {
    toast
} from 'react-toastify';
import WithFeatureFlag from './components/hoc/WithFeatureFlag';
import {
    FEATURE_FLAGS
} from './constants/FeatureFlag';
import {
    JusfyPayDashboard,
    JusfyPayPaymentLinks,
    JusfyPayPayments,
    JusfyPayWallet,
    JusfyPayProfile,
    JusfyPayNewCharge,
} from './pages/Pay/frame/subpages';
import useSubscriptionOrCredits from './hooks/useSubscriptionOrCredits';

// ---------------------------------------------------------------------------
// Lazy-loaded pages (code splitting) — cada página vira um chunk separado
// Para named exports: .then(m => ({ default: m.NomeDoExport }))
// Para default exports: basta o import()
// ---------------------------------------------------------------------------

// Páginas — named exports
const Agenda = lazy(() =>
    import ('./pages/Agenda').then(m => ({
        default: m.Agenda
    })));
const Aluguel = lazy(() =>
    import ('./pages/Aluguel').then(m => ({
        default: m.Aluguel
    })));
const Assinaturas = lazy(() =>
    import ('./pages/Assinaturas').then(m => ({
        default: m.Assinaturas
    })));
const AssinaturasForm = lazy(() =>
    import ('./pages/AssinaturasForm').then(m => ({
        default: m.AssinaturasForm
    })));
const Atualizacao = lazy(() =>
    import ('./pages/Atualizacao').then(m => ({
        default: m.Atualizacao
    })));
const AtualizacaoCompleto = lazy(() =>
    import ('./pages/AtualizacaoCompleto').then(m => ({
        default: m.AtualizacaoCompleto
    })));
const BuilderPage = lazy(() =>
    import ('./pages/BuilderPage').then(m => ({
        default: m.BuilderPage
    })));
const Calculators = lazy(() =>
    import ('./pages/Calculadoras').then(m => ({
        default: m.Calculators
    })));
const Clientes = lazy(() =>
    import ('./pages/Clientes').then(m => ({
        default: m.Clientes
    })));
const ClientesForm = lazy(() =>
    import ('./pages/ClientesForm').then(m => ({
        default: m.ClientesForm
    })));
const Consulta = lazy(() =>
    import ('./pages/Consulta').then(m => ({
        default: m.Consulta
    })));
const DashboardPage = lazy(() =>
    import ('./pages/DashboardPage').then(m => ({
        default: m.DashboardPage
    })));
const DividePdf = lazy(() =>
    import ('./pages/DividePdf').then(m => ({
        default: m.DividePdf
    })));
const Fgts = lazy(() =>
    import ('./pages/Fgts').then(m => ({
        default: m.Fgts
    })));
const Jurisprudencia = lazy(() =>
    import ('./pages/Jurisprudencia').then(m => ({
        default: m.Jurisprudencia
    })));
const JurisprudenciaCompleta = lazy(() =>
    import ('./pages/JurisprudenciaCompleta').then(m => ({
        default: m.JurisprudenciaCompleta
    })));
const JusGPT = lazy(() =>
    import ('./pages/JusGPT').then(m => ({
        default: m.JusGPT
    })));
const PageListInfluencer = lazy(() =>
    import ('./pages/ListaCadastrosInfluencers').then(m => ({
        default: m.PageListInfluencer
    })));
const MyPage = lazy(() =>
    import ('./pages/MyPage').then(m => ({
        default: m.MyPage
    })));
const Oportunidades = lazy(() =>
    import ('./pages/Oportunidades').then(m => ({
        default: m.Oportunidades
    })));
const Pensao = lazy(() =>
    import ('./pages/Pensao').then(m => ({
        default: m.Pensao
    })));
const Perfil = lazy(() =>
    import ('./pages/Perfil').then(m => ({
        default: m.Perfil
    })));
const PeticaoVisualizar = lazy(() =>
    import ('./pages/PeticaoVisualizar').then(m => ({
        default: m.PeticaoVisualizar
    })));
const PeticoesListagem = lazy(() =>
    import ('./pages/PeticoesListagem').then(m => ({
        default: m.PeticoesListagem
    })));
const PeticaoSelecionadaVisualizar = lazy(() =>
    import ('./pages/PeticoesSelecionadas').then(m => ({
        default: m.PeticaoSelecionadaVisualizar
    })));
const PeticoesSelecionadas = lazy(() =>
    import ('./pages/PeticoesSelecionadas').then(m => ({
        default: m.PeticoesSelecionadas
    })));
const Prev = lazy(() =>
    import ('./pages/Prev').then(m => ({
        default: m.Prev
    })));
const Revisional = lazy(() =>
    import ('./pages/Revisional').then(m => ({
        default: m.Revisional
    })));
const About = lazy(() =>
    import ('./pages/Sobre').then(m => ({
        default: m.About
    })));
const Telas = lazy(() =>
    import ('./pages/Telas').then(m => ({
        default: m.Telas
    })));
const Trabalhista = lazy(() =>
    import ('./pages/Trabalhista').then(m => ({
        default: m.Trabalhista
    })));
const Divorcio = lazy(() =>
    import ('./pages/Divorcio/App').then(m => ({
        default: m.Divorcio
    })));
const JusPage = lazy(() =>
    import ('./pages/JusPage').then(m => ({
        default: m.JusPage
    })));
const JusSpace = lazy(() =>
    import ('./pages/JusSpace').then(m => ({
        default: m.JusSpace
    })));
const DomainFormPage = lazy(() =>
    import ('./pages/JusSpace/components/DomainFormPage').then(m => ({
        default: m.DomainFormPage
    })));
const WhatsAppBusiness = lazy(() =>
    import ('./pages/JusZap').then(m => ({
        default: m.WhatsAppBusiness
    })));
const Gamification = lazy(() =>
    import ('./pages/Gamification').then(m => ({
        default: m.Gamification
    })));
const JusfinderWrapper = lazy(() =>
    import ('./pages/flat/jusfinderwrapper').then(m => ({
        default: m.JusfinderWrapper
    })));
const VehicleTracking = lazy(() =>
    import ('./pages/flat/JusfinderUnivesal/Pages/VehicleTracking').then(m => ({
        default: m.VehicleTracking
    })));
const MAIN = lazy(() =>
    import ('./pages/flat/JusfinderUnivesal/Pages/Main').then(m => ({
        default: m.MAIN
    })));


// Páginas — default exports
const Calculos = lazy(() =>
    import ('./pages/Calculos'));
const CasesManager = lazy(() =>
    import ('./pages/CasesManager'));
const Dosimetry = lazy(() =>
    import ('./pages/Dosimetria'));
const OverDebtsCalculator = lazy(() =>
    import ('./pages/Endividamento'));
const InssNews = lazy(() =>
    import ('./pages/INSSNEWS'));
const ReportsPage = lazy(() =>
    import ('./pages/JusGPT/Reports'));
const BusinessLP = lazy(() =>
    import ('./pages/JusGPT/pages/BusinessLP'));
const JusGPTBusinessProvider = lazy(() =>
    import ('./pages/JusGPT/context/BusinessClientProvider'));
const PASEP = lazy(() =>
    import ('./pages/PASEP'));
const Penal = lazy(() =>
    import ('./pages/ProgessaoRegime'));
const Rmc = lazy(() =>
    import ('./pages/RMC'));
const LawsuitsMonitor = lazy(() =>
    import ('./pages/flat/LawsuitsMonitor'));
const SalesLandingPage = lazy(() =>
    import ('./pages/flat/LawsuitsMonitor/components/Page/SalesLandingPage'));
const LawsuitMonitorV2 = lazy(() =>
    import ('./pages/flat/LawsuitsMonitor/components/Page/LawsuitMonitorV2'));
const ProcessualQuery = lazy(() =>
    import ('./pages/flat/ProcessualQuery'));
const TermsOfUse = lazy(() =>
    import ('./pages/flat/TermsOfUse'));
const JusMailPage = lazy(() =>
    import ('./pages/JusMailPage'));
const JusZapPage = lazy(() =>
    import ('./pages/JusZapPage'));
const BlogEditorPage = lazy(() =>
    import ('./pages/JusPage/BlogEditorPage'));
const TeamManagement = lazy(() =>
    import ('./pages/JusZap/components/TeamManagement'));
const RobotSettings = lazy(() =>
    import ('./pages/JusZap/components/RobotSettings'));
const Deadlines = lazy(() =>
    import ('./pages/flat/Deadlines'));
const GoogleMaterialPage = lazy(() =>
    import ('./modules/GoogleMaterialExamples/GoogleMaterialPage'));
const UserProfilepage = lazy(() =>
    import ('./modules/UserProfile/UserProfilePage'));
const PayPage = lazy(() =>
    import ('./pages/Pay'));
const PointsHistory = lazy(() =>
    import ('./pages/Gamification/components/PointsHistory'));
const JusCont = lazy(() =>
    import ("./pages/JusCont"));

// Páginas protegidas com feature flag (lazy + HOC)
const ProtectedUsuarios = lazy(() =>
    import ('./pages/Usuarios').then(m => ({
        default: WithFeatureFlag(m.Usuarios, FEATURE_FLAGS.PERMISSION.ENABLE_SUBUSER_CREATION).RedirectTo('/dashboard'),
    })),
);
const ProtectedUsuariosForm = lazy(() =>
    import ('./pages/UsuariosForm').then(m => ({
        default: WithFeatureFlag(m.UsuariosForm, FEATURE_FLAGS.PERMISSION.ENABLE_SUBUSER_CREATION).RedirectTo('/dashboard'),
    })),
);

export default function BasePage() {
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.auth.authToken);
    const is_profile_survey_open = useSelector(
        (state) => state.app.is_profile_survey_open,
    );
    const juszapConfiguration = useSelector(
        (state) => state.app.juszap_configuration,
    );
    const isJuszapConfigurationLoading = useSelector(
        (state) => state.app.is_juszap_configuration_loading,
    );
    const isJuszapConfigurationError = useSelector(
        (state) => state.app.is_juszap_configuration_error,
    );
    const [isNovoCalculoOpen, setIsNovoCalculoOpen] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const {
        isRestricted,
        isLoading
    } = useSubscriptionOrCredits();


    const shouldRedirectToProfileSurvey = is_profile_survey_open;

    // Carregar JusZap Configuration se não estiver carregada e não houver erro anterior
    useEffect(() => {
        if (
            authToken &&
            !juszapConfiguration &&
            !isJuszapConfigurationLoading &&
            !isJuszapConfigurationError
        ) {
            dispatch({
                type: 'LOAD_JUSZAP_CONFIGURATION',
                payload: {
                    authToken
                },
            });
        }
    }, [
        authToken,
        juszapConfiguration,
        isJuszapConfigurationLoading,
        isJuszapConfigurationError,
    ]);

    useEffect(() => {
        if (shouldRedirectToProfileSurvey) {
            history.push('/profile/survey');
            dispatch({
                type: 'OPEN_PROFILE_SURVEY'
            });
        }
    }, []);

    useEffect(() => {
        if (isRestricted && !location.pathname.startsWith('/perfil')) {
            toast.error(
                'Seu plano precisa ser reativado. Você foi redirecionado para a página de perfil.',
            );
            history.push('/perfil');
        }
    }, [isRestricted, location.pathname, history]);

    if (isLoading) {
        return <LayoutSplashScreen / > ;
    }

    return ( <
        Suspense fallback = { < LayoutSplashScreen / >
        } >
        <
        CSATSurveyModal / >
        <
        TimeBasedDisplay timeInterval = {
            MODAL_MONITORING_INTERVAL_MS
        }
        isActive = {
            false
        } >
        <
        ModalMonitoringSales / >
        <
        /TimeBasedDisplay> <
        ModalCalculo isOpen = {
            isNovoCalculoOpen
        }
        close = {
            () => setIsNovoCalculoOpen(false)
        }
        />

        <
        Switch > {
            /* Redirect from root URL to /dashboard. */
            <
            Redirect exact from = "/"
            to = "/dashboard" / >
        } <
        Redirect exact from = "/jusfypay"
        to = {
            ROUTES_PATH.JUSFYPAY.BASE
        }
        /> <
        ContentRoute path = "/dashboard"
        component = {
            DashboardPage
        }
        /> <
        ContentRoute exact path = "/jusfypay/landing"
        component = {
            PayPage
        }
        /> <
        ContentRoute path = "/jusfypay/dashboard"
        component = {
            JusfyPayDashboard
        }
        /> <
        ContentRoute path = "/jusfypay/payment-links"
        component = {
            JusfyPayPaymentLinks
        }
        /> <
        ContentRoute path = "/jusfypay/payments"
        component = {
            JusfyPayPayments
        }
        /> <
        ContentRoute path = "/jusfypay/wallet"
        component = {
            JusfyPayWallet
        }
        /> <
        ContentRoute path = "/jusfypay/profile"
        component = {
            JusfyPayProfile
        }
        /> <
        ContentRoute path = "/jusfypay/new-charge"
        component = {
            JusfyPayNewCharge
        }
        /> <
        ContentRoute path = "/telasPerfilUsuario"
        component = {
            Telas
        }
        /> <
        ContentRoute path = "/pensao/:calculo_id/:status?"
        component = {
            Pensao
        }
        /> <
        ContentRoute path = "/pensao"
        component = {
            Pensao
        }
        /> <
        ContentRoute path = "/aluguel/:calculo_id/:status?"
        component = {
            Aluguel
        }
        /> <
        ContentRoute path = "/aluguel"
        component = {
            Aluguel
        }
        /> <
        ContentRoute path = "/fgts/:calculo_id/:status?"
        component = {
            Fgts
        }
        /> <
        ContentRoute path = "/fgts"
        component = {
            Fgts
        }
        /> <
        ContentRoute path = "/calculadora_cnis/:calculo_id"
        component = {
            Prev
        }
        /> <
        ContentRoute path = "/calculadora_cnis"
        component = {
            Prev
        }
        /> <
        ContentRoute path = "/cases"
        component = {
            CasesManager
        }
        /> <
        ContentRoute path = "/vehicletracking"
        component = {
            VehicleTracking
        }
        /> <
        ContentRoute path = "/jusfinder/:page?/:query?/:type(\w+)?/:document(\d+)?"
        component = {
            JusfinderWrapper
        }
        /> <
        ContentRoute path = "/processual_query/:document_type?/:id?"
        component = {
            ProcessualQuery
        }
        /> <
        ContentRoute exact path = {
            `${ROUTES_PATH.LAWSUIT_MONITOR.BASE}${ROUTES_PATH.LAWSUIT_MONITOR.SUBSCRIPTION}`
        }
        component = {
            SalesLandingPage
        }
        /> <
        ContentRoute path = {
            `${ROUTES_PATH.LAWSUIT_MONITOR.BASE}${ROUTES_PATH.LAWSUIT_MONITOR.LAWSUITS}/:page?/:id?`
        }
        component = {
            LawsuitsMonitor
        }
        /> <
        ContentRoute path = {
            `${ROUTES_PATH.LAWSUIT_MONITOR.BASE_V2}${ROUTES_PATH.LAWSUIT_MONITOR.LAWSUITS}/:page?/:id?`
        }
        component = {
            LawsuitMonitorV2
        }
        /> <
        ContentRoute path = {
            `${ROUTES_PATH.LAWSUIT_MONITOR.BASE}${ROUTES_PATH.LAWSUIT_MONITOR.DEADLINES}${ROUTES_PATH.LAWSUIT_MONITOR.COMPLETED_DEADLINES}`
        }
        exact >
        <
        Deadlines tab = "concluidos" / >
        <
        /ContentRoute> <
        ContentRoute path = {
            `${ROUTES_PATH.LAWSUIT_MONITOR.BASE}${ROUTES_PATH.LAWSUIT_MONITOR.DEADLINES}/:tab?/:id?`
        }
        component = {
            Deadlines
        }
        /> <
        ContentRoute path = "/oportunidades/:type"
        component = {
            Oportunidades
        }
        /> <
        ContentRoute path = "/oportunidades"
        component = {
            Oportunidades
        }
        /> <
        ContentRoute path = "/calculos"
        component = {
            Calculos
        }
        /> <
        ContentRoute path = "/divide-pdf"
        component = {
            DividePdf
        }
        /> <
        ContentRoute path = "/peticoes/selecionadas/visualizar"
        component = {
            PeticaoSelecionadaVisualizar
        }
        /> <
        ContentRoute path = "/peticoes/selecionadas/:selection_name"
        component = {
            PeticoesSelecionadas
        }
        /> <
        ContentRoute path = "/peticoes/listagem/:category_id/:filter"
        component = {
            PeticoesListagem
        }
        /> <
        ContentRoute path = "/peticoes/listagem/:category_id"
        component = {
            PeticoesListagem
        }
        /> <
        ContentRoute path = "/peticoes/listagem/"
        component = {
            PeticoesListagem
        }
        /> <
        ContentRoute path = "/peticoes/visualizar/:petition_id/:category_id?"
        component = {
            PeticaoVisualizar
        }
        /> <
        ContentRoute path = "/peticoes"
        component = {
            PeticoesListagem
        }
        /> <
        ContentRoute path = "/trabalhista/:calculo_id/:status?"
        component = {
            Trabalhista
        }
        /> <
        ContentRoute path = "/trabalhista"
        component = {
            Trabalhista
        }
        /> <
        ContentRoute path = "/atualizacao/:calculo_id/:status?"
        component = {
            Atualizacao
        }
        /> <
        ContentRoute path = "/atualizacao"
        component = {
            Atualizacao
        }
        /> <
        ContentRoute path = "/atualizacao_completo/:calculo_id/:status?"
        component = {
            AtualizacaoCompleto
        }
        /> <
        ContentRoute path = "/atualizacao_completo"
        component = {
            AtualizacaoCompleto
        }
        /> <
        ContentRoute path = "/consulta"
        component = {
            Consulta
        }
        /> <
        ContentRoute path = "/jurisprudencia/:id"
        component = {
            JurisprudenciaCompleta
        }
        /> <
        ContentRoute path = "/jurisprudencia"
        component = {
            Jurisprudencia
        }
        />{' '} <
        ContentRoute path = "/clientes/form/:cliente_id"
        component = {
            ClientesForm
        }
        /> <
        ContentRoute path = "/clientes/form"
        component = {
            ClientesForm
        }
        /> <
        ContentRoute path = "/clientes"
        component = {
            Clientes
        }
        /> <
        ContentRoute path = "/perfil"
        component = {
            Perfil
        }
        /> <
        ContentRoute path = "/revisional/:calculo_id/:status?"
        component = {
            Revisional
        }
        /> <
        ContentRoute path = "/revisional"
        component = {
            Revisional
        }
        /> <
        ContentRoute path = "/builder"
        component = {
            BuilderPage
        }
        /> <
        ContentRoute path = "/my-page"
        component = {
            MyPage
        }
        /> <
        ContentRoute path = "/agenda"
        component = {
            Agenda
        }
        /> <
        ContentRoute path = "/usuarios/form/:cliente_usuario_id"
        component = {
            ProtectedUsuariosForm
        }
        /> <
        ContentRoute path = "/calculadoras"
        component = {
            Calculators
        }
        /> <
        ContentRoute path = "/pasep/:calculationId/:status?"
        component = {
            PASEP
        }
        /> <
        ContentRoute path = "/pasep"
        component = {
            PASEP
        }
        /> <
        ContentRoute path = "/inss/:calculo_id/:status?"
        component = {
            InssNews
        }
        /> <
        ContentRoute path = "/inss"
        component = {
            InssNews
        }
        /> <
        ContentRoute path = "/rmc/:calculo_id/:status?"
        component = {
            Rmc
        }
        /> <
        ContentRoute path = "/rmc"
        component = {
            Rmc
        }
        /> <
        ContentRoute path = "/superendividamento/:calculo_id/:status?"
        component = {
            OverDebtsCalculator
        }
        /> <
        ContentRoute path = "/superendividamento"
        component = {
            OverDebtsCalculator
        }
        /> <
        ContentRoute path = "/divorcio/:calculo_id/:status?"
        component = {
            Divorcio
        }
        /> <
        ContentRoute path = "/divorcio"
        component = {
            Divorcio
        }
        /> <
        ContentRoute path = "/sobre"
        component = {
            About
        }
        /> <
        ContentRoute path = "/usuarios/form"
        component = {
            ProtectedUsuariosForm
        }
        /> <
        ContentRoute path = "/usuarios"
        component = {
            ProtectedUsuarios
        }
        /> <
        ContentRoute path = "/assinaturas/form"
        component = {
            AssinaturasForm
        }
        /> <
        ContentRoute path = "/assinaturas"
        component = {
            Assinaturas
        }
        /> <
        ContentRoute path = "/influencers/cupom_influencer"
        component = {
            PageListInfluencer
        }
        /> <
        ContentRoute path = "/resultado/:feature_type_name/:id/:query?"
        component = {
            MAIN
        }
        /> <
        ContentRoute path = "/progressao-regime/:calculo_id/:status?"
        component = {
            Penal
        }
        /> <
        ContentRoute path = "/progressao-regime"
        component = {
            Penal
        }
        /> <
        ContentRoute path = "/dosimetria-pena/:calculo_id/:status?"
        component = {
            Dosimetry
        }
        /> <
        ContentRoute path = "/dosimetria-pena"
        component = {
            Dosimetry
        }
        /> <
        Route path = "/google-material"
        component = {
            GoogleMaterialPage
        }
        /> <
        Route path = "/user-profile"
        component = {
            UserProfilepage
        }
        /> <
        Route path = "/terms"
        component = {
            TermsOfUse
        }
        /> <
        Route path = "/gpt"
        render = {
            () => ( <
                JusGPTBusinessProvider >
                <
                Switch >
                <
                Route path = "/gpt/business"
                component = {
                    BusinessLP
                }
                /> <
                Route path = "/gpt/reports"
                component = {
                    ReportsPage
                }
                /> <
                Route path = "/gpt"
                component = {
                    JusGPT
                }
                /> <
                /Switch> <
                /JusGPTBusinessProvider>
            )
        }
        /> <
        Route path = "/page/blog/editor"
        component = {
            BlogEditorPage
        }
        /> <
        Route path = "/page"
        component = {
            JusPage
        }
        /> <
        Route path = "/space/domain"
        component = {
            DomainFormPage
        }
        /> <
        Route path = "/space/whatsapp/gerenciamento-equipe"
        component = {
            TeamManagement
        }
        /> <
        Route path = "/space/whatsapp/configuracoes-robo"
        component = {
            RobotSettings
        }
        /> <
        Route path = "/space/whatsapp"
        component = {
            WhatsAppBusiness
        }
        /> <
        Route path = "/space"
        component = {
            JusSpace
        }
        /> <
        Route path = "/mail"
        component = {
            JusMailPage
        }
        /> <
        Route path = "/assistente-whatsapp"
        component = {
            JusZapPage
        }
        /> <
        Route path = {
            ROUTES_PATH.GAMIFICATION.HISTORICO
        }
        component = {
            PointsHistory
        }
        /> <
        Route path = {
            ROUTES_PATH.GAMIFICATION.BASE
        }
        component = {
            Gamification
        }
        /> <
        Route path = "/contabilidade"
        component = {
            JusCont
        }
        /> <
        Redirect to = "/error/error-v1" / >
        <
        /Switch> <
        /Suspense>
    );
}