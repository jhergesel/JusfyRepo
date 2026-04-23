import {
    useState
} from "react";
import {
    ContainerBenefits,
    ToggleBenefits
} from "./PlansBenefits.styles";

export const StarterBenefits = () => {
        const [toggledBenefits, toggleBenefits] = useState(false)
        const [showBenefits, setShowBenefits] = useState(false)

        const toggleBenefit = (e) => {
            e.stopPropagation()
            const isHide = !toggledBenefits === false
            toggleBenefits(!toggledBenefits)
            if (isHide) {
                setTimeout(() => {
                    setShowBenefits(false)
                }, [300])
            } else {
                setShowBenefits(true)
            }
        }

        return ( <
                ContainerBenefits toggled = {
                    toggledBenefits
                } >
                <
                ToggleBenefits onClick = {
                    toggleBenefit
                } > {
                    toggledBenefits ? 'Esconder benefícios' : 'Ver benefícios'
                } < /ToggleBenefits>

                <
                ul style = {
                    {
                        paddingTop: toggledBenefits ? "45px" : "20px"
                    }
                }
                className = "list-benefit-slider" >
                {
                    showBenefits && ( <
                        >
                        <
                        li >
                        <
                        i className = "icon-lg fas fa-check" > < /i>{" "} <
                        span > 5 Cálculos Revisionais < /span> <
                        /li> <
                        li >
                        <
                        i className = "icon-lg fas fa-check" > < /i>{" "} <
                        span > 5 Cálculos de Atualização de Valores < /span> <
                        /li> <
                        li >
                        <
                        i className = "icon-lg fas fa-check" > < /i>{" "} <
                        span > 1 Cálculo Trabalhista < /span> <
                        /li> <
                        li >
                        <
                        i className = "icon-lg fas fa-check" > < /i>{" "} <
                        span > 5 Cálculos de Correção do FGTS < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 5 Cálculos de Pensão Alimentícia < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 5 Cálculos de Aluguel < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 5 Cálculos de Superendividamento < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 1 Consulta de Localização de CPF < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 1 Consulta de Relacionamentos < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 5 Oportunidades de novos clientes < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > Banco de petições ILIMITADO < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > 5 Assinaturas eletrônicas < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i>{" "} <
                            span > Compressão / Divisão de documentos em PDF ILIMITADO < /span> <
                            /li> <
                            li >
                            <
                            i className = "icon-lg fas fa-check" > < /i> <span>Agenda ILIMITADO</span >
                            <
                            /li> <
                            />)} <
                            /ul> <
                            /ContainerBenefits>
                    );
                }

                export const MasterBenefits = () => {
                    const [toggledBenefits, toggleBenefits] = useState(false)
                    const [showBenefits, setShowBenefits] = useState(false)

                    const toggleBenefit = (e) => {
                        e.stopPropagation()
                        const isHide = !toggledBenefits === false
                        toggleBenefits(!toggledBenefits)
                        if (isHide) {
                            setTimeout(() => {
                                setShowBenefits(false)
                            }, [1000])
                        } else {
                            setShowBenefits(true)
                        }
                    }

                    return ( <
                        ContainerBenefits toggled = {
                            toggledBenefits
                        } >
                        <
                        ToggleBenefits onClick = {
                            toggleBenefit
                        } > {
                            toggledBenefits ? 'Esconder benefícios' : 'Ver benefícios'
                        } < /ToggleBenefits>

                        <
                        ul style = {
                            {
                                paddingTop: toggledBenefits ? "45px" : "20px"
                            }
                        }
                        className = "list-benefit-slider" >
                        {
                            showBenefits && ( <
                                >
                                <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculo Revisional ILIMITADO < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculo de Atualização de Valores ILIMITADO < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 5 Cálculos Trabalhistas < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculos de Correção do FGTS ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de Pensão Alimentícia ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculo de Aluguel ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculo de Superendividamento ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 10 Consultas de Localização de CPF < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 5 Consultas de Placa de Veículos < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 2 Consultas de Veículos no CPF / CNPJ < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 2 Consultas de Empresas < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 5 Consultas de Participações societárias < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 3 Consulta de Relacionamentos < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 10 Oportunidades de novos clientes < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Banco de petições ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > 10 Assinaturas eletrônicas < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Compressão / Divisão de documentos em PDF ILIMITADO < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i> <span>Agenda ILIMITADO</span >
                                    <
                                    /li> <
                                    />
                            )
                        } <
                        /ul> <
                        /ContainerBenefits>
                    )
                }

                export const UltimateBenefits = () => {
                    const [toggledBenefits, toggleBenefits] = useState(false)
                    const [showBenefits, setShowBenefits] = useState(false)

                    const toggleBenefit = (e) => {
                        e.stopPropagation()
                        const isHide = !toggledBenefits === false
                        toggleBenefits(!toggledBenefits)
                        if (isHide) {
                            setTimeout(() => {
                                setShowBenefits(false)
                            }, [1000])
                        } else {
                            setShowBenefits(true)
                        }
                    }

                    return ( <
                        ContainerBenefits toggled = {
                            toggledBenefits
                        } >
                        <
                        ToggleBenefits onClick = {
                            toggleBenefit
                        } > {
                            toggledBenefits ? 'Esconder benefícios' : 'Ver benefícios'
                        } < /ToggleBenefits>

                        <
                        ul style = {
                            {
                                paddingTop: toggledBenefits ? "45px" : "20px"
                            }
                        }
                        className = "list-benefit-slider" >
                        {
                            showBenefits && ( <
                                >
                                <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Banco de petições(ILIMITADO) < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span >
                                20 oportunidades grátis mensais de potenciais clientes <
                                /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span >
                                20 assinaturas eletrônica <
                                /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span >
                                Agenda ILIMITADO <
                                /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span >
                                Compressão / Divisão de documentos em PDF ILIMITADO <
                                /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Acesso a plataforma JUSFINDER < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Buscador processual ILIMITADO < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 20 consultas grátis de localização CPF < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 05 consultas grátis de relacionamentos < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 05 consultas grátis de restrição de crédito < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 05 consultas grátis mensais de placa < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 10 consultas grátis de veículos por placa < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > 05 consultas grátis mensais de veículos no CPF / CNPJ < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculos Revisionais ILIMITADOS < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculos de Atualização de Valores ILIMITADOS < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculos Trabalhistas ILIMITADOS < /span> <
                                /li> <
                                li >
                                <
                                i className = "icon-lg fas fa-check" > < /i>{" "} <
                                span > Cálculos de Correção do FGTS ILIMITADOS < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de Pensão Alimentícia ILIMITADOS < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de Aluguel ILIMITADOS < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de Superendividamento ILIMITADOS < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de PASEP ILIMITADOS < /span> <
                                    /li> <
                                    li >
                                    <
                                    i className = "icon-lg fas fa-check" > < /i>{" "} <
                                    span > Cálculos de RMC ILIMITADOS < /span> <
                                    /li> <
                                    />
                            )
                        } <
                        /ul> <
                        /ContainerBenefits>
                    )
                }