import checkoutService from "./checkout";
import upgradeService from "./upgrade";
import paymentLinkService from "./payment-link";
import cancelPlanEvents from "./cancelPlanEvents";
import jusprocessoSubscription from "./jusprocessoSubscription";
import userProfileService from "./user-profile";
import loggedCheckout from './logged-checkout';

export const tracking = {
    checkout: checkoutService,
    loggedCheckout: loggedCheckout,
    upgrade: upgradeService,
    paymentLink: paymentLinkService,
    cancel: cancelPlanEvents,
    jusprocessos: jusprocessoSubscription,
    userProfile: userProfileService,
}