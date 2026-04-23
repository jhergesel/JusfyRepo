/**
 * Eventos do Segment Analytics para o JusGPT
 * Centraliza todos os eventos de tracking relacionados ao chat JusGPT
 */

const EventsSegmentJusGPT = () => {

    /**
     * Evento disparado quando uma nova conversa é criada
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa criada
     * @param {boolean} properties.is_quick_chat - Se foi criada via QuickChat
     * @param {string} properties.quick_chat_type - Tipo do QuickChat (se aplicável)
     */
    const trackNewChatCreated = (properties = {}) => {
        window.analytics.track("Chat Started", {
            chat_id: properties.chat_id,
            is_quick_chat: properties.is_quick_chat || false,
            quick_chat_type: properties.quick_chat_type || null,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando uma mensagem é enviada
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa
     * @param {boolean} properties.has_file - Se a mensagem contém arquivo
     * @param {string} properties.file_type - Tipo do arquivo (se aplicável)
     * @param {number} properties.message_length - Tamanho da mensagem em caracteres
     * @param {boolean} properties.is_quick_chat - Se é um QuickChat
     */
    const trackMessageSent = (properties = {}) => {
        window.analytics.track("Chat Message Sent", {
            chat_id: properties.chat_id,
            has_file: properties.has_file || false,
            file_type: properties.file_type || null,
            message_length: properties.message_length || 0,
            is_quick_chat: properties.is_quick_chat || false,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando um QuickChat é clicado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.quick_chat_title - Título do QuickChat
     * @param {string} properties.quick_chat_prompt - Prompt do QuickChat
     * @param {boolean} properties.requires_file - Se o QuickChat requer arquivo
     */
    const trackQuickChatClicked = (properties = {}) => {
        window.analytics.track("JusGPT QuickChat Clicked", {
            quick_chat_title: properties.quick_chat_title,
            quick_chat_prompt: properties.quick_chat_prompt,
            requires_file: properties.requires_file || false,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando um arquivo é enviado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.file_name - Nome do arquivo
     * @param {string} properties.file_type - Tipo do arquivo
     * @param {number} properties.file_size - Tamanho do arquivo em bytes
     * @param {string} properties.upload_context - Contexto do upload (manual, drag_drop, quick_chat)
     * @param {boolean} properties.upload_success - Se o upload foi bem-sucedido
     */
    const trackFileUploaded = (properties = {}) => {
        window.analytics.track("JusGPT File Uploaded", {
            file_name: properties.file_name,
            file_type: properties.file_type,
            file_size: properties.file_size,
            upload_context: properties.upload_context || 'manual',
            upload_success: properties.upload_success || true,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando um arquivo DOCX é solicitado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa
     * @param {number} properties.text_length - Tamanho do texto a ser convertido
     */
    const trackDocxRequested = (properties = {}) => {
        window.analytics.track("Docx File Requested", {
            chat_id: properties.chat_id,
            text_length: properties.text_length || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando um arquivo DOCX é recebido/baixado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa
     * @param {boolean} properties.download_success - Se o download foi bem-sucedido
     */
    const trackDocxReceived = (properties = {}) => {
        window.analytics.track("Docx File Received", {
            chat_id: properties.chat_id,
            download_success: properties.download_success || true,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando texto é copiado para área de transferência
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa
     * @param {number} properties.text_length - Tamanho do texto copiado
     * @param {string} properties.copy_method - Método usado (clipboard_api, fallback)
     */
    const trackTextCopied = (properties = {}) => {
        window.analytics.track("JusGPT Text Copied", {
            chat_id: properties.chat_id,
            text_length: properties.text_length || 0,
            copy_method: properties.copy_method || 'clipboard_api',
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando uma conversa é excluída
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa excluída
     * @param {boolean} properties.delete_success - Se a exclusão foi bem-sucedida
     */
    const trackChatDeleted = (properties = {}) => {
        window.analytics.track("JusGPT Chat Deleted", {
            chat_id: properties.chat_id,
            delete_success: properties.delete_success || true,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando a busca de conversas é utilizada
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.search_query - Termo pesquisado
     * @param {number} properties.results_count - Número de resultados encontrados
     */
    const trackChatSearchPerformed = (properties = {}) => {
        window.analytics.track("JusGPT Chat Search Performed", {
            search_query: properties.search_query,
            results_count: properties.results_count || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando uma conversa é selecionada via busca
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa selecionada
     * @param {string} properties.search_query - Termo que levou à seleção
     * @param {number} properties.result_position - Posição do resultado na lista
     */
    const trackChatSelectedFromSearch = (properties = {}) => {
        window.analytics.track("JusGPT Chat Selected From Search", {
            chat_id: properties.chat_id,
            search_query: properties.search_query,
            result_position: properties.result_position || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando o WhatsApp é aberto para suporte
     */
    const trackWhatsAppSupportOpened = () => {
        window.analytics.track("Whatsapp Button Clicked", {
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando um botão do WhatsApp é clicado (versão detalhada)
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.phone_number - Número de telefone do WhatsApp
     * @param {string} properties.contact_type - Tipo de contato (support, commercial, generic)
     * @param {string} properties.button_label - Label do botão clicado
     * @param {string} properties.chat_id - ID da conversa (se disponível)
     */
    const trackWhatsAppButtonClicked = (properties = {}) => {
        window.analytics.track("JusGPT WhatsApp Button Clicked", {
            phone_number: properties.phone_number,
            contact_type: properties.contact_type || 'generic',
            button_label: properties.button_label,
            chat_id: properties.chat_id || null,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando há erro no upload de arquivo
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.error_type - Tipo do erro (size_limit, invalid_type, upload_failed)
     * @param {string} properties.file_name - Nome do arquivo
     * @param {string} properties.file_type - Tipo do arquivo
     * @param {number} properties.file_size - Tamanho do arquivo
     */
    const trackFileUploadError = (properties = {}) => {
        window.analytics.track("JusGPT File Upload Error", {
            error_type: properties.error_type,
            file_name: properties.file_name,
            file_type: properties.file_type,
            file_size: properties.file_size,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando uma conversa é carregada
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID da conversa carregada
     * @param {number} properties.messages_count - Número de mensagens na conversa
     */
    const trackChatLoaded = (properties = {}) => {
        window.analytics.track("JusGPT Chat Loaded", {
            chat_id: properties.chat_id,
            messages_count: properties.messages_count || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando a sidebar é expandida ou minimizada
     * @param {Object} properties - Propriedades do evento
     * @param {boolean} properties.is_open - Se a sidebar foi aberta (true) ou fechada (false)
     * @param {string} properties.device_type - Tipo de dispositivo (mobile, desktop)
     */
    const trackSidebarToggled = (properties = {}) => {
        window.analytics.track("JusGPT Sidebar Toggled", {
            is_open: properties.is_open,
            device_type: properties.device_type || 'desktop',
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando o botão "Ver mais" ou "Ver menos" é clicado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.section - Seção onde o botão foi clicado (ex: 'chatRecent')
     * @param {boolean} properties.expanded - Se foi expandido (true) ou recolhido (false)
     * @param {number} properties.items_count - Número de itens na seção
     */
    const trackShowMoreToggled = (properties = {}) => {
        window.analytics.track("JusGPT Show More Toggled", {
            section: properties.section,
            expanded: properties.expanded,
            items_count: properties.items_count || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando o drawer for inicializado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.tag - Tag 'HELP | JUSFINDER'
     * @param {string} properties.context - Contexto repassado para a IA
     */
    const trackDrawerLaunched = (properties = {}) => {
        window.analytics.track("JusGPT Drawer Launched", {
            tag: properties.tag,
            context: properties.context,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando o drawer for inicializado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.tag - Tag 'HELP | JUSFINDER'
     */
    const trackDrawerRedirect = (properties = {}) => {
        window.analytics.track("JusGPT Drawer Redirect", {
            tag: properties.tag,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando o drawer for inicializado
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.tag - Tag 'HELP | JUSFINDER'
     * @param {string} properties.chat_id - Id da conversa selecionada
     */
    const trackDrawerConversationChanged = (properties = {}) => {
        window.analytics.track("JusGPT Drawer Conversation Changed", {
            tag: properties.tag,
            chat_id: properties.chat_id,
            timestamp: new Date().toISOString()
        });
    };



    /**
     * Evento disparado quando há erro de timeout na resposta
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.chat_id - ID do chat onde ocorreu o timeout
     * @param {string} properties.error_type - Tipo do erro (timeout, processing_error)
     * @param {number} properties.wait_time - Tempo de espera em segundos
     */
    const trackResponseError = (properties = {}) => {
        window.analytics.track("JusGPT Response Error", {
            chat_id: properties.chat_id,
            error_type: properties.error_type || 'timeout',
            wait_time: properties.wait_time || 0,
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento centralizado para ações da Central de Ajuda
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.action - Ação realizada (opened, assistant_clicked, support_clicked, manuals_clicked)
     * @param {string} properties.source - Origem da ação (help_center_modal, chat_launcher)
     */
    const trackHelpCenterAction = (properties = {}) => {
        window.analytics.track("Help Center Action", {
            action: properties.action,
            source: properties.source || 'help_center_modal',
            timestamp: new Date().toISOString()
        });
    };

    /**
     * Evento disparado quando uma Quick Action é clicada no Drawer de ajuda
     * @param {Object} properties - Propriedades do evento
     * @param {string} properties.action_label - Label da ação clicada (Planos, Pagamentos, etc)
     * @param {string} properties.action_prompt - Prompt enviado ao clicar
     */
    const trackDrawerQuickActionClicked = (properties = {}) => {
        window.analytics.track("JusGPT Drawer Quick Action Clicked", {
            action_label: properties.action_label,
            action_prompt: properties.action_prompt,
            timestamp: new Date().toISOString()
        });
    };

    return {
        trackNewChatCreated,
        trackMessageSent,
        trackQuickChatClicked,
        trackFileUploaded,
        trackDocxRequested,
        trackDocxReceived,
        trackTextCopied,
        trackChatDeleted,
        trackChatSearchPerformed,
        trackChatSelectedFromSearch,
        trackWhatsAppSupportOpened,
        trackWhatsAppButtonClicked,
        trackFileUploadError,
        trackChatLoaded,
        trackSidebarToggled,
        trackShowMoreToggled,
        trackDrawerLaunched,
        trackDrawerRedirect,
        trackDrawerConversationChanged,
        trackResponseError,
        trackHelpCenterAction,
        trackDrawerQuickActionClicked
    };
};

export {
    EventsSegmentJusGPT
};