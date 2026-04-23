import React, {
    useState,
    useEffect
} from 'react';
import {
    Box,
    Drawer,
    Typography,
    FormControlLabel
} from '@mui/material';
import {
    toAbsoluteUrl
} from '../../../../../../../../../_metronic/_helpers';
import * as S from '../../../QueryHistory.styles';
import * as InternalStyles from './styles';
import MultiSelectWithChips from '../MultiSelectWithChips/MultiSelectWithChips';
import {
    useFilters
} from '../../../context/FiltersContext';
import {
    QUERIES_STATUS
} from '../constants';
import {
    EventsSegment
} from '../../../../../../../../helpers/EventsSegmentsCalculators';
import MultiSelectWithChipsCustom from '../../../../../../JusfinderShared/components/MultiSelectWithChips/MultiSelectWithChipsCustom';

export default function FilterDrawer() {
    const {
        features,
        setFeatures,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        statuses,
        setStatuses,
        setApplyFilters,
        client,
        customers,
        setClient,
    } = useFilters();
    const {
        HandleEvent
    } = EventsSegment();
    const [open, setOpen] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [localFeatures, setLocalFeatures] = useState(features);
    const [localStartDate, setLocalStartDate] = useState(startDate);
    const [localEndDate, setLocalEndDate] = useState(endDate);
    const [localStatuses, setLocalStatuses] = useState(statuses);
    const [localClient, setLocalClient] = useState(client);

    useEffect(() => {
        if (localStartDate && localEndDate) {
            setDateError(new Date(localStartDate) > new Date(localEndDate));
        } else {
            setDateError(false);
        }
    }, [localStartDate, localEndDate]);

    const handleStatusChange = (event) => {
        const {
            name,
            checked
        } = event.target;
        const statusObj = QUERIES_STATUS.find((s) => s.label === name);
        if (!statusObj) return;

        if (checked) {
            setLocalStatuses((prev) => [...prev, statusObj]);
        } else {
            setLocalStatuses((prev) =>
                prev.filter((s) => s.status !== statusObj.status),
            );
        }
    };

    const isValidDateRange = () => {
        if (localStartDate && localEndDate) {
            return new Date(localStartDate) <= new Date(localEndDate);
        }
        return true;
    };

    const toggleDrawer = (value) => () => {
        if (value) {
            //Reseta se o usuário não aplicar o filtro
            setLocalFeatures(features);
            setLocalStartDate(startDate);
            setLocalEndDate(endDate);
            setLocalStatuses(statuses);
            setLocalClient(client);
        } else {
            if (!isValidDateRange()) {
                setDateError(true);
                return;
            }
            setDateError(false);
        }
        setOpen(value);
    };

    const handleClearFilters = () => {
        setLocalFeatures([]);
        setLocalStartDate('');
        setLocalEndDate('');
        setLocalStatuses([]);
        setDateError(false);
        setLocalClient([]);
    };

    const handleApplyFilters = () => {
        if (isValidDateRange()) {
            HandleEvent('query_filter_drawer_apply', {
                features: localFeatures ? ? [],
                startDate: localStartDate ? ? '',
                endDate: localEndDate ? ? '',
                statuses: localStatuses ? ? [],
            });
            setFeatures(localFeatures);
            setStartDate(localStartDate);
            setEndDate(localEndDate);
            setStatuses(localStatuses);
            setApplyFilters(true);
            setOpen(false);
            setClient(localClient);
        }
    };

    const drawerContent = ( <
        Box sx = {
            {
                width: 380,
                p: 3
            }
        }
        role = "presentation" >
        <
        Typography variant = "h6"
        gutterBottom >
        Filtros <
        /Typography>

        <
        Typography variant = "h6"
        gutterBottom >
        Tipo <
        /Typography>

        <
        MultiSelectWithChips features = {
            localFeatures
        }
        setFeatures = {
            setLocalFeatures
        }
        />

        <
        Box mt = {
            3
        } >
        <
        Typography variant = "h6"
        gutterBottom >
        Cliente <
        /Typography> <
        MultiSelectWithChipsCustom options = {
            customers
        }
        client = {
            localClient
        }
        setOptions = {
            setLocalClient
        }
        /> <
        /Box>

        <
        Box mt = {
            3
        }
        mb = {
            3
        } >
        <
        Typography variant = "h6"
        gutterBottom >
        Data da consulta <
        /Typography>

        <
        Box display = "flex"
        alignItems = "center"
        gap = {
            1
        }
        mt = {
            1
        } >
        <
        InternalStyles.CustomDateField type = "date"
        value = {
            localStartDate
        }
        onChange = {
            (e) => setLocalStartDate(e.target.value)
        }
        size = "small"
        fullWidth error = {
            dateError
        }
        helperText = {
            dateError ? 'Data inicial deve ser menor ou igual à final' : ''
        }
        />

        <
        Typography variant = "body1"
        sx = {
            {
                fontSize: '1.1rem',
                mb: dateError ? 4 : 0,
            }
        } >
        a <
        /Typography>

        <
        InternalStyles.CustomDateField type = "date"
        value = {
            localEndDate
        }
        onChange = {
            (e) => setLocalEndDate(e.target.value)
        }
        size = "small"
        fullWidth error = {
            dateError
        }
        helperText = {
            dateError ? 'Data final deve ser maior ou igual à inicial' : ''
        }
        /> <
        /Box> <
        /Box>

        <
        Typography variant = "h6"
        gutterBottom >
        Status <
        /Typography> <
        Box display = "flex"
        flexDirection = "column" > {
            QUERIES_STATUS.map((status) => ( <
                FormControlLabel key = {
                    status.label
                }
                control = { <
                    InternalStyles.CustomCheckbox
                    name = {
                        status.label
                    }
                    checked = {
                        localStatuses.some((s) => s.status === status.status)
                    }
                    onChange = {
                        handleStatusChange
                    }
                    />
                }
                label = {
                    status.label
                }
                sx = {
                    {
                        '& .MuiFormControlLabel-label': {
                            fontSize: '1.1rem',
                        },
                    }
                }
                />
            ))
        } <
        /Box>

        <
        Box display = "flex"
        justifyContent = "space-between"
        gap = {
            2
        } >
        <
        InternalStyles.DrawerFooter >
        <
        InternalStyles.ClearButton onClick = {
            handleClearFilters
        } >
        Limpar <
        /InternalStyles.ClearButton> <
        InternalStyles.ApplyButton onClick = {
            handleApplyFilters
        }
        disabled = {!isValidDateRange()
        } >
        Aplicar <
        /InternalStyles.ApplyButton> <
        /InternalStyles.DrawerFooter> <
        /Box> <
        /Box>
    );

    return ( <
        div >
        <
        InternalStyles.FilterDrawerButton onClick = {
            toggleDrawer(true)
        } >
        <
        S.Icon src = {
            toAbsoluteUrl(
                '/media/jusfinder/filter-2--funnel-filter-angle-oil.svg',
            )
        }
        width = "10"
        height = "10" /
        >
        Filtros <
        /InternalStyles.FilterDrawerButton> <
        Drawer anchor = "right"
        open = {
            open
        }
        onClose = {
            toggleDrawer(false)
        } > {
            drawerContent
        } <
        /Drawer> <
        /div>
    );
}