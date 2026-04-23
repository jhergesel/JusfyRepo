import React from 'react';
import { DrawerType, type ResolvedMenuItem } from '../../MenuConfig';
import SidebarIcon from '../SidebarIcon';

type SidebarIconListProps = {
  items: ResolvedMenuItem[];
  getActive: (item: ResolvedMenuItem, drawerType?: DrawerType | null) => boolean;
  onItemClick: (item: ResolvedMenuItem) => void;
  onDrawerIconMouseEnter?: (drawerType: DrawerType, e: React.MouseEvent) => void;
  onDrawerIconMouseLeave?: () => void;
};

const SidebarIconList: React.FC<SidebarIconListProps> = ({
  items,
  getActive,
  onItemClick,
  onDrawerIconMouseEnter,
  onDrawerIconMouseLeave,
}) => {
  const getTooltipText = (item: ResolvedMenuItem): string | undefined => {
    if (item.tooltip === true) return item.label;
    if (typeof item.tooltip === 'string') return item.tooltip;
    return undefined;
  };

  return (
    <>
      {items
        .filter((item) => item.show !== false)
        .map((item) => (
          <SidebarIcon
            key={item.id}
            icon={item.icon}
            label={item.hideLabel ? undefined : item.label}
            tooltip={getTooltipText(item)}
            disabled={item.disabled}
            disabledTooltip={item.disabledTooltip}
            onClick={() => onItemClick(item)}
            active={getActive(item, item.drawerType)}
            badge={item.badge}
            onMouseEnter={
              item.drawerType && onDrawerIconMouseEnter
                ? (e: React.MouseEvent) =>
                    onDrawerIconMouseEnter(item.drawerType!, e)
                : onDrawerIconMouseLeave
                ? () => onDrawerIconMouseLeave()
                : undefined
            }
            onMouseLeave={item.drawerType ? onDrawerIconMouseLeave : undefined}
          />
        ))}
    </>
  );
};

export default SidebarIconList;
