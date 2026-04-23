import PropTypes from "prop-types";
import {
    LoadingBullet,
    LoadingIndicator,
    MessageContainer,
    Overlay,
    Wrapper,
} from "./BlockUI.styles";

/**
 * Component to block UI with an overlay, indicating loading process, preventing any user interaction.
 * @param {boolean} blocking Condition to block UI.
 * @param {string} message Message to show while blocking UI.
 * @param {object} styles Styles to apply to the component.
 * @param {ReactNode} children Children to render.
 */
const BlockUi = ({
        blocking,
        message,
        styles,
        children
    }) => ( <
        Wrapper blocking = {
            blocking
        }
        aria - busy = {
            blocking
        }
        aria - label = {
            "Carregando..."
        }
        styles = {
            styles
        } >
        {
            children
        } {
            blocking ? ( <
                    >
                    <
                    Overlay / >
                    <
                    MessageContainer > {
                        message ? < div > {
                            message
                        } < /div> : null} <
                        LoadingIndicator >
                        <
                        LoadingBullet > & bull; < /LoadingBullet> <
                        LoadingBullet > & bull; < /LoadingBullet> <
                        LoadingBullet > & bull; < /LoadingBullet> <
                        /LoadingIndicator> <
                        /MessageContainer> <
                        />
                    ): null
                } <
                /Wrapper>
        );

        BlockUi.propTypes = {
            /**
             * Condition to block UI.
             */
            blocking: PropTypes.bool,
            /**
             * Optional message to show while blocking UI.
             */
            message: PropTypes.string,
            /**
             * Optional styles to apply to the component.
             */
            styles: PropTypes.object,
        };

        export {
            BlockUi
        };