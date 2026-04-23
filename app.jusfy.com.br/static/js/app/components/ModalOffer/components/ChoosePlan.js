import React, {
    useState,
    useEffect
} from "react";
import styled from "styled-components";
import {
    UltimateBenefits
} from "./PlansBenefits";


const Content = styled.div `
  width: 100%;
  h3 {
    text-align: center;
    font-weight: bold;
    color: #2e3f75;
  }

  .MuiSwitch-thumb {
    background-color: #41c78f !important;
  }
  .MuiSwitch-track {
    background-color: #41c78f !important;
  }
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #41c78f !important;
  }
`;

const Produto = styled.div `
  cursor: pointer;
  border: 2px solid #f1f1f1;
  padding: 20px;
  border-radius: 5px;

  :hover {
    border: 2px solid #41c78f;
    background: #fafafa;
  }
  span {
    color: #2e3f75;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }
  span.preco {
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: bold;
    opacity: 0.7;
    color: #2e3f75;
  }
  p.subtitulo {
    margin-top: 5px !important;
    font-size: 12px;
    margin: 0;
    color: #5f677d;
    opacity: 0.6;
  }
  a {
    color: #2e3f75;
    font-weight: bold;
    text-decoration: none;
    font-size: 12px;
    display: block;
  }
  a img {
    display: inline-block;
    width: 18px;
    margin-left: 10px;
    opacity: 0.5;
    margin-bottom: 0px;
  }
  ul {
    padding: 0 0 0 4px;
  }
  ul li {
    list-style: none;
  }
  ul li i {
    color: #41c78f;
  }

  ul li span {
    opacity: 0.4;
    font-size: 12px;
    color: #1c2e66;
    margin-left: 5px;
    line-height: 26px;
  }

  @media only screen and (max-width: 899px) {
    width: 100%;
    margin-bottom: 10px;
    padding: 13px;
    span {
      color: #41c78f;
    }
    p {
      display: none;
    }
    a {
      position: relative;
      margin-top: 15px;
      bottom: 0px;
    }
  }
`;

export default function ChoosePlan(props) {
    const [periodicity, setPeriodicity] = useState(true);
    const [precoStarter, setPrecoStarter] = useState("R$ 77,00/mês");
    const [precoMaster, setPrecoMaster] = useState("R$ 97,00/mês");
    const {
        offer
    } = props;
    const isThreeYears = offer === "three_years";

    useEffect(() => {
        if (periodicity) {
            // mensal
            setPrecoStarter("R$ 77,00/mensal");
            setPrecoMaster("R$ 97,00/mensal");
        } else {
            // anual
            setPrecoStarter("R$ 739,20/anual (20% de desconto)");
            setPrecoMaster("R$ 931,20/anual (20% de desconto)");
        }
    }, [periodicity]);

    const chooseProduct = plan => {
        if (plan == "master") {
            props.formik.setFieldValue("product_selected", {
                id: "mesadvogado2022",
                name: "Plano Master Mês do Advogado",
                description: "Plano Master",
                periodicity: "monthly",
                price: 29.9,
            });
        } else if (isThreeYears && plan === "ultimate") {
            props.formik.setFieldValue("product_selected", {
                id: "threeyearsjusfy",
                name: "Plano Ultimate 3 anos de Jusfy",
                description: "Plano Ultimate",
                periodicity: "annually",
                price: 1123.2,
            });
        }
    };

    return ( <
        Content >
        <
        h3 > {
            isThreeYears ?
            "Aniversário Jusfy: três anos facilitando a vida de quem advoga" :
                "PROMOÇÃO MÊS DO ADVOGADO"
        } <
        /h3> <
        p style = {
            {
                opacity: "0.9",
                textAlign: "center"
            }
        } > {
            isThreeYears ?
            "Exclusivo para clientes Jusfy" :
                "Aproveite a promoção exclusiva para o mês do advogado"
        }
        . <
        /p>

        <
        div className = "row" >
        <
        div className = "col-xl-12" >
        <
        Produto onClick = {
            () => chooseProduct(isThreeYears ? "ultimate" : "master")
        } >
        <
        span >
        PLANO {
            " "
        } {
            isThreeYears
                ?
                "ULTIMATE, Pague 12 meses e receba 18 meses" :
                "MASTER"
        } <
        /span> <
        button className = "btn btn-primary ml-5"
        style = {
            {
                float: "right"
            }
        } >
        ASSINAR AGORA <
        /button>

        <
        p className = "mb-0" >
        DE {
            " "
        } <
        span className = "preco" >
        <
        s > R$ {
            isThreeYears ? "1.164" : "97,00/mensal"
        } < /s> <
        /span> <
        /p> <
        p >
        POR {
            " "
        } <
        span className = "preco" >
        R$ {
            isThreeYears ? "1.123,20" : "29,90/mensal*"
        } <
        /span> {
            isThreeYears && ( <
                small style = {
                    isThreeYears ?
                    {
                        display: "flex",
                        flexDirection: "column"
                    } :
                    {}
                } >
                R$ 1.123, 20 *
                <
                /small>
            )
        } <
        /p> <
        p className = "subtitulo mb-2" >
        OFERTA ESPECIAL {
            " "
        } {
            isThreeYears ? "3 ANOS DE JUSFY" : "MÊS DO ADVOGADO"
        } <
        /p> {
            !isThreeYears && ( <
                ul >
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
                10 oportunidades grátis mensais de potenciais clientes <
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
                span > 10 consultas grátis mensais de busca localização < /span> <
                /li> <
                li >
                <
                i className = "icon-lg fas fa-check" > < /i>{" "} <
                span > 05 consultas grátis mensais de placa < /span> <
                /li> <
                li >
                <
                i className = "icon-lg fas fa-check" > < /i>{" "} <
                span >
                10 consultas grátis mensais de veículos no CPF / CNPJ <
                /span> <
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
                    /ul>
            )
        } {
            isThreeYears && < UltimateBenefits / >
        } <
        /Produto> <
        p className = "mb-0"
        style = {
            {
                fontSize: "12px",
                padding: "10px 0 0 10px"
            }
        } >
        {
            isThreeYears ?
            `*Oferta válida para contratação do plano Ultimate anual no valor de R$ 1.123,20. Forma de compra: Compra do valor total (utiliza limite do cartão). A contratação do plano incide em cobrança imediata. Os benefícios do plano são renovados a cada 30 dias. Os 06 meses grátis serão disponibilizados ao final dos 12 meses iniciais, totalizando 18 meses de plano. Carência do plano de 12 meses. O valor de R$ 62,40 informada refere-se a divisão de R$ 1.123,20 pelos 18 meses que terá acesso ao plano.` :
                `** Oferta válida para contratação mensal do Plano Master por 29,90
            nos três primeiros meses, após você terá todos benefícios do plano
            Master por 77,00 mensais. A contratação incide em cobrança imediata
            de R$29,90, referente a mensalidade com o benefício promocional e
            com garantia de 7 dias, após a compra. O plano será renovado
            automaticamente a cada mês respeitando as regras da promoção`
        } <
        /p> <
        /div> <
        /div> <
        /Content>
    );
}