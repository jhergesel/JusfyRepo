import { eventTracker, SEGMENT_EVENTS } from 'app/modules/Segment';
import {
  TProperties,
  TContext,
  GroupIdEnum,
  OwnerEnum,
} from 'app/modules/Segment/types';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';
import { snakeCaseToTitleCase } from 'app/modules/Segment/utils';

const MENU_LIBRARY_NAME = 'general-library';
const MENU_CATEGORY = 'engagement_general';

const drawerContext: TContext = {
  groupId: GroupIdEnum.GENERAL_GROUP,
  library: {
    name: MENU_LIBRARY_NAME,
    componente: 'drawer-component',
  },
};

export function trackMenuCategoryExpanded(categoryName: string): void {
  const event = SEGMENT_EVENTS.MENU_CATEGORY_EXPANDED;
  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado quando o usuário expande um agrupamento do menu (ex.: Processos, Clientes). Propriedades: `category_name`, `menu_version`.',
      relevant_user_activity: false,
      event_text: snakeCaseToTitleCase(event),
      category_name: categoryName,
      menu_version: MENU_VERSION_VALUES.v2,
    } as TProperties,
    context: drawerContext,
  });
}

export function trackMenuItemSelected(params: {
  groupId: GroupIdEnum;
  itemName: string;
  categoryParent: string | null;
  menuVersion: 'v1' | 'v2';
}): void {
  const event = SEGMENT_EVENTS.MENU_ITEM_SELECTED;
  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado ao clicar em um link de ferramenta dentro do menu. Propriedades: `item_name`, `category_parent`, `menu_version`.',
      relevant_user_activity: true,
      event_text: snakeCaseToTitleCase(event),
      item_name: params.itemName,
      category_parent: params.categoryParent,
      menu_version: params.menuVersion,
    } as TProperties,
    context: {
      groupId: params.groupId,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'button-component',
      },
    },
  });
}

export function trackMenuVersionToggled(targetVersion: 'v1' | 'v2'): void {
  const event = SEGMENT_EVENTS.MENU_VERSION_TOGGLED;
  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado ao clicar no botão de alternância entre versões do menu. Propriedades: `target_version`.',
      relevant_user_activity: false,
      event_text: snakeCaseToTitleCase(event),
      target_version: targetVersion,
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'button-component',
      },
    },
  });
}

export function trackMenuNewTagViewed(itemName: string): void {
  const event = SEGMENT_EVENTS.MENU_NEW_TAG_VIEWED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado quando o badge “Novo” do menu é exibido ao usuário. Propriedades: `item_name`, `menu_version`.',
      relevant_user_activity: false,
      event_text: snakeCaseToTitleCase(event),
      item_name: itemName,
      menu_version: MENU_VERSION_VALUES.v2,
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'badge-component',
      },
    },
  });
}

export function trackMenuNewTagClicked(itemName: string): void {
  const event = SEGMENT_EVENTS.MENU_NEW_TAG_CLICKED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado ao clicar no item do menu que contém o badge “Novo”. Propriedades: `item_name`, `menu_version`.',
      relevant_user_activity: true,
      event_text: snakeCaseToTitleCase(event),
      item_name: itemName,
      menu_version: MENU_VERSION_VALUES.v2,
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'badge-component',
      },
    },
  });
}

export function trackMenuGamificationDetailsViewed(): void {
  const event = SEGMENT_EVENTS.MENU_GAMIFICATION_DETAILS_VIEWED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado quando o usuário abre o dropdown de gamificação no novo menu. Propriedades: `menu_version`.',
      relevant_user_activity: false,
      event_text: snakeCaseToTitleCase(event),
      menu_version: MENU_VERSION_VALUES.v2,
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'drawer-component',
      },
    },
  });
}

export function trackMenuGamificationDetailsClicked(): void {
  const event = SEGMENT_EVENTS.MENU_GAMIFICATION_DETAILS_CLICKED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado quando o usuário clica em “Ver mais desafios” no dropdown de gamificação do novo menu. Propriedades: `menu_version`.',
      relevant_user_activity: true,
      event_text: snakeCaseToTitleCase(event),
      menu_version: MENU_VERSION_VALUES.v2,
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'button-component',
      },
    },
  });
}

export function trackNotificationTagViewed(itemName: string): void {
  const event = SEGMENT_EVENTS.NOTIFICATION_TAG_VIEWED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado quando o badge de notificações do menu é exibido ao usuário. Propriedades: `item_name`, `menu_version`.',
      relevant_user_activity: false,
      event_text: snakeCaseToTitleCase(event),
      item_name: itemName,
      menu_version: MENU_VERSION_VALUES[1],
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'badge-component',
      },
    },
  });
}

export function trackNotificationTagClicked(itemName: string): void {
  const event = SEGMENT_EVENTS.NOTIFICATION_TAG_CLICKED;

  eventTracker.track({
    event,
    properties: {
      owner: OwnerEnum.JORNADA,
      category: MENU_CATEGORY,
      event_meaning:
        'Disparado ao clicar no item do menu que contém o badge de notificações. Propriedades: `item_name`, `menu_version`.',
      relevant_user_activity: true,
      event_text: snakeCaseToTitleCase(event),
      item_name: itemName,
      menu_version: MENU_VERSION_VALUES[1],
    } as TProperties,
    context: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      library: {
        name: MENU_LIBRARY_NAME,
        componente: 'badge-component',
      },
    },
  });
}
