import React from 'react';
import {
    FormControlLabel,
    Switch
} from '@material-ui/core';

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
    EventsSegment
} from '../../../../../../helpers/EventsSegmentsCalculators';
import {
    toAbsoluteUrl
} from '../../../../../../../_metronic/_helpers';
import {
    getBenefitsWithMonitoring
} from '../../../../../../../_metronic/_helpers/filteredBenefitsPlans';
import {
    getSubscriptionPlans
} from '../../../../../../hooks/useSubscriptionPlans';
import useFeatureFlagWithContext from '../../../../../../hooks/useFeatureFlagWithContext';
import {
    FEATURE_FLAGS
} from '../../../../../../constants/FeatureFlag';
import {
    toast
} from 'react-toastify';
import {
    isNil
} from 'lodash';

export default function ChoosePlan(props) {
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
    const hasJusProcessos = false;
    const processCount = subscription ? .subscription_status ? .jus_processos_qtd;
    const isUniversal = subscription ? .subscription_status ? .isUniversalJusfinder;
    const {
        billingCycle,
        toggleBillingCycle,
        planPrices
    } = useSubscriptionPlans(
        hasJusProcessos,
        processCount,
        isUniversal,
    );

    const {
        selectedChoosePlan
    } = useSelectedPlan();
    const {
        HandleEvent
    } = EventsSegment();

    const chooseProduct = (plan) => {
        const cycle = billingCycle === 'annual' ? 'annually' : 'monthly';

        const searchParams = {
            plan_type: plan,
            billingCycle: cycle,
            hasJusProcessos,
            jusprocessos_count: processCount,
            is_offer: false,
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
        HandleEvent('Universal Plan Selected', {
            ...productSelected,
            isUniversal: true,
        });

        if (props.isPagarmeV5) {
            props.setModalV5(true);
            return;
        }
        props.setModalCheckout(true);
    };

    return ( <
        S.ContainerWrapper >
        <
        S.Content >
        <
        h3 > Upgrade Plano < /h3> <
        p > Basta escolher um plano para realizar o upgrade agora mesmo < /p>

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
                marginRight: '10px',
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
                lineHeight: '36px',
                marginLeft: ''
            }
        } >
        Anual <
        /span>

        <
        S.Icon src = {
            toAbsoluteUrl('/media/svg/tag-discount-20.svg')
        }
        /> <
        /div> <
        div className = "row" >
        <
        div className = "col-lg-4 col-12 mb-5" >
        <
        S.Produto onClick = {
            () => chooseProduct('starter')
        } >
        <
        span > {
            planPrices ? .starter.title
        } < /span> <
        p className = "preco" > {
            planPrices ? .starter.price
        } {
            ' '
        } <
        span style = {
            {
                fontWeight: 500
            }
        } > {
            planPrices ? .starter ? .total
        } <
        /span> <
        /p> <
        p className = "subtitulo" >
        Plano Inicial básico para advogados iniciando a carreira. <
        /p> <
        ul > {
            getBenefitsWithMonitoring(
                starterBenefits,
                'starter',
                useCredits,
            ) ? .map((benefit, index) => ( <
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
            ))
        } <
        /ul> <
        a href = "#" >
        Assinar agora {
            ' '
        } <
        img src = {
            toAbsoluteUrl('/media/icon-arrow.svg')
        }
        /> <
        /a> <
        /S.Produto> <
        /div> <
        div className = "col-lg-4 col-12 mb-5" >
        <
        S.Produto onClick = {
            () => chooseProduct('master')
        } >
        <
        span > {
            planPrices ? .master.title
        } < /span> <
        p className = "preco" > {
            planPrices ? .master.price
        } {
            ' '
        } <
        span style = {
            {
                fontWeight: 500
            }
        } > {
            planPrices ? .master ? .total
        } <
        /span> <
        /p> <
        p className = "subtitulo" >
        Plano completo para você.Tenha acesso a todas ferramentas necessárias para o seu escritório. <
        /p> <
        ul > {
            getBenefitsWithMonitoring(
                masterBenefits,
                'master',
                useCredits,
            ) ? .map((benefit, index) => ( <
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
            ))
        } <
        /ul> <
        a href = "#" >
        Assinar agora {
            ' '
        } <
        img src = {
            toAbsoluteUrl('/media/icon-arrow.svg')
        }
        /> <
        /a> <
        /S.Produto> <
        /div> <
        div className = "col-lg-4 col-12 mb-5" >
        <
        S.Produto onClick = {
            () => chooseProduct('ultimate')
        } >
        <
        span > {
            planPrices ? .ultimate.title
        } < /span> <
        p className = "preco" > {
            planPrices ? .ultimate.price
        } {
            ' '
        } <
        span style = {
            {
                fontWeight: 500
            }
        } > {
            planPrices ? .ultimate ? .total
        } <
        /span> <
        /p> <
        p className = "subtitulo" >
        Plano Ultimate.Tenha acesso a todas ferramentas com mais benefícios ainda. <
        /p> <
        ul > {
            getBenefitsWithMonitoring(
                ultimateBenefits,
                'ultimate',
                useCredits,
            ).map((benefit, index) => ( <
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
            ))
        } <
        /ul> <
        a href = "#" >
        Assinar agora {
            ' '
        } <
        img src = {
            toAbsoluteUrl('/media/icon-arrow.svg')
        }
        /> <
        /a> <
        /S.Produto> <
        /div> <
        /div> <
        /S.Content> <
        /S.ContainerWrapper>
    );
}