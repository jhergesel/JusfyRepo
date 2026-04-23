import {
    useState,
    useEffect,
    useRef,
    useCallback
} from "react";

export const useScrollToBottom = (chatMessages, chatId) => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Ref interno para acessar o elemento DOM nos handlers (scrollToBottom, etc.)
    const messagesRef = useRef(null);
    // Armazena o nó DOM real (não booleano) para que o useEffect do listener
    // re-execute sempre que a identidade do elemento mudar
    const [containerNode, setContainerNode] = useState(null);

    // Callback ref: atualiza messagesRef.current E avisa o React quando o elemento entra/sai do DOM
    const setMessagesRef = useCallback(node => {
        messagesRef.current = node;
        setContainerNode(node);
    }, []);

    const prevChatIdRef = useRef(chatId);
    const prevMessagesLengthRef = useRef(0);
    // Ref para evitar que checkScrollPosition dependa de chatMessages diretamente,
    // prevenindo re-registro do listener a cada nova mensagem
    const chatMessagesLengthRef = useRef(chatMessages.length);

    useEffect(() => {
        chatMessagesLengthRef.current = chatMessages.length;
    }, [chatMessages]);

    const scrollToBottom = useCallback((behavior = 'smooth') => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: behavior,
            });
            setShowScrollButton(false);
        }
    }, []);

    // Referência estável: não depende de chatMessages, lê via ref
    const checkScrollPosition = useCallback(() => {
        if (messagesRef.current && chatMessagesLengthRef.current > 2) {
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = messagesRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
            const hasScrollableContent = scrollHeight > clientHeight;
            setShowScrollButton(!isAtBottom && hasScrollableContent);
        } else {
            setShowScrollButton(false);
        }
    }, []);

    // Aguarda o DOM atualizar e então scrolla ao final
    const scrollAfterRender = useCallback((behavior = 'auto') => {
        // Duplo rAF garante que o browser já fez layout + paint
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToBottom(behavior);
                checkScrollPosition();
            });
        });
    }, [scrollToBottom, checkScrollPosition]);

    // Scroll ao trocar de conversa OU ao receber mensagens nessa conversa
    useEffect(() => {
        if (!chatMessages.length) return;

        const chatChanged = chatId !== prevChatIdRef.current;

        if (chatChanged) {
            // Conversa trocou e mensagens já chegaram: scroll instantâneo
            prevChatIdRef.current = chatId;
            scrollAfterRender('auto');
        } else if (chatMessages.length > prevMessagesLengthRef.current) {
            // Nova mensagem na mesma conversa: scroll suave
            scrollAfterRender('smooth');
        }

        prevMessagesLengthRef.current = chatMessages.length;
    }, [chatMessages, chatId, scrollAfterRender]);

    // Atualizar ref quando chatId muda sem mensagens (reset)
    useEffect(() => {
        prevChatIdRef.current = chatId;
        prevMessagesLengthRef.current = 0;
    }, [chatId]);

    // Listener de scroll do usuário
    // Depende de containerNode: re-executa quando a identidade do elemento DOM muda,
    // garantindo que o listener seja sempre anexado ao nó correto
    // e o cleanup remova do nó antigo (capturado na closure)
    useEffect(() => {
        if (!containerNode) return;
        containerNode.addEventListener('scroll', checkScrollPosition);
        return () => {
            containerNode.removeEventListener('scroll', checkScrollPosition);
        };
    }, [containerNode, checkScrollPosition]);

    return {
        messagesRef: setMessagesRef,
        showScrollButton,
        scrollToBottom,
        setShowScrollButton
    };
};