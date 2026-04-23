import React, {
    useState
} from "react";
import {
    Menu,
    Switch
} from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import * as S from "./styles";
import {
    useJusGPTBusiness
} from '../../context/BusinessClientProvider';
import {
    BUSINESS_TOOLS,
    getAvailableBusinessTools
} from '../../config/businessTools';

const ToolsMenu = ({
        activeTools,
        onToggleTool,
        onToolClick
    }) => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const {
            isBusiness,
            b2bTools,
            businessClient
        } = useJusGPTBusiness();
        const primaryColor = businessClient ? .font_color_primary || '#0030B9';

        // Se não for business, não mostra o menu
        if (!isBusiness) return null;

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        // Filtra ferramentas disponíveis para o usuário com base nos dados da API
        const getAvailableTools = () => getAvailableBusinessTools(b2bTools);

        const handleToggle = (toolId) => {
            if (BUSINESS_TOOLS[toolId] ? .disabled) return;
            onToggleTool(toolId);
            handleClose();
        };

        const tools = getAvailableTools();
        const activeCount = Object.values(activeTools).filter(Boolean).length;

        return ( <
            >
            <
            S.ToolsButton onClick = {
                handleClick
            }
            $hasActive = {
                activeCount > 0
            } >
            <
            WidgetsIcon sx = {
                {
                    color: '#5E6278 !important',
                    fontSize: '16px'
                }
            }
            /> { /* <span>Ferramentas</span> */ } { /* {activeCount > 0 && <S.CountBadge>{activeCount}</S.CountBadge>} */ } <
            /S.ToolsButton>

            <
            Menu anchorEl = {
                anchorEl
            }
            open = {
                open
            }
            onClose = {
                handleClose
            }
            anchorOrigin = {
                {
                    vertical: 'top',
                    horizontal: 'left',
                }
            }
            transformOrigin = {
                {
                    vertical: 'bottom',
                    horizontal: 'left',
                }
            }
            PaperProps = {
                {
                    sx: {
                        borderRadius: '12px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                        minWidth: '280px',
                        padding: '8px 0',
                    }
                }
            } >
            {
                tools.map((tool) => {
                        const IconComponent = tool.icon;
                        const isActive = activeTools[tool.id] || false;
                        const isDisabled = tool.disabled;

                        return ( <
                            S.ToolMenuItem key = {
                                tool.id
                            }
                            $disabled = {
                                isDisabled
                            }
                            onClick = {
                                () => !isDisabled && handleToggle(tool.id)
                            } >
                            <
                            S.ToolInfo >
                            <
                            IconComponent sx = {
                                {
                                    color: isDisabled ? '#B5B5C3 !important' : `${primaryColor} !important`,
                                    fontSize: '20px'
                                }
                            }
                            /> <
                            S.ToolLabel $disabled = {
                                isDisabled
                            } > {
                                tool.title
                            } {
                                tool.comingSoon && < S.ComingSoonText > Em breve < /S.ComingSoonText>} <
                                    /S.ToolLabel> <
                                    /S.ToolInfo> <
                                    Switch
                                checked = {
                                    isActive
                                }
                                disabled = {
                                    isDisabled
                                }
                                size = "small"
                                sx = {
                                    {
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: primaryColor,
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: primaryColor,
                                        },
                                    }
                                }
                                /> <
                                /S.ToolMenuItem>
                            );
                        })
                } <
                /Menu> <
                />
            );
        };

        export default ToolsMenu;