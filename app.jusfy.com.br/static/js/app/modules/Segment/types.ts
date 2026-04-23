export enum OwnerEnum {
  JORNADA = 'Jornada',
  PLATAFORMA = 'Plataforma',
  CALCULADORA = 'Calculadora',
  GDC = 'GDC',
}

export enum GroupIdEnum {
  JUSGPT_GROUP = 'jusgpt-group',
  JUSFINDER_GROUP = 'jusfinder-group',
  JUSPROCESSOS_GROUP = 'jusprocessos-group',
  JUSCALC_GROUP = 'juscalc-group',
  JUSSIGN_GROUP = 'jussign-group',
  JUSPAGE_GROUP = 'juspage-group',
  JUSSPACE_GROUP = 'jusspace-group',
  JUSMAIL_GROUP = 'jusmail-group',
  GENERAL_GROUP = 'general-group',
  CLIENTS_GROUP = 'clients-group',
  CALCULATORS_GROUP = 'calculators-group',
  SUBUSERS_GROUP = 'subusers-group',
  DEADLINES_GROUP = 'deadlines-group',
  JUSFYPAY_GROUP = 'jusfypay-group',
  JUSZAP_GROUP = 'juszap-group',
  JUSMATCH_GROUP = 'jusmatch-group',
  JUSDECISION_GROUP = 'jusdecision-group',
  PETITIONS_GROUP = 'petitions-group',
}

export interface BaseEventProperties {
  owner: string;
  category: string;
  event_meaning: string;
  duration?: number | string;
  relevant_user_activity: boolean;
}

export type ContextualProperties = Record<string, unknown>;

export type TProperties = BaseEventProperties & ContextualProperties;

export interface TContext {
  groupId: string;
  library: {
    name: string;
    componente: string;
  };
}

export interface AnalyticsEvent {
  event: string;
  properties: TProperties;
  context: TContext;
}
