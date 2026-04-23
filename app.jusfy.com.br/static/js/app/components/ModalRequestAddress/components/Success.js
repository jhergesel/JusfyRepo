import React from 'react';
import {
    Image
} from 'react-bootstrap';


const Success = ({
    onClose
}) => {
    return ( <
        div className = "d-flex flex-column justify-content-center align-items-center"
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        Image src = {
            `/media/requestModal/imageSuccess.png`
        }
        alt = "Success"
        style = {
            {
                width: "420px",
                height: "161px"
            }
        }
        /> <
        b style = {
            {
                fontSize: "20px",
                marginTop: "24px",
                marginBottom: "8px"
            }
        } > Dados validados com sucesso < /b> <
        p style = {
            {
                fontSize: "14px"
            }
        } > As suas informações foram atualizadas com sucesso.Agora você pode seguir com segurança a plataforma Jusfy. < /p> <
        button className = "btn btn-primary"
        style = {
            {
                padding: "10px",
                borderRadius: "5px",
                marginTop: "40px"
            }
        }
        onClick = {
            onClose
        } >
        Acessar plataforma <
        /button> <
        /div>
    );
};

export default Success;