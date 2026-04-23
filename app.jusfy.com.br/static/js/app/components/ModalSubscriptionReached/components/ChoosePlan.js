import React, {
    useState
} from 'react';
import {
    toAbsoluteUrl
} from '../../../../_metronic/_helpers';
import {
    FormControlLabel,
    Switch
} from '@material-ui/core';
import {
    EventsSegment
} from '../../../helpers/EventsSegmentsCalculators';
import {
    masterBenefits,
    starterBenefits,
    ultimateBenefits
} from './constants';
import * as S from './styles';
import {
    useSubscriptionPlans
} from '../useSubscriptionPlans';
import {
    useSelectedPlan
} from '../useSelectedPlan';
import {
    useSelector
} from 'react-redux';
import {
    getBenefitsWithMonitoring
} from '../../../../_metronic/_helpers/filteredBenefitsPlans';
import {
    getSubscriptionPlans
} from '../../../hooks/useSubscriptionPlans';
import useFeatureFlagWithContext from '../../../hooks/useFeatureFlagWithContext';
import {
    FEATURE_FLAGS
} from '../../../constants/FeatureFlag';
import {
    toast
} from 'react-toastify';
import {
    isNil
} from 'lodash';

export default function ChoosePlan(props) {
    const {
        LimitReachModal
    } = EventsSegment();
    const subscription = useSelector((state) => state.subscription);
    const useCredits = useSelector((state) => state.auth ? .user ? .use_credits);
    const planNameForFlag =
        subscription ? .subscription_status ? .info ? .plan ? ?
        subscription ? .subscription_status ? .plan_details ? .name;
    const {
        isFeatureFlagEnable: isOabMgUpsellEnabled,
    } = useFeatureFlagWithContext(FEATURE_FLAGS.RELEASE.UPSELL_OAB_MG, {
        plan: planNameForFlag ? ? undefined,
    });
    const hasJusProcessos = subscription ? .subscription_status ? .has_jusprocessos;
    const processCount = subscription ? .subscription_status ? .jus_processos_qtd;
    const isOffer = props ? .isOffer;
    const isUniversal = subscription ? .subscription_status ? .isUniversalJusfinder;
    const {
        billingCycle,
        toggleBillingCycle,
        planPrices
    } = useSubscriptionPlans(
        hasJusProcessos,
        processCount,
        isOffer,
        isUniversal,
    );

    const {
        selectedChoosePlan
    } = useSelectedPlan();

    const [toggledBenefits, toggleBenefits] = useState(false);
    const [showBenefits, setShowBenefits] = useState(false);

    const toggleBenefit = (e) => {
        e.stopPropagation();
        const isHide = !toggledBenefits === false;
        toggleBenefits(!toggledBenefits);
        if (isHide) {
            setTimeout(() => {
                setShowBenefits(false);
            }, [1000]);
        } else {
            setShowBenefits(true);
        }
    };
    const filteredPlans =
        isOffer && billingCycle === 'monthly' ?
        [{
            key: 'master',
            benefits: masterBenefits
        }] :
        [{
                key: 'starter',
                benefits: starterBenefits
            },
            {
                key: 'master',
                benefits: masterBenefits
            },
            {
                key: 'ultimate',
                benefits: ultimateBenefits
            },
        ];
    const renderBenefits = (benefits, planKey) => {
        return isOffer ? ( <
            S.ContainerBenefits toggled = {
                toggledBenefits
            } >
            <
            S.ToggleBenefits onClick = {
                toggleBenefit
            } > {
                toggledBenefits ? 'Esconder benefícios' : 'Ver benefícios'
            } <
            /S.ToggleBenefits> <
            ul className = "list-benefit-slider" > {
                showBenefits &&
                getBenefitsWithMonitoring(benefits, planKey, useCredits).map(
                    (benefit, index) => ( <
                        li key = {
                            index
                        } >
                        <
                        i className = {
                            benefit.enabled ?
                            'icon-lg fas fa-check' :
                                'icon-lg fas fa-times disabled'
                        } >
                        < /i>{' '} <
                        span > {
                            benefit.description
                        } < /span> <
                        /li>
                    ),
                )
            } <
            /ul> <
            /S.ContainerBenefits>
        ) : ( <
            ul > {
                getBenefitsWithMonitoring(benefits, planKey, useCredits).map(
                    (benefit, index) => ( <
                        li key = {
                            index
                        } >
                        <
                        i className = {
                            benefit.enabled ?
                            'icon-lg fas fa-check' :
                                'icon-lg fas fa-times disabled'
                        } >
                        < /i>{' '} <
                        span > {
                            benefit.description
                        } < /span> <
                        /li>
                    ),
                )
            } <
            /ul>
        );
    };

    const chooseProduct = (plan) => {
        LimitReachModal('Limit Reach Upgrade Button Clicked', {
            context: props.url,
        });

        const cycle = billingCycle === 'annual' ? 'annually' : 'monthly';

        const searchParams = {
            plan_type: plan,
            billingCycle: cycle,
            hasJusProcessos,
            jusprocessos_count: processCount,
            is_offer: Boolean(isOffer),
            affiliation_type: isOabMgUpsellEnabled ? 'caamg' : undefined,
        };

        const subscriptionPlan = getSubscriptionPlans(searchParams);

        const subscriptionPlanNotFound = !subscriptionPlan;
        const invalidIdentifiers =
            subscriptionPlan &&
            (isNil(subscriptionPlan.id) || isNil(subscriptionPlan.gateway_id));
        const hasNonNumericId =
            subscriptionPlan && typeof subscriptionPlan.id !== 'number';
        const hasErrors =
            subscriptionPlanNotFound || invalidIdentifiers || hasNonNumericId;

        if (hasErrors) {
            toast.error(
                'Plano não encontrado. Por favor, tente novamente ou contate o suporte.',
            );
            props.formik.setFieldValue('product_selected', null);
            return;
        }

        const productSelected = {
            id: subscriptionPlan.id,
            name: subscriptionPlan.name,
            description: subscriptionPlan.description,
            periodicity: subscriptionPlan.billingCycle,
            price: subscriptionPlan.amount,
            gateway_id: subscriptionPlan.gateway_id != null ?
                String(subscriptionPlan.gateway_id) :
                null,
        };

        props.formik.setFieldValue('product_selected', productSelected);
    };

    return ( <
        S.Content >
        <
        h3 > {
            props.title
        } < /h3> <
        p > {
            props.subtitle
        } < /p>

        <
        div style = {
            {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }
        } >
        <
        span style = {
            {
                fontSize: '12px',
                lineHeight: '36px',
                marginRight: '10px'
            }
        } >
        Mensal <
        /span> <
        FormControlLabel style = {
            {
                marginRight: '0px',
                paddingRight: '0px'
            }
        }
        control = { <
            Switch
            style = {
                {
                    marginRight: '0px',
                    paddingRight: '0px'
                }
            }
            color = "primary"
            checked = {
                billingCycle === 'annual'
            }
            onChange = {
                toggleBillingCycle
            }
            />
        }
        /> <
        span style = {
            {
                fontSize: '12px',
                lineHeight: '36px'
            }
        } > Anual < /span> {
            isOffer ? ( <
                S.Icon src = {
                    toAbsoluteUrl('/media/svg/tag-discount-20-blur.svg')
                }
                />
            ) : ( <
                S.Icon src = {
                    toAbsoluteUrl('/media/svg/tag-discount-20.svg')
                }
                />
            )
        } <
        /div> <
        div className = "row" > {
            filteredPlans.map((plan) => ( <
                S.PlanContainer key = {
                    plan.key
                }
                className = {
                    filteredPlans.length > 1 ? 'col-lg-4' : 'col-12'
                } >
                <
                S.Produto onClick = {
                    () => chooseProduct(plan.key)
                } >
                <
                S.PlanTitleContainer >
                <
                span > {
                    planPrices ? .[plan.key] ? .title
                } < /span> {
                    isOffer && planPrices ? .[plan.key] ? .former_price ? ( <
                        S.OfferIcon src = {
                            toAbsoluteUrl('/media/svg/tag-discount-50.svg')
                        }
                        />
                    ) : null
                } <
                /S.PlanTitleContainer> <
                p className = "preco" > {
                    isOffer && planPrices ? .[plan.key] ? .former_price ? ( <
                        >
                        de {
                            ' '
                        } <
                        S.FormerPrice > {
                            planPrices ? .[plan.key] ? .former_price
                        } <
                        /S.FormerPrice>{' '} {
                            planPrices ? .[plan.key] ? .price
                        } <
                        />
                    ) : ( <
                        > {
                            planPrices ? .[plan.key] ? .price
                        } {
                            ' '
                        } <
                        span style = {
                            {
                                fontWeight: 500
                            }
                        } > {
                            planPrices ? .[plan.key] ? .total
                        } <
                        /span> <
                        />
                    )
                } <
                /p> {
                    !isOffer ? ( <
                        p className = "subtitulo" > {
                            plan.key === 'starter' ?
                            'Plano Inicial básico para advogados iniciando a carreira.' :
                                plan.key === 'master' ?
                                'Plano completo para você. Tenha acesso a todas ferramentas necessárias para o seu escritório.' :
                                'Plano Ultimate. Tenha acesso a todas ferramentas com mais benefícios ainda.'
                        } <
                        /p>
                    ) : null
                } {
                    renderBenefits(plan.benefits, plan.key)
                }

                <
                S.SignButton className = "btn btn-primary " >
                <
                span > Assinar agora < /span> <
                img src = {
                    toAbsoluteUrl('/media/arrow-white.svg')
                }
                className = "arrow-icon" /
                >
                <
                /S.SignButton> <
                /S.Produto> <
                /S.PlanContainer>
            ))
        } <
        /div> <
        /S.Content>
    );
}