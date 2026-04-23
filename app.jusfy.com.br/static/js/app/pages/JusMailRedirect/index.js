import React, {
    useState,
    useEffect
} from 'react';
import Loading from 'react-loading';
import {
    getJusMailRedirect
} from './api';
import {
    useHistory
} from 'react-router-dom';
import Button from '../../components/flat/ui/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const JusMailRedirect = () => {
        const history = useHistory();
        const [loading, setLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        useEffect(() => {
            const handleJusMailRedirect = async () => {
                try {
                    const html = await getJusMailRedirect();

                    const formWindow = window.open('', '_self')
                    if (!formWindow) {
                        history.push('/login');
                        return;
                    }

                    formWindow.document.open();
                    formWindow.document.write(html);
                    formWindow.document.close();
                } catch (error) {
                    console.error('Error handling JusMailRedirect:', error);
                    setHasError(true);
                } finally {
                    setLoading(false);
                }
            };
            handleJusMailRedirect();
        }, [history]);

        const handleBackToJusfy = () => {
            history.push('/');
        };

        if (hasError) {
            return ( <
                div style = {
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        padding: '20px'
                    }
                } >
                <
                div style = {
                    {
                        background: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                        maxWidth: '480px',
                        width: '100%',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }
                } > { /* Icon */ } <
                div style = {
                    {
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        position: 'relative',
                        zIndex: 1
                    }
                } >
                <
                LockIcon sx = {
                    {
                        color: '#fff !important',
                        fontSize: '36px'
                    }
                }
                /> <
                /div>

                { /* Title */ } <
                h2 style = {
                    {
                        margin: '0 0 16px 0',
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#2D3748',
                        fontFamily: '"Poppins", sans-serif',
                        position: 'relative',
                        zIndex: 1
                    }
                } >
                Acesso Expirado <
                /h2>

                { /* Subtitle */ } <
                p style = {
                    {
                        margin: '0 0 32px 0',
                        fontSize: '16px',
                        color: '#718096',
                        lineHeight: '1.6',
                        fontFamily: '"Inter", sans-serif',
                        position: 'relative',
                        zIndex: 1
                    }
                } >
                Seu acesso ao JusMail expirou.Entre em contato com o suporte para reativar seu acesso e continuar utilizando o seu e - mail profissional. <
                /p>

                { /* Support info */ } <
                div style = {
                    {
                        background: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)',
                        borderRadius: '12px',
                        padding: '20px',
                        margin: '0 0 32px 0',
                        border: '1px solid #E2E8F0',
                        position: 'relative',
                        zIndex: 1
                    }
                } >
                <
                div style = {
                    {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        marginBottom: '12px'
                    }
                } >
                <
                div style = {
                    {
                        width: '32px',
                        height: '32px',
                        background: '#01AB7D',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                } >
                <
                GroupIcon sx = {
                    {
                        color: '#fff !important',
                        fontSize: '18px'
                    }
                }
                /> <
                /div> <
                span style = {
                    {
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#4A5568'
                    }
                } >
                Suporte Jusfy <
                /span> <
                /div> <
                p style = {
                    {
                        margin: '0 0 16px 0',
                        fontSize: '13px',
                        color: '#718096',
                        lineHeight: '1.4'
                    }
                } >
                Nossa equipe está pronta para ajudar você a reativar seu acesso rapidamente <
                /p>

                { /* WhatsApp Button */ } <
                Button startIcon = { < WhatsAppIcon sx = {
                        {
                            color: '#fff !important',
                            fontSize: '18px'
                        }
                    }
                    />}
                    backgroundColor = "#01AB7D"
                    color = "white"
                    padding = "12px 24px"
                    borderRadius = "8px"
                    width = "100%"
                    onClick = {
                        () => window.open("https://jusfy.com.br/contato/", "_blank")
                    }
                    hoverBackgroundColor = "#019973" >
                    Falar com Suporte <
                    /Button> <
                    /div>

                    { /* Spacing */ } <
                    div style = {
                        {
                            height: '20px'
                        }
                    }
                    />

                    { /* Back Button */ } <
                    Button
                    backgroundColor = "#01AB7D"
                    color = "white"
                    padding = "16px 32px"
                    borderRadius = "8px"
                    width = "100%"
                    onClick = {
                        handleBackToJusfy
                    }
                    hoverBackgroundColor = "#019973"
                    style = {
                        {
                            fontSize: '16px',
                            fontWeight: '600'
                        }
                    } >
                    <
                    div style = {
                        {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }
                    } >
                    <
                    ArrowBackIcon sx = {
                        {
                            color: '#fff !important',
                            fontSize: '18px'
                        }
                    }
                    />
                    Voltar para Jusfy <
                    /div> <
                    /Button> <
                    /div> <
                    /div>
                );
            }

            if (loading) {
                return ( <
                    div style = {
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            height: '100vh'
                        }
                    } >
                    <
                    Loading type = "spin"
                    color = "#00AB7D"
                    width = "30px"
                    height = "30px" / >
                    Redirecionando para o JusMail...
                    <
                    /div>
                );
            }

            return null;
        };

        export default JusMailRedirect;