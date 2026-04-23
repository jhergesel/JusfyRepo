import {
    useState,
    useEffect
} from "react";
import {
    toast
} from "react-toastify";
import {
    JUSGPT_ACCEPTED_FILE_EXTENSIONS
} from "../config/upload";

export const useDragDrop = (
    waitingForFile,
    setWaitingForFile,
    setChatMessages,
    handleSendMessage,
    setSelectedFiles,
    setPreviewUrls,
    callbacks = {}
) => {
    const [isDragOver, setIsDragOver] = useState(false);

    useEffect(() => {
        let dragCounter = 0;

        const handleDragEnter = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dragCounter++;

            // Só mostra o overlay se há arquivos sendo arrastados
            if (e.dataTransfer.types && e.dataTransfer.types.includes('Files')) {
                setIsDragOver(true);
            }
        };

        const handleDragLeave = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dragCounter--;

            // Só esconde o overlay quando realmente sai da janela
            if (dragCounter === 0) {
                setIsDragOver(false);
            }
        };

        const handleDragOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Permite o drop
            e.dataTransfer.dropEffect = 'copy';
        };

        const handleDrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dragCounter = 0;
            setIsDragOver(false);

            const files = Array.from(e.dataTransfer.files);

            if (files.length > 0) {
                const maxSize = 50 * 1024 * 1024;

                const validFiles = [];

                for (const file of files) {
                    // Validação de tamanho
                    if (file.size > maxSize) {
                        toast.error(`O arquivo "${file.name}" excede o tamanho máximo permitido de 50 MB.`);

                        // Evento de erro no drag and drop
                        if (callbacks.onFileUploadError) {
                            callbacks.onFileUploadError({
                                error_type: 'size_limit',
                                file_name: file.name,
                                file_type: file.type,
                                file_size: file.size
                            });
                        }

                        continue;
                    }

                    // Validação de tipos de arquivo aceitos
                    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

                    if (!JUSGPT_ACCEPTED_FILE_EXTENSIONS.includes(fileExtension)) {
                        toast.error(`Tipo de arquivo "${file.name}" não suportado.`);

                        // Evento de erro no drag and drop
                        if (callbacks.onFileUploadError) {
                            callbacks.onFileUploadError({
                                error_type: 'invalid_type',
                                file_name: file.name,
                                file_type: file.type,
                                file_size: file.size
                            });
                        }

                        continue;
                    }

                    validFiles.push(file);
                }

                // Retorna os arquivos válidos para serem processados pelo componente pai
                return validFiles;
            }

            return [];
        };

        // Função para processar o drop com todas as dependências
        const handleDropWithCallback = (e) => {
            const files = handleDrop(e);

            if (files.length > 0) {
                // Chama callback personalizado se fornecido
                if (typeof handleSendMessage === 'function') {
                    toast.success(`${files.length} arquivo(s) adicionado(s) com sucesso!`);

                    // Evento de sucesso no drag and drop para cada arquivo
                    files.forEach(file => {
                        if (callbacks.onFileUploaded) {
                            callbacks.onFileUploaded({
                                file_name: file.name,
                                file_type: file.type,
                                file_size: file.size,
                                upload_context: 'drag_drop',
                                upload_success: true
                            });
                        }
                    });

                    // Se está aguardando arquivo, envia automaticamente
                    if (waitingForFile) {
                        setTimeout(() => {
                            // Remove a propriedade isFileRequest da última mensagem
                            setChatMessages(prev => {
                                const updatedMessages = [...prev];
                                if (updatedMessages.length > 0 && updatedMessages[updatedMessages.length - 1].isFileRequest) {
                                    const lastMessage = { ...updatedMessages[updatedMessages.length - 1]
                                    };
                                    delete lastMessage.isFileRequest;
                                    updatedMessages[updatedMessages.length - 1] = lastMessage;
                                }
                                return updatedMessages;
                            });
                            // Define os arquivos e envia
                            setSelectedFiles(files);
                            const previews = files.map(file =>
                                file.type.startsWith("image/") ? URL.createObjectURL(file) : null
                            );
                            setPreviewUrls(previews);
                            handleSendMessage("Aqui está(ão) o(s) documento(s) para análise.", true, null);
                        }, 100);
                        setWaitingForFile(false);
                    } else {
                        // Se não está aguardando arquivo, apenas define os arquivos selecionados
                        setSelectedFiles(prev => [...prev, ...files]);
                        const previews = files.map(file =>
                            file.type.startsWith("image/") ? URL.createObjectURL(file) : null
                        );
                        setPreviewUrls(prev => [...prev, ...previews]);
                    }
                }
            }
        };

        // Adiciona os listeners ao documento
        document.addEventListener('dragenter', handleDragEnter);
        document.addEventListener('dragleave', handleDragLeave);
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('drop', handleDropWithCallback);

        return () => {
            document.removeEventListener('dragenter', handleDragEnter);
            document.removeEventListener('dragleave', handleDragLeave);
            document.removeEventListener('dragover', handleDragOver);
            document.removeEventListener('drop', handleDropWithCallback);
        };
    }, [waitingForFile, setWaitingForFile, setChatMessages, handleSendMessage, setSelectedFiles, setPreviewUrls, callbacks]);

    return {
        isDragOver
    };
};