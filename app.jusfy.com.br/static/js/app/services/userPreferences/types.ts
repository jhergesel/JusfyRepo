export const MENU_VERSION_VALUES = {
  v1: 'v1',
  v2: 'v2',
} as const;
export const DASHBOARD_VERSION_VALUES = {
  v1: 'v1',
  v2: 'v2',
} as const;

export type MenuVersion = typeof MENU_VERSION_VALUES[keyof typeof MENU_VERSION_VALUES];
export type DashboardVersion = typeof DASHBOARD_VERSION_VALUES[keyof typeof DASHBOARD_VERSION_VALUES];

export interface UserPreferences {
  menuVersion: MenuVersion;
  dashboardVersion?: DashboardVersion;
  favoriteToolIds?: number[];
}

export type AuthStateForUserPreferences = {
  auth?: {
    authToken?: string;
    user?: { id?: number };
  };
};
