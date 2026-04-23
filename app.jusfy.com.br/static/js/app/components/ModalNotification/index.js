import React from "react";

import * as S from "./ModalNotification.styles";

const ModalNotification = ({
    notification,
    isOpen,
    close
}) => {
    const hasNotification = notification && Object.keys(notification).length > 0;

    const isExternalLink = hasNotification && notification.link;

    return ( <
        S.ResponsiveModal show = {
            isOpen
        }
        onHide = {
            close
        }
        centered backdrop = "static"
        keyboard = {
            false
        } >
        <
        S.ResponsiveModal.Body >
        <
        S.ButtonClose onClick = {
            close
        } > X < /S.ButtonClose>

        {
            hasNotification ? ( <
                >
                <
                h1 > {
                    notification.title
                } < /h1> <
                S.Content hasLink = {
                    isExternalLink
                }
                dangerouslySetInnerHTML = {
                    {
                        __html: notification.body,
                    }
                }
                /> {
                    isExternalLink ? ( <
                        S.Link href = {
                            notification.link
                        }
                        target = "_blank"
                        rel = "noopener noreferrer" >
                        Clique aqui e veja mais <
                        /S.Link>
                    ) : null
                } <
                />
            ) : null
        } <
        /S.ResponsiveModal.Body> <
        /S.ResponsiveModal>
    );
};

export default ModalNotification;