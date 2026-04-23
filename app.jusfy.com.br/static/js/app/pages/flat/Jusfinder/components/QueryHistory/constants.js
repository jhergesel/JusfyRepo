import {
    toAbsoluteUrl
} from '../../../../../../_metronic/_helpers';
import {
    Tag
} from '../Tag';
import {
    BACKGROUND_COLOR_ACTIVE,
    BACKGROUND_COLOR_INACTIVE,
    BACKGROUND_COLOR_PROCESS,
} from '../../Pages/constants';
import {
    IconButton,
    StyledTooltip,
    TagWithInfo,
} from '../../../JusfinderShared/components/StyledTooltip';

export const QUERIES_HISTORY = new Map([
    ['household_activity', 'Grupo econômico - Atividade semelhante no endereço'],
    ['household', 'Grupo econômico - Qualquer atividade no endereço'],
    ['rfcontact', 'Grupo econômico - Mesmo contato na Receita Federal'],
    ['owners', 'Grupo econômico - Mesmo quadro societário'],
    ['legal_representative', 'Grupo econômico - Mesmo representante legal'],
]);

export const ITEMS_HEADER_CARD_HISTORY = [{
        title: 'Documento',
        icon: toAbsoluteUrl('/media/jusfinder/document-jusfinder.svg'),
    },
    {
        title: 'Cliente',
        icon: toAbsoluteUrl('/media/jusfinder/icon_type.svg'),
    },

    {
        title: 'Data',
        icon: toAbsoluteUrl('/media/jusfinder/calendar-jusfinder.svg'),
    },
    {
        title: 'Status',
        icon: toAbsoluteUrl('/media/jusfinder/tag-status.svg'),
    },

    {
        title: 'Ações',
        icon: toAbsoluteUrl('/media/jusfinder/icon-action.svg'),
    },
];

export const STATUS_COMPONENTS = {
    success: ( <
        Tag text = {
            'Realizada'
        }
        icon = {
            toAbsoluteUrl('/media/jusfinder/notification-active.svg')
        }
        background = {
            BACKGROUND_COLOR_ACTIVE
        }
        width = {
            '104px'
        }
        />
    ),

    pending: ( <
        Tag text = {
            'Processando...'
        }
        background = {
            BACKGROUND_COLOR_PROCESS
        }
        icon = {
            toAbsoluteUrl('/media/jusfinder/loading-process-jusfinder.svg')
        }
        />
    ),
    error: ( <
        TagWithInfo >
        <
        Tag text = "Erro"
        background = {
            BACKGROUND_COLOR_INACTIVE
        }
        width = {
            'fit-content'
        }
        icon = {
            toAbsoluteUrl('/media/jusfinder/notification-error.svg')
        }
        /> <
        StyledTooltip title = "Consultas com erro são excluídas automaticamente após 7 dias."
        placement = "top"
        arrow >
        <
        IconButton > i < /IconButton> <
        /StyledTooltip> <
        /TagWithInfo>
    ),
    error_global: ( <
        Tag text = "Erro na consulta"
        background = {
            BACKGROUND_COLOR_INACTIVE
        }
        width = {
            'fit-content'
        }
        icon = {
            toAbsoluteUrl('/media/jusfinder/notification-error.svg')
        }
        />
    ),
};

export const LAST_ITEM = 3;