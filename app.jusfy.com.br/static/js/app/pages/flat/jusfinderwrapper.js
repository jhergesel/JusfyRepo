import {
    useSelector
} from "react-redux";
import JusfinderNew from "./Jusfinder/index.js";
import JusfinderUniversal from "./JusfinderUnivesal";

export const JusfinderWrapper = () => {
    const universalCredits = useSelector(
        state => state.subscription ? .subscription_status ? .isUniversalJusfinder
    );

    return universalCredits ? < JusfinderUniversal / > : < JusfinderNew / > ;
};