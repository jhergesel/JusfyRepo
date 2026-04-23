import {
    Card
} from './Card';
import * as S from '../QueryHistory.styles';
import {
    ButtonAngleDropDown,
    ButtonUpdateStatus,
    CardItem,
    CardItemTitle,
    Content,
    ContentHeaderCard,
    TextItemInfo,
    WrapperButtonUpdatedStatus,
    WrapperContent,
    WrapperInfoItems,
    WrapperTitle,
} from '../QueryHistory.styles';
import {
    TitleCard
} from './TitleCard';
import {
    toAbsoluteUrl
} from '../../../../../../../_metronic/_helpers';
import {
    HeaderIcons
} from '../../HeaderIcons';
import {
    ITEMS_HEADER_CARD_HISTORY
} from '../constants';
import {
    DOCUMENT_TYPE_HISTORY
} from '../../../utils/utils.jusfinder';

import React, {
    useEffect
} from 'react';
import {
    Pagination
} from '../../../../../../components/flat/ui/Pagination';
import ReactLoading from 'react-loading';
import {
    Loading
} from './Loading';
import {
    useFilters
} from '../context/FiltersContext';
import {
    EmptyStateFilters
} from './EmptyStateFilters';
import {
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';
import {
    Tag
} from '../../Tag';
import {
    FIRST_ITEM_INDEX,
    FOURTH_ITEM_INDEX,
    QUERY_TYPES_ECONOMIC_GROUP,
    SECOND_ITEM_INDEX,
    THIRD_ITEM_INDEX,
} from '../../../../JusfinderShared/constants/listingCards';
import useClickOutside from '../../../../../../hooks/useClickOutside';

export const QueryHistoryItems = ({
    data,
    loading,
    featureTypesUrl,
    itemCard,
    changePage,
    currPage,
    reloadPage,
    hasQueryPending,
    setQueryParams,
    hasParams,
    expandedIndex,
    toggleExpand,
    setOpenIndexMenu,
}) => {
    const {
        params
    } = useFilters();
    const ref = useClickOutside(() => setOpenIndexMenu(null));

    useEffect(() => {
        setQueryParams(params);
    }, [params]);

    if (hasParams && data ? .data ? .length === 0) {
        return <EmptyStateFilters / > ;
    }
    return ( <
        >
        <
        Card gap = {
            '24px'
        } >
        <
        ContentHeaderCard >
        <
        TitleCard title = {
            'Consultas'
        }
        optionalText = {
            loading ? ( <
                ReactLoading type = "bubbles"
                color = "#34BC97"
                size = "medium"
                width = "40px"
                height = "38px" /
                >
            ) : (
                data ? .total_items + ' consultas'
            )
        }
        /> {
            hasQueryPending && ( <
                WrapperButtonUpdatedStatus >
                <
                ButtonUpdateStatus onClick = {
                    reloadPage
                } >
                <
                S.IconUpdateStatus src = {
                    toAbsoluteUrl('/media/jusfinder/icon-updated.svg')
                }
                />
                Atualizar status <
                /ButtonUpdateStatus> <
                /WrapperButtonUpdatedStatus>
            )
        } <
        /ContentHeaderCard>

        <
        WrapperContent >
        <
        HeaderIcons items_header = {
            ITEMS_HEADER_CARD_HISTORY
        }
        />

        {
            loading && < Loading / >
        } {
            !loading &&
                itemCard ? .map((card, index) => {
                    if (card.type === 'group') {
                        return ( <
                            div key = {
                                `group-${index}`
                            } >
                            <
                            CardItem key = {
                                `item-${card.id}`
                            }
                            onClick = {
                                () => toggleExpand(index)
                            } >
                            <
                            Content >
                            <
                            WrapperInfoItems >
                            <
                            WrapperTitle className = {
                                ''
                            } >
                            <
                            CardItemTitle > {
                                DOCUMENT_TYPE_HISTORY.get(
                                    card.items[0] ? .document_type,
                                ) ? .maskedDocument(card.document)
                            }

                            <
                            span > Múltiplas consultas < /span> <
                            /CardItemTitle> <
                            /WrapperTitle> <
                            TextItemInfo index = {
                                FIRST_ITEM_INDEX
                            } > {
                                card.client
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                SECOND_ITEM_INDEX
                            } > {
                                card.date
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                THIRD_ITEM_INDEX
                            } > {
                                card.successCount > 0 && ( <
                                    Tag background = {
                                        '#e6f7f2'
                                    }
                                    icon = {
                                        toAbsoluteUrl(
                                            '/media/jusfinder/check-success.svg',
                                        )
                                    }
                                    text = {
                                        card.successCount
                                    }
                                    />
                                )
                            } {
                                card.pendingCount > 0 && ( <
                                    Tag background = {
                                        '#fff9e6'
                                    }
                                    icon = {
                                        toAbsoluteUrl(
                                            '/media/jusfinder/circle-clock.svg',
                                        )
                                    }
                                    text = {
                                        card.pendingCount
                                    }
                                    />
                                )
                            } {
                                card.errorCount > 0 && ( <
                                    Tag background = {
                                        '#fbeaec'
                                    }
                                    icon = {
                                        toAbsoluteUrl(
                                            '/media/jusfinder/error-count.svg',
                                        )
                                    }
                                    text = {
                                        card.errorCount
                                    }
                                    />
                                )
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                FOURTH_ITEM_INDEX
                            } >
                            <
                            ButtonAngleDropDown onClick = {
                                () => toggleExpand(index)
                            }
                            style = {
                                {
                                    cursor: 'pointer'
                                }
                            } >
                            {
                                expandedIndex === index ? ( <
                                    FaChevronUp / >
                                ) : ( <
                                    FaChevronDown / >
                                )
                            } <
                            /ButtonAngleDropDown> <
                            /TextItemInfo> <
                            /WrapperInfoItems> <
                            /Content> <
                            /CardItem>

                            {
                                expandedIndex === index &&
                                    card.items.map((item) => ( <
                                        CardItem key = {
                                            `item-${item.id}`
                                        }
                                        onClick = {
                                            (e) => featureTypesUrl(item, 'card')
                                        } >
                                        <
                                        Content ref = {
                                            ref
                                        } >
                                        <
                                        WrapperInfoItems >
                                        <
                                        WrapperTitle className = {
                                            ''
                                        } >
                                        <
                                        TextItemInfo > {
                                            item.feature_type_name === 'economic_group' ?
                                            QUERY_TYPES_ECONOMIC_GROUP.get(
                                                item.query_subtype,
                                            ) :
                                                item.typeQuery
                                        } <
                                        /TextItemInfo> <
                                        /WrapperTitle> <
                                        TextItemInfo index = {
                                            FIRST_ITEM_INDEX
                                        } > {
                                            item.client
                                        } <
                                        /TextItemInfo>

                                        <
                                        TextItemInfo index = {
                                            SECOND_ITEM_INDEX
                                        } > {
                                            item.date
                                        } <
                                        /TextItemInfo> <
                                        TextItemInfo index = {
                                            THIRD_ITEM_INDEX
                                        } > {
                                            item.statusComponent
                                        } <
                                        /TextItemInfo> <
                                        TextItemInfo index = {
                                            FOURTH_ITEM_INDEX
                                        } > {
                                            item.actions
                                        } <
                                        /TextItemInfo> <
                                        /WrapperInfoItems> <
                                        /Content> <
                                        /CardItem>
                                    ))
                            } <
                            /div>
                        );
                    } else {
                        return ( <
                            CardItem key = {
                                `single-${card.id}`
                            }
                            onClick = {
                                (e) => featureTypesUrl(card, 'card')
                            } >
                            <
                            Content ref = {
                                ref
                            } >
                            <
                            WrapperInfoItems >
                            <
                            WrapperTitle className = {
                                'text-item-info first'
                            } >
                            <
                            CardItemTitle > {
                                DOCUMENT_TYPE_HISTORY.get(
                                    card.document_type,
                                ) ? .maskedDocument(card.document)
                            }

                            <
                            span > {
                                card.typeQuery
                            } < /span> <
                            /CardItemTitle> <
                            /WrapperTitle> <
                            TextItemInfo index = {
                                FIRST_ITEM_INDEX
                            } > {
                                card.client
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                SECOND_ITEM_INDEX
                            } > {
                                card.date
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                THIRD_ITEM_INDEX
                            } > {
                                card.statusComponent
                            } <
                            /TextItemInfo> <
                            TextItemInfo index = {
                                FOURTH_ITEM_INDEX
                            } > {
                                card.actions
                            } <
                            /TextItemInfo> <
                            /WrapperInfoItems> <
                            /Content> <
                            /CardItem>
                        );
                    }
                })
        } <
        /WrapperContent> <
        Pagination changePage = {
            changePage
        }
        currPage = {
            currPage
        }
        totalPages = {
            data ? .total_pages
        }
        /> <
        /Card> <
        />
    );
};