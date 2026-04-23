import { createContext, useContext, type ReactNode } from 'react';

type SidebarContentOffsetValue = number | undefined;

const SidebarContentOffsetContext = createContext<SidebarContentOffsetValue>(undefined);

interface SidebarContentOffsetProviderProps {
  value?: SidebarContentOffsetValue;
  children: ReactNode;
}

export function SidebarContentOffsetProvider({ value, children }: SidebarContentOffsetProviderProps) {
  return (
    <SidebarContentOffsetContext.Provider value={value}>
      {children}
    </SidebarContentOffsetContext.Provider>
  );
}

export function useSidebarContentOffset(): SidebarContentOffsetValue {
  return useContext(SidebarContentOffsetContext);
}

export { SidebarContentOffsetContext };
export type { SidebarContentOffsetValue, SidebarContentOffsetProviderProps };
