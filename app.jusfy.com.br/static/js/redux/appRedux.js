import axios from 'axios';
import {
    toast
} from 'react-toastify';
import {
    call,
    delay,
    put,
    race,
    select,
    takeLatest
} from 'redux-saga/effects';
import {
    v4 as uuidv4
} from 'uuid';
import {
    getLocalStorage,
    setLocalStorage
} from '../app/helpers/LocalStorage';
import {
    config
} from '../config/env';
import traceId from './traceId';

const INITIAL_STATE = {
    payment_methods_relation: [{
            id: 'mastercard',
            svg: '/media/svg/credit-card/flat/mastercard.svg'
        },
        {
            id: 'visa',
            svg: '/media/svg/credit-card/flat/visa.svg'
        },
        {
            id: 'amex',
            svg: '/media/svg/credit-card/flat/amex.svg'
        },
        {
            id: 'hipercard',
            svg: '/media/svg/credit-card/flat/hipercard.svg'
        },
        {
            id: 'elo',
            svg: '/media/svg/credit-card/flat/elo.svg'
        },
    ],
    default_trial_days: 7,
    is_tour_open: false,
    is_modal_tour_open: false,
    is_profile_survey_open: false,
    cards: [],
    dashboard: {},
    is_dashboard_loading: false,
    petitions_categories: [],
    is_petitions_categories_loading: false,
    petitions_categories_filters: [],
    is_petitions_categories_filters_loading: false,
    petitions_category_types: [],
    is_petitions_category_types_loading: false,
    petitions_category_name: '',
    petitions: {
        data: [],
        pages: 0,
    },
    is_petitions_loading: false,
    petition: {},
    is_petition_loading: false,
    indications: [],
    is_indications_loading: false,
    customers: [],
    is_customers_loading: false,
    users: [],
    client_user: [],
    is_users_loading: false,
    is_client_user_loading: false,
    institutions: [],
    institutions_select: [],
    is_institutions_loading: false,
    indexes: [],
    indexes_pf: [],
    indexes_pj: [],
    average_price_indexes: [],
    is_indexes_loading: false,
    opportunity_types: [],
    periodicity_types: [{
            id: '0',
            name: 'Mensal'
        },
        {
            id: '1',
            name: 'Anual'
        },
    ],
    installment_types: [{
            id: '0',
            name: 'Parcela de Débito'
        },
        {
            id: '1',
            name: 'Abatimento / Pagamento'
        },
    ],
    stakeholder_types: [{
            id: '1',
            name: 'Autor'
        },
        {
            id: '2',
            name: 'Credor'
        },
        {
            id: '3',
            name: 'Devedor'
        },
        {
            id: '4',
            name: 'Réu'
        },
    ],
    person_types: [{
            id: 'pf',
            name: 'Pessoa Física'
        },
        {
            id: 'pj',
            name: 'Pessoa Jurídica'
        },
    ],
    amortization_types: [{
            id: 'price',
            name: 'Fixas (Price)'
        },
        {
            id: 'sac',
            name: 'Variáveis (SAC)'
        },
    ],
    contract_types: [{
            code: '25471',
            name: 'Aquisição de veículos',
            type: 'PF'
        },
        {
            code: '25472',
            name: 'Aquisição de outros bens',
            type: 'PF'
        },
        {
            code: '25478',
            name: 'Cartão de crédito parcelado',
            type: 'PF'
        },
        {
            code: '25477',
            name: 'Cartão de crédito rotativo',
            type: 'PF'
        },
        {
            code: '25468',
            name: 'Crédito pessoal consignado INSS',
            type: 'PF'
        },
        {
            code: '25463',
            name: 'Cheque especial',
            type: 'PF'
        },
        {
            code: '25467',
            name: 'Crédito pessoal consignado para trabalhadores do setor público',
            type: 'PF',
        },
        {
            code: '25464',
            name: 'Crédito pessoal não consignado',
            type: 'PF'
        },
        {
            code: '25497',
            name: 'Financiamento imobiliário com taxas de mercado',
            type: 'PF',
        },
        {
            code: '25447',
            name: 'Aquisição de veículos',
            type: 'PJ'
        },
        {
            code: '25448',
            name: 'Aquisição de bens',
            type: 'PJ'
        },
        {
            code: '25440',
            name: 'Antecipação de faturas de cartão de crédito',
            type: 'PJ',
        },
        {
            code: '25442',
            name: 'Capital de giro com prazo superior a 365 dias ',
            type: 'PJ',
        },
        {
            code: '25441',
            name: 'Capital de giro com prazo inferior a 365 dias',
            type: 'PJ',
        },
        {
            code: '25456',
            name: 'Cartão de crédito parcelado',
            type: 'PJ'
        },
        {
            code: '25455',
            name: 'Cartão de crédito rotativo',
            type: 'PJ'
        },
        {
            code: '25450',
            name: 'Arrendamento mercantil de veículos',
            type: 'PJ'
        },
        {
            code: '25446',
            name: 'Cheque especial',
            type: 'PJ'
        },
        {
            code: '25445',
            name: 'Conta garantida',
            type: 'PJ'
        },
        {
            code: '25487',
            name: 'Financiamento Imobiliário - Taxa regulada',
            type: 'PJ',
        },
        {
            code: '25488',
            name: 'Financiamento Imobiliário - Taxa total',
            type: 'PJ',
        },
        {
            code: '25498',
            name: 'Financiamento Imobiliário - Taxa regulada',
            type: 'PF',
        },
        {
            code: '25499',
            name: 'Financiamento Imobiliário - Taxa total',
            type: 'PF',
        },
    ],
    simulation_result: {
        odds: 0,
        avg_interest_rate: 0,
        original_interest_rate: 0,
    },
    is_simulation_loading: false,
    report_review: {},
    is_report_review_loading: false,
    report_correction: {},
    report_correction_fgts: {},
    is_report_correction_loading: false,
    report_correction_complete: {},
    is_report_correction_complete_loading: false,
    report_childcare: {},
    is_report_childcare_loading: false,
    report_rent: {},
    is_report_rent_loading: false,
    states: [],
    is_states_loading: false,
    cities: [],
    cities_error: null,
    is_cities_loading: false,
    customer: {},
    is_customer_loading: false,
    jurisprudences: {},
    is_jurisprudences_loading: false,
    jurisprudence: {},
    is_jurisprudence_loading: false,
    jurisprudence_fulltext: '',
    is_jurisprudence_fulltext_loading: false,
    query_data: {},
    professions: [],
    is_professions_loading: false,
    opportunities: [],
    opportunities_total: 0,
    opportunities_available: 0,
    is_opportunities_loading: false,
    my_opportunities: [],
    my_opportunities_total: 0,
    is_my_opportunities_loading: false,
    remaining_opportunity_unlocks: 0,
    total_unlocks_credits: 0,
    current_period_end: '',
    is_loading_remaining_opportunity_unlocks: false,
    is_query_validating_document: false,
    query_available_products: [],
    query_document_type: '',
    query_document_number: '',
    query_checkout_response: {},
    is_activating_account: false,
    account_activation_response: {},
    is_processing_pdf: false,
    processed_pdf_data: [],
    processed_cnis_data: {},
    report_prev: {},
    is_report_prev_loading: false,
    is_modal_offer_open: false,
    modal_subscription: {
        visible: false,
        title: '',
        subtitle: '',
    },
    calculations: {},
    calculations_loading: false,
    minimum_wages: [],
    inss_tetos: [],
    coupom: {},
    is_loading_coupom: false,
    is_loading_cards: false,
    unlocked_users: [
        'alvaro.leite@jusfy.com.br',
        'aadvocacia29@gmail.com',
        'adrianaadv.taborda@outlook.com',
        'adrianogmartins1977@gmail.com',
        'advamorimbruno@gmail.com',
        'adv.arthurpires@gmail.com',
        'adv.brunaporto@gmail.com',
        'paulus@paulusdesimoneadvogados.com.br',
        'advcezar@hotmail.com',
        'adv.claudiapeixoto@gmail.com',
        'adv.flaviaduarte@gmail.com',
        'advgledison@gmail.com',
        'adv.gsalles@gmail.com',
        'adv.jglameza@gmail.com',
        'cyntiaadv@yahoo.com.br',
        'adv.joaobatistapr@gmail.com',
        'miguel@moraesecassiano.com.br',
        'paulogoncalvesadv@hotmail.com',
        'advjoycefeitosa@gmail.com',
        'jean.advg@gmail.com',
        'paulogoncalvesadv@hotmail.com',
        'adv.maiara.almeida@gmail.com',
        'advocaciacgusmao@gmail.com',
        'donaldscott.adv@gmail.com',
        'andre_rock_andrade@outlook.com',
        'advocaciaevmoraes@gmail.com',
        'advogada_edines.rocha@outlook.com',
        'advprevidenciariocleci@outlook.com',
        'adv.rafaelas@gmail.com',
        'adv.robertovieira@gmail.com',
        'adv.romulolima@gmail.com',
        'alan_snak@hotmail.com',
        'alexpedrassolli@adv.oabsp.org.br',
        'alvesdsouza.adv@gmail.com',
        'johncarvalho.adv@gmail.com',
        'amanda-amorim2009@hotmail.com',
        'amanda@borssukemarcos.com.br',
        'amandatenorio.porto@gmail.com',
        'anaflaviaaquino355@gmail.com',
        'anamarnieri@gmail.com',
        'andersonmb_adv@hotmail.com',
        'andreaciribelliadv@gmail.com',
        'andrealuizamoura@gmail.com',
        'andre_a.viotto@hotmail.com',
        'andreia_ferrao@yahoo.com.br',
        'andremalaquias.adv@gmail.com',
        'andrericardocintra@yahoo.com.br',
        'andressaborgesrossini@gmail.com',
        'andreylealadv@gmail.com',
        'antoniocarlospeteradv@gmail.com',
        'apcarvalhoassessoriajuridica@gmail.com',
        'arleteaju@bol.com.br',
        'as_advogado@yahoo.com.br',
        'augustacesario.adv1@gmail.com',
        'azevedow.adv@gmail.com',
        'baquetebb@gmail.com',
        'bergamasco.advmorais@gmail.com',
        'brandenburgadvogado@gmail.com',
        'caiodelarolle@gmail.com',
        'caiomarcelociarelli@gmail.com',
        'calacorte.rodrigues@gmail.com',
        'calcrevisoes@gmail.com',
        'carlos@borrelliadvogados.com.br',
        'carloslimacontadorprev@gmail.com',
        'carlosmontigno@gmail.com',
        'cassioncardoso@hotmail.com',
        'catiack@yahoo.com.br',
        'cdzagatto@ig.com.br',
        'cleitonandradeadv@hotmail.com',
        'cleolopez5@hotmail.com',
        'clerisdasilva@gmail.com',
        'colenadv@gmail.com',
        'contato@jrjadvocacia.com',
        'contato@laisbraga.com.br',
        'contato@lucianaamaro.com.br',
        'contato@tmfadvogados.com',
        'contsud@hotmail.com',
        'cristianevrodriguesadv@gmail.com',
        'cristianonfalcao@hotmail.com',
        'csantos.adv@outlook.com',
        'danieldiasadvogado@gmail.com',
        'danilobalmeida@hotmail.com',
        'ddkoenig@gmail.com',
        'ddscherrer@hotmail.com',
        'cristianepadilhaadv@gmail.com',
        'debbora.araujo@hotmail.com',
        'deiasebold1@hotmail.com',
        'dellbastos@hotmail.com',
        'denise_schiavo31@yahoo.com.br',
        'diasadalbertoadv@gmail.com',
        'diegoffoontes@gmail.com',
        'diegorochaadv.n@gmail.com',
        'dimasvitormoret1@gmail.com',
        'dimilapratas@gmail.com',
        'direitoapsil@gmail.com',
        'doutorcarlao@gmail.com',
        'dra.luciana.lemosadvocaciajur@gmail.com',
        'dra.patriciavsantos@gmail.com',
        'drbenetti@terra.com.br',
        'dr.carlosneves.adv@gmail.com',
        'dr.elicampelocabral@gmail.com',
        'dr.feliperodrigues@gmail.com',
        'dr.fernando.e.franco@gmail.com',
        'duanevsantana@gmail.com',
        'dutrapinaadvogados@gmail.com',
        'ec_soares@adv.oabsp.org.br',
        'edeviarbl@gmail.com',
        'ednagoncalvesadv@gmail.com',
        'eduardo.boschetto@gmail.com',
        'eedivan1@gmail.com',
        'elielbpo@gmail.com',
        'elineidesantos.juridico@gmail.com',
        'elisangeladesousa.adv@gmail.com',
        'emanuelaadrianoadv@gmail.com',
        'erickferraz-adv@hotmail.com',
        'erivaniamedeiros.adv@gmail.com',
        'escritorio.dradaniele@gmail.com',
        'escritorio@marinhovieira.com',
        'estersbaptista@yahoo.com.br',
        'evelynremohi@hotmail.com',
        'evertoncipri@gmail.com',
        'e_zambanini@hotmail.com',
        'fabianafantim@fantimadvogados.com',
        'fabianamoura.advocacia@gmail.com',
        'fabianefontes1@yahoo.com.br',
        'fabianorosario@hotmail.com',
        'fabianossantana@hotmail.com',
        'fabriciogmlt@yahoo.com.br',
        'fabricio.pincini@gmail.com',
        'farias.ivan@hotmail.com',
        'fcarmo.adv@gmail.com',
        'felipecavalcanti@mbja.com.br',
        'felipe@felipelopesadv.com',
        'felipe.sens@gmail.com',
        'fernandapiola.adv@hotmail.com',
        'financeiro.cph4@gmail.com',
        'fragaadvog_miriam@hotmail.com',
        'francisco.bariani@gmail.com',
        'fsn@aasp.org.br',
        'gabriel.centraldpvat@gmail.com',
        'gabriellealvesadv@outlook.com',
        'gabriellmota17@hotmail.com',
        'gabrielteixeiramelo@hotmail.com',
        'gandinisanseverino@gmail.com',
        'geilealine@gmail.com',
        'gestao@mgtm.com.br',
        'giselequerino15@hotmail.com',
        'gleicecleia90@gmail.com',
        'gloriagodoy26@hotmail.com',
        'gregoryz.adv@gmail.com',
        'gssclementino@gmail.com',
        'guilhermebzagonel@gmail.com',
        'guilhermegiraldez@gmail.com',
        'gustavo.mascarello@outlook.com',
        'heinzen67@hotmail.com',
        'heldermiguel02@hotmail.com',
        'hugoprates@mpratesadvocacia.com.br',
        'idenipe@hotmail.com',
        'inairacarvalho1@hotmail.com',
        'inaja.advogada@gmail.com',
        'ingridquariguasi.adv@gmail.com',
        'ingridy.mauricio@gmail.com',
        'itaci_simon@hotmail.com',
        'iuryrafael.adv@gmail.com',
        'ivonepaz386@gmail.com',
        'izabellecosta.advocacia@gmail.com',
        'jachildebrand@hotmail.com',
        'jaquegarciaadv@gmail.com',
        'jaquelineremorini.advocacia@gmail.com',
        'jaquesar@gmail.com',
        'jcmeinsadvocacia@gmail.com',
        'jeduardoalves.adv@gmail.com',
        'jefferson.espindola@gmail.com',
        'jefferson@javollmann.adv.br',
        'jenniferlorenas@hotmail.com',
        'jeremiascarvalho.adv@gmail.com',
        'jessicaassis@adv.oabsp.org.br',
        'jessyca.baqueiro@gmail.com',
        'jmlira.advocacia@gmail.com',
        'jnsilvajunioradv@gmail.com',
        'joao08_mb@hotmail.com',
        'joaoeduardoadv@yahoo.com.br',
        'jorgerbrito@gmail.com',
        'joseane.linck@hotmail.com',
        'josedematosadv@gmail.com',
        'josemariaribeiroadv@hotmail.com',
        'jpereznunes@hotmail.com',
        'jpiedade.adv@outlook.com',
        'juliamartinsandradeadv@gmail.com',
        'julianaferreira.jfp@gmail.com',
        'julianaflaviaoliveira@adv.oabsp.org.br',
        'julioolivetti44@gmail.com',
        'juridico@albaniadv.com',
        'juridico.dmassessoria@gmail.com',
        'jussaracostabala@yahoo.com.br',
        'jussara.santana.adv@outlook.com',
        'juufaiad@hotmail.com',
        'jvmarys@hotmail.com',
        'kallyandrabarreto@gmail.com',
        'karencozete.adv@outlook.com',
        'karlatrust360@gmail.com',
        'karlavelosoadv90@gmail.com',
        'kelli.mariani@hotmail.com',
        'keniacaroline.santos@gmail.com',
        'khineraski@gmail.com',
        'krbg.bueno@gmail.com',
        'laborcontabil@yahoo.com.br',
        'lailalucioadvocacia@outlook.com',
        'laisa.amorim@live.com',
        'larisseramoscruz@gmail.com',
        'lavsadv@gmail.com',
        'laysmorgana@hotmail.com',
        'lcg1954@hotmail.com',
        'leilainyaquino@gmail.com',
        'lianaaraujo.adv@hotmail.com',
        'liandramartins2008@hotmail.com',
        'lidiamlseixas@gmail.com',
        'limaadvpb@gmail.com',
        'lima.adv.rs@gmail.com',
        'lopesferreiraadvocacia@yahoo.com',
        'lorena.mfritzen@gmail.com',
        'lourdes.martins.adv@gmail.com',
        'lu67263@gmail.com',
        'luannamv@hotmail.com',
        'lucas-festa@adv.oabsp.org.br',
        'luciangs@hotmail.com',
        'lucianoreis.adv@gmail.com',
        'adv.saulocruz@outlook.com',
        'luizeugeniosouza@terra.com.br',
        'luizgularte.adv@gmail.com',
        'luizhenriqueoliveira271261@gmail.com',
        'luiz.rocha@rjladv.com',
        'lusoaressilva@bol.com.br',
        'luzineteribeiro.advogada@gmail.com',
        'machadoraquel@bmmcadv.com.br',
        'maira.marostica@gmail.com',
        'manuelacteixeira@hotmail.com',
        'marceloandrade14@hotmail.com',
        'marcelonadin.adv@gmail.com',
        'marcocdadv@gmail.com',
        'marcosevarini@gmail.com',
        'alessandra74andrade@gmail.com',
        'margareteojuliao@gmail.com',
        'maria@mendoncaelbacha.com.br',
        'mariana.palma01@hotmail.com',
        'maribeiro802@gmail.com',
        'marisa.sonhocredi@gmail.com',
        'marra.adv@hotmail.com',
        'matheusmendes@adv.oabsp.org.br',
        'maybi_brogliatto@yahoo.com.br',
        'mcrmari@gmail.com',
        'mellohorta@gmail.com',
        'michelle.silvasouza0@gmail.com',
        'miguel@moraesecassiano.com.br',
        'mirantemar@yahoo.com.br',
        'mkvillasante@gmail.com',
        'moniquenobrega.adv@gmail.com',
        'morettoesiviero@hotmail.com',
        'mrdoliveiraadv@bol.com.br',
        'nelizefalcao.adv@gmail.com',
        'altairneryadv@gmail.com',
        'nildson.adv@outlook.com',
        'norbertoadv7@gmail.com',
        'nothemoteo@yahoo.com.br',
        'nunesbeatriz.adv@outlook.com',
        'opolakjr@gmail.com',
        'o.soares.adv@hotmail.com',
        'patriciabitu@adv.oabsp.org.br',
        'paulovictor.ayres@gmail.com',
        'paulo_vieira_rs@hotmail.com',
        'pedro.alem.santinho@gmail.com',
        'peres@peresadvogados.adv.br',
        'phscalixto@gmail.com',
        'poletto.douglas@gmail.com',
        'queiroz.muniz.advogados@gmail.com',
        'rafaelacordolino@hotmail.com',
        'rafael@bbadvocacia.com',
        'rafael.coelho@yahoo.com.br',
        'rangelcfarias@gmail.com',
        'rayheny_karla@hotmail.com',
        'r.christoantunes@gmail.com',
        'regirubens@hotmail.com',
        'reisadriane30@gmail.com',
        'ricardowallace.rw@gmail.com',
        'rmattosvieira@hotmail.com',
        'rodrigocorreaadvocacia@gmail.com',
        'rogeriopereira_advogado@hotmail.com',
        'rosanaocchi@adv.oabsp.org.br',
        'rosangelaalmeida@evellyoliveira.adv.br',
        'rosyyonaka.adv@gmail.com',
        'roxanajcosta@gmail.com',
        'rulli_ira@hotmail.com',
        'samanthabastos22@gmail.com',
        'samzilch@hotmail.com',
        'sanchesemerelesadvogados@gmail.com',
        'sandra.gogemski@gmail.com',
        'sandro.silva@adv.oabsp.org.br',
        'sergio.braido@uol.com.br',
        's.gustavo384@gmail.com',
        'sheilamartinss.sm@gmail.com',
        'silvares1@hotmail.com',
        'silviatavaresadvogada@gmail.com',
        'silvioneto9992@gmail.com',
        'simoesefrazaoadv@gmail.com',
        'sincomam.ntg@terra.com.br',
        'sindsfop.juridico@gmail.com',
        'souza.anapaula.adv@gmail.com',
        'souzarocha03.adv@gmail.com',
        'tainahlara@hotmail.com',
        'tania.freire@gmail.com',
        'taniamfs5@gmail.com',
        'teixeira.advocacia.pc@gmail.com',
        'totalcontabilidade42@gmail.com',
        'tsa.advogados@gmail.com',
        'uesleilima.adv@gmail.com',
        'valdemir_barbosaalves@hotmail.com',
        'valdison.nascimento@yahoo.com.br',
        'valqrobe@gmail.com',
        'valquiria.jjesus@gmail.com',
        'valterfilho2@bol.com.br',
        'vaz.eloiza@gmail.com',
        'venilsonpereiraadv@gmail.com',
        'veronicadoprado@hotmail.com',
        'vfpaulaadv@gmail.com',
        'victor.serutti@gmail.com',
        'victor@tpfadvogados.com.br',
        'vilsonmeyring@gmail.com',
        'viniciusgordon@gmail.com',
        'vitor.hk.tsuda@gmail.com',
        'viviane.adv0804@gmail.com',
        'vivianemaltchik@gmail.com',
        'volnandy@hotmail.com',
        'vsabino2019@gmail.com',
        'waldenayde@gmail.com',
        'wendrill@gmail.com',
        'wvianasilva@outlook.com',
        'xcadvogados@aasp.org.br',
        'yasminfernandesadv@gmail.com',
        'gabrieldiogo17@hotmail.com',
    ],
    rent_installments: [],
    rent_contract_indexes: [],
    notifications: [],
    notifications_not_read: 0,
    is_notifications_loading: false,
    splited_files: [],
    splited_files_folder: '',
    events: [],
    is_events_loading: false,
    event: [],
    is_event_loading: false,
    event_deadlines: [],
    is_event_deadlines_loading: false,
    is_event_canceling: false,
    holidays: [],
    modal_indication_showed: false,
    signature_docs: [],
    is_signature_docs_loading: false,
    signature_docs_total: 0,
    signature_doc_preview_url: '',
    signature_processing_doc: false,
    saving_doc_to_sign: false,
    renew_doc_expiration: false,
    publish_on_google: 'N',
    signatures_dashboard_data: {},
    subscription_error: null,
    offered_plan_eligibility: null,
    is_offered_plan_eligibility_loaded: false,
    opportunities_cities: [],
    is_opportunities_cities_loading: false,
    first_steps: null,
    opportunities_filter: {},
    opportunities_page_filters: getLocalStorage('opportunities_page_filters') || {
        stateName: null,
        city: '',
        type: [],
        initialized: false,
    },
    installments_generated: [],
    is_installments_generated_loading: false,
    is_csat_modal_open: false,
    csat_modal_configuration: {},
    group: getLocalStorage('group'),
    juszap_configuration: getLocalStorage('juszap_configuration') || null,
    is_juszap_configuration_loading: false,
    is_juszap_configuration_error: false,
    juszap_waiting_conversations: [],
    is_juszap_waiting_conversations_loading: false,
    juszap_availability: null,
    is_juszap_availability_loading: false,
    is_juszap_availability_error: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_INDICATIONS':
            return {
                ...state,
                is_indications_loading: true,
                indications: INITIAL_STATE.indications,
            };
        case 'LOAD_INDICATIONS_SUCCESS':
            return {
                ...state,
                is_indications_loading: false,
                indications: action.payload,
            };
        case 'LOAD_INDICATIONS_FAILED':
            return {
                ...state,
                is_indications_loading: false,
                indications: INITIAL_STATE.indications,
            };
        case 'SET_OPPORTUNITY_TYPES':
            return { ...state,
                opportunity_types: action.payload
            };
        case 'SET_SPLITED_FILES':
            return {
                ...state,
                splited_files: action.payload.splited_files,
                splited_files_folder: action.payload.splited_files_folder,
            };
        case 'LOAD_CARDS':
            return { ...state,
                cards: INITIAL_STATE.cards,
                is_loading_cards: true
            };
        case 'LOAD_CARDS_SUCCESS':
            return { ...state,
                cards: action.payload,
                is_loading_cards: false
            };
        case 'LOAD_CARDS_FAILED':
            return { ...state,
                cards: INITIAL_STATE.cards,
                is_loading_cards: false
            };
        case 'LOAD_COUPOM':
            return {
                ...state,
                coupom: INITIAL_STATE.coupom,
                is_loading_coupom: true,
            };
        case 'LOAD_COUPOM_SUCCESS':
            return { ...state,
                coupom: action.payload,
                is_loading_coupom: false
            };
        case 'LOAD_COUPOM_FAILED':
            return {
                ...state,
                coupom: INITIAL_STATE.coupom,
                is_loading_coupom: false,
            };
        case 'LOAD_MINIMUM_WAGES':
            return { ...state,
                minimum_wages: INITIAL_STATE.minimum_wages
            };
        case 'LOAD_MINIMUM_WAGES_SUCCESS':
            return { ...state,
                minimum_wages: action.payload
            };
        case 'LOAD_MINIMUM_WAGES_FAILED':
            return { ...state,
                minimum_wages: INITIAL_STATE.minimum_wages
            };
        case 'LOAD_INSS_TETOS':
            return { ...state,
                inss_tetos: INITIAL_STATE.inss_tetos
            };
        case 'LOAD_INSS_TETOS_SUCCESS':
            return { ...state,
                inss_tetos: action.payload
            };
        case 'LOAD_INSS_TETOS_FAILED':
            return { ...state,
                inss_tetos: INITIAL_STATE.inss_tetos
            };

        case 'LOAD_CALCULATIONS':
            return {
                ...state,
                calculations_loading: true,
                calculations: INITIAL_STATE.calculations,
            };
        case 'LOAD_CALCULATIONS_SUCCESS':
            return {
                ...state,
                calculations_loading: false,
                calculations: action.payload,
            };
        case 'LOAD_CALCULATIONS_FAILED':
            return {
                ...state,
                calculations_loading: false,
                calculations: INITIAL_STATE.calculations,
            };
        case 'LOAD_INSTALLMENTS':
            return {
                ...state,
                is_installments_generated_loading: true,
                installments_generated: INITIAL_STATE.installments_generated,
            };
        case 'LOAD_INSTALLMENTS_SUCCESS':
            return {
                ...state,
                is_installments_generated_loading: false,
                installments_generated: action.payload,
            };
        case 'LOAD_INSTALLMENTS_FAILED':
            return {
                ...state,
                is_installments_generated_loading: false,
                installments_generated: INITIAL_STATE.installments_generated,
            };
        case 'OPEN_MODAL_TOUR':
            return { ...state,
                is_modal_tour_open: true
            };
        case 'CLOSE_MODAL_TOUR':
            return { ...state,
                is_modal_tour_open: false
            };
        case 'OPEN_TOUR':
            return { ...state,
                is_tour_open: true
            };
        case 'CLOSE_TOUR':
            return { ...state,
                is_tour_open: false
            };
        case 'OPEN_PROFILE_SURVEY':
            return { ...state,
                is_profile_survey_open: true
            };
        case 'CLOSE_PROFILE_SURVEY':
            return { ...state,
                is_profile_survey_open: false
            };
        case 'SET_CARDS':
            return { ...state,
                cards: action.payload
            };
        case 'OPEN_MODAL_OFFER':
            return {
                ...state,
                is_modal_offer_open: true,
                modal_offer_payload: action.payload,
            };
        case 'CLOSE_MODAL_OFFER':
            return {
                ...state,
                is_modal_offer_open: false,
            };
        case 'SET_MODAL_SUBSCRIPTION':
            return { ...state,
                modal_subscription: action.payload
            };
        case 'CLOSE_MODAL_SUBSCRIPTION':
            return {
                ...state,
                modal_subscription: INITIAL_STATE.modal_subscription,
            };
        case 'FGTS_PROCESS':
            return {
                ...state,
                processed_pdf_data: INITIAL_STATE.processed_pdf_data,
                is_processing_pdf: true,
            };
        case 'FGTS_PROCESS_SUCCESS':
            return {
                ...state,
                processed_pdf_data: action.payload,
                is_processing_pdf: false,
            };
        case 'FGTS_PROCESS_FAILED':
            return {
                ...state,
                processed_pdf_data: INITIAL_STATE.processed_pdf_data,
                is_processing_pdf: false,
            };

        case 'CNIS_PROCESS':
            return {
                ...state,
                processed_cnis_data: INITIAL_STATE.processed_cnis_data,
                is_processing_pdf: true,
            };
        case 'CNIS_PROCESS_SUCCESS':
            return {
                ...state,
                processed_cnis_data: action.payload,
                is_processing_pdf: false,
            };
        case 'CNIS_PROCESS_FAILED':
            return {
                ...state,
                processed_cnis_data: INITIAL_STATE.processed_cnis_data,
                is_processing_pdf: false,
            };

        case 'REPORT_PREV':
            return {
                ...state,
                report_prev: INITIAL_STATE.processed_cnis_data,
                is_report_prev_loading: true,
            };
        case 'REPORT_PREV_SUCCESS':
            return {
                ...state,
                report_prev: action.payload,
                is_report_prev_loading: false,
            };
        case 'REPORT_PREV_FAILED':
            return {
                ...state,
                report_prev: INITIAL_STATE.processed_cnis_data,
                is_report_prev_loading: false,
            };

        case 'ACTIVATE_ACCOUNT':
            return {
                ...state,
                account_activation_response: INITIAL_STATE.account_activation_response,
                is_activating_account: true,
            };
        case 'ACTIVATE_ACCOUNT_SUCCESS':
            return {
                ...state,
                account_activation_response: action.payload,
                is_activating_account: false,
            };
        case 'ACTIVATE_ACCOUNT_FAILED':
            return {
                ...state,
                account_activation_response: action.payload,
                is_activating_account: false,
            };

        case 'LOAD_DASHBOARD':
            return {
                ...state,
                dashboard: INITIAL_STATE.dashboard,
                is_dashboard_loading: true,
            };
        case 'LOAD_DASHBOARD_SUCCESS':
            return {
                ...state,
                dashboard: action.payload,
                is_dashboard_loading: false,
            };
        case 'LOAD_DASHBOARD_FAILED':
            return {
                ...state,
                dashboard: INITIAL_STATE.dashboard,
                is_dashboard_loading: false,
            };
        case 'LOAD_DASHBOARD_STEPS':
            return {
                ...state,
                first_steps: INITIAL_STATE.first_steps,
            };
        case 'LOAD_DASHBOARD_STEPS_SUCCESS':
            return {
                ...state,
                first_steps: action.payload,
            };
        case 'LOAD_DASHBOARD_STEPS_FAILED':
            return {
                ...state,
                first_steps: INITIAL_STATE.first_steps,
            };
        case 'QUERY_CHECKOUT':
            return {
                ...state,
                query_checkout_response: INITIAL_STATE.query_checkout_response,
            };
        case 'QUERY_CHECKOUT_SUCCESS':
            return {
                ...state,
                query_checkout_response: action.payload,
            };
        case 'QUERY_CHECKOUT_FAILED':
            return {
                ...state,
                query_checkout_response: INITIAL_STATE.query_checkout_response,
            };
        case 'QUERY_VALIDATE_DOCUMENT':
            return {
                ...state,
                is_query_validating_document: true,
                query_available_products: INITIAL_STATE.query_available_products,
                query_document_type: INITIAL_STATE.query_document_type,
                query_document_number: INITIAL_STATE.query_document_number,
            };
        case 'QUERY_VALIDATE_DOCUMENT_SUCCESS':
            return {
                ...state,
                is_query_validating_document: false,
                query_available_products: action.payload.available_products,
                query_document_type: action.payload.document_type,
                query_document_number: action.payload.document_number,
            };
        case 'QUERY_VALIDATE_DOCUMENT_FAILED':
            return {
                ...state,
                is_query_validating_document: false,
                query_available_products: INITIAL_STATE.query_available_products,
                query_document_type: INITIAL_STATE.query_document_type,
                query_document_number: INITIAL_STATE.query_document_number,
            };
        case 'LOAD_PETITION':
            return {
                ...state,
                petition: INITIAL_STATE.petition,
                is_petition_loading: true,
            };
        case 'LOAD_PETITION_SUCCESS':
            return { ...state,
                petition: action.payload,
                is_petition_loading: false
            };
        case 'LOAD_PETITION_FAILED':
            return {
                ...state,
                petition: INITIAL_STATE.petition,
                is_petition_loading: false,
            };
        case 'LOAD_PETITIONS':
            return {
                ...state,
                petitions: INITIAL_STATE.petitions,
                is_petitions_loading: true,
                petitionsSuccess: false,
            };
        case 'LOAD_PETITIONS_SUCCESS':
            return {
                ...state,
                petitions: action.payload,
                is_petitions_loading: false,
                petitionsSuccess: true,
            };
        case 'LOAD_PETITIONS_FAILED':
            return {
                ...state,
                petitions: INITIAL_STATE.petitions,
                is_petitions_loading: false,
                petitionsSuccess: false,
            };
        case 'LOAD_PETITIONS_CATEGORIES':
            return {
                ...state,
                petitions_categories: [],
                is_petitions_categories_loading: true,
            };
        case 'LOAD_PETITIONS_CATEGORIES_SUCCESS':
            return {
                ...state,
                petitions_categories: action.payload,
                is_petitions_categories_loading: false,
            };
        case 'LOAD_PETITIONS_CATEGORIES_FAILED':
            return {
                ...state,
                petitions_categories: [],
                is_petitions_categories_loading: false,
            };
        case 'LOAD_PETITIONS_CATEGORY_TYPES':
            return {
                ...state,
                petitions_category_types: [],
                petitions_category_name: '',
                is_petitions_category_types_loading: true,
            };
        case 'LOAD_PETITIONS_CATEGORY_TYPES_SUCCESS':
            return {
                ...state,
                petitions_category_types: action.payload.types,
                petitions_category_name: action.payload.category_name,
                is_petitions_category_types_loading: false,
            };
        case 'LOAD_PETITIONS_CATEGORY_TYPES_FAILED':
            return {
                ...state,
                petitions_category_types: [],
                petitions_category_name: '',
                is_petitions_category_types_loading: false,
            };
        case 'LOAD_PETITIONS_CATEGORIES_FILTERS':
            return {
                ...state,
                petitions_categories_filters: [],
                is_petitions_categories_filters_loading: true,
            };
        case 'LOAD_PETITIONS_CATEGORIES_FILTERS_SUCCESS':
            return {
                ...state,
                petitions_categories_filters: action.payload,
                is_petitions_categories_filters_loading: false,
            };
        case 'LOAD_PETITIONS_CATEGORIES_FILTERS_FAILED':
            return {
                ...state,
                petitions_categories_filters: [],
                is_petitions_categories_filters_loading: false,
            };
        case 'LOAD_INSTITUTIONS':
            return { ...state,
                institutions: [],
                is_institutions_loading: true
            };
        case 'LOAD_INSTITUTIONS_SUCCESS':
            return {
                ...state,
                institutions: action.payload,
                is_institutions_loading: false,
                institutions_select: action.payload.map((institution) => ({
                    label: institution.company_name,
                })),
            };
        case 'LOAD_INSTITUTIONS_FAILED':
            return { ...state,
                institutions: [],
                is_institutions_loading: false
            };
        case 'LOAD_SIMULATION':
            return {
                ...state,
                simulation_result: INITIAL_STATE.simulation_result,
                is_simulation_loading: true,
            };
        case 'LOAD_SIMULATION_SUCCESS':
            return {
                ...state,
                simulation_result: action.payload,
                is_simulation_loading: false,
            };
        case 'LOAD_SIMULATION_FAILED':
            return {
                ...state,
                simulation_result: INITIAL_STATE.simulation_result,
                is_simulation_loading: false,
            };
        case 'LOAD_CUSTOMERS':
            return {
                ...state,
                customers: INITIAL_STATE.customers,
                is_customers_loading: true,
            };
        case 'LOAD_CUSTOMERS_SUCCESS':
            return {
                ...state,
                customers: action.payload,
                is_customers_loading: false,
            };
        case 'LOAD_CUSTOMERS_FAILED':
            return {
                ...state,
                customers: INITIAL_STATE.customers,
                is_customers_loading: false,
            };
        case 'LOAD_USERS':
            return { ...state,
                users: INITIAL_STATE.users,
                is_users_loading: true
            };
        case 'LOAD_USERS_SUCCESS':
            return { ...state,
                users: action.payload,
                is_users_loading: false
            };
        case 'LOAD_USERS_FAILED':
            return { ...state,
                users: INITIAL_STATE.users,
                is_users_loading: false
            };
        case 'LOAD_USER':
            return {
                ...state,
                client_user: INITIAL_STATE.client_user,
                is_client_user_loading: true,
            };
        case 'LOAD_USER_SUCCESS':
            return {
                ...state,
                client_user: action.payload,
                is_client_user_loading: false,
            };
        case 'LOAD_USER_FAILED':
            return {
                ...state,
                client_user: INITIAL_STATE.client_user,
                is_client_user_loading: false,
            };
        case 'LOAD_EVENTS':
            return {
                ...state,
                events: INITIAL_STATE.events,
                is_events_loading: true,
            };
        case 'LOAD_EVENTS_SUCCESS':
            return { ...state,
                events: action.payload,
                is_events_loading: false
            };
        case 'LOAD_EVENTS_FAILED':
            return {
                ...state,
                events: INITIAL_STATE.events,
                is_events_loading: false,
            };
        case 'LOAD_EVENT':
            return { ...state,
                event: INITIAL_STATE.event,
                is_event_loading: true
            };
        case 'LOAD_EVENT_SUCCESS':
            return { ...state,
                event: action.payload,
                is_event_loading: false
            };
        case 'LOAD_EVENT_FAILED':
            return { ...state,
                event: INITIAL_STATE.event,
                is_event_loading: false
            };
        case 'LOAD_EVENT_DEADLINES':
            return {
                ...state,
                event_deadlines: INITIAL_STATE.event_deadlines,
                is_event_deadlines_loading: true,
            };
        case 'LOAD_EVENT_DEADLINES_SUCCESS':
            return {
                ...state,
                event_deadlines: action.payload,
                is_event_deadlines_loading: false,
            };
        case 'LOAD_EVENT_DEADLINES_FAILED':
            return {
                ...state,
                event_deadlines: INITIAL_STATE.event_deadlines,
                is_event_deadlines_loading: false,
            };
        case 'CANCEL_EVENT':
            return { ...state,
                is_event_canceling: true
            };
        case 'CANCEL_EVENT_SUCCESS':
            return { ...state,
                is_event_canceling: false
            };
        case 'CANCEL_EVENT_FAILED':
            return { ...state,
                is_event_canceling: false
            };
        case 'LOAD_INDEXES':
            return {
                ...state,
                indexes: [],
                indexes_pf: [],
                indexes_pj: [],
                is_indexes_loading: true,
            };
        case 'LOAD_INDEXES_SUCCESS':
            return {
                ...state,
                indexes: action.payload,
                indexes_pf: action.payload.filter(
                    (index) => index.interest_person_type === 'PF',
                ),
                indexes_pj: action.payload.filter(
                    (index) => index.interest_person_type === 'PJ',
                ),
                average_price_indexes: action.payload.filter(
                    (index) => index.type === 'average_price_index',
                ),
                is_indexes_loading: false,
            };
        case 'LOAD_INDEXES_FAILED':
            return {
                ...state,
                indexes: [],
                indexes_pf: [],
                indexes_pj: [],
                average_price_indexes: [],
                is_indexes_loading: false,
            };
        case 'REPORT_REVIEW':
            return { ...state,
                report_review: {},
                is_report_review_loading: true
            };
        case 'REPORT_REVIEW_SUCCESS':
            return {
                ...state,
                report_review: action.payload,
                is_report_review_loading: false,
            };
        case 'REPORT_REVIEW_FAILED':
            return { ...state,
                report_review: {},
                is_report_review_loading: false
            };
        case 'REPORT_CORRECTION_FGTS':
            return { ...state,
                report_correction_fgts: {}
            };
        case 'REPORT_CORRECTION_FGTS_SUCCESS':
            return { ...state,
                report_correction_fgts: action.payload
            };
        case 'REPORT_CORRECTION_FGTS_FAILED':
            return { ...state,
                report_correction_fgts: {}
            };
        case 'REPORT_CORRECTION':
            return {
                ...state,
                report_correction: {},
                is_report_correction_loading: true,
            };
        case 'REPORT_CORRECTION_SUCCESS':
            return {
                ...state,
                report_correction: action.payload,
                is_report_correction_loading: false,
            };
        case 'REPORT_CORRECTION_FAILED':
            return {
                ...state,
                report_correction: {},
                is_report_correction_loading: false,
            };
        case 'REPORT_CORRECTION_COMPLETE':
            return {
                ...state,
                report_correction_complete: {},
                is_report_correction_complete_loading: true,
            };
        case 'REPORT_CORRECTION_COMPLETE_SUCCESS':
            return {
                ...state,
                report_correction_complete: action.payload,
                is_report_correction_complete_loading: false,
            };
        case 'REPORT_CORRECTION_COMPLETE_FAILED':
            return {
                ...state,
                report_correction_complete: {},
                is_report_correction_complete_loading: false,
            };
        case 'REPORT_CHILDCARE':
            return {
                ...state,
                report_childcare: {},
                is_report_childcare_loading: true,
            };
        case 'REPORT_CHILDCARE_SUCCESS':
            return {
                ...state,
                report_childcare: action.payload,
                is_report_childcare_loading: false,
            };
        case 'REPORT_CHILDCARE_FAILED':
            return {
                ...state,
                report_childcare: {},
                is_report_childcare_loading: false,
            };
        case 'REPORT_RENT':
            return { ...state,
                report_rent: {},
                is_report_rent_loading: true
            };
        case 'REPORT_RENT_SUCCESS':
            return {
                ...state,
                report_rent: action.payload,
                is_report_rent_loading: false,
            };
        case 'REPORT_RENT_FAILED':
            return { ...state,
                report_rent: {},
                is_report_rent_loading: false
            };
        case 'LOAD_STATES':
            return {
                ...state,
                states: INITIAL_STATE.states,
                is_states_loading: true,
            };
        case 'LOAD_STATES_SUCCESS':
            return { ...state,
                states: action.payload,
                is_states_loading: false
            };
        case 'LOAD_STATES_FAILED':
            return {
                ...state,
                states: INITIAL_STATE.states,
                is_states_loading: false,
            };
        case 'LOAD_CITIES':
            return {
                ...state,
                cities: INITIAL_STATE.cities,
                is_cities_loading: true,
            };
        case 'LOAD_CITIES_SUCCESS':
            return {
                ...state,
                cities: action.payload,
                is_cities_loading: false,
                cities_error: null,
            };
        case 'LOAD_CITIES_TIMEOUT':
            return {
                ...state,
                cities: INITIAL_STATE.cities,
                is_cities_loading: false,
                cities_error: 'Não foi possível carregar as cidades, tente novamente mais tarde.',
            };
        case 'LOAD_CITIES_FAILED':
            return {
                ...state,
                cities: INITIAL_STATE.cities,
                is_cities_loading: false,
                cities_error: 'Não foi possível carregar as cidades, tente novamente mais tarde.',
            };
        case 'LOAD_CUSTOMER':
            return {
                ...state,
                customer: INITIAL_STATE.customer,
                is_customer_loading: true,
            };
        case 'LOAD_CUSTOMER_SUCCESS':
            return { ...state,
                customer: action.payload,
                is_customer_loading: false
            };
        case 'LOAD_CUSTOMER_FAILED':
            return {
                ...state,
                customer: INITIAL_STATE.customer,
                is_customer_loading: false,
            };
        case 'CREATE_SUBSCRIPTION_FAILED':
            return {
                ...state,
                subscription_error: action.payload,
            };
        case 'CLEAR_SUBSCRIPTION_ERROR':
            return {
                ...state,
                subscription_error: null,
            };
        case 'LOAD_OFFERED_PLAN_ELIGIBILITY':
            return {
                ...state,
                offered_plan_eligibility: null,
                is_offered_plan_eligibility_loaded: false,
            };
        case 'LOAD_OFFERED_PLAN_ELIGIBILITY_SUCCESS':
            return {
                ...state,
                offered_plan_eligibility: action.payload,
                is_offered_plan_eligibility_loaded: true,
            };
        case 'LOAD_OFFERED_PLAN_ELIGIBILITY_FAILED':
            return {
                ...state,
                offered_plan_eligibility: null,
                is_offered_plan_eligibility_loaded: true,
            };
        case 'LOAD_JURISPRUDENCES':
            return {
                ...state,
                jurisprudences: INITIAL_STATE.jurisprudences,
                is_jurisprudences_loading: true,
            };
        case 'LOAD_JURISPRUDENCES_SUCCESS':
            return {
                ...state,
                jurisprudences: action.payload,
                is_jurisprudences_loading: false,
            };
        case 'LOAD_JURISPRUDENCES_FAILED':
            return {
                ...state,
                jurisprudences: INITIAL_STATE.jurisprudences,
                is_jurisprudences_loading: false,
            };
        case 'LOAD_JURISPRUDENCE':
            return {
                ...state,
                jurisprudence_fulltext: INITIAL_STATE.jurisprudence_fulltext,
                jurisprudence: INITIAL_STATE.jurisprudence,
                is_jurisprudence_loading: true,
            };
        case 'LOAD_JURISPRUDENCE_SUCCESS':
            return {
                ...state,
                jurisprudence: action.payload,
                is_jurisprudence_loading: false,
            };
        case 'LOAD_JURISPRUDENCE_FAILED':
            return {
                ...state,
                jurisprudence: INITIAL_STATE.jurisprudence,
                is_jurisprudence_loading: false,
            };
        case 'LOAD_JURISPRUDENCE_FULLTEXT':
            return {
                ...state,
                jurisprudence_fulltext: INITIAL_STATE.jurisprudence_fulltext,
                is_jurisprudence_fulltext_loading: true,
            };
        case 'LOAD_JURISPRUDENCE_FULLTEXT_SUCCESS':
            return {
                ...state,
                jurisprudence_fulltext: action.payload,
                is_jurisprudence_fulltext_loading: false,
            };
        case 'LOAD_JURISPRUDENCE_FULLTEXT_FAILED':
            return {
                ...state,
                jurisprudence_fulltext: INITIAL_STATE.jurisprudence_fulltext,
                is_jurisprudence_fulltext_loading: false,
            };
        case 'QUERY_DATA':
            return { ...state,
                query_data: INITIAL_STATE.query_data
            };
        case 'QUERY_DATA_SUCCESS':
            return { ...state,
                query_data: action.payload
            };
        case 'QUERY_DATA_FAILED':
            return { ...state,
                query_data: INITIAL_STATE.query_data
            };
        case 'LOAD_PROFESSIONS':
            return {
                ...state,
                professions: INITIAL_STATE.professions,
                is_professions_loading: true,
            };
        case 'LOAD_PROFESSIONS_SUCCESS':
            return {
                ...state,
                professions: action.payload,
                is_professions_loading: false,
            };
        case 'LOAD_PROFESSIONS_FAILED':
            return {
                ...state,
                professions: INITIAL_STATE.professions,
                is_professions_loading: false,
            };
        case 'LOAD_OPPORTUNITIES':
            return {
                ...state,
                opportunities: INITIAL_STATE.opportunities,
                opportunities_total: 0,
                opportunities_available: 0,
                is_opportunities_loading: true,
            };
        case 'LOAD_OPPORTUNITIES_SUCCESS':
            return {
                ...state,
                opportunities: action.payload.items,
                is_opportunities_loading: false,
                opportunities_total: action.payload.total_items,
                opportunities_available: action.payload.total_items,
            };
        case 'LOAD_OPPORTUNITIES_FAILED':
            return {
                ...state,
                opportunities: INITIAL_STATE.opportunities,
                is_opportunities_loading: false,
                opportunities_total: INITIAL_STATE.opportunities_total,
                opportunities_available: INITIAL_STATE.opportunities_available,
            };
        case 'LOAD_MY_OPPORTUNITIES':
            return {
                ...state,
                my_opportunities: INITIAL_STATE.my_opportunities,
                my_opportunities_total: 0,
                is_my_opportunities_loading: true,
            };
        case 'LOAD_MY_OPPORTUNITIES_SUCCESS':
            return {
                ...state,
                my_opportunities: action.payload.items,
                is_my_opportunities_loading: false,
                is_opportunities_loading: false,
                my_opportunities_total: action.payload.total_items,
            };
        case 'LOAD_MY_OPPORTUNITIES_FAILED':
            return {
                ...state,
                my_opportunities: INITIAL_STATE.my_opportunities,
                is_my_opportunities_loading: false,
                is_opportunities_loading: false,
                my_opportunities_total: INITIAL_STATE.opportunities_total,
            };
        case 'LOAD_REMAINING_OPPORTUNITY_UNLOCKS':
            return {
                ...state,
                is_loading_remaining_opportunity_unlocks: true,
            };
        case 'LOAD_REMAINING_OPPORTUNITY_UNLOCKS_SUCCESS':
            return {
                ...state,
                total_unlocks_credits: action.payload.total_unlocks_credits,
                remaining_opportunity_unlocks: action.payload.remaining_opportunity_unlocks,
                current_period_end: action.payload.current_period_end,
                is_loading_remaining_opportunity_unlocks: false,
            };
        case 'LOAD_REMAINING_OPPORTUNITY_UNLOCKS_FAILED':
            return {
                ...state,
                remaining_opportunity_unlocks: INITIAL_STATE.is_loading_remaining_opportunity_unlocks,
                is_loading_remaining_opportunity_unlocks: false,
            };
        case 'SET_NOTIFICATIONS_LOADING':
            return { ...state,
                is_notifications_loading: action.payload
            };
        case 'LOAD_NOTIFICATIONS_SUCCESS':
            return {
                ...state,
                notifications: action.payload.notifications,
                is_notifications_loading: false,
                notifications_not_read: action.payload.n_not_read,
            };
        case 'LOAD_NOTIFICATIONS_FAILED':
            return {
                ...state,
                notifications: [],
                is_notifications_loading: false,
                notifications_not_read: 0,
            };
        case 'LOAD_HOLIDAYS_SUCCESS':
            return { ...state,
                holidays: action.payload
            };
        case 'LOAD_HOLIDAYS_FAILED':
            return { ...state,
                holidays: []
            };

            // JusZap Configuration
        case 'LOAD_JUSZAP_CONFIGURATION':
            return {
                ...state,
                // Não resetar a configuração se já existe, apenas marcar como loading
                is_juszap_configuration_loading: true,
                is_juszap_configuration_error: false,
            };
        case 'LOAD_JUSZAP_CONFIGURATION_SUCCESS':
            // Persistir no localStorage para sobreviver ao refresh
            setLocalStorage('juszap_configuration', action.payload);
            return {
                ...state,
                juszap_configuration: action.payload,
                is_juszap_configuration_loading: false,
                is_juszap_configuration_error: false,
            };
        case 'LOAD_JUSZAP_CONFIGURATION_FAILED':
            // Limpar localStorage em caso de falha
            setLocalStorage('juszap_configuration', null);
            return {
                ...state,
                juszap_configuration: null,
                is_juszap_configuration_loading: false,
                is_juszap_configuration_error: true,
            };

            // JusZap Robot Settings
        case 'UPDATE_JUSZAP_ROBOT_STATUS':
            return {
                ...state,
                juszap_configuration: {
                    ...state.juszap_configuration,
                    robot_settings: {
                        ...state.juszap_configuration ? .robot_settings,
                        robot_enabled : action.payload.robot_enabled,
                    },
                },
            };

        case 'UPDATE_JUSZAP_ROBOT_SETTINGS':
            return {
                ...state,
                juszap_configuration: {
                    ...state.juszap_configuration,
                    robot_settings: {
                        ...state.juszap_configuration ? .robot_settings,
                        ...action.payload,
                    },
                },
            };

            // JusZap Availability
        case 'LOAD_JUSZAP_AVAILABILITY':
            return {
                ...state,
                is_juszap_availability_loading: true,
                is_juszap_availability_error: false,
            };
        case 'LOAD_JUSZAP_AVAILABILITY_SUCCESS':
            return {
                ...state,
                juszap_availability: action.payload,
                is_juszap_availability_loading: false,
                is_juszap_availability_error: false,
            };
        case 'LOAD_JUSZAP_AVAILABILITY_FAILED':
            return {
                ...state,
                juszap_availability: INITIAL_STATE.juszap_availability,
                is_juszap_availability_loading: false,
                is_juszap_availability_error: true,
            };

            //Josias

        case 'SET_RENT_INSTALLMENTS':
            return {
                ...state,
                rent_installments: action.payload.installments,
                rent_contract_indexes: action.payload.indexes,
            };
        case 'SET_MODAL_INDICATION_SHOWED':
            return { ...state,
                modal_indication_showed: action.payload
            };
        case 'LOAD_SIGNATURES_DOCS':
            return {
                ...state,
                signature_docs: INITIAL_STATE.signature_docs,
                is_signature_docs_loading: true,
                signature_docs_total: 0,
            };
        case 'LOAD_SIGNATURES_DOCS_SUCCESS':
            return {
                ...state,
                signature_docs: action.payload.items,
                is_signature_docs_loading: false,
                signature_docs_total: action.payload.total_items,
            };
        case 'LOAD_SIGNATURES_DOCS_FAILED':
            return {
                ...state,
                signature_docs: INITIAL_STATE.signature_docs,
                is_signature_docs_loading: false,
                signature_docs_total: 0,
            };
        case 'SIGNATURE_DOC_PROCESS':
            return {
                ...state,
                signature_doc_preview_url: INITIAL_STATE.signature_doc_preview_url,
                signature_processing_doc: true,
            };

        case 'SAVE_DOC_TO_SIGN':
            return { ...state,
                saving_doc_to_sign: true
            };
        case 'SAVE_DOC_TO_SIGN_SUCCESS':
            return { ...state,
                saving_doc_to_sign: false
            };
        case 'SAVE_DOC_TO_SIGN_FAILED':
            return { ...state,
                saving_doc_to_sign: false
            };
        case 'SET_PUBLISH_ON_GOOGLE':
            return { ...state,
                publish_on_google: action.payload
            };
        case 'LOAD_SIGNATURES_DASHBOARD_DATA':
            return {
                ...state,
                signatures_dashboard_data: INITIAL_STATE.signatures_dashboard_data,
                is_signatures_dashboard_data: true,
            };
        case 'LOAD_SIGNATURES_DASHBOARD_DATA_SUCCESS':
            return {
                ...state,
                signatures_dashboard_data: action.payload.data,
                is_signatures_dashboard_data: false,
            };
        case 'LOAD_SIGNATURES_DASHBOARD_DATA_FAILED':
            return {
                ...state,
                signatures_dashboard_data: INITIAL_STATE.signatures_dashboard_data,
                is_signatures_dashboard_data: false,
            };
        case 'LOAD_OPPORTUNITIES_CITIES':
            return {
                ...state,
                opportunities_cities: INITIAL_STATE.opportunities_cities,
                is_opportunities_cities_loading: true,
            };
        case 'LOAD_OPPORTUNITIES_CITIES_SUCCESS':
            return {
                ...state,
                opportunities_cities: action.payload,
                is_opportunities_cities_loading: false,
            };
        case 'LOAD_OPPORTUNITIES_CITIES_FAILED':
            return {
                ...state,
                opportunities_cities: INITIAL_STATE.opportunities_cities,
                is_opportunities_cities_loading: false,
            };
        case 'OPPORTUNITIES_BY_DATE':
            return {
                ...state,
                opportunities_filter: INITIAL_STATE.opportunities_filter,
            };
        case 'OPPORTUNITIES_BY_DATE_SUCCESS':
            return {
                ...state,
                opportunities_filter: action.payload,
            };
        case 'SHOW_CSAT_MODAL':
            return {
                ...state,
                is_csat_modal_open: true,
                csat_modal_configuration: {
                    feature_name: action.payload.feature_name,
                    pretty_name: action.payload.pretty_name,
                },
            };
        case 'CLOSE_CSAT_MODAL':
            return {
                ...state,
                is_csat_modal_open: false,
                csat_modal_configuration: {},
            };
        case 'LOAD_GROUP':
            return {
                ...state,
                group: INITIAL_STATE.group,
            };
        case 'LOAD_GROUP_SUCCESS':
            return {
                ...state,
                group: action.payload,
            };
        case 'LOAD_GROUP_FAILED':
            return {
                ...state,
                group: INITIAL_STATE.opportunities_cities,
            };
        case 'SET_OPPORTUNITIES_PAGE_FILTERS':
            {
                const newFilters = {
                    ...state.opportunities_page_filters,
                    ...action.payload,
                };
                setLocalStorage('opportunities_page_filters', newFilters);
                return {
                    ...state,
                    opportunities_page_filters: newFilters,
                };
            }
        case 'RESET_OPPORTUNITIES_PAGE_FILTERS':
            setLocalStorage(
                'opportunities_page_filters',
                INITIAL_STATE.opportunities_page_filters,
            );
            return {
                ...state,
                opportunities_page_filters: INITIAL_STATE.opportunities_page_filters,
            };
        default:
            return state;
    }
};

function* loadInstitutions({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/financial_institutions`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_INSTITUTIONS_SUCCESS',
            payload: response.data.data,
        });
        payload.callback(response.data.data);
    } catch {
        yield put({
            type: 'LOAD_INSTITUTIONS_FAILED'
        });
        payload.callback([]);
    }
}

function* loadPetition({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/petitions/${payload.id}`, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_PETITION_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_PETITION_FAILED'
        });
    }
}

function* loadPetitions({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/petitions`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_PETITIONS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_PETITIONS_FAILED'
        });
    }
}

function* loadPetitionsCategories({
    payload
}) {
    try {
        if (payload && payload.reset) {
            yield put({
                type: 'LOAD_PETITIONS_CATEGORIES_SUCCESS',
                payload: []
            });
            return false;
        }

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/petitions/categories`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_PETITIONS_CATEGORIES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_PETITIONS_CATEGORIES_FAILED'
        });
    }
}

function* loadPetitionsCategoriesFilters({
    payload
}) {
    try {
        if (payload && payload.reset) {
            yield put({
                type: 'LOAD_PETITIONS_CATEGORIES_FILTERS_SUCCESS',
                payload: [],
            });
            return false;
        }

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/petitions/categories`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_PETITIONS_CATEGORIES_FILTERS_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_PETITIONS_CATEGORIES_FILTERS_FAILED'
        });
    }
}

function* loadPetitionsCategoryTypes({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL +
            `/petitions/category/${payload.category_id}/types`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_PETITIONS_CATEGORY_TYPES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_PETITIONS_CATEGORY_TYPES_FAILED'
        });
    }
}

function* loadSimulation({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/reports/simulation`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (!response.data.success) {
            toast.error('Ocorreu um erro ao realizar a simulação, tente novamente.');
            yield put({
                type: 'LOAD_SIMULATION_FAILED'
            });
            return;
        }
        yield put({
            type: 'LOAD_SIMULATION_SUCCESS',
            payload: response.data.data
        });
        payload.callback();
    } catch {
        yield put({
            type: 'LOAD_SIMULATION_FAILED'
        });
    }
}

function* loadDashboard({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/dashboard`, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_DASHBOARD_SUCCESS',
            payload: response.data.data
        });
    } catch (err) {
        yield put({
            type: 'LOAD_DASHBOARD_FAILED'
        });
    }
}

function* loadingDashboardSteps({
    payload,
    callback
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/dashboard_items/DASHBOARD_0`, {},
        );
        yield put({
            type: 'LOAD_DASHBOARD_STEPS_SUCCESS',
            payload: response.data.data,
        });

        callback();
    } catch (err) {
        yield put({
            type: 'LOAD_DASHBOARD_STEPS_FAILED'
        });
    }
}

function* loadCustomers({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/client_customers`,
            payload,
        );
        yield put({
            type: 'LOAD_CUSTOMERS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_CUSTOMERS_FAILED'
        });
    }
}

function* loadUsers({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/users`,
            payload,
        );
        yield put({
            type: 'LOAD_USERS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_USERS_FAILED'
        });
    }
}

function* loadUser({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/users/` + payload.id, {},
        );
        if (!response.data.success) {
            toast.error(response.data.msg);
            payload.callback();
            yield put({
                type: 'LOAD_USER_FAILED'
            });
            return;
        }
        yield put({
            type: 'LOAD_USER_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_USER_FAILED'
        });
    }
}

function* loadEvents({
    payload
}) {
    const params = payload;
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/events`, {
                params
            },
        );
        yield put({
            type: 'LOAD_EVENTS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_EVENTS_FAILED'
        });
    }
}

function* loadEvent({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/events/` + payload.id, {},
        );
        yield put({
            type: 'LOAD_EVENT_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_EVENT_FAILED'
        });
    }
}

function* cancelEvent({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/events/delete/`, {
                id: payload.id
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        toast.success('Evento cancelado com sucesso!');
        payload.callback();

        yield put({
            type: 'CANCEL_EVENT_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'CANCEL_EVENT_FAILED'
        });
    }
}

function* loadEventDeadlines({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/event_deadlines`,
        );
        yield put({
            type: 'LOAD_EVENT_DEADLINES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_EVENT_DEADLINES_FAILED'
        });
    }
}

function* loadIndexes({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/indexes`,
            payload,
        );
        yield put({
            type: 'LOAD_INDEXES_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_INDEXES_FAILED'
        });
    }
}

function* loadMinimumWages({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/indexes/index_rates/salarios_minimos`,
            payload,
        );
        yield put({
            type: 'LOAD_MINIMUM_WAGES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_MINIMUM_WAGES_FAILED'
        });
    }
}

function* loadInssTetos({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/indexes/index_rates/inss_tetos`,
            payload,
        );
        yield put({
            type: 'LOAD_INSS_TETOS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_INSS_TETOS_FAILED'
        });
    }
}

function* loadCoupom({
    payload
}) {
    if (payload.coupom == '') {
        yield put({
            type: 'LOAD_COUPOM_SUCCESS',
            payload: {}
        });
        return;
    }

    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/coupons/validate`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_COUPOM_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_COUPOM_FAILED'
        });
    }
}

function* loadStates({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/locations/states`,
            payload,
        );
        yield put({
            type: 'LOAD_STATES_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_STATES_FAILED'
        });
    }
}

function* loadCities({
    payload
}) {
    try {
        if (payload.state == '' || payload.state == null) {
            yield put({
                type: 'LOAD_CITIES_SUCCESS',
                payload: []
            });
            return true;
        }
        const {
            response,
            timeout
        } = yield race({
            response: call(
                axios.get,
                process.env.REACT_APP_API_URL + `/locations/cities/${payload.state}`,
            ),
            timeout: delay(5000),
        });
        if (response) {
            yield put({
                type: 'LOAD_CITIES_SUCCESS',
                payload: response.data.data
            });
            if (payload.callback !== undefined) payload.callback(response.data.data);
        } else if (timeout) {
            yield put({
                type: 'LOAD_CITIES_TIMEOUT'
            });
        } else {
            yield put({
                type: 'LOAD_CITIES_FAILED'
            });
        }
    } catch (error) {
        yield put({
            type: 'LOAD_CITIES_FAILED'
        });
    }
}

function* reportReview({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/reports/review`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (response.data.data.success === false) {
            yield put({
                type: 'REPORT_REVIEW_FAILED'
            });
            toast.error(response.data.data.msg);
            payload.setSubmitting(false);
            return false;
        }

        yield put({
            type: 'REPORT_REVIEW_SUCCESS',
            payload: response.data.data
        });
        payload.callback();
        payload.setSubmitting(false);
    } catch (err) {
        if (
            err.response.status === 403 &&
            err.response.data.msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response.data.message);
            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de cálculos de Revisional!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });

            yield put({
                type: 'REPORT_REVIEW_FAILED'
            });

            payload.setSubmitting(false);
            return;
        }
        yield put({
            type: 'REPORT_REVIEW_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar o relatório, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* reportCorrection({
    payload
}) {
    const url =
        payload ? .old_rule === 'true' ?
        `/reports/correction?old_rule=${payload?.old_rule}` :
        `/reports/correction`;

    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `${url}`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            toast.error(response.data.msg);
        } else {
            yield put({
                type: 'REPORT_CORRECTION_SUCCESS',
                payload: response.data.data,
            });
            payload.callback();
        }

        payload.setSubmitting(false);
    } catch (err) {
        if (
            err.response.status === 403 &&
            err.response.data.msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response.data.message);
            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de cálculos de Fácil!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });
            yield put({
                type: 'REPORT_CORRECTION_FAILED'
            });
            payload.setSubmitting(false);
            return;
        }
        yield put({
            type: 'REPORT_CORRECTION_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar o relatório, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* reportCorrectionFgts({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/fgts/correction`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            if (response.data.msg === 'REACHED_LIMIT') {
                toast.error('Você estourou o limite de cálculos de FGTS!');
                yield put({
                    type: 'SET_MODAL_SUBSCRIPTION',
                    payload: {
                        visible: true,
                        title: 'Você atingiu o limite de cálculos de FGTS!',
                        subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                    },
                });
            } else {
                toast.error(response.data.msg);
            }
        } else {
            yield put({
                type: 'REPORT_CORRECTION_FGTS_SUCCESS',
                payload: response.data.data,
            });
            payload.callback();
        }

        payload.setSubmitting(false);
    } catch (err) {
        yield put({
            type: 'REPORT_CORRECTION_FGTS_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar o relatório, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* reportCorrectionComplete({
    payload
}) {
    const reportId = uuidv4();
    const url =
        payload ? .old_rule === 'true' ?
        `/reports/correction/complete?old_rule=${payload?.old_rule}` :
        `/reports/correction/complete`;

    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `${url}`, {
                ...payload,
                report_id: reportId,
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            toast.error(response.data.msg);
        } else {
            yield put({
                type: 'REPORT_CORRECTION_COMPLETE_SUCCESS',
                payload: response.data.data,
            });
            payload.callback();
        }
        payload.setSubmitting(false);
    } catch (err) {
        if (
            err.response.status === 403 &&
            err.response.data.msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response ? .data ? .message);
            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de cálculos de Completo!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });
            yield put({
                type: 'REPORT_CORRECTION_COMPLETE_FAILED'
            });
            payload.setSubmitting(false);
            return;
        }
        payload.setSubmitting(false);
        yield put({
            type: 'REPORT_CORRECTION_COMPLETE_FAILED'
        });
        payload.timeout(reportId);
    }
}

function* reportChildcare({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/reports/childcare`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            toast.error(response.data.msg);
        } else {
            yield put({
                type: 'REPORT_CHILDCARE_SUCCESS',
                payload: response.data.data,
            });
            payload.callback();
        }
        payload.setSubmitting(false);
    } catch (err) {
        if (
            err ? .response ? .status === 403 &&
            err ? .response ? .data ? .msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response.data.message);
            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de cálculos de Pensão!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });
            yield put({
                type: 'REPORT_CHILDCARE_FAILED'
            });
            payload.setSubmitting(false);
            return;
        }
        yield put({
            type: 'REPORT_CHILDCARE_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar o relatório, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* reportRent({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/reports/rent`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            toast.error(response.data.msg);
        } else {
            yield put({
                type: 'REPORT_RENT_SUCCESS',
                payload: response.data.data
            });
            payload.callback();
        }
        payload.setSubmitting(false);
    } catch (err) {
        if (
            err.response.status === 403 &&
            err.response.data.msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response.data.message);
            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de cálculos de Aluguel!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });
            yield put({
                type: 'REPORT_RENT_FAILED'
            });
            payload.setSubmitting(false);
            return;
        }
        yield put({
            type: 'REPORT_RENT_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar o relatório, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* saveCaseAttachment({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL +
            `/case_management/cases/` +
            payload.submitValues.case_id +
            `/case_attachments`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.setSubmitting(false);
        toast.success('Anexo feito com  sucesso!');
        payload.callback();
    } catch {
        toast.error('Ocorreu um erro ao salvar o anexo, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* createCase({
    payload
}) {
    try {
        const response = yield axios.post(
            `${process.env.REACT_APP_API_URL}/case_management/cases`, {
                title: payload.submitValues.new_case,
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.setSubmitting(false);
        payload.callback(response.data);
    } catch (error) {
        toast.error('Ocorreu um erro ao criar caso, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* saveCustomer({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/client_customers`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_CUSTOMER_SUCCESS',
            payload: response.data
        });
        payload.setSubmitting(false);
        toast.success('Cliente salvo com sucesso!');
        payload.callback(response.data);
    } catch {
        toast.error('Ocorreu um erro ao salvar o cliente, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* loadCustomer({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/client_customers/` + payload.id, {},
        );
        yield put({
            type: 'LOAD_CUSTOMER_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_CUSTOMER_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar os dados do cliente, tente novamente.',
        );
    }
}

function* loadJurisprudences({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/jurisprudences`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response && response.data && !response.data.success) {
            yield put({
                type: 'LOAD_JURISPRUDENCES_FAILED'
            });
            toast.error(response.data.msg);
            return;
        }
        yield put({
            type: 'LOAD_JURISPRUDENCES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_JURISPRUDENCES_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar as jurisprudências, tente novamente.',
        );
    }
}

function* loadJurisprudence({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/jurisprudences/jurisprudence`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_JURISPRUDENCE_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_JURISPRUDENCE_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar a jurisprudência, tente novamente.',
        );
    }
}

function* loadJurisprudenceFullText({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/jurisprudences/jurisprudence`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'LOAD_JURISPRUDENCE_FULLTEXT_SUCCESS',
            payload: response.data.data.fullText,
        });
    } catch {
        yield put({
            type: 'LOAD_JURISPRUDENCE_FULLTEXT_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar a jurisprudência, tente novamente.',
        );
    }
}

function* queryData({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/queries`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'QUERY_DATA_SUCCESS',
            payload: response.data.data
        });
        payload.setSubmitting(false);
    } catch {
        yield put({
            type: 'QUERY_DATA_FAILED'
        });
        payload.setSubmitting(false);
        toast.error(
            'Ocorreu um erro ao carregar os dados da consulta, tente novamente.',
        );
    }
}

function* loadProfessions({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/professions`, {},
        );
        yield put({
            type: 'LOAD_PROFESSIONS_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_PROFESSIONS_FAILED'
        });
        toast.error('Ocorreu um erro ao carregar as profissões, tente novamente.');
    }
}

function* loadOpportunities({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/opportunities`, {
                params: payload
            },
        );
        yield put({
            type: 'LOAD_OPPORTUNITIES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_OPPORTUNITIES_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar as oportunidades, tente novamente.',
        );
    }
}

function* loadMyOpportunities({
    payload
}) {
    try {
        const params = { ...payload,
            type: 'my_orders'
        };
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/opportunities`, {
                params
            },
        );
        yield put({
            type: 'LOAD_MY_OPPORTUNITIES_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_MY_OPPORTUNITIES_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar as oportunidades desbloqueadas, tente novamente.',
        );
    }
}

function* loadRemainingOpportunityUnlocks({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/opportunities/remaining_unlocks`,
        );
        yield put({
            type: 'LOAD_REMAINING_OPPORTUNITY_UNLOCKS_SUCCESS',
            payload: response.data,
        });
    } catch (err) {
        yield put({
            type: 'LOAD_REMAINING_OPPORTUNITY_UNLOCKS_FAILED'
        });
        if (err.response.data.error !== 'Subscription expired') {
            toast.error(
                'Ocorreu um erro ao carregar suas oportunidades remanescentes, tente novamente.',
            );
        }
    }
}

function* saveUser({
    payload
}) {
    try {
        let response;
        if (payload.submitValues.version === 'pagarme-v5') {
            response = yield axios.post(
                process.env.REACT_APP_API_URL + `/auth/register-pagarme-v5`,
                payload.submitValues, {
                    headers: {
                        'x-trace-id': traceId
                    }
                },
            );
        } else {
            response = yield axios.post(
                process.env.REACT_APP_API_URL + `/auth/register`,
                payload.submitValues, {
                    headers: {
                        'x-trace-id': traceId
                    }
                },
            );
        }

        payload.setSubmitting(false);
        if (!response.data.success) {
            window.analytics.track('Sign Up Account Creation Failed', {
                error: 'CREATE_ACCOUNT_REQUEST_ERROR',
                message: response.data.message,
            });
            toast.error(response.data.message);
            return false;
        }

        toast.success(
            'Cadastro realizado com sucesso! Realize login na nossa plataforma.',
        );

        if (response.data.success) {
            const userId = response.data.user_id;
            const traits = {
                name: payload.submitValues.name,
                email: payload.submitValues.email,
                client_id: response.data.client_id,
                ...(response.data.coupom && {
                    coupom: response.data.coupom
                }), // only define 'coupom' if there is one; don't set "coupom: undefined"
            };

            window.analytics.identify(userId, { ...traits
            });
        }

        let amountConversion = 77.0;
        if (payload.submitValues.plan && payload.submitValues.plan.amount) {
            amountConversion = parseFloat(
                payload.submitValues.plan.amount.replace('.', '').replace(',', '.'),
            );
        }

        enhanced_conversion_data.email = payload.submitValues.email;

        window.gtag('event', 'conversion', {
            send_to: 'AW-380889985/PZWiCIe1-soDEIHXz7UB',
            value: amountConversion,
            currency: 'BRL',
            transaction_id: '',
        });

        payload.setDisableButton(false);
        payload.callback();
    } catch (err) {
        window.analytics.track('Sign Up Account Creation Failed', {
            error: 'CREATE_ACCOUNT_CATCH_ERROR',
            name: err.name,
            message: err.message,
            stack: err.stack || 'not stack available',
        });
        if (err.response.data.is_payment_error) {
            yield put({
                type: 'CREATE_SUBSCRIPTION_FAILED',
                payload: err.message
            });
        }

        if (err.response.data.error === 'INVALID_RECAPTCHA') {
            if (payload.submitValues.recaptchaVersion === '2') {
                toast.error('Erro de reCaptcha, por favor tente novamente.');
            }

            payload.setEnableRecaptchaV2(true); // utiliza o recaptcha v2 novamente
            payload.setDisableButton(true);
            payload.setSubmitting(false);
            return;
        }

        toast.error(err.response.data.message);

        payload.setSubmitting(false);
        payload.setDisableButton(false);
    }
}

function* saveClientUser({
    payload
}) {
    try {
        const response = yield axios.post(
            `${config.jusfyBackend.apiUrl}/users/`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (!response.data.success) {
            toast.error(response.data.msg);
            payload.setSubmitting(false);
            return;
        }

        // Buscar a lista atualizada de usuários para identificar o novo usuário
        const usersResponse = yield axios.get(
            `${config.jusfyBackend.apiUrl}/users/`,
        );

        if (usersResponse.data.success) {
            // Atualizar o estado dos usuários
            yield put({
                type: 'LOAD_USERS_SUCCESS',
                payload: usersResponse.data.data,
            });

            // Encontrar o usuário criado pelo email
            const createdUser = usersResponse.data.data.find(
                (user) => user.User && user.User.email === payload.submitValues.email,
            );

            if (createdUser) {
                toast.success('Usuário salvo com sucesso!.');
                payload.setSubmitting(false);
                // Passar os dados do usuário criado para o callback
                payload.callback(createdUser);
            } else {
                toast.success('Usuário salvo com sucesso!.');
                payload.setSubmitting(false);
                payload.callback();
            }
        } else {
            toast.success('Usuário salvo com sucesso!.');
            payload.setSubmitting(false);
            payload.callback();
        }
    } catch (err) {
        const message =
            err.response.data ? .msg ||
            'Ocorreu um erro ao salvar os dados de usuário, por favor, tente novamente.';

        toast.error(message);
        payload.setSubmitting(false);
    }
}

function* adminSaveUser({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/clients`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        payload.setSubmitting(false);
        if (!response.data.success) {
            toast.error(response.data.message);
            return false;
        }

        toast.success('Cadastro realizado com sucesso!.');
        payload.callback();
    } catch (err) {
        console.log(err);
        toast.error(
            'Ocorreu um erro ao salvar o cadastro, por favor, tente novamente.',
        );
        payload.setSubmitting(false);
    }
}

function* saveOpportunity({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/opportunities`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.setSubmitting(false);
        toast.success('Solicitação enviada com sucesso!');
        payload.callback();
    } catch (err) {
        console.log(err);
        toast.error(
            'Ocorreu um erro ao salvar seus dados, por favor, tente novamente.',
        );
        payload.setSubmitting(false);
    }
}

function* unlockOpportunity({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/opportunities/unlock`,
            payload.submitValues, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (!response.data.success) {
            toast.error(response.data.message);
            return false;
        }

        toast.success('Oportunidade desbloqueada com sucesso, parabéns!');
        payload.callback();
    } catch (err) {
        console.log(err);
        toast.error(
            'Ocorreu um erro ao desbloquear esta oportunidade, por favor, tente novamente.',
        );
    }
}

function* queryValidateDocument({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/queries/validate`, {
                document: payload.document,
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response.data.success) {
            yield put({
                type: 'QUERY_VALIDATE_DOCUMENT_FAILED'
            });
            toast.warn(response.data.msg);
            return false;
        }

        yield put({
            type: 'QUERY_VALIDATE_DOCUMENT_SUCCESS',
            payload: {
                available_products: response.data.available_products,
                document_type: response.data.document_type,
                document_number: response.data.document_number,
            },
        });
        payload.callback();
    } catch (err) {
        toast.error(
            'Ocorreu um erro ao realizar a consulta, por favor, tente novamente.',
        );
        yield put({
            type: 'QUERY_VALIDATE_DOCUMENT_FAILED'
        });
    }
}

function* queryCheckout({
    payload
}) {
    if (payload.values.identification === 'list_vehicles') {
        payload.timeout = 180000;
    }

    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/queries/checkout`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        window.analytics.track('Query Performed');

        yield put({
            type: 'QUERY_CHECKOUT_SUCCESS',
            payload: response.data,
        });
        payload.onResponse();
        if (payload.setSubmitting !== undefined) payload.setSubmitting(false);
    } catch (err) {
        yield put({
            type: 'QUERY_CHECKOUT_FAILED',
        });
        toast.error(
            'Ocorreu um erro ao realizar sua compra, por favor, tente novamente.',
        );
        if (payload.setSubmitting !== undefined) payload.setSubmitting(false);
    }
}

function* activateAccount({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/auth/validation`, {
                token: payload.token
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response.data.success) {
            toast.error(response.data.msg);
            yield put({
                type: 'ACTIVATE_ACCOUNT_FAILED',
                payload: response.data
            });
            return;
        }

        yield put({
            type: 'ACTIVATE_ACCOUNT_SUCCESS',
            payload: response.data
        });
        toast.success('Conta ativada com sucesso!');
    } catch (err) {
        console.log(err);

        yield put({
            type: 'ACTIVATE_ACCOUNT_FAILED',
            payload: {
                success: false,
                msg: 'Ocorreu um erro ao verificar sua conta, por favor, tente novamente',
            },
        });
    }
}

function* loadCards({
    payload
}) {
    try {
        const response = yield axios.get(
            `${config.jusfyBackend.apiUrl}/subscription/cards`, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response.data.success) {
            yield put({
                type: 'LOAD_CARDS_FAILED',
                payload: response.data.data
            });
            toast.error(response.data.msg);
            return;
        }

        const cardsData = Array.isArray(response.data.data) ?
            response.data.data :
            [];
        yield put({
            type: 'LOAD_CARDS_SUCCESS',
            payload: cardsData
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: 'LOAD_CARDS_FAILED'
        });
    }
}

function* fgtsProcess({
    payload
}) {
    try {
        var formData = new FormData();
        formData.append('pdf', payload.file);
        formData.append('thesis', payload.thesis);

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/fgts/process`,
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-trace-id': traceId,
                },
            },
        );

        if (!response.data.success) {
            toast.error(response.data.msg);
            yield put({
                type: 'FGTS_PROCESS_FAILED'
            });
            return false;
        }

        yield put({
            type: 'FGTS_PROCESS_SUCCESS',
            payload: response.data.data
        });
    } catch (err) {
        yield put({
            type: 'FGTS_PROCESS_FAILED',
            payload: {
                success: false,
                msg: 'Ocorreu um erro ao processar este PDF, por favor, tente novamente',
            },
        });
    }
}

function* reportPrev({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/prev/calculate`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response.data.success) {
            toast.error(response.data.msg);
            yield put({
                type: 'REPORT_PREV_FAILED'
            });
            payload.setSubmitting(false);
            return false;
        }

        yield put({
            type: 'REPORT_PREV_SUCCESS',
            payload: response.data.data
        });
    } catch (err) {
        yield put({
            type: 'REPORT_PREV_FAILED'
        });
        toast.error('Ocorreu um erro ao calcular, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* cnisProcess({
    payload
}) {
    try {
        var formData = new FormData();
        formData.append('pdf', payload.file);

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/fgts/process_prev`,
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-trace-id': traceId,
                },
            },
        );

        if (!response.data.success) {
            toast.error(response.data.msg);
            yield put({
                type: 'CNIS_PROCESS_FAILED'
            });
            return false;
        }

        yield put({
            type: 'CNIS_PROCESS_SUCCESS',
            payload: response.data.data
        });
    } catch (err) {
        yield put({
            type: 'CNIS_PROCESS_FAILED',
            payload: {
                success: false,
                msg: 'Ocorreu um erro ao processar este PDF, por favor, tente novamente',
            },
        });
    }
}

function* loadCalculations({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/calculations`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            toast.error(response.data.msg);
        } else {
            yield put({
                type: 'LOAD_CALCULATIONS_SUCCESS',
                payload: response.data.data,
            });
        }
    } catch (err) {
        yield put({
            type: 'LOAD_CALCULATIONS_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar os seus cálculos, tente novamente.',
        );
        payload.setSubmitting(false);
    }
}

function* loadInstallments({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/calculations/generate/SAC/installments`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response.data) {
            toast.error(
                'Ocorreu um erro ao carregar as suas parcelas, tente novamente.',
            );
        } else {
            yield put({
                type: 'LOAD_INSTALLMENTS_SUCCESS',
                payload: response.data,
            });
        }
    } catch (err) {
        yield put({
            type: 'LOAD_INSTALLMENTS_FAILED'
        });
        toast.error(
            'Ocorreu um erro ao carregar os suas parcelas, tente novamente.',
        );
        payload.setSubmitting(false);
    }
}

function* saveProfile({
    payload
}) {
    try {
        const {
            values
        } = payload;

        const requestPayload = {
            values: { ...values
            }
        };
        if (!values.password || values.password === '') {
            delete requestPayload.values.password;
        }

        const response = yield axios.post(
            `${config.jusfyBackend.apiUrl}/me/update`,
            requestPayload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.callback(response);

        toast.success('Perfil atualizado com sucesso!');
    } catch (err) {
        let errorMessage =
            'Ocorreu um erro ao salvar o seu perfil, tente novamente.';

        if (err.response && err.response.data && err.response.data.msg) {
            errorMessage = err.response.data.msg;
        }
        if (err.response ? .data ? .details && err.response.status === 422) {
            const details = err.response.data.details;
            const errorKeys = Object.keys(details);
            if (errorKeys.length > 0) {
                errorMessage = details[errorKeys[0]];
            }
        }

        payload.onError(err);
        toast.error(errorMessage);
    }
}

function* saveCard({
    payload
}) {
    const shouldRenderToast = payload.toast !== false;
    let response = {};
    try {
        response = yield axios.post(
            `${config.jusfyBackend.apiUrl}/subscription/card`, {
                cardHash: payload.cardHash
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (response.data.success === false) {
            // Evento de falha na resposta da API (success = false)
            window.analytics.track('Save Card API Failed', {
                error_type: 'api_response_error',
                error_message: response.data.msg || 'API retornou success = false',
                status_code: response.status,
            });

            toast.error(response.data.msg);
        } else if (response.status || response.data.status) {
            yield put({
                type: 'LOAD_CARDS'
            });
        } else {
            yield put({
                type: 'LOAD_CARDS'
            });
            if (shouldRenderToast) {
                toast.success('Cartão adicionado com sucesso!');
            }
        }
    } catch (err) {
        // Evento de falha na requisição POST
        window.analytics.track('Save Card Request Failed', {
            error_type: 'api_request_error',
            error_message: err.message || 'Erro na requisição POST',
            status_code: err.response ? .status || 'unknown',
        });

        if (shouldRenderToast) {
            toast.error(
                'Ocorreu um erro ao adicionar o seu cartão, tente novamente.',
            );
        }
    }
    payload.callback(response);
}

function* setPrimaryCard({
    payload
}) {
    try {
        const {
            cardId,
            callback
        } = payload || {};

        const response = yield axios.post(
            `${config.jusfyBackend.apiUrl}/subscription/cards/${cardId}/set-primary`, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        if (!response ? .data ? .success) {
            const msg =
                response ? .data ? .msg ||
                'Não foi possível definir o cartão principal, tente novamente.';
            toast.error(msg);
            yield put({
                type: 'LOAD_CARDS'
            });
            callback ? .(response);
            return;
        }

        toast.success('Cartão principal atualizado com sucesso!');
        yield put({
            type: 'LOAD_CARDS'
        });
        callback ? .(response);
    } catch (err) {
        const errorMessage =
            err ? .response ? .data ? .msg ||
            err ? .response ? .data ? .message ||
            err ? .message ||
            'Ocorreu um erro ao definir o cartão principal, tente novamente.';

        toast.error(errorMessage);
        yield put({
            type: 'LOAD_CARDS'
        });
        payload ? .callback ? .(err ? .response);
    }
}

function* updateRentInstallments({
    payload
}) {
    const response = yield axios.post(
        `${config.jusfyBackend.apiUrl}/reports/rent/installments`,
        payload, {
            headers: {
                'x-trace-id': traceId
            }
        },
    );

    yield put({
        type: 'SET_RENT_INSTALLMENTS',
        payload: {
            installments: payload.installments,
            indexes: response.data.indexes,
        },
    });
}

//Josias
function* loadRentInstallments({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/reports/rent/installments`,
            payload, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        yield put({
            type: 'SET_RENT_INSTALLMENTS',
            payload: {
                installments: response.data.installments,
                indexes: response.data.indexes,
            },
        });
    } catch {
        yield put({
            type: 'SET_RENT_INSTALLMENTS',
            payload: {
                installments: [],
                indexes: []
            },
        });
    }
}

function* loadOpportunityTypes({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/opportunities/types`,
        );
        yield put({
            type: 'SET_OPPORTUNITY_TYPES',
            payload: response.data
        });
    } catch {
        yield put({
            type: 'SET_OPPORTUNITY_TYPES',
            payload: []
        });
    }
}

function* loadNotifications() {
    yield put({
        type: 'SET_NOTIFICATIONS_LOADING',
        payload: true
    });
    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_URL}/notification_sent`,
        );
        yield put({
            type: 'LOAD_NOTIFICATIONS_SUCCESS',
            payload: {
                notifications: response.data.data,
            },
        });
    } catch {
        yield put({
            type: 'LOAD_NOTIFICATIONS_FAILED',
            payload: {
                notifications: []
            },
        });
    }
}

function* setNotificationRead({
    payload
}) {
    try {
        yield axios.get(
            `${process.env.REACT_APP_API_URL}/notification_sent/${payload.id}`,
        );
    } catch {
        yield put({
            type: 'LOAD_NOTIFICATIONS_FAILED',
            payload: {},
        });
    }
}

function* sendPdfToSplit({
    payload
}) {
    try {
        payload.setSubmitting(true);
        payload.use_token = false;
        const configs = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        var formData = new FormData();
        formData.append('fileUploaded', payload.fileUploaded);
        formData.append('maxsize', payload.values.maxsize);

        const response = yield axios.post(
            `https://pdf-split.jusfy.com.br/upload`,
            formData, { ...configs,
                headers: { ...configs.headers,
                    'x-trace-id': traceId
                }
            },
        );

        if (response.data.status != 'ok') {
            toast.error(response.data.message);
            yield put({
                type: 'SET_SPLITED_FILES',
                payload: {
                    splited_files: [],
                    splited_files_folder: ''
                },
            });
        } else {
            yield put({
                type: 'SET_SPLITED_FILES',
                payload: {
                    splited_files: response.data.splitted_file,
                    splited_files_folder: response.data.directory,
                },
            });
        }

        payload.setSubmitting(false);
    } catch {
        toast.error('Ocorreu um erro ao dividir o arquivo, tente novamente.');
        payload.setSubmitting(false);
        yield put({
            type: 'SET_SPLITED_FILES',
            payload: {
                splited_files: [],
                splited_files_folder: ''
            },
        });
    }
}

function* saveEvent({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/events/`,
            payload.values, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        if (!response.data.success) {
            toast.error(response.data.msg);
            payload.setSubmitting(false);
            return;
        }
        toast.success('Evento cadastrado com sucesso!');
        payload.callback();
        payload.setSubmitting(false);
    } catch {
        toast.error('Ocorreu um erro, por favor, tente novamente.');
        payload.setSubmitting(false);
    }
}

function* loadHolidays({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/holidays/`,
        );
        yield put({
            type: 'LOAD_HOLIDAYS_SUCCESS',
            payload: response.data.data
        });
    } catch {
        yield put({
            type: 'LOAD_HOLIDAYS_FAILED',
            payload: []
        });
    }
}

function* loadIndications({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/users/indications/index`,
        );
        yield put({
            type: 'LOAD_INDICATIONS_SUCCESS',
            payload: response.data.data,
        });
    } catch {
        yield put({
            type: 'LOAD_INDICATIONS_FAILED',
            payload: []
        });
    }
}

function* saveModalIndicationShowed({
    payload
}) {
    yield put({
        type: 'SET_MODAL_INDICATION_SHOWED',
        payload: payload.showed
    });
}

function* loadSignatureDocs({
    payload
}) {
    const params = payload;
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/signatures/`, {
                params
            },
        );
        yield put({
            type: 'LOAD_SIGNATURES_DOCS_SUCCESS',
            payload: {
                items: response.data.items,
                total_items: response.data.total_items,
            },
        });
    } catch {
        yield put({
            type: 'LOAD_SIGNATURES_DOCS_FAILED',
            payload: []
        });
    }
}

function* signatureDocProcess({
    payload
}) {
    try {
        var formData = new FormData();
        formData.append('pdf', payload.file);

        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/signatures/upload_file`,
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-trace-id': traceId,
                },
            },
        );

        if (response.status != 200) {
            toast.error(
                'Ocorreu um erro ao processar o PDF. Por favor, tente mais tarde',
            );
            yield put({
                type: 'SIGNATURE_DOC_PROCESS_FAILED'
            });
            return false;
        }

        yield put({
            type: 'SIGNATURE_DOC_PROCESS_SUCCESS',
            payload: response.data,
        });
    } catch (err) {
        yield put({
            type: 'SIGNATURE_DOC_PROCESS_FAILED',
            payload: {
                success: false,
                msg: 'Ocorreu um erro ao processar este PDF, por favor, tente novamente',
            },
        });
    }
}

function* saveDocToSign({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/signatures/save_doc`,
            payload.formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-trace-id': traceId,
                },
            },
        );

        if (response && response.data && response.data.success === false) {
            toast.error(response.data.msg);
            payload.setSubmitting(false);
            yield put({
                type: 'SAVE_DOC_TO_SIGN_FAILED',
                payload: {}
            });
            return false;
        }

        toast.success('Documento cadastrado com sucesso!');
        payload.setSubmitting(false);
        payload.callback();
        yield put({
            type: 'SAVE_DOC_TO_SIGN_SUCCESS',
            payload: {}
        });
    } catch (err) {
        if (
            err.response.status === 400 &&
            err.response.data.msg === 'FILE_TOO_LARGE'
        ) {
            toast.error(err.response.data.message);

            payload.setSubmitting(false);
            yield put({
                type: 'SAVE_DOC_TO_SIGN_FAILED',
                payload: {}
            });
            return;
        }

        if (
            err.response.status === 403 &&
            err.response.data.msg === 'REACHED_LIMIT'
        ) {
            toast.error(err.response.data.message);

            yield put({
                type: 'SET_MODAL_SUBSCRIPTION',
                payload: {
                    visible: true,
                    title: 'Você atingiu o limite de assinaturas no JusSign!',
                    subtitle: 'Mas você pode continuar utilizando, basta escolher um plano para realizar a assinatura agora mesmo.',
                },
            });

            payload.setSubmitting(false);
            yield put({
                type: 'SAVE_DOC_TO_SIGN_FAILED',
                payload: {}
            });

            return;
        }
        toast.error('Ocorreu um erro, por favor, tente novamente.');
        payload.setSubmitting(false);
        yield put({
            type: 'SAVE_DOC_TO_SIGN_FAILED',
            payload: {}
        });
    }
}

function* triggerSetPublishOnGoogle({
    payload
}) {
    yield put({
        type: 'SET_PUBLISH_ON_GOOGLE',
        payload: payload
    });
}

function* loadSignaturesDashboardData({
    payload
}) {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/signatures/dashboard/`,
        );
        yield put({
            type: 'LOAD_SIGNATURES_DASHBOARD_DATA_SUCCESS',
            payload: response.data,
        });
    } catch {
        yield put({
            type: 'LOAD_SIGNATURES_DASHBOARD_DATA_FAILED',
            payload: []
        });
    }
}

function* signaturesResendDoc({
    payload
}) {
    try {
        var formData = new FormData();
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/signatures/resend/` + payload.doc_id, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        toast.success('Documento reenviado com sucesso!');
    } catch {
        toast.error('Ocorreu um erro, por favor, tente novamente.');
    }
}

function* singaturesCancelDoc({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/signatures/cancel/` + payload.doc_id, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.callback();
        toast.success('Documento cancelado com sucesso!');
    } catch {
        toast.error('Ocorreu um erro, por favor, tente novamente.');
    }
}

function* singaturesDeleteDoc({
    payload
}) {
    try {
        const response = yield axios.post(
            process.env.REACT_APP_API_URL + `/signatures/delete/` + payload.doc_id, {}, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );
        payload.callback();
        toast.success('Documento excluido com sucesso!');
    } catch {
        toast.error('Ocorreu um erro, por favor, tente novamente.');
    }
}

function* loadOpportunitiesCities({
    payload
}) {
    try {
        if (payload.state == '' || payload.state == null) {
            yield put({
                type: 'LOAD_OPPORTUNITIES_CITIES_SUCCESS',
                payload: []
            });
            return true;
        }
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/opportunities/cities/${payload.state}`, {},
        );

        yield put({
            type: 'LOAD_OPPORTUNITIES_CITIES_SUCCESS',
            payload: response.data.data,
        });
        if (payload.callback !== undefined) payload.callback(response.data.data);
    } catch {
        yield put({
            type: 'LOAD_OPPORTUNITIES_CITIES_FAILED'
        });
    }
}

function* OpportunitiesByDate({
    payload
}) {
    try {
        const responseWithState = yield axios.get(
            process.env.REACT_APP_API_URL +
            `/opportunities?item_offset=0&items_per_page=10&recent_days=` +
            payload.value +
            `&state=` +
            payload.state,
            `Authorization: Bearer ${payload.token}`,
        );

        const responseWithoutState = yield axios.get(
            process.env.REACT_APP_API_URL +
            `/opportunities?item_offset=0&items_per_page=10&recent_days=` +
            payload.value,
            `Authorization: Bearer ${payload.token}`,
        );

        yield put({
            type: 'OPPORTUNITIES_BY_DATE_SUCCESS',
            payload: {
                allOpportunities: responseWithoutState.data.data.total_items,
                opportunitiesByState: responseWithState.data.data.total_items,
            },
        });
    } catch (err) {
        throw new Error(err);
    }
}

function* initiateCSATSurvey({
    payload
}) {
    const feature_name = payload.feature_name;
    const pretty_name = payload.pretty_name;

    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_URL}/csat/${feature_name}`,
        );
        const maySendFeedback = response.data.data.maySendFeedback;
        if (maySendFeedback) {
            yield put({
                type: 'SHOW_CSAT_MODAL',
                payload: {
                    feature_name,
                    pretty_name
                },
            });
        }
    } catch (err) {
        console.error(
            `Error verifying CSAT cooldown. [Feature name: ${feature_name} - Pretty name: ${pretty_name}`,
        );
    }
}

function* submitCSATSurvey({
    payload
}) {
    const {
        score,
        feedback_text
    } = payload;

    try {
        yield axios.post(
            `${process.env.REACT_APP_API_URL}/csat`, {
                feature_name: payload.feature_name,
                score,
                feedback_text,
                is_answered: true,
            }, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        yield toast.success('Feedback enviado com sucesso!');
    } catch (err) {
        yield toast.error('Houve um erro ao enviar seu feedback.');
    } finally {
        yield delay(1000);
        yield put({
            type: 'CLOSE_CSAT_MODAL'
        });
    }
}

function* loadGroup() {
    try {
        const response = yield axios.get(
            process.env.REACT_APP_API_URL + `/groups/users`,
        );

        const payload = response.data;

        const group = payload ? .group[0] || undefined;

        const hasSameValue = INITIAL_STATE.group ? .name === group ? .name;

        if (hasSameValue || !payload) {
            return;
        }

        if (group) {
            setLocalStorage('group', group);
        }

        yield put({
            type: 'LOAD_GROUP_SUCCESS',
            payload: group,
        });
    } catch {
        yield put({
            type: 'LOAD_GROUP_FAILED'
        });
    }
}

function* loadJusZapConfiguration({
    payload
}) {
    try {
        const authToken = payload ? .authToken;
        if (!authToken) {
            yield put({
                type: 'LOAD_JUSZAP_CONFIGURATION_FAILED'
            });
            return;
        }

        const response = yield axios.get(
            process.env.REACT_APP_JUSZAP_API_URL + `/juszap-configuration`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        if (!response ? .data) {
            yield put({
                type: 'LOAD_JUSZAP_CONFIGURATION_FAILED'
            });
            return;
        }

        yield put({
            type: 'LOAD_JUSZAP_CONFIGURATION_SUCCESS',
            payload: response.data.data,
        });

        if (payload ? .callback) {
            payload.callback(response.data ? .data);
        }
    } catch (error) {
        yield put({
            type: 'LOAD_JUSZAP_CONFIGURATION_FAILED'
        });
        if (payload ? .callback) {
            payload.callback(null);
        }
    }
}

function* loadJusZapAvailability({
    payload
}) {
    try {
        const authToken = payload ? .authToken;
        if (!authToken) {
            yield put({
                type: 'LOAD_JUSZAP_AVAILABILITY_FAILED'
            });
            return;
        }

        const response = yield axios.get(
            process.env.REACT_APP_JUSZAP_API_URL +
            `/juszap-configuration/availability`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        if (!response ? .data) {
            yield put({
                type: 'LOAD_JUSZAP_AVAILABILITY_FAILED'
            });
            return;
        }

        yield put({
            type: 'LOAD_JUSZAP_AVAILABILITY_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        console.error('Error loading juszap availability:', error);
        yield put({
            type: 'LOAD_JUSZAP_AVAILABILITY_FAILED'
        });
    }
}

function* loadOfferedPlanEligibilityOnSubscriptionLoaded({
    payload
}) {
    const subscriptionData = payload ? ? {};
    const subscriptionId =
        subscriptionData ? .info ? .subscription_id ? ?
        subscriptionData ? .subscription_info ? .subscription_id;
    const authToken = yield select(state => state.auth ? .authToken);

    const hasRequiredInputs = Boolean(subscriptionId) && Boolean(authToken);
    if (!hasRequiredInputs) {
        yield put({
            type: 'LOAD_OFFERED_PLAN_ELIGIBILITY_FAILED'
        });
        return;
    }

    yield put({
        type: 'LOAD_OFFERED_PLAN_ELIGIBILITY'
    });

    try {
        const response = yield axios.get(
            `${process.env.REACT_APP_API_URL}/subscription/offered-plans/${subscriptionId}`, {
                headers: {
                    'x-trace-id': traceId
                }
            },
        );

        const offeredPlans = response ? .data ? .data;
        const isNonEmptyArray =
            Array.isArray(offeredPlans) && offeredPlans.length > 0;

        if (isNonEmptyArray) {
            yield put({
                type: 'LOAD_OFFERED_PLAN_ELIGIBILITY_SUCCESS',
                payload: offeredPlans
            });
        } else {
            yield put({
                type: 'LOAD_OFFERED_PLAN_ELIGIBILITY_FAILED'
            });
        }
    } catch {
        yield put({
            type: 'LOAD_OFFERED_PLAN_ELIGIBILITY_FAILED'
        });
    }
}

function* clearOfferedPlanEligibilityOnSubscriptionFailed() {
    yield put({
        type: 'LOAD_OFFERED_PLAN_ELIGIBILITY_FAILED'
    });
}

export function* saga() {
    yield takeLatest(
        'LOAD_SUBSCRIPTION_STATUS_SUCCESS',
        loadOfferedPlanEligibilityOnSubscriptionLoaded,
    );
    yield takeLatest(
        'LOAD_SUBSCRIPTION_STATUS_FAILED',
        clearOfferedPlanEligibilityOnSubscriptionFailed,
    );
    yield takeLatest('ACTIVATE_ACCOUNT', activateAccount);
    yield takeLatest('LOAD_CARDS', loadCards);
    yield takeLatest('SET_PRIMARY_CARD', setPrimaryCard);
    yield takeLatest('SAVE_PROFILE', saveProfile);
    yield takeLatest('QUERY_CHECKOUT', queryCheckout);
    yield takeLatest('LOAD_DASHBOARD', loadDashboard);
    yield takeLatest('QUERY_VALIDATE_DOCUMENT', queryValidateDocument);
    yield takeLatest('LOAD_INSTITUTIONS', loadInstitutions);
    yield takeLatest('LOAD_PETITION', loadPetition);
    yield takeLatest('LOAD_PETITIONS', loadPetitions);
    yield takeLatest('LOAD_PETITIONS_CATEGORIES', loadPetitionsCategories);
    yield takeLatest(
        'LOAD_PETITIONS_CATEGORIES_FILTERS',
        loadPetitionsCategoriesFilters,
    );
    yield takeLatest('LOAD_PETITIONS_CATEGORY_TYPES', loadPetitionsCategoryTypes);
    yield takeLatest('LOAD_SIMULATION', loadSimulation);
    yield takeLatest('LOAD_CUSTOMERS', loadCustomers);
    yield takeLatest('LOAD_USERS', loadUsers);
    yield takeLatest('LOAD_USER', loadUser);
    yield takeLatest('LOAD_INDEXES', loadIndexes);
    yield takeLatest('REPORT_REVIEW', reportReview);
    yield takeLatest('REPORT_CORRECTION', reportCorrection);
    yield takeLatest('REPORT_CORRECTION_FGTS', reportCorrectionFgts);
    yield takeLatest('REPORT_CORRECTION_COMPLETE', reportCorrectionComplete);
    yield takeLatest('LOAD_STATES', loadStates);
    yield takeLatest('LOAD_CITIES', loadCities);
    yield takeLatest('LOAD_OPPORTUNITIES_CITIES', loadOpportunitiesCities);
    yield takeLatest('SAVE_CUSTOMER', saveCustomer);
    yield takeLatest('LOAD_CUSTOMER', loadCustomer);
    yield takeLatest('LOAD_JURISPRUDENCES', loadJurisprudences);
    yield takeLatest('LOAD_JURISPRUDENCE', loadJurisprudence);
    yield takeLatest('LOAD_JURISPRUDENCE_FULLTEXT', loadJurisprudenceFullText);
    yield takeLatest('QUERY_DATA', queryData);
    yield takeLatest('LOAD_PROFESSIONS', loadProfessions);
    yield takeLatest('SAVE_USER', saveUser);
    yield takeLatest('SAVE_CLIENT_USER', saveClientUser);
    yield takeLatest('ADMIN_SAVE_USER', adminSaveUser);
    yield takeLatest('SAVE_OPPORTUNITY', saveOpportunity);
    yield takeLatest('LOAD_OPPORTUNITIES', loadOpportunities);
    yield takeLatest('LOAD_MY_OPPORTUNITIES', loadMyOpportunities);
    yield takeLatest(
        'LOAD_REMAINING_OPPORTUNITY_UNLOCKS',
        loadRemainingOpportunityUnlocks,
    );
    yield takeLatest('UNLOCK_OPPORTUNITY', unlockOpportunity);
    yield takeLatest('FGTS_PROCESS', fgtsProcess);
    yield takeLatest('CNIS_PROCESS', cnisProcess);
    yield takeLatest('LOAD_CALCULATIONS', loadCalculations);
    yield takeLatest('LOAD_INSTALLMENTS', loadInstallments);
    yield takeLatest('REPORT_PREV', reportPrev);
    yield takeLatest('LOAD_COUPOM', loadCoupom);
    yield takeLatest('REPORT_CHILDCARE', reportChildcare);
    yield takeLatest('REPORT_RENT', reportRent);
    yield takeLatest('LOAD_MINIMUM_WAGES', loadMinimumWages);
    yield takeLatest('LOAD_INSS_TETOS', loadInssTetos);
    yield takeLatest('SAVE_CARD', saveCard);
    yield takeLatest('LOAD_RENT_INSTALLMENTS', loadRentInstallments);
    yield takeLatest('UPDATE_RENT_INSTALLMENTS', updateRentInstallments);
    yield takeLatest('LOAD_NOTIFICATIONS', loadNotifications);
    yield takeLatest('SET_NOTIFICATIONS_READ', setNotificationRead);
    yield takeLatest('LOAD_OPPORTUNITY_TYPES', loadOpportunityTypes);
    yield takeLatest('SEND_PDF_TO_SPLIT', sendPdfToSplit);
    yield takeLatest('LOAD_EVENTS', loadEvents);
    yield takeLatest('LOAD_EVENT', loadEvent);
    yield takeLatest('SAVE_EVENT', saveEvent);
    yield takeLatest('LOAD_EVENT_DEADLINES', loadEventDeadlines);
    yield takeLatest('CANCEL_EVENT', cancelEvent);
    yield takeLatest('LOAD_HOLIDAYS', loadHolidays);
    yield takeLatest('LOAD_INDICATIONS', loadIndications);
    yield takeLatest('SAVE_MODAL_INDICATION_SHOWED', saveModalIndicationShowed);
    yield takeLatest('LOAD_SIGNATURES_DOCS', loadSignatureDocs);
    yield takeLatest('SIGNATURE_DOC_PROCESS', signatureDocProcess);
    yield takeLatest('LOAD_JUSZAP_CONFIGURATION', loadJusZapConfiguration);
    yield takeLatest('LOAD_JUSZAP_AVAILABILITY', loadJusZapAvailability);
    yield takeLatest('SAVE_DOC_TO_SIGN', saveDocToSign);
    yield takeLatest('SIGNATURES_RESEND_DOC', signaturesResendDoc);
    yield takeLatest('SIGNATURES_CANCEL_DOC', singaturesCancelDoc);
    yield takeLatest('SIGNATURES_DELETE_DOC', singaturesDeleteDoc);
    yield takeLatest('LOAD_DASHBOARD_STEPS', loadingDashboardSteps);
    yield takeLatest('SAVE_CASE_ATTACHMENT', saveCaseAttachment);
    yield takeLatest('CREATE_CASE', createCase);

    yield takeLatest(
        'LOAD_SIGNATURES_DASHBOARD_DATA',
        loadSignaturesDashboardData,
    );

    yield takeLatest('TRIGGER_SET_PUBLISH_ON_GOOGLE', triggerSetPublishOnGoogle);
    yield takeLatest('OPPORTUNITIES_BY_DATE', OpportunitiesByDate);
    yield takeLatest('INITIATE_CSAT_SURVEY', initiateCSATSurvey);
    yield takeLatest('SUBMIT_CSAT_SURVEY', submitCSATSurvey);
    yield takeLatest('LOAD_GROUP', loadGroup);
}