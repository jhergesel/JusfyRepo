export const PAGE_CONTENTS = new Map([
    [
        "query",
        {
            title: "Nova Consulta",
            subtitle: "Consulta",
            buttonText: "Ver consultas realizadas",
            pageRedirect: "history",
        },
    ],
    [
        "history",
        {
            title: "Consultas realizadas",
            subtitle: "Consultas",
            buttonText: "Voltar para nova consulta",
            buttonIcon: "arrow-left",
            pageRedirect: "query",
        },
    ],
    [
        "batchQueries",
        {
            title: "Consultas em lote",
            subtitle: "Consultas",
            pageRedirect: "query",
        },
    ],
    [
        "history_batch",
        {
            title: "Consultas em lote",
            subtitle: "jusfinder",
            pageRedirect: "batchQueries",
            buttonText: "Criar consulta em lote",
            buttonIcon: "add-button-jusfinder",
        },
    ],

    [
        "MultipleQueriesPage",
        {
            title: "Consultas em lote",
            subtitle: "jusfinder",
            buttonText: "",
            pageRedirect: "query",
        },
    ],
]);