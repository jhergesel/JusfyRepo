import axios from "axios";
import {
    QUERIES,
    QUERY_REQUEST_CONFIGS
} from "./constants";
import {
    prepareProductSelected
} from "../utils/utils.jusfinder";

export const queryCheckout = (document, querySelected, queries) => {
    const config = QUERY_REQUEST_CONFIGS.get(querySelected.identification) || {};

    const query =
        QUERIES.get(querySelected.identification) || QUERIES.get("queries");

    const product_selected = prepareProductSelected(querySelected, queries);
    const isEconomicGroup = querySelected.identification === "economic_group";
    const isVehicleTracking = querySelected.identification === "vehicle_tracking";

    const payload = {
        document: document,
        product_selected,
        queries: isEconomicGroup ? queries : undefined,
    };

    const payloadVehicleTracking = {
        document: document,
        query: querySelected.identification,
        documentType: "plate",
    };

    const choosePayload = isVehicleTracking ? payloadVehicleTracking : payload;

    return axios.post(query.url, choosePayload, config);
};