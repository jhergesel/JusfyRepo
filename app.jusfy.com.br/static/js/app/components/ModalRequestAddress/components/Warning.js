import React from 'react';
import {
    Image,
    Spinner
} from 'react-bootstrap';
import {
    useSelector
} from 'react-redux';
import {
    tracking
} from '../../../services/tracking';

const Warning = ({
    setScreen
}) => {
    const loading = useSelector((state) => state.subscription.is_subscription_status_loading);
    const user = useSelector((state) => state.auth.user);

    const getMissingFields = (user) => {
        const requiredFields = ['phone', 'address', 'city', 'state', 'postal_code', 'district'];
        const missingFields = [];

        requiredFields.forEach(field => {
            if (!user[field] || (typeof user[field] === 'object' && !user[field] ? .id)) {
                missingFields.push(field);
            }
        });

        return missingFields;
    };

    React.useEffect(() => {
        if (user) {
            const missingFields = getMissingFields(user);
            tracking.userProfile.trackModalViewed(user, missingFields);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleValidateClick = () => {
        setScreen("form");
    };

    return ( <
        div className = "d-flex flex-column justify-content-center align-items-center"
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        Image src = {
            `/media/requestModal/imageWarning.png`
        }
        alt = "Warning"
        style = {
            {
                width: "220px",
                height: "160px"
            }
        }
        /> <
        b style = {
            {
                fontSize: "20px",
                marginTop: "24px"
            }
        } > Valide suas informações < /b> <
        p style = {
            {
                fontSize: "14px",
                marginTop: "8px"
            }
        } > Para melhorarmos sua experiência na Jusfy, precisamos que você valide algumas informações como seu endereço e telefone. < /p> <
        button className = "btn btn-primary disabled:cursor-not-allowed"
        style = {
            {
                marginTop: "33px",
                paddingLeft: "50px",
                paddingRight: "50px",
                borderRadius: "5px",
            }
        }
        onClick = {
            handleValidateClick
        }
        disabled = {
            loading
        } >
        {
            loading ? < Spinner animation = "border"
            size = "sm" / > : "Validar agora"
        } <
        /button> <
        /div>
    );
};

export default Warning;