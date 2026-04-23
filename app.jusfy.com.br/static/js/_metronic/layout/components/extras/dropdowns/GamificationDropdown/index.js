import React, {
    useState,
    useEffect,
    useMemo
} from 'react';
import {
    Dropdown
} from 'react-bootstrap';
import {
    useHistory
} from 'react-router-dom';
import {
    useSelector
} from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    DropdownTopbarItemToggler
} from '../../../../../_partials/dropdowns';
import {
    toAbsoluteUrl
} from '../../../../../_helpers';
import {
    useGamificationQuery
} from '../../../../../../app/pages/Gamification/hooks/useGamificationQuery';
import {
    getChallenges
} from '../../../../../../app/pages/Gamification/api';
import useFeatureFlagWithContext from '../../../../../../app/hooks/useFeatureFlagWithContext';
import {
    FEATURE_FLAGS
} from '../../../../../../app/constants/FeatureFlag';
import {
    ROUTES_PATH
} from '../../../../../../app/constants/Routes';
import * as S from './styles';
import UserProfile from '../../../../../../app/pages/Gamification/components/UserProfile';
import ChallengesList from '../../../../../../app/pages/Gamification/components/ChallengesList';

// Fallback caso a API não retorne níveis
const DEFAULT_LEVELS = [{
        id: 1,
        name: 'Iniciante',
        img: 'iniciante'
    },
    {
        id: 2,
        name: 'Aprendiz',
        img: 'aprendiz'
    },
    {
        id: 3,
        name: 'Praticante',
        img: 'praticante'
    },
    {
        id: 4,
        name: 'Avançado',
        img: 'avancado'
    },
    {
        id: 5,
        name: 'Especialista',
        img: 'especialista'
    },
    {
        id: 6,
        name: 'Mestre',
        img: 'mestre'
    },
];

export function GamificationDropdown() {
    const history = useHistory();
    const {
        authToken,
        user
    } = useSelector((state) => state.auth);
    const {
        isFeatureFlagEnable: isGamificationEnabled
    } = useFeatureFlagWithContext(
        FEATURE_FLAGS.RELEASE.GAMIFICATION, {
            clientId: user ? .client_id
        }
    );
    // Usa hook compartilhado via TanStack Query - mesmo cache do Dashboard banner
    const {
        userStats,
        levels
    } = useGamificationQuery();
    const [isOpen, setIsOpen] = useState(false);
    const [challenges, setChallenges] = useState([]);
    const [loadingChallenges, setLoadingChallenges] = useState(false);

    const {
        level = 'Iniciante',
            currentXP = 0,
    } = userStats || {};

    // Usar níveis da API ou fallback
    const displayLevels = useMemo(() => {
        return levels ? .length > 0 ? levels : DEFAULT_LEVELS;
    }, [levels]);

    // Buscar nível atual pelo nome ou ID
    const currentLevel = useMemo(() => {
        let config = displayLevels.find(l => l.name === level);
        if (!config && typeof level === 'number') {
            config = displayLevels.find(l => l.id === level);
        }
        return config || displayLevels[0] || DEFAULT_LEVELS[0];
    }, [displayLevels, level]);

    // Carregar challenges não concluídos quando o dropdown abrir
    useEffect(() => {
        const fetchChallenges = async () => {
            if (!isOpen || !authToken) return;

            setLoadingChallenges(true);
            try {
                // Busca challenges que NÃO são "finished"
                const [inProgressData, notStartedData] = await Promise.all([
                    getChallenges(authToken, 'in_progress'),
                    getChallenges(authToken, 'not_started')
                ]);

                // Combina os resultados e ordena por pontos
                const allChallenges = [...(inProgressData || []), ...(notStartedData || [])];
                setChallenges(allChallenges);
            } catch (err) {
                console.error('Erro ao carregar challenges:', err);
            } finally {
                setLoadingChallenges(false);
            }
        };

        fetchChallenges();
    }, [isOpen, authToken]);

    const handleGoToGamification = () => {
        setIsOpen(false);
        history.push(ROUTES_PATH.GAMIFICATION.BASE);
    };

    if (!isGamificationEnabled) return null;

    return ( <
        Dropdown drop = "down"
        align = "end"
        show = {
            isOpen
        }
        onToggle = {
            (nextShow) => setIsOpen(nextShow)
        } >
        <
        Dropdown.Toggle as = {
            DropdownTopbarItemToggler
        }
        id = "kt_gamification_toggle" >
        <
        S.TriggerContainer >
        <
        S.TriggerLevelIcon >
        <
        img src = {
            toAbsoluteUrl(`/media/gamification/${currentLevel.img}.svg`)
        }
        alt = {
            currentLevel.name
        }
        /> <
        /S.TriggerLevelIcon> <
        S.TriggerLevelName > {
            currentLevel.name
        }: < /S.TriggerLevelName> <
        S.TriggerXP > {
            currentXP
        }
        XP < /S.TriggerXP> <
        S.TriggerCTA >
        <
        span > Complete os desafios < /span> para ganhar mais XP <
        KeyboardArrowDownIcon sx = {
            {
                fontSize: 18,
                color: '#7E8299'
            }
        }
        /> <
        /S.TriggerCTA> <
        /S.TriggerContainer> <
        /Dropdown.Toggle>

        <
        Dropdown.Menu className = "dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up"
        style = {
            {
                width: '450px',
                maxWidth: '95vw'
            }
        } >
        <
        S.DropdownContent > { /* Header com perfil */ } <
        S.ProfileHeader >
        <
        UserProfile userStats = {
            userStats
        }
        showProgress = {
            false
        }
        /> <
        /S.ProfileHeader>

        { /* Seção de desafios */ } <
        S.ChallengesSection >
        <
        S.ChallengesHeader >
        <
        S.ChallengesTitle > Turbine seus pontos < /S.ChallengesTitle> <
        /S.ChallengesHeader>

        { /* Desafios em destaque */ } <
        S.ChallengesListContainer >
        <
        ChallengesList challenges = {
            challenges
        }
        loading = {
            loadingChallenges
        }
        onChallengeClick = {
            () => setIsOpen(false)
        }
        /> <
        /S.ChallengesListContainer> <
        /S.ChallengesSection>

        { /* Footer */ } <
        S.Footer >
        <
        S.ViewAllLink onClick = {
            handleGoToGamification
        } > ver tudo < /S.ViewAllLink> <
        /S.Footer> <
        /S.DropdownContent> <
        /Dropdown.Menu> <
        /Dropdown>
    );
}