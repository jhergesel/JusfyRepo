import React, {
    useState
} from "react";
import {
    Modal
} from "react-bootstrap";
import styled from "styled-components";

import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import {
    ROUTES_PATH
} from "../../constants/Routes";
import {
    EventsSegment
} from "../../helpers/EventsSegmentsCalculators";

const ButtonClose = styled.div `
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 16px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div `
  padding: 40px;
`;

const Header = styled.div `
  display: flex;
  gap: 40px;
  padding: 8px 0;
  align-items: center;
`;

const Title = styled.h2 `
  max-width: 300px;
  margin: 0;
`;

const Subtitle = styled.h5 `
  font-weight: 400;
  margin: 0;
`;

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`;

const ResponsiveModal = styled(Modal)
`
  .modal-body {
    padding: 0px !important;
    overflow: hidden;
  }

  .modal-content {
    border-radius: 10px !important;
    max-height: 90vh;
    overflow: hidden;
  }

  .modal-dialog {
    max-width: 910px !important;
  }
`;

export default function ModalMonitoringSales() {
    const [close, setClose] = useState(false);
    const {
        HandleEvent
    } = EventsSegment();

    const {
        BASE,
        SUBSCRIPTION
    } = ROUTES_PATH.LAWSUIT_MONITOR

    const pathToLawsuitMonitorSubscriptionPage = `${BASE}${SUBSCRIPTION}`

    return ( <
        ResponsiveModal show = {!close
        }
        onHide = {
            close
        }
        centered backdrop = "static"
        keyboard = {
            false
        } >
        <
        Modal.Body >
        <
        ButtonClose onClick = {
            () => setClose(true)
        } >
        <
        img alt = "modal close btn"
        src = {
            toAbsoluteUrl("/media/salesMonitoring/closeBtn.svg")
        }
        /> <
        /ButtonClose> <
        img width = {
            "100%"
        }
        src = {
            toAbsoluteUrl("/media/salesMonitoring/monitoring.png")
        }
        alt = "Modal monitoring sales" /
        >
        <
        Content >
        <
        Header >
        <
        Title > Gerencie seus processos em um único lugar < /Title> <
        Subtitle >
        Centralize seus processos com o monitoramento de todos os tribunais do Brasil e receba atualizações diárias para não perder
        nenhum prazo!
        <
        /Subtitle> <
        /Header> <
        ButtonWrapper >
        <
        a onClick = {
            () => {
                HandleEvent("Announcement Pop up CTA Clicked", {
                    redirect_path: pathToLawsuitMonitorSubscriptionPage,
                });
                setClose(true);
            }
        }
        href = {
            pathToLawsuitMonitorSubscriptionPage
        }
        style = {
            {
                padding: "10px 40px 10px 40px"
            }
        }
        className = "btn btn-primary" >
        Desbloquear acesso <
        /a> <
        /ButtonWrapper> <
        /Content> <
        /Modal.Body> <
        /ResponsiveModal>
    );
}