import React from "react";

const PRIVACY_PDF_URL =
    "https://jusfy.com.br/wp-content/uploads/2026/02/Jusfy-Politica-de-Privacidade-Atualizada.pdf";

const styles = {
    page: {
        minHeight: "100vh",
        fontFamily: "'Noto Sans', sans-serif",
        padding: "40px 20px",
    },
    container: {
        maxWidth: 860,
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: "48px 52px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    },
    header: {
        textAlign: "center",
        marginBottom: 40
    },
    logo: {
        height: 40,
        marginBottom: 24
    },
    title: {
        fontSize: 26,
        fontWeight: 700,
        color: "#111219",
        margin: "0 0 8px"
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        margin: 0
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: 700,
        color: "#111219",
        margin: "32px 0 12px",
        borderBottom: "1px solid #eee",
        paddingBottom: 8,
    },
    p: {
        fontSize: 14,
        color: "#333",
        lineHeight: 1.8,
        margin: "0 0 12px",
        textAlign: "justify"
    },
    ul: {
        margin: "8px 0 16px 20px",
        padding: 0
    },
    li: {
        fontSize: 14,
        color: "#333",
        lineHeight: 1.8,
        marginBottom: 4
    },
    pdfLink: {
        display: "inline-block",
        backgroundColor: "#01AB7D",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
        padding: "12px 32px",
        borderRadius: 8,
        textDecoration: "none",
        marginTop: 8,
    },
    footer: {
        marginTop: 48,
        textAlign: "center",
        fontSize: 13,
        color: "#999",
        borderTop: "1px solid #eee",
        paddingTop: 24
    },
};

const slugify = (text) => text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const S = ({
    children
}) => < h2 id = {
    slugify(children)
}
style = {
    styles.sectionTitle
} > {
    children
} < /h2>;
const P = ({
    children
}) => < p style = {
    styles.p
} > {
    children
} < /p>;
const UL = ({
    items
}) => ( <
    ul style = {
        styles.ul
    } > {
        items.map((item, i) => ( <
            li key = {
                i
            }
            style = {
                styles.li
            } > {
                item
            } < /li>
        ))
    } <
    /ul>
);

const PrivacyPolicy = () => {
    return ( <
        div style = {
            styles.page
        } >
        <
        div style = {
            styles.container
        } >
        <
        div style = {
            styles.header
        } >
        <
        img src = "/media/logos/jusfy-logo.svg"
        alt = "Jusfy"
        style = {
            styles.logo
        }
        onError = {
            (e) => {
                e.target.style.display = "none";
            }
        }
        /> <
        h1 style = {
            styles.title
        } > TERMOS DE USO– IA ASSISTENTE WHATSAPP(JUSFY) < /h1> <
        p style = {
            styles.subtitle
        } > Política de Privacidade e Termos de Uso < /p> <
        /div>

        { /* ÍNDICE */ } <
        nav style = {
            {
                backgroundColor: "#f7f8fa",
                borderRadius: 8,
                padding: "24px 32px",
                marginBottom: 32,
            }
        } >
        <
        h3 style = {
            {
                fontSize: 15,
                fontWeight: 700,
                color: "#111219",
                margin: "0 0 12px"
            }
        } > Índice < /h3> <
        ol style = {
            {
                margin: 0,
                padding: "0 0 0 20px",
                listStyleType: "decimal"
            }
        } > {
            [
                ["1-consideracoes-iniciais", "Considerações Iniciais"],
                ["2-finalidade-e-funcionamento", "Finalidade e Funcionamento"],
                ["3-responsabilidades-do-usuario", "Responsabilidades do Usuário"],
                ["4-limitacao-de-responsabilidade", "Limitação de Responsabilidade"],
                ["5-privacidade-e-tratamento-de-dados", "Privacidade e Tratamento de Dados"],
                ["5-15-integracao-com-conta-google-e-google-calendar", "Integração com Conta Google e Google Calendar"],
                ["6-suporte-e-disponibilidade", "Suporte e Disponibilidade"],
                ["7-propriedade-intelectual", "Propriedade Intelectual"],
                ["8-cancelamento-e-encerramento", "Cancelamento e Encerramento"],
                ["9-condicoes-comerciais-e-cobranca", "Condições Comerciais e Cobrança"],
                ["10-disposicoes-finais", "Disposições Finais"],
            ].map(([id, label], i) => ( <
                li key = {
                    i
                }
                style = {
                    {
                        marginBottom: 6
                    }
                } >
                <
                a href = {
                    `#${id}`
                }
                style = {
                    {
                        fontSize: 14,
                        color: "#01AB7D",
                        textDecoration: "none"
                    }
                } >
                {
                    label
                } <
                /a> <
                /li>
            ))
        } <
        /ol> <
        /nav>

        { /* SEÇÃO 1 */ } <
        S > 1. CONSIDERAÇÕES INICIAIS < /S> <
        P > Estes Termos de Uso("Termos") regulam a utilização da ferramenta IA Assistente WhatsApp, desenvolvida e operada pela JUSFY SERVIÇOS DE INTERNET LTDA, pessoa jurídica de direito privado, inscrita no CNPJ nº 40.573 .276 / 0001 - 83, com sede na Rua Astrogildo de Azevedo, nº 354, Bairro Centro, Santa Maria / RS, doravante denominada simplesmente "JUSFY". < /P> <
        P > A IA Assistente WhatsApp consiste em uma solução tecnológica de automação inteligente de atendimento, destinada a profissionais do Direito, especialmente advogados cadastrados na Plataforma Jusfy, com o propósito de auxiliar na comunicação inicial com clientes, no gerenciamento de contatos e na triagem de demandas recebidas via aplicativo WhatsApp. < /P> <
            P > A ferramenta funciona como uma secretária digital inteligente, capaz de enviar respostas automáticas, coletar informações básicas, qualificar leads e manter o canal de comunicação ativo quando o advogado estiver offline ou indisponível, garantindo que nenhum contato fique sem retorno. < /P> <
            P > Durante o uso, o USUÁRIO mantém controle integral sobre o funcionamento da ferramenta, podendo: < /P> <
            UL items = {
                [
                    "Ativar ou desativar o atendimento automatizado conforme sua conveniência;",
                    "Assumir manualmente as conversas em andamento, suspendendo a atuação da IA sempre que desejar;",
                    "Retornar o controle ao sistema automatizado, permitindo que a IA volte a responder em seu nome;",
                    "Definir e editar o conteúdo das mensagens, o tom de comunicação e as condições de ativação do assistente digital.",
                ]
            }
        /> <
        P > Trata - se de uma funcionalidade disponibilizada mediante contratação específica, com cobrança adicional vinculada ao plano do USUÁRIO, podendo ser atualizada, modificada ou descontinuada pela JUSFY conforme critérios técnicos, comerciais ou estratégicos, sem garantia de disponibilidade contínua ou adequação a finalidades específicas. < /P> <
            P > Por se tratar de ferramenta tecnológica baseada em automação e inteligência artificial, podem ocorrer falhas, interrupções, respostas incorretas ou limitações de desempenho, as quais o USUÁRIO declara compreender e aceitar como inerentes à natureza do serviço. < /P> <
                P > Ao ativar a ferramenta, o USUÁRIO declara que: < /P> <
                UL items = {
                    [
                        "Leu, compreendeu e aceita integralmente os presentes Termos de Uso e a Política de Privacidade da JUSFY;",
                        "Está ciente de que o uso da IA Assistente WhatsApp é opcional e realizado por sua conta e risco;",
                        "Reconhece que todas as mensagens, respostas e interações automatizadas configuradas através da ferramenta ocorrem sob sua exclusiva responsabilidade;",
                        "Concorda que a JUSFY atua apenas como fornecedora da infraestrutura tecnológica, sem interferir no conteúdo, gestão ou resultado das comunicações realizadas.",
                    ]
                }
            /> <
            P > A utilização da ferramenta implica adesão plena, voluntária e consciente a todas as cláusulas deste Termo, não sendo admitida alegação posterior de desconhecimento, dúvida ou falta de informação sobre suas condições. < /P>

        { /* SEÇÃO 2 */ } <
        S > 2. FINALIDADE E FUNCIONAMENTO < /S> <
        P > 2.1.A IA Assistente WhatsApp é uma ferramenta de automação inteligente de atendimento criada para otimizar a comunicação entre advogados e seus clientes ou potenciais clientes, oferecendo um canal de resposta imediata e qualificação inicial de contatos recebidos por meio do aplicativo WhatsApp. < /P> <
            P > 2.2.A ferramenta atua como assistente virtual ou secretária digital, capaz de: < /P> <
            UL items = {
                [
                    "Enviar respostas automáticas de recepção a novas mensagens recebidas;",
                    "Efetuar triagens preliminares, colhendo informações essenciais sobre a demanda, como nome, área de interesse e breve descrição do caso;",
                    "Organizar e registrar as conversas recebidas, permitindo maior agilidade na gestão de atendimentos.",
                ]
            }
        /> <
        P > 2.3.O USUÁRIO, por sua vez, possui controle total e ininterrupto sobre o funcionamento da IA Assistente WhatsApp, podendo: < /P> <
        UL items = {
            [
                "Ativar ou desativar o sistema a qualquer momento, de forma manual e imediata;",
                "Assumir diretamente qualquer conversa em curso, interrompendo instantaneamente a atuação automatizada da IA;",
                "Retornar o atendimento ao modo automático, para que o sistema volte a responder e interagir com o contato de acordo com as configurações previamente definidas;",
                "Selecionar, editar e excluir mensagens automáticas, fluxos de triagem, linguagem de atendimento e condições de disparo;",
                "Determinar quando o atendimento será humano e quando será automatizado, conforme sua conveniência profissional.",
            ]
        }
        /> <
        P > 2.4.A JUSFY disponibiliza apenas a infraestrutura tecnológica necessária à operação da ferramenta, não interferindo, controlando ou supervisionando: < /P> <
        UL items = {
            [
                "As mensagens trocadas entre o advogado e seus contatos;",
                "As respostas automáticas configuradas;",
                "O conteúdo, teor, adequação ou finalidade das comunicações realizadas;",
                "O momento em que o USUÁRIO opta por assumir manualmente uma conversa ou devolver seu controle à IA.",
            ]
        }
        /> <
        P > 2.5.A IA Assistente WhatsApp executa comandos estritamente conforme os parâmetros definidos pelo USUÁRIO, não possuindo autonomia decisória sobre o conteúdo ou a oportunidade das respostas.Toda a operação é dependente da configuração e das escolhas do advogado, que permanece responsável integral por quaisquer efeitos decorrentes do uso do sistema. < /P> <
                    P > 2.6.O USUÁRIO declara - se ciente de que a ferramenta poderá realizar o envio de mensagens automáticas, o que, a depender do volume, frequência e comportamento da conta, pode ser interpretado pela Meta Platforms Inc.(controladora do WhatsApp) como atividade suspeita ou análoga a spam, resultando em bloqueio, restrição, limitação ou exclusão definitiva do número utilizado. < /P> <
                            P > 2.7.A JUSFY não tem qualquer ingerência ou vínculo com a Meta, tampouco possui meios de evitar, contestar ou reverter bloqueios realizados pelo WhatsApp, sendo integralmente isenta de responsabilidade por: < /P> <
                            UL items = {
                                [
                                    "Bloqueios, suspensões ou limitações aplicadas pela plataforma de mensagens;",
                                    "Perdas de contatos, conversas, dados, histórico ou quaisquer prejuízos diretos ou indiretos decorrentes de tais eventos;",
                                    "Falhas de integração, interrupções de serviço, quedas de conexão, erros de API ou restrições técnicas impostas por plataformas de terceiros.",
                                ]
                            }
                        /> <
                        P > 2.8.A JUSFY poderá, a qualquer tempo e sem aviso prévio, realizar ajustes técnicos, atualizações, suspensões temporárias ou modificações estruturais na ferramenta, especialmente para: < /P> <
                        UL items = {
                            [
                                "Corrigir erros ou instabilidades;",
                                "Implementar melhorias;",
                                "Atender requisitos legais, contratuais ou de segurança da informação.",
                            ]
                        }
                    /> <
                    P > 2.9.A IA Assistente WhatsApp, por sua natureza tecnológica, pode apresentar instabilidades, atrasos, respostas imprecisas ou falhas de funcionamento, não havendo garantia de desempenho contínuo, suporte integral ou manutenção ininterrupta. < /P> <
                    P > 2.10.O USUÁRIO reconhece expressamente que: < /P> <
                    UL items = {
                        [
                            "Utiliza a ferramenta de modo voluntário, consciente e sob sua exclusiva responsabilidade;",
                            "A JUSFY não responde, direta ou indiretamente, por quaisquer prejuízos materiais, morais, profissionais, comerciais ou reputacionais advindos do uso da IA;",
                            "Nenhuma comunicação gerada pela ferramenta deve ser interpretada como orientação jurídica, resposta técnica ou manifestação de vontade da Jusfy;",
                            "A ferramenta é meramente um meio tecnológico de suporte ao atendimento, sem substituição da atuação humana e sem personalidade própria.",
                        ]
                    }
                />

                { /* SEÇÃO 3 */ } <
                S > 3. RESPONSABILIDADES DO USUÁRIO < /S> <
                P > 3.1.O USUÁRIO é o único e integralmente responsável pela utilização da IA Assistente WhatsApp e por todos os atos praticados por meio de sua conta, reconhecendo que a ferramenta atua apenas como instrumento tecnológico de automação, sem qualquer ingerência da JUSFY sobre o conteúdo ou a finalidade das comunicações realizadas. < /P> <
                P > 3.2.Constituem obrigações específicas do USUÁRIO, entre outras: < /P> <
                    UL items = {
                        [
                            "(a) Utilizar a ferramenta em conformidade com a legislação vigente, especialmente o Marco Civil da Internet (Lei nº 12.965/2014), a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o Código de Ética e Disciplina da OAB e o Estatuto da Advocacia (Lei nº 8.906/1994);",
                            "(b) Restringir o uso da IA Assistente WhatsApp a finalidades legítimas, éticas e profissionais, compatíveis com a atividade advocatícia;",
                            "(c) Configurar, supervisionar e monitorar as mensagens automáticas, prompts e fluxos de triagem definidos no sistema;",
                            "(d) Garantir que as informações transmitidas sejam verdadeiras, lícitas e não violem direitos de terceiros, tais como imagem, honra, privacidade, propriedade intelectual ou dados pessoais;",
                            "(e) Assumir manualmente as conversas sempre que o conteúdo exigir tratamento humano, análise jurídica ou interação sensível com o cliente;",
                            "(f) Zelar pela segurança de suas credenciais de acesso e dispositivos, impedindo o uso indevido da ferramenta por terceiros;",
                            "(g) Não empregar a IA Assistente WhatsApp para envio massivo, disparos automáticos, prospecção em massa, marketing agressivo, mensagens repetitivas ou não solicitadas, que possam ser interpretadas como spam pela plataforma WhatsApp.",
                        ]
                    }
                /> <
                P > 3.3.O USUÁRIO reconhece e concorda que: < /P> <
                UL items = {
                    [
                        "Todas as interações realizadas pela IA são reflexo direto das configurações, comandos e parâmetros definidos por ele próprio;",
                        "A JUSFY não realiza qualquer tipo de moderação, auditoria, triagem, correção ou supervisão sobre as mensagens enviadas ou recebidas;",
                        "A responsabilidade civil, administrativa ou ética decorrente de comunicações automatizadas recai exclusivamente sobre o USUÁRIO;",
                        "O uso indevido da ferramenta pode resultar em bloqueio, suspensão, restrição ou exclusão definitiva do número de WhatsApp utilizado, sem qualquer direito de compensação ou suporte por parte da JUSFY.",
                    ]
                }
            /> <
            P > 3.4.O USUÁRIO assume expressamente a obrigação de indenizar e manter a JUSFY isenta de qualquer responsabilidade civil, administrativa, ética ou penal, incluindo honorários advocatícios e custas processuais, em decorrência de: < /P> <
            UL items = {
                [
                    "(a) Reclamações, notificações ou demandas judiciais ou extrajudiciais apresentadas por clientes, terceiros, órgãos públicos, conselhos profissionais ou pela própria Meta Platforms Inc.;",
                    "(b) Alegações de envio indevido de mensagens, uso abusivo da ferramenta, prática de spam, difamação, violação de direitos autorais, vazamento de dados, quebra de sigilo ou publicidade irregular;",
                    "(c) Bloqueio, suspensão, limitação, restrição ou exclusão do número utilizado no WhatsApp;",
                    "(d) Danos materiais, morais, reputacionais ou comerciais causados a terceiros ou decorrentes da utilização indevida da ferramenta;",
                    "(e) Qualquer uso contrário às políticas de privacidade, termos de serviço ou regras da Meta/WhatsApp.",
                ]
            }
        /> <
        P > 3.5.O USUÁRIO declara estar plenamente ciente de que a JUSFY não mantém qualquer vínculo técnico, contratual ou operacional com o WhatsApp ou com a Meta Platforms Inc., e que o funcionamento da ferramenta depende integralmente da infraestrutura e das regras impostas por tais empresas, sendo inteiramente assumidos pelo USUÁRIO os riscos de limitação ou bloqueio decorrentes da utilização da automação. < /P> <
        P > 3.6.Caso a JUSFY seja citada, notificada ou demandada em razão de conduta ou uso indevido praticado pelo USUÁRIO, este obriga - se a arcar integralmente com os custos de defesa, indenizações, condenações e demais despesas suportadas pela empresa, sem prejuízo do direito de regresso e da imediata rescisão de seu acesso à ferramenta. < /P> <
            P > 3.7.O USUÁRIO compreende que a ferramenta não substitui a comunicação humana nem o discernimento profissional, devendo ser utilizada apenas como suporte auxiliar de atendimento.A JUSFY não responde por erros, omissões, interpretações equivocadas, atrasos ou consequências decorrentes da automatização das respostas. < /P> <
            P > 3.8.A inobservância de quaisquer das disposições acima poderá acarretar a suspensão imediata, bloqueio ou cancelamento do acesso à ferramenta, a exclusivo critério da JUSFY, sem direito a restituição, compensação ou indenização de qualquer natureza. < /P>

            { /* SEÇÃO 4 */ } <
            S > 4. LIMITAÇÃO DE RESPONSABILIDADE < /S> <
            P > 4.1.A JUSFY disponibiliza a ferramenta IA Assistente WhatsApp no estado em que se encontra, como serviço tecnológico contratado, sem qualquer garantia expressa ou implícita de desempenho, estabilidade, disponibilidade contínua, compatibilidade técnica, resultados comerciais, adequação a finalidades específicas ou ausência de falhas. < /P> <
            P > 4.2.A ferramenta é disponibilizada como serviço tecnológico contratado, sendo seu uso realizado por conta e risco do USUÁRIO, que reconhece a possibilidade de ocorrência de erros, instabilidades, respostas incorretas, travamentos ou interrupções, sem garantia de desempenho ou resultado específico. < /P> <
                P > 4.3.A JUSFY não possui qualquer vínculo técnico, comercial ou contratual com a Meta Platforms Inc.(WhatsApp / Instagram / Facebook), tampouco controle sobre suas políticas, APIs, regras de segurança ou diretrizes de uso.Assim, a empresa não se responsabiliza, sob nenhuma hipótese, por: < /P> <
                UL items = {
                    [
                        "(a) Bloqueio, limitação, suspensão, exclusão, restrição de número ou conta do WhatsApp, ainda que decorrentes da utilização da IA Assistente WhatsApp;",
                        "(b) Perda de mensagens, contatos, conversas, histórico, arquivos, informações ou dados armazenados;",
                        "(c) Falhas, interrupções, lentidão, travamentos, erros de integração ou incompatibilidade técnica com o WhatsApp, sistema operacional, navegador ou conexão de internet;",
                        "(d) Alterações unilaterais feitas pela Meta/WhatsApp que impactem o funcionamento da ferramenta;",
                        "(e) Problemas decorrentes de uso incorreto, indevido, negligente, imprudente ou desatento do USUÁRIO;",
                        "(f) Qualquer prejuízo direto, indireto, emergente, moral, reputacional, financeiro ou profissional sofrido pelo USUÁRIO ou por terceiros em razão da automação.",
                    ]
                }
            /> <
            P > 4.4.O USUÁRIO reconhece que o uso da IA Assistente WhatsApp não elimina, substitui nem reduz seu dever de supervisão sobre as comunicações realizadas, tampouco o exime da responsabilidade por eventuais violações éticas, civis, administrativas ou criminais decorrentes de conteúdo automatizado. < /P> <
            P > 4.5.A JUSFY não garante: < /P> <
            UL items = {
                [
                    "(a) Que a ferramenta atenderá às necessidades específicas do USUÁRIO;",
                    "(b) Que o funcionamento será contínuo, livre de erros, bugs, falhas de integração ou vulnerabilidades;",
                    "(c) Que mensagens automatizadas não serão interpretadas como atividade suspeita, spam ou comportamento irregular pela Meta Platforms Inc.;",
                    "(d) Que o número de telefone, conta de WhatsApp ou demais plataformas associadas permanecerão ativas e operacionais após o uso da ferramenta;",
                    "(e) Que o sistema será compatível com todas as versões de software, dispositivos ou integrações futuras do WhatsApp Business API.",
                ]
            }
        /> <
        P > 4.6.Em nenhuma hipótese, incluindo negligência, falha técnica, erro de programação ou omissão, a JUSFY será responsável perante o USUÁRIO ou terceiros por qualquer dano direto, indireto, especial, incidental, moral, punitivo ou consequencial, incluindo, sem limitação: < /P> <
        UL items = {
            [
                "Lucros cessantes, perda de clientela, interrupção de atividades, perda de oportunidades comerciais, danos à reputação profissional ou quaisquer prejuízos imateriais.",
            ]
        }
        /> <
        P > 4.7.O serviço possui natureza técnica e profissional entre o USUÁRIO e a JUSFY, tendo em vista que o serviço é direcionado a profissionais liberais com finalidade empresarial(advogados), sendo inaplicáveis as disposições do Código de Defesa do Consumidor(Lei nº 8.078 / 1990).O USUÁRIO reconhece expressamente que utiliza a ferramenta no exercício de sua atividade profissional, não havendo hipossuficiência técnica, jurídica ou econômica. < /P> <
                P > 4.8.O USUÁRIO compromete - se a manter a JUSFY isenta e livre de qualquer responsabilidade, indenizando - a integralmente por toda e qualquer reclamação, perda, custo, despesa, condenação, honorário ou prejuízo decorrente, direta ou indiretamente, de: < /P> <
                UL items = {
                    [
                        "(a) Uso indevido, abusivo, negligente ou ilícito da ferramenta;",
                        "(b) Configuração incorreta, falha de supervisão ou ausência de acompanhamento das conversas automatizadas;",
                        "(c) Quebra de sigilo profissional, vazamento de dados, envio de informações incorretas ou inadequadas;",
                        "(d) Descumprimento de normas éticas, legais, contratuais ou de compliance;",
                        "(e) Qualquer alegação de dano moral, material, profissional ou reputacional de terceiros em virtude de mensagens enviadas pela IA.",
                    ]
                }
            /> <
            P > 4.9.O USUÁRIO compreende e aceita que a IA Assistente WhatsApp é um meio auxiliar de atendimento, sem personalidade jurídica, autonomia decisória ou discernimento técnico, sendo incabível atribuir à JUSFY qualquer responsabilidade por interpretação de linguagem, tom, contexto, decisão de resposta ou erro cognitivo da IA. < /P> <
            P > 4.10.Em caso de incidentes técnicos, de segurança ou de uso irregular detectado, a JUSFY poderá suspender, desativar ou interromper o acesso à ferramenta a qualquer momento, sem aviso prévio e sem direito a ressarcimento, quando houver indício de: < /P> <
            UL items = {
                [
                    "(a) Atividades potencialmente fraudulentas, abusivas ou ilegais;",
                    "(b) Utilização incompatível com as políticas da Meta ou com estes Termos;",
                    "(c) Risco de dano à reputação, segurança ou estabilidade da plataforma.",
                ]
            }
        /> <
        P > 4.11.Nenhuma disposição destes Termos será interpretada de modo a criar obrigação de resultado ou responsabilidade solidária ou subsidiária da JUSFY por atos do USUÁRIO, sendo certo que o papel da empresa é meramente o de fornecedora de tecnologia de suporte. < /P>

        { /* SEÇÃO 5 */ } <
        S > 5. PRIVACIDADE E TRATAMENTO DE DADOS < /S> <
        P > 5.1.A JUSFY realiza o tratamento de dados pessoais de forma mínima, automatizada, transparente e estritamente necessária à operação técnica da ferramenta IA Assistente WhatsApp, observando rigorosamente os princípios e fundamentos estabelecidos na Lei nº 13.709 / 2018(Lei Geral de Proteção de Dados– LGPD) e na Lei nº 12.965 / 2014(Marco Civil da Internet). < /P> <
        P > 5.2.O tratamento de dados pela JUSFY limita - se às informações indispensáveis para: < /P> <
        UL items = {
            [
                "(a) Viabilizar a execução técnica do serviço;",
                "(b) Assegurar o funcionamento e a estabilidade do sistema;",
                "(c) Corrigir falhas, realizar diagnósticos e aprimorar a experiência do usuário durante o uso da ferramenta;",
                "(d) Cumprir obrigações legais, regulatórias ou ordens judiciais que eventualmente exijam a guarda ou o fornecimento de dados.",
            ]
        }
        /> <
        P > 5.3.Durante o uso da IA Assistente WhatsApp, poderão ser coletados apenas dados técnicos e de uso, como: < /P> <
        UL items = {
            [
                "Identificação da conta vinculada (telefone, ID de integração ou chave de API);",
                "Volume de mensagens processadas e horários de utilização;",
                "Logs de eventos, status de operação, registros de erros e desempenho;",
                "Dados de configuração definidos pelo próprio USUÁRIO (como prompts, respostas e fluxos de triagem).",
            ]
        }
        /> <
        P > 5.4.O conteúdo das mensagens trocadas entre o USUÁRIO e seus contatos é processado de forma automatizada e efêmera, sendo: < /P> <
        UL items = {
            [
                "(a) Utilizado exclusivamente para o envio e resposta técnica no momento da comunicação;",
                "(b) Armazenado temporariamente apenas quando necessário para entrega da mensagem, correção de erros ou execução de testes automatizados;",
                "(c) Eliminado de forma automática e definitiva após o término do processamento, não permanecendo sob guarda permanente da JUSFY.",
            ]
        }
        /> <
        P > 5.5.A JUSFY não acessa, lê, interpreta, audita ou compartilha o conteúdo integral das conversas, salvo em situações excepcionais, e apenas quando: < /P> <
        UL items = {
            [
                "(a) For exigido por determinação judicial ou obrigação legal expressa;",
                "(b) Tiver sido autorizado previamente e por escrito pelo próprio USUÁRIO.",
            ]
        }
        /> <
        P > 5.6.Todos os dados eventualmente tratados pela JUSFY são protegidos por medidas administrativas, técnicas e organizacionais compatíveis com o padrão de segurança da informação do setor, incluindo: < /P> <
            UL items = {
                [
                    "Criptografia em trânsito e em repouso;",
                    "Controle de acesso e autenticação em múltiplos fatores;",
                    "Segregação de ambientes e registro de logs;",
                    "Políticas internas de confidencialidade e sigilo de informações.",
                ]
            }
        /> <
        P > 5.7.O USUÁRIO é o controlador originário dos dados inseridos e processados pela IA Assistente WhatsApp, sendo responsável integral pela licitude, consentimento e base legal do tratamento de dados pessoais de seus contatos, clientes ou terceiros.A JUSFY atua unicamente como operadora técnica(nos termos do art.5 º, VII, da LGPD), limitando - se a executar comandos determinados pelo USUÁRIO, sem definir finalidade, natureza ou extensão do tratamento. < /P> <
                P > 5.8.A JUSFY não se responsabiliza, sob nenhuma hipótese, por: < /P> <
                UL items = {
                    [
                        "(a) Vazamentos, interceptações, acessos indevidos, cópias de mensagens ou divulgação de informações que ocorram fora do seu ambiente técnico, inclusive dentro do aplicativo WhatsApp, servidores da Meta ou dispositivos do USUÁRIO;",
                        "(b) Incidentes de segurança decorrentes de má configuração, uso negligente, ausência de bloqueio de tela, compartilhamento de senhas, backups inseguros ou invasões de aparelhos pessoais;",
                        "(c) Perda, extravio, corrupção ou interceptação de dados provocados por softwares de terceiros, vírus, malware, falhas de conexão ou ataques externos.",
                    ]
                }
            /> <
            P > 5.9.A JUSFY poderá manter registros de acesso(logs), em conformidade com o art.15 do Marco Civil da Internet, exclusivamente para fins de auditoria, investigação de incidentes e cumprimento de determinações legais, sendo vedada a utilização desses registros para finalidades comerciais ou promocionais. < /P> <
                P > 5.10.O USUÁRIO poderá, a qualquer tempo, solicitar à JUSFY: < /P> <
                UL items = {
                    [
                        "(a) A eliminação definitiva dos dados técnicos armazenados durante o uso da ferramenta;",
                        "(b) O acesso às informações tratadas sob sua titularidade;",
                        "(c) A retificação de dados incorretos; ou",
                        "(d) O encerramento de seu cadastro e a revogação do consentimento concedido.",
                    ]
                }
            /> <
            P > Esses pedidos deverão ser encaminhados por canal oficial de suporte ou e - mail corporativo indicado pela JUSFY, sendo atendidos dentro dos prazos legais. < /P> <
            P > 5.11.Em conformidade com o art.46 da LGPD, a JUSFY adota políticas internas de governança, privacidade e resposta a incidentes, comprometendo - se a comunicar o USUÁRIO em prazo razoável caso ocorra evento que possa acarretar risco ou dano relevante relacionado a dados pessoais tratados no âmbito da ferramenta. < /P> <
            P > 5.12.O USUÁRIO reconhece e concorda que a JUSFY poderá utilizar, de forma anonimizada e agregada, dados estatísticos de uso e métricas de desempenho da ferramenta para fins de pesquisa, desenvolvimento e aperfeiçoamento tecnológico, sem qualquer identificação de titulares ou conteúdo das comunicações. < /P> <
            P > 5.13.O descumprimento das obrigações de sigilo e proteção de dados pelo USUÁRIO— incluindo o compartilhamento indevido de informações, o uso não autorizado de dados de terceiros ou a ausência de consentimento válido— não gera qualquer responsabilidade solidária ou subsidiária da JUSFY, que atuará sempre dentro dos limites técnicos e legais de sua função de operadora. < /P> <
            P > 5.14.O USUÁRIO declara - se plenamente ciente de que o uso da IA Assistente WhatsApp implica o tratamento automatizado de dados sob sua supervisão e comando, assumindo inteiramente os riscos e obrigações decorrentes de tal tratamento, inclusive perante titulares e autoridades competentes. < /P>

        { /* SEÇÃO 5.15 - GOOGLE */ } <
        S > 5.15.INTEGRAÇÃO COM CONTA GOOGLE E GOOGLE CALENDAR < /S> <
        P > 5.15 .1.Para fins de autenticação, gestão de agenda e ampliação das funcionalidades da Plataforma, a JUSFY poderá disponibilizar ao USUÁRIO a opção de integração com sua Conta Google, mediante consentimento prévio, livre, informado e inequívoco. < /P> <
        P > 5.15 .2.Uma vez autorizada a integração, a JUSFY poderá acessar e tratar, de forma limitada e proporcional, os seguintes dados da Conta Google do USUÁRIO, conforme os escopos(scopes) expressamente concedidos no momento da conexão: < /P> <
            UL items = {
                [
                    "(a) Informações básicas de perfil, tais como nome, endereço de e-mail e foto;",
                    "(b) Dados relacionados às agendas às quais o USUÁRIO possua acesso, incluindo eventos, horários e disponibilidade.",
                ]
            }
        /> <
        P > 5.15 .3.Os dados obtidos por meio da integração com a Conta Google serão utilizados exclusivamente para as seguintes finalidades: < /P> <
        UL items = {
            [
                "(a) Identificar e vincular com segurança a Conta Google ao cadastro do USUÁRIO na Plataforma;",
                "(b) Exibir informações básicas da conta conectada;",
                "(c) Consultar disponibilidade de agenda do USUÁRIO;",
                "(d) Criar, editar, atualizar e excluir eventos no Google Calendar, exclusivamente quando tais ações forem solicitadas ou autorizadas pelo USUÁRIO dentro da Plataforma.",
            ]
        }
        /> <
        P > 5.15 .4.A JUSFY não utilizará, sob nenhuma hipótese, os dados obtidos por meio da integração com o Google para: < /P> <
        UL items = {
            [
                "(a) Fins de publicidade direcionada;",
                "(b) Profiling comercial ou análise comportamental para marketing;",
                "(c) Compartilhamento, comercialização ou venda de dados;",
                "(d) Qualquer finalidade estranha à funcionalidade diretamente contratada e utilizada pelo USUÁRIO.",
            ]
        }
        /> <
        P > 5.15 .5.O acesso e o tratamento dos dados provenientes da Conta Google ocorrerão apenas enquanto estritamente necessários para a execução das funcionalidades de agenda integrada, observando - se: < /P> <
        UL items = {
            [
                "(a) As bases legais previstas na LGPD;",
                "(b) O princípio da minimização de dados;",
                "(c) Os prazos de retenção legalmente exigidos.",
            ]
        }
        /> <
        P > 5.15 .6.A JUSFY poderá armazenar registros mínimos relacionados à integração, incluindo logs de autenticação, tokens de acesso, eventos técnicos e histórico de operações realizadas, exclusivamente para fins de: < /P> <
        UL items = {
            [
                "(a) Segurança da informação;",
                "(b) Prevenção a fraudes;",
                "(c) Auditoria e rastreabilidade;",
                "(d) Suporte técnico.",
            ]
        }
        /> <
        P > 5.15 .7.Os dados poderão ser processados por provedores de infraestrutura e tecnologia estritamente necessários ao funcionamento da Plataforma, inclusive serviços de nuvem e autenticação, sempre sob: < /P> <
        UL items = {
            [
                "(a) Contratos que assegurem confidencialidade e proteção de dados;",
                "(b) Padrões adequados de segurança da informação;",
                "(c) Limitação de finalidade e acesso.",
            ]
        }
        /> <
        P > 5.15 .8.O USUÁRIO poderá, a qualquer tempo e sem necessidade de justificativa: < /P> <
        UL items = {
            [
                "(a) Revogar a autorização concedida à JUSFY para acesso à sua Conta Google;",
                "(b) Desconectar a integração diretamente na Plataforma;",
                "(c) Remover as permissões concedidas por meio das configurações de sua Conta Google.",
            ]
        }
        /> <
        P > 5.15 .9.O USUÁRIO declara - se ciente de que a revogação da autorização poderá implicar: < /P> <
        UL items = {
            [
                "(a) A interrupção imediata das funcionalidades de agenda integrada;",
                "(b) A impossibilidade de criação, edição ou sincronização de eventos;",
                "(c) Limitação de funcionalidades dependentes da integração.",
            ]
        }
        /> <
        P > 5.15 .10.A JUSFY não se responsabiliza por eventuais falhas, indisponibilidades, alterações de escopo, restrições de acesso ou mudanças nas políticas da Google que impactem o funcionamento da integração, tratando - se de serviço de terceiro fora de seu controle direto. < /P>

        { /* SEÇÃO 6 */ } <
        S > 6. SUPORTE E DISPONIBILIDADE < /S> <
        P > 6.1.O suporte técnico referente à IA Assistente WhatsApp será prestado de forma limitada, não contínua e sujeita à disponibilidade operacional da equipe técnica da JUSFY. < /P> <
        P > 6.2.O suporte prestado pela JUSFY restringe - se a orientações gerais de uso e esclarecimento de dúvidas básicas sobre o funcionamento da ferramenta, não abrangendo consultoria jurídica, configuração individualizada, personalização de prompts, análise de mensagens, integração com sistemas de terceiros ou restauração de dados perdidos. < /P> <
        P > 6.3.A JUSFY não se obriga a manter equipe de plantão, atendimento em tempo real ou resposta imediata às solicitações de suporte, sendo o tempo de retorno e resolução variável conforme a complexidade da demanda e os recursos técnicos disponíveis. < /P> <
        P > 6.4.A JUSFY poderá, a seu exclusivo critério, suspender temporariamente o suporte em períodos de manutenção preventiva, atualização do sistema, ajustes de segurança, feriados, finais de semana ou qualquer outro motivo operacional, sem que isso gere direito a indenização, ressarcimento ou compensação. < /P> <
            P > 6.5.O funcionamento da IA Assistente WhatsApp depende de múltiplos fatores externos que fogem ao controle da JUSFY, incluindo, mas não se limitando a: < /P> <
            UL items = {
                [
                    "(a) Estabilidade da conexão de internet do USUÁRIO;",
                    "(b) Funcionamento dos servidores e APIs do WhatsApp/Meta;",
                    "(c) Compatibilidade com dispositivos, versões de aplicativos, sistemas operacionais e navegadores;",
                    "(d) Políticas de segurança e de integração determinadas por terceiros.",
                ]
            }
        /> <
        P > 6.6.Diante disso, o USUÁRIO reconhece expressamente que: < /P> <
        UL items = {
            [
                "(a) A JUSFY não garante disponibilidade contínua, desempenho ininterrupto, tempo de resposta determinado, entrega imediata de mensagens ou funcionamento livre de erros;",
                "(b) Poderão ocorrer interrupções, instabilidades, atrasos ou falhas de integração, sem aviso prévio;",
                "(c) O uso da ferramenta é condicionado à existência de conexão estável e à observância das políticas de terceiros, especialmente da Meta Platforms Inc.;",
                "(d) Tais oscilações são inerentes à natureza tecnológica do serviço e não constituem falha contratual ou descumprimento de obrigação por parte da JUSFY.",
            ]
        }
        /> <
        P > 6.7.A JUSFY reserva - se o direito de, a qualquer tempo e sem aviso prévio: < /P> <
        UL items = {
            [
                "(a) Realizar atualizações, correções, melhorias, modificações de interface, ajustes de desempenho e testes técnicos;",
                "(b) Suspender temporariamente o acesso para manutenção ou reconfiguração da infraestrutura;",
                "(c) Encerrar parcial ou definitivamente o funcionamento da IA Assistente WhatsApp, por razões técnicas, estratégicas, regulatórias, comerciais ou de segurança cibernética.",
            ]
        }
        /> <
        P > 6.8.A interrupção, alteração ou descontinuação da ferramenta não gera, em nenhuma hipótese, direito a ressarcimento, compensação, indenização, substituição de serviço, devolução de valores ou manutenção de registros e dados. < /P> <
        P > 6.9.O USUÁRIO declara - se ciente de que a IA Assistente WhatsApp poderá deixar de operar a qualquer tempo, inclusive sem aviso prévio, sem que isso configure dano, falha de prestação de serviço, descumprimento contratual ou violação de direito adquirido, especialmente em razão de sua natureza tecnológica, automatizada e dependente de integrações com serviços de terceiros. < /P> <
        P > 6.10.A JUSFY poderá, ainda, negar, suspender ou cancelar o acesso ao suporte técnico ou ao uso da ferramenta sempre que: < /P> <
        UL items = {
            [
                "(a) Identificar comportamento abusivo, desrespeitoso ou incompatível com o bom uso dos canais de atendimento;",
                "(b) Verificar tentativa de fraude, violação destes Termos ou uso indevido da ferramenta;",
                "(c) Houver risco potencial à segurança, estabilidade ou reputação da plataforma.",
            ]
        }
        /> <
        P > 6.11.O USUÁRIO reconhece que o suporte disponibilizado pela JUSFY é mera liberalidade, não configurando obrigação contratual de continuidade, tampouco criando expectativa de resposta técnica permanente. < /P> <
        P > 6.12.Eventuais comunicados, avisos ou mensagens informativas enviados pela JUSFY não constituem compromisso contratual ou garantia de funcionamento, mas apenas meio de comunicação de boas práticas, ajustes e atualizações, os quais poderão ser modificados ou descontinuados a qualquer momento. < /P>

        { /* SEÇÃO 7 */ } <
        S > 7. PROPRIEDADE INTELECTUAL < /S> <
        P > 7.1.A JUSFY é a titular exclusiva e legítima de todos os direitos de propriedade intelectual e industrial relacionados à IA Assistente WhatsApp, incluindo, mas não se limitando a: < /P> <
        UL items = {
            [
                "O código-fonte, arquitetura, algoritmos, fluxos de automação, banco de dados e modelos de processamento;",
                "O design, layout, interface gráfica, ícones, scripts, elementos visuais, manuais e documentação técnica;",
                "O nome comercial, marca, logotipo, domínio e sinais distintivos associados à ferramenta;",
                "As estruturas de back-end, APIs, bibliotecas, rotinas de programação, infraestrutura em nuvem e componentes técnicos que possibilitam o funcionamento do sistema;",
                "As ideias, conceitos, processos e metodologias empregados em sua concepção e execução.",
            ]
        }
        /> <
        P > 7.2.Nenhum direito de propriedade, titularidade, cessão, transferência ou licenciamento é concedido ao USUÁRIO, salvo o direito não exclusivo, intransferível, temporário e revogável de uso da ferramenta, estritamente nos termos deste contrato e durante a vigência da contratação ativa da funcionalidade pelo USUÁRIO. < /P> <
        P > 7.3.É expressamente proibido ao USUÁRIO: < /P> <
        UL items = {
            [
                "(a) Copiar, reproduzir, modificar, alterar, editar, adaptar, traduzir, desmontar, decompilar, decodificar ou realizar engenharia reversa da ferramenta, total ou parcialmente;",
                "(b) Criar obras derivadas, redistribuir, sublicenciar, alugar, vender, ceder, doar, licenciar, explorar comercialmente ou disponibilizar o sistema, em qualquer meio físico ou digital;",
                "(c) Integrar, conectar ou utilizar a IA Assistente WhatsApp em conjunto com outras aplicações, plataformas ou sistemas de terceiros sem autorização prévia e expressa da JUSFY;",
                "(d) Remover, adulterar, ocultar ou modificar marcas, logotipos, avisos de direitos autorais ou quaisquer outros elementos de identificação da JUSFY;",
                "(e) Utilizar o software para fins de benchmarking, concorrência desleal, espionagem tecnológica, ou reprodução funcional em produtos similares ou concorrentes.",
            ]
        }
        /> <
        P > 7.4.O USUÁRIO reconhece que qualquer violação das proibições acima constitui infração grave aos direitos de propriedade intelectual da JUSFY, sujeitando - o à imediata suspensão do acesso, indenização integral por perdas e danos, e responsabilidade civil e criminal, nos termos da legislação aplicável, incluindo, mas não se limitando a: < /P> <
            UL items = {
                [
                    "Lei nº 9.609/1998 (Lei de Software);",
                    "Lei nº 9.610/1998 (Lei de Direitos Autorais);",
                    "Lei nº 9.279/1996 (Lei de Propriedade Industrial);",
                    "Código Civil Brasileiro (arts. 186, 927 e seguintes).",
                ]
            }
        /> <
        P > 7.5.Todos os dados, relatórios, métricas, logs, estatísticas e resultados gerados pelo sistema, ainda que originados de uso individual do USUÁRIO, são considerados parte integrante da infraestrutura tecnológica da JUSFY, podendo ser utilizados pela empresa de forma anônima e agregada para fins de: < /P> <
            UL items = {
                [
                    "Aperfeiçoamento do desempenho da ferramenta;",
                    "Estudos estatísticos e analíticos;",
                    "Desenvolvimento de novas funcionalidades, produtos ou integrações;",
                    "Segurança cibernética e prevenção a fraudes.",
                ]
            }
        /> <
        P > 7.6.O uso da ferramenta não concede ao USUÁRIO qualquer direito sobre a marca "JUSFY", sobre a denominação "IA Assistente WhatsApp"
        ou quaisquer outras marcas, patentes, nomes comerciais, domínios ou elementos de identidade corporativa associados à empresa.Toda utilização de elementos distintivos da JUSFY depende de autorização formal, expressa e escrita. < /P> <
        P > 7.7.O USUÁRIO compromete - se a respeitar a confidencialidade técnica e operacional da ferramenta, abstendo - se de divulgar a terceiros qualquer informação sobre a estrutura, lógica de funcionamento, processos internos, mecanismos de integração, ou dados obtidos em decorrência de acesso autorizado, sob pena de responsabilidade civil, criminal e ética. < /P> <
        P > 7.8.Caso a JUSFY venha a identificar qualquer uso indevido, cópia não autorizada, tentativa de engenharia reversa ou exploração indevida da IA Assistente WhatsApp, poderá, a seu exclusivo critério e sem aviso prévio: < /P> <
        UL items = {
            [
                "(a) Bloquear imediatamente o acesso do USUÁRIO à ferramenta;",
                "(b) Encerrar o contrato de forma definitiva;",
                "(c) Adotar medidas judiciais cabíveis para reparação de danos e proteção de seus direitos autorais e industriais.",
            ]
        }
        /> <
        P > 7.9.O USUÁRIO reconhece que o descumprimento das disposições deste capítulo configura violação contratual grave, implicando responsabilização integral pelos danos diretos, indiretos e consequenciais causados à JUSFY, inclusive quanto a lucros cessantes, custos operacionais e danos à imagem corporativa. < /P>

        { /* SEÇÃO 8 */ } <
        S > 8. CANCELAMENTO E ENCERRAMENTO < /S> <
        P > 8.1.O USUÁRIO poderá, a qualquer momento, desativar, suspender ou encerrar voluntariamente o uso da ferramenta IA Assistente WhatsApp, mediante solicitação expressa nos canais oficiais de atendimento ou diretamente nas configurações da plataforma, sem necessidade de justificativa. < /P> <
        P > 8.2.O cancelamento voluntário pelo USUÁRIO implica a cessação imediata do acesso à ferramenta, sem direito à recuperação de dados, histórico de conversas ou registros técnicos, tampouco à indenização, compensação, restituição ou reembolso de qualquer natureza. < /P> <
            P > 8.3.A JUSFY reserva - se o direito de suspender, limitar, bloquear, encerrar ou excluir o acesso do USUÁRIO à IA Assistente WhatsApp, total ou parcialmente, a qualquer tempo e sem aviso prévio, nas seguintes hipóteses, exemplificativamente: < /P> <
                UL items = {
                    [
                        "(a) Descumprimento de qualquer cláusula destes Termos de Uso;",
                        "(b) Identificação de uso indevido, abusivo, ilícito, antiético ou incompatível com as finalidades da ferramenta;",
                        "(c) Indícios de envio em massa, disparos automáticos, spam, phishing, fraudes, ou qualquer conduta que possa violar as políticas do WhatsApp, da Meta Platforms Inc. ou da LGPD;",
                        "(d) Adoção de práticas que comprometam a segurança, estabilidade, reputação ou integridade do sistema;",
                        "(e) Detecção de uso compartilhado de credenciais, acesso simultâneo irregular ou tentativa de manipulação da infraestrutura;",
                        "(f) Denúncias, reclamações ou notificações de terceiros, autoridades ou órgãos de fiscalização;",
                        "(g) Necessidade técnica, legal, comercial, estratégica ou regulatória que torne inviável a continuidade da operação.",
                    ]
                }
            /> <
            P > 8.4.O encerramento motivado por qualquer das hipóteses acima não gera ao USUÁRIO direito a aviso prévio, reembolso, compensação, transferência de dados, guarda de logs ou continuidade do serviço, constituindo ato legítimo de gestão técnica da JUSFY. < /P> <
                P > 8.5.A JUSFY poderá, ainda, encerrar, suspender ou substituir a funcionalidade IA Assistente WhatsApp por nova versão, produto ou integração, sem necessidade de aviso prévio e sem que isso configure infração contratual, quebra de expectativa legítima ou violação de direito adquirido. < /P> <
                P > 8.6.Em caso de encerramento definitivo da ferramenta: < /P> <
                UL items = {
                    [
                        "(a) Todos os dados técnicos e informações de uso poderão ser apagados, anonimizados ou inutilizados, sem obrigação de retenção;",
                        "(b) O USUÁRIO será responsável por realizar backup prévio das informações que desejar conservar;",
                        "(c) A JUSFY não se obriga a fornecer exportação, migração ou reprocessamento de dados, nem a manter logs após a exclusão definitiva.",
                    ]
                }
            /> <
            P > 8.7.O cancelamento automático poderá ocorrer, independentemente de notificação, quando houver: < /P> <
            UL items = {
                [
                    "(a) Inatividade superior a 60 (sessenta) dias consecutivos;",
                    "(b) Constatação de duplicidade de contas ou cadastros;",
                    "(c) Tentativas de contornar limitações técnicas, de acesso ou de cobrança;",
                    "(d) Atos que possam ser interpretados como tentativa de fraude, engenharia reversa, concorrência desleal ou violação de propriedade intelectual.",
                ]
            }
        /> <
        P > 8.8.O encerramento ou bloqueio do acesso não exime o USUÁRIO de responsabilidade por atos anteriores, permanecendo devidas todas as obrigações, indenizações e penalidades eventualmente aplicáveis, inclusive após o término do vínculo. < /P> <
                P > 8.9.O USUÁRIO reconhece e aceita que a JUSFY possui ampla autonomia para modificar, suspender ou descontinuar a IA Assistente WhatsApp a qualquer tempo, inclusive por decisão comercial, tecnológica ou estratégica, sem que isso constitua falha contratual, interrupção indevida de serviço ou ato ilícito indenizável. < /P> <
                P > 8.10.Nenhuma hipótese de encerramento, suspensão ou limitação do acesso importará em renúncia, quitação ou extinção das obrigações assumidas pelo USUÁRIO, especialmente no que se refere às cláusulas de responsabilidade, indenização, confidencialidade e propriedade intelectual. < /P> <
                    P > 8.11.Após o cancelamento, a JUSFY poderá reter, pelo prazo legal mínimo, determinados registros técnicos e logs necessários para fins de auditoria, prevenção de fraudes, obrigações legais ou defesa em processos administrativos e judiciais, conforme previsto no art.15 do Marco Civil da Internet. < /P> <
                        P > 8.12.O USUÁRIO declara - se plenamente ciente de que a JUSFY não possui obrigação de continuidade, permanência ou manutenção da ferramenta, sendo o serviço prestado por prazo indeterminado, podendo ser modificado, suspenso ou descontinuado a qualquer tempo, conforme critérios técnicos, comerciais ou estratégicos da JUSFY. < /P>

                    { /* SEÇÃO 9 */ } <
                    S > 9. CONDIÇÕES COMERCIAIS E COBRANÇA < /S> <
                    P > 9.1.A utilização da funcionalidade IA Assistente WhatsApp("JusZap") está sujeita à contratação adicional pelo USUÁRIO, mediante pagamento de mensalidade específica, vinculada ao plano ativo da Plataforma Jusfy. < /P> <
                    P > 9.2.O valor da funcionalidade é de R$ 49, 90(quarenta e nove reais e noventa centavos) mensais, podendo ser alterado pela JUSFY a qualquer tempo, mediante comunicação prévia, passando a vigorar a partir do próximo ciclo de renovação. < /P> <
                        P > 9.3.A cobrança será realizada de forma recorrente e automática, juntamente com ou vinculada à assinatura principal da Plataforma Jusfy, a cada ciclo de 30(trinta) dias, permanecendo ativa enquanto não houver cancelamento pelo USUÁRIO, independentemente de utilização efetiva da ferramenta no período. < /P> <
                        P > 9.4.O acesso à funcionalidade será liberado após a confirmação do pagamento, podendo ocorrer prazo de processamento conforme o meio de pagamento utilizado. < /P> <
                            P > 9.5.O pagamento será realizado preferencialmente por cartão de crédito, podendo a JUSFY utilizar processadores de pagamento terceirizados, estando o USUÁRIO sujeito também às regras dessas plataformas. < /P> <
                            P > 9.6.O USUÁRIO declara ciência de que a contratação da funcionalidade poderá estar sujeita a procedimentos de validação e verificação antifraude, podendo ser solicitados documentos adicionais, sendo que a não apresentação poderá implicar no cancelamento da contratação, sem geração de qualquer direito indenizatório. < /P> <
                            P > 9.7.O não pagamento da mensalidade poderá implicar, a exclusivo critério da JUSFY: < /P> <
                            UL items = {
                                [
                                    "(a) Suspensão imediata da funcionalidade;",
                                    "(b) Limitação de acesso aos recursos automatizados;",
                                    "(c) Cancelamento da integração com o WhatsApp;",
                                    "(d) Bloqueio parcial ou total da funcionalidade até regularização.",
                                ]
                            }
                        /> <
                        P > 9.8.A cobrança será mantida de forma automática enquanto a funcionalidade estiver ativa, sendo de responsabilidade exclusiva do USUÁRIO realizar o cancelamento diretamente na Plataforma, não sendo aceitas solicitações por outros meios. < /P> <
                            P > 9.9.O cancelamento da funcionalidade poderá ser solicitado a qualquer tempo pelo USUÁRIO, produzindo efeitos ao final do ciclo de faturamento vigente, não havendo devolução proporcional de valores já pagos. < /P> <
                                P > 9.10.O USUÁRIO poderá solicitar reembolso exclusivamente no prazo de 7(sete) dias corridos a partir da contratação, nos termos do art.49 do Código de Defesa do Consumidor, desde que observado o procedimento interno da Plataforma. < /P> <
                                            P > 9.11.Não haverá direito a reembolso: < /P> <
                                            UL items = {
                                                [
                                                    "(a) Após o prazo de 7 (sete) dias da contratação;",
                                                    "(b) Em casos de renovação automática da assinatura;",
                                                    "(c) Em hipóteses de reativação da funcionalidade;",
                                                    "(d) Quando houver violação dos Termos de Uso ou uso indevido da Plataforma.",
                                                ]
                                            }
                                        /> <
                                        P > 9.12.Em caso de reembolso aprovado, os valores serão restituídos conforme o meio de pagamento utilizado, podendo o prazo variar de acordo com a operadora do cartão de crédito, podendo alcançar até 90(noventa) dias, conforme regras da instituição financeira. < /P> <
                                            P > 9.13.Eventuais solicitações de chargeback ou contestação indevida de cobrança poderão ser analisadas pela JUSFY e pelos intermediadores de pagamento, podendo resultar em: < /P> <
                                            UL items = {
                                                [
                                                    "(a) Suspensão imediata da funcionalidade;",
                                                    "(b) Bloqueio da conta do USUÁRIO;",
                                                    "(c) Adoção de medidas administrativas e judiciais cabíveis.",
                                                ]
                                            }
                                        /> <
                                        P > 9.14.A JUSFY poderá, a seu exclusivo critério, criar planos promocionais, campanhas, descontos ou condições especiais, com regras próprias, que poderão divergir das condições padrão aqui previstas. < /P> <
                                        P > 9.15.A contratação da funcionalidade é opcional, autônoma e independente, não sendo condição para utilização das demais funcionalidades da Plataforma Jusfy. < /P> <
                                        P > 9.16.A JUSFY poderá, a qualquer tempo, alterar, suspender, descontinuar ou integrar a funcionalidade a outros planos ou serviços, sem garantia de manutenção das condições comerciais originalmente contratadas, respeitado o ciclo já pago pelo USUÁRIO. < /P> <
                                        P > 9.17.A não utilização da funcionalidade pelo USUÁRIO não suspende, interrompe ou isenta a cobrança da mensalidade, uma vez que a disponibilidade do serviço permanece ativa durante o período contratado. < /P>

                                        { /* SEÇÃO 10 */ } <
                                        S > 10. DISPOSIÇÕES FINAIS < /S> <
                                        P > 10.1.Estes Termos de Uso constituem o acordo integral entre o USUÁRIO e a JUSFY, prevalecendo sobre quaisquer entendimentos, comunicações, tratativas ou contratos anteriores, verbais ou escritos, que tratem do mesmo objeto. < /P> <
                                            P > 10.2.A Política de Privacidade da JUSFY, disponível em < a href = {
                                                PRIVACY_PDF_URL
                                            }
                                        target = "_blank"
                                    rel = "noopener noreferrer"
                                style = {
                                    {
                                        color: "#01AB7D"
                                    }
                                } > {
                                    PRIVACY_PDF_URL
                                } < /a>, integra plenamente o presente instrumento, complementando as disposições aqui estabelecidas no que se refere à coleta, ao tratamento e à proteção de dados pessoais.</P >
                                <
                                P > 10.3.A utilização da IA Assistente WhatsApp implica adesão plena, consciente e irrevogável a todos os termos, condições e limitações descritos neste documento, não sendo admitida alegação posterior de desconhecimento, dúvida ou vício de consentimento. < /P> <
                                P > 10.4.A JUSFY poderá, a qualquer tempo e a seu exclusivo critério, alterar, atualizar ou substituir estes Termos de Uso, bem como modificar o funcionamento, estrutura ou conteúdo da ferramenta. < /P> <
                                P > 10.4 .1.As alterações entrarão em vigor na data de sua publicação, e o uso contínuo da ferramenta pelo USUÁRIO implicará aceitação integral das novas condições. < /P> <
                                P > 10.4 .2.Caso o USUÁRIO não concorde com as alterações, deverá cessar o uso da ferramenta imediatamente.A continuidade do uso será considerada manifestação tácita e inequívoca de concordância. < /P> <
                                    P > 10.5.A eventual tolerância da JUSFY quanto ao descumprimento de qualquer disposição destes Termos não constituirá novação, renúncia ou alteração contratual. < /P> <
                                    P > 10.6.A JUSFY atua exclusivamente como fornecedora de tecnologia de automação de atendimento, não prestando serviços jurídicos, consultoria legal ou intermediação de clientes.A ferramenta não substitui o discernimento humano, sendo de uso opcional e sob responsabilidade integral do USUÁRIO. < /P> <
                                        P > 10.7.O USUÁRIO reconhece expressamente que: < /P> <
                                        UL items = {
                                            [
                                                "(a) A ferramenta consiste em serviço tecnológico opcional, contratado de forma adicional, sem garantia de continuidade, estabilidade ou disponibilidade permanente;",
                                                "(b) O serviço não cria qualquer vínculo societário, empregatício ou de representação;",
                                                "(c) O serviço possui natureza técnica e profissional, sendo contratado para fins relacionados à atividade econômica do USUÁRIO;",
                                                "(d) O uso da IA Assistente WhatsApp é facultativo e sob risco do próprio USUÁRIO.",
                                            ]
                                        }
                                    /> <
                                    P > 10.8.Nenhuma das cláusulas deste instrumento poderá ser interpretada de modo a criar obrigação de resultado ou vínculo entre as partes. < /P> <
                                    P > 10.9.A invalidade de qualquer disposição não afetará as demais, que permanecerão plenamente válidas e eficazes. < /P> <
                                    P > 10.10.As comunicações oficiais ocorrerão por meio dos canais institucionais da JUSFY, sendo do USUÁRIO o dever de manter seus dados atualizados. < /P> <
                                        P > 10.11.Estes Termos são regidos pelas leis da República Federativa do Brasil. < /P> <
                                            P > 10.12.Fica eleito o foro da Comarca de Santa Maria / RS, com renúncia expressa a qualquer outro. < /P> <
                                            P > 10.13.A JUSFY declara atuar em observância aos princípios da boa - fé, transparência e segurança digital. < /P> <
                                            P > 10.14.O USUÁRIO declara que leu, compreendeu e concorda integralmente com os Termos, reconhecendo que a ferramenta consiste em serviço tecnológico contratado, sem garantia de continuidade ou estabilidade. < /P>

                                        { /* LINK PDF */ } <
                                        div style = {
                                            {
                                                textAlign: "center",
                                                marginTop: 40
                                            }
                                        } >
                                        <
                                        a
                                    href = {
                                        PRIVACY_PDF_URL
                                    }
                            target = "_blank"
                        rel = "noopener noreferrer"
                    style = {
                        styles.pdfLink
                    } >
                    Baixar Política de Privacidade(PDF) <
                    /a> <
                    /div>

                { /* FOOTER */ } <
                div style = {
                    styles.footer
                } >
                <
                p style = {
                    {
                        margin: 0
                    }
                } > ©{
                    new Date().getFullYear()
                }
            Jusfy
            Serviços de Internet LTDA.Todos os direitos reservados. <
            /p> <
            p style = {
                {
                    margin: "8px 0 0"
                }
            } >
            CNPJ: 40.573 .276 / 0001 - 83 | < a href = "https://jusfy.com.br"
        style = {
            {
                color: "#01AB7D",
                textDecoration: "none"
            }
        } >
        jusfy.com.br < /a> <
        /p> <
        /div> <
        /div> <
        /div>
    );
};

export default PrivacyPolicy;