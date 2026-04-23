export const ERROR_TYPE_CONTENT = new Map([
    [
        "BAD_REQUEST",
        {
            icon: "network-error",
            title: "Problema na conexão...",
            message: "Oi! Parece que tivemos um pequeno problema com a sua conexão agora. Que tal tentar novamente em alguns minutinhos? Estaremos aqui para ajudar!",
            buttonText: "Ok. Entendi!",
        },
    ],
    [
        "ERROR_PROCESS",
        {
            icon: "network-error",
            title: "Problema com instabilidade...",
            message: "Desculpe-nos! Estamos enfrentando um probleminha de instabilidade com nosso fornecedor no momento. Que tal tentar novamente um pouco mais tarde? Agradecemos sua compreensão!",
            buttonText: "Ok. Entendi!",
        },
    ],
    [
        "LIMIT_REACHED",
        {
            icon: "warning-rounded",
            title: "Já realizamos essa consulta...",
            message: "Olá! Parece que já realizamos uma consulta com este documento hoje. Que tal dar uma olhadinha no histórico de consultas? ",
            buttonText: "Ok. Entendi!",
        },
    ],
    [
        "ERROR_LGPD",
        {
            icon: "warning-rounded",
            title: "Resultado indisponível",
            message: "Oi! Infelizmente, não podemos exibir o resultado para este documento devido às diretrizes da LGPD. Se você tiver alguma dúvida ou precisar de mais informações, por favor, entre em contato conosco. ",
            buttonText: "Ok. Entendi!",
        },
    ],
    [
        "FAIL_PURCHASE",
        {
            icon: "network-error",
            title: "Falha no pagamento",
            message: "Não conseguimos processar o seu pagamento. Tente novamente em alguns minutos.",
            buttonText: "Voltar para consulta",
        },
    ],
]);