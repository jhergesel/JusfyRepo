import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BalanceIcon from '@mui/icons-material/Balance';

/**
 * Ferramentas business do JusGPT
 *
 * As chaves do objeto devem corresponder ao campo `tool` retornado pelo endpoint
 * GET /api/b2b/tools, que lista as ferramentas habilitadas para cada empresa.
 */
export const BUSINESS_TOOLS = {
    contencioso: {
        id: 'contencioso',
        title: "Contencioso",
        shortDesc: "Análise de processos e construção de teses",
        desc: "Inteligência jurídica para atuação contenciosa: análise profunda de processos, construção estratégica de teses e gestão ativa de risco judicial.",
        initialMessage: "Olá! Sou seu assistente especializado em **Contencioso**. Posso te ajudar com análise de processos judiciais, construção de teses e gestão de risco.\n\nPor favor, **envie o documento** do processo ou **descreva o caso** que deseja analisar.",
        icon: GavelIcon,
        color: '#0030B9',
    },
    rdr: {
        id: 'rdr',
        title: "RDR",
        shortDesc: "Recuperação de crédito e acordos extrajudiciais",
        desc: "Soluções inteligentes para recuperação de crédito e resolução extrajudicial de conflitos, reduzindo custos e tempo de litígio.",
        initialMessage: "Olá! Sou seu assistente especializado em **RDR**. Posso te ajudar com análise de cobranças, propostas de acordo e resolução extrajudicial.\n\nPor favor, **envie o documento** ou **descreva a disputa** que deseja resolver.",
        icon: AccountBalanceIcon,
        color: '#0030B9',
    },
    procon: {
        id: 'procon',
        title: "PROCON",
        shortDesc: "Respostas e defesas em demandas PROCON",
        desc: "Gestão estratégica de demandas PROCON: análise de reclamações, elaboração de respostas fundamentadas e prevenção de autuações.",
        initialMessage: "Olá! Sou seu assistente especializado em **PROCON**. Posso te ajudar com análise de demandas, elaboração de respostas fundamentadas e estratégias para prevenção de autuações.\n\nPor favor, **envie a notificação** ou **descreva a demanda** que deseja tratar.",
        icon: BalanceIcon,
        color: '#0030B9',
    },
    reclameAqui: {
        id: 'reclameAqui',
        title: "Reclame Aqui",
        shortDesc: "Gestão de reputação e respostas estratégicas",
        desc: "Monitoramento e gestão estratégica de reputação digital, com respostas juridicamente estruturadas e prevenção de judicialização.",
        initialMessage: "Olá! Sou seu assistente especializado em **Reclame Aqui**. Posso te ajudar com monitoramento de reputação digital, respostas estratégicas e prevenção de judicialização.\n\nPor favor, **envie a reclamação** ou **descreva o caso** que deseja analisar.",
        icon: RateReviewIcon,
        color: '#0030B9',
        disabled: true,
        comingSoon: true,
    },
};

/**
 * Retorna as ferramentas disponíveis para o usuário com base nos dados do endpoint
 * GET /api/b2b/tools. O enum BUSINESS_TOOLS é a fonte de verdade para metadados
 * (título, ícone, mensagens), enquanto a API determina quais ferramentas o cliente possui.
 *
 * Regras de exibição:
 *  - O item deve existir na resposta da API (o cliente possui a ferramenta)
 *  - O campo `status` deve ser verdadeiro (true)
 *  - A comparação é case-insensitive: o banco retorna em uppercase (ex: "CONTENCIOSO"),
 *    enquanto o enum usa lowercase (ex: "contencioso")
 *
 * @param {Array<{id: number, company_id: number, tool: string, status: boolean}>} b2bTools
 *   Lista de ferramentas da empresa, vinda da API.
 * @returns {Array} Lista de ferramentas filtradas com metadados completos
 */
export const getAvailableBusinessTools = (b2bTools = []) => {
    // Mantém apenas ferramentas ativas (status true) e normaliza o nome para lowercase
    const enabledToolIds = new Set(
        b2bTools
        .filter(t => Boolean(t.status))
        .map(t => t.tool ? .toLowerCase())
    );
    // Compara o id do enum (lowercase) com o tool da API (normalizado para lowercase)
    return Object.values(BUSINESS_TOOLS).filter(tool => enabledToolIds.has(tool.id.toLowerCase()));
};

/**
 * IDs das ferramentas mutuamente exclusivas entre si
 * (apenas uma pode ficar ativa por vez)
 */
export const EXCLUSIVE_TOOLS = ['contencioso', 'rdr', 'procon'];