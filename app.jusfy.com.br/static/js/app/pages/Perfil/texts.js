export const PERFIL_TEXTS = {
    modalConfirmationError: {
        title: 'Tem certeza que você quer retornar para a versão anterior do menu?',
        description: 'A versão anterior estará disponível apenas até 05/05/2026. Esta ação não impactará no funcionamento da plataforma e você poderá retornar para a esta versão a qualquer momento.',
        primaryButtonLabel: 'Retornar à versão',
        secondaryButtonLabel: 'Voltar',
    },

    newMenuModalLoading: {
        title: 'Estamos retornando à versão anterior',
        subtitle: 'A versão anterior estará disponível apenas até 05/05/2026',
    },

    newMenuModalLoadingV2: {
        title: 'Estamos preparando a nova versão',
        subtitle: 'Em instantes, você terá acesso à Jusfy com uma melhor organização e facilidade de acesso às ferramentas disponíveis',
    },

    tabs: {
        profile_info: 'Informações',
        financial: 'Assinatura',
        change_password: 'Alterar Senha',
        credit_cards: 'Cartões',
    },

    changePassword: {
        title: 'Alterar Senha',
        newPassword: 'Nova senha',
        confirmPassword: 'Confirmar senha',
        button: 'ALTERAR',
        errors: {
            required: 'Campo obrigatório',
            mismatch: 'As senhas não coincidem!',
        },
    },

    mySubscription: {
        cancelPlan: 'CANCELAR PLANO',
        status: 'Status',
        value: 'Valor',
        startPeriod: 'INÍCIO DO PERÍODO',
        endPeriod: 'FIM DO PERÍODO',
        paymentMethod: 'FORMA DE PAGAMENTO',
        creditCard: 'CARTÃO DE CRÉDITO',
        boleto: 'BOLETO',
        accessBoleto: 'ACESSAR BOLETO',
        cardBrand: 'BANDEIRA DO CARTÃO',
        cardLastDigits: 'ÚLTIMOS DÍGITOS DO CARTÃO',
        errorCard: 'Não foi possível validar o seu cartão de crédito.',
        statusList: {
            trialing: 'Período de Teste',
            paid: 'Ativo',
            Paga: 'Ativo',
            active: 'Ativo',
            unpaid: 'Pagamento Pendente',
            'Não Pago': 'Pagamento Pendente',
            canceled: 'Cancelado',
            Cancelado: 'Cancelado',
            waiting_payment: 'Aguardando Pagamento',
            pending_payment: 'Pendente Pagamento',
            failed: 'Falha no Pagamento',
        },
    },

    currentPlanSummary: {
        planLabel: 'PLANO CONTRATADO',
        valueLabel: 'Valor',
        valueLastLabel: 'VALOR DA ÚLTIMA MENSALIDADE',
        startPeriod: 'INÍCIO DO PERÍODO',
        endPeriod: 'FIM DO PERÍODO',
        paymentMethod: 'FORMA DE PAGAMENTO',
        creditCard: 'CARTÃO DE CRÉDITO',
        pix: 'PIX',
        boleto: 'BOLETO',
        cardBrandLabel: 'BANDEIRA DO CARTÃO',
        cardLastDigitsLabel: 'ÚLTIMOS DÍGITOS DO CARTÃO',
        cancelPlan: 'CANCELAR PLANO',
        reactivatePlan: 'REATIVAR PLANO',
        status: {
            active: 'Ativo',
            inactive: 'Inativo',
        },
        actions: {
            cancelAccount: 'CANCELAR CONTA',
        },
    },

    modalFeedback: {
        title: 'Lamentamos que você esteja pensando em cancelar. Por favor, nos conte o motivo para que possamos melhorar:',
        reasonLabel: 'Qual o principal motivo do seu cancelamento?',
        toolLabel: 'Com qual funcionalidade você teve dificuldade?',
        suggestionLabel: 'O que poderíamos fazer para melhorar?',
        cancelButton: 'Cancelar conta!',
        keepButton: 'VOLTAR',
        close: 'Fechar',
        questions: [{
                id: '1',
                question: 'A plataforma não atendeu minhas necessidades',
            },
            {
                id: '2',
                question: 'Tive dificuldades para usar a plataforma'
            },
            {
                id: '3',
                question: 'O valor da assinatura está alto'
            },
            {
                id: '4',
                question: 'Não gostei da experiência na plataforma'
            },
            {
                id: '5',
                question: 'Não estou utilizando a plataforma'
            },
            {
                id: '6',
                question: 'Utilizo a plataforma muito pouco'
            },
            {
                id: '7',
                question: 'Tive dificuldade com uma funcionalidade específica',
            },
            {
                id: '8',
                question: 'Outro motivo'
            },
        ],
        labels: {
            '1': 'Conte um pouco mais sobre sua experiência',
            '2': 'Conte um pouco mais sobre sua experiência',
            '3': 'O que seria um valor justo para você?',
            '4': 'O que não gostou na experiência?',
            '5': 'O que faria você voltar a usar a plataforma?',
            '6': 'O que faria você usar mais a plataforma?',
            '7': 'Com qual funcionalidade teve dificuldade?',
            '8': 'Conte um pouco mais sobre sua experiência',
        },
        toolOptions: [{
                id: '1',
                name: 'JusMatch - oportunidades'
            },
            {
                id: '2',
                name: 'JusFile - modelo de petições'
            },
            {
                id: '3',
                name: 'JusDecision - busca de jurisprudência'
            },
            {
                id: '4',
                name: 'JusFinder - busca de dados do réu'
            },
            {
                id: '5',
                name: 'JusCalc - calculadora jurídica'
            },
            {
                id: '6',
                name: 'JusCalc FGTS - revisão do FGTS'
            },
            {
                id: '7',
                name: 'JusCalcAluguel - correção de Aluguel'
            },
            {
                id: '8',
                name: 'JusCalc Pensão - alimentos'
            },
            {
                id: '9',
                name: 'JusRevisional - revisão de contrato'
            },
            {
                id: '10',
                name: 'JusSign - assinador digital'
            },
            {
                id: '11',
                name: 'JusAgenda - gestão de prazos'
            },
        ],
        explainFunctionalityProblemLabel: 'Explique o problema com a funcionalidade selecionada',
        genericExperienceLabel: 'Fale mais sobre a sua experiência',
    },

    creditCardManager: {
        title: 'Gerencie seus cartões de crédito cadastrados',
        emptyMessage: 'Clique no botão abaixo para adicionar um cartão de crédito vinculado à sua conta.',
        addCardButton: 'ADICIONAR CARTÃO',
        deleteModal: {
            title: 'Excluir cartão',
            description: 'Deseja realmente excluir este cartão? Esta ação é irreversível.',
            confirmButton: 'Excluir',
            cancelButton: 'Cancelar',
        },
    },

    addCreditCard: {
        title: 'Adicionar cartão de crédito',
        cardholderName: 'Nome impresso no cartão',
        cardNumber: 'Número do cartão',
        expiration: 'Vencimento',
        cvv: 'CVV',
        addButton: 'Adicionar cartão',
        errors: {
            cardholderName: 'Verifique o nome impresso no cartão.',
            cardNumber: 'Verifique o número do cartão.',
            expiration: 'Verifique a data de expiração do cartão.',
            cvv: 'Verifique o código de segurança (CVV) do cartão.',
            generic: 'Falha ao adicionar cartão. Por favor, tente novamente.',
        },
    },

    subscriptionUpgrade: {
        title: 'Upgrade Plano',
        contractAnotherPlan: 'Contratar outro plano',
        choosePlan: 'Escolha agora seu plano',
        subtitle: 'Basta escolher um plano para realizar o upgrade agora mesmo',
        monthly: 'Mensal',
        annual: 'Anual',
        plans: {
            starter: {
                description: 'Plano Inicial básico para advogados iniciando a carreira.',
            },
            master: {
                description: 'Plano completo para você. Tenha acesso a todas ferramentas necessárias para o seu escritório.',
            },
            ultimate: {
                description: 'Plano Ultimate. Tenha acesso a todas ferramentas com mais benefícios ainda.',
            },
        },
        checkout: {
            title: 'Checkout',
            cardholderName: 'Nome impresso no cartão',
            cardNumber: 'Número do cartão',
            expiration: 'Vencimento',
            cvv: 'CVV',
            useExistingCard: 'Desejo utilizar meu cartão com final',
            manualCard: 'Desejo informar os dados do cartão manualmente',
            signNowButton: 'Assinar agora',
        },
        success: {
            title: 'Parabéns, sua assinatura foi atualizada com sucesso!',
            continueButton: 'CONTINUAR NAVEGANDO',
        },
    },

    planChangedModal: {
        title: 'Plano Alterado',
        description: 'Seu plano foi reativado com sucesso, mas houve uma alteração:',
        oldPlan: 'Plano anterior',
        newPlan: 'Novo plano',
        understandButton: 'Entendi',
        message: 'O plano anterior não estava mais disponível ou o período promocional expirou. Seu novo plano oferece as mesmas funcionalidades.',
    },

    userInformation: {
        profession: 'Profissão',
        cpf: 'CPF',
        fullName: 'Nome completo',
        phone: 'Telefone',
        email: 'E-mail',
        oab: 'Nº da OAB',
        oabState: 'Estado da OAB',
        cep: 'CEP',
        state: 'Estado',
        city: 'Cidade',
        address: 'Endereço',
        district: 'Bairro',
        saveButton: 'SALVAR',
        addressComplement: 'Complemento',
        addressNumber: 'Número',
    },

    subscriptionStatusBanner: {
        reactivateAccount: 'Reativar Assinatura',
        loadingText: 'Reativando...',
        messages: {
            unpaid: 'Seu plano está com pagamento pendente. Para evitar a interrupção dos serviços, regularize sua assinatura.',
            canceled: 'Sua assinatura foi cancelada. Reative seu plano para continuar aproveitando todos os recursos.',
            trial_expired: 'O período de teste terminou. Escolha um plano para continuar utilizando a plataforma sem restrições.',
            ended: 'O ciclo do seu plano foi finalizado. Reative sua assinatura para manter o acesso.',
            failed: 'Não foi possível processar o pagamento do seu plano. Atualize seus dados para evitar a suspensão dos serviços.',
            inactive: 'Sua assinatura está inativa. Reative seu plano para continuar utilizando a plataforma.',
            waiting_payment: 'Seu pagamento está sendo processado. Aguarde a confirmação para continuar utilizando todos os recursos.',
            pending_payment: 'Seu pagamento está pendente. Aguarde a confirmação para continuar utilizando todos os recursos.',
            payment_not_confirmed: 'Seu acesso será liberado assim que o pagamento for confirmado',

            paid: 'Seu plano está ativo e funcionando normalmente. Aproveite todos os recursos disponíveis.',
            trialing: 'Você está no período de teste. Explore todas as funcionalidades antes de escolher um plano.',
            ok: 'Seu plano está funcionando perfeitamente. Continue aproveitando todos os recursos disponíveis.',
            active: 'Sua assinatura está ativa. Todos os recursos estão disponíveis para uso.',

            canceled_but_active: (date) =>
                `Você cancelou sua assinatura, mas ainda pode aproveitar todos os recursos até ${date}`,
            trial_expired_but_active: 'O período de teste terminou mas seu acesso ainda está ativo. Escolha um plano para continuar após a data de expiração.',

            server_error: 'Erro temporário ao verificar seu status. Tente novamente em alguns instantes.',
            no_subscription_data: 'Não foi possível verificar seu status de assinatura. Entre em contato com o suporte.',
            unknown_status: 'Status de assinatura não reconhecido. Entre em contato com o suporte para regularização.',
            plan_expired: 'Seu plano expirou. Renove sua assinatura para continuar utilizando a plataforma.',
            plan_canceled: 'Seu plano foi cancelado. Reative sua assinatura para manter o acesso aos recursos.',
            payment_failed: 'Falha no processamento do pagamento. Atualize seus dados de pagamento para continuar.',
            loading: 'Verificando status da sua assinatura...',
        },
    },

    reactivationSuccessModal: {
        header: {
            congratulations: 'Parabéns! 🎉',
            subtitle: 'Seu plano foi reativado com sucesso',
        },
        content: {
            title: 'Você fez uma excelente escolha!',
            previousPlan: 'Plano Anterior',
            newPlan: 'Novo Plano',
            perMonth: 'por mês',
            noDataAvailable: 'Dados não disponíveis',
            savings: {
                title: '💰 Você economizou!',
                subtitle: 'por mês em comparação ao plano anterior',
            },
            finalMessage: 'Agora você pode aproveitar ao máximo todas as funcionalidades da plataforma!',
        },
        actions: {
            continueButton: 'Continuar para o Dashboard',
        },
    },

    creditCardValidation: {
        required: {
            cardholderName: 'O nome do titular do cartão é obrigatório.',
            cardNumber: 'O número do cartão é obrigatório.',
            cardExpiration: 'O mês/ano de expiração do cartão é obrigatório.',
            cardCvv: 'O código de segurança (CVV) do cartão é obrigatório.',
        },
        format: {
            cardholderName: 'Verifique o nome impresso no cartão.',
            cardNumber: 'Verifique o número do cartão.',
            cardExpiration: 'Verifique a data de expiração do cartão.',
            cardCvv: 'Verifique o código de segurança (CVV) do cartão.',
        },
        specific: {
            invalidExpiration: 'O vencimento é inválido.',
            invalidCvv: 'Número do CVV inválido.',
            invalidCardNumber: 'Número do cartão inválido.',
            expiredCard: 'Cartão expirado.',
        },
        labels: {
            cardholderName: 'Nome impresso no cartão',
            cardNumber: 'Número do cartão',
            cardExpiration: 'Vencimento (MM/AA)',
            cardCvv: 'CVV',
            required: 'Obrigatório',
        },
        errors: {
            processingError: 'Erro ao processar o cartão. Tente novamente.',
            invalidServerResponse: 'Resposta inválida do servidor',
            cardProcessingError: 'Erro ao processar o cartão',
        },
    },
    warnPrePaidPlanExpiration: {
        title: 'Seu plano pré-pago expirou!',
        message: 'Sua assinatura está disponível para renovação. Finalize o pagamento por Pix ou cartão de crédito e continue usando a Jusfy normalmente.',
        reactivateButton: 'Pagar fatura',
    },
    promotionalPlanInfo: {
        message: 'Contratação trimestral do Plano Ultimate por R$19,90/mês durante os três primeiros meses. Cobrança imediata.',
        info: 'A partir do quarto mês, a assinatura será ajustada automaticamente para o valor normal do plano Ultimate(R$117/ mês).',
        clients: 'Válido para clientes selecionados.',
    },
};