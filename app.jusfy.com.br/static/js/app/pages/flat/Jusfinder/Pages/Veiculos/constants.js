import {
    cnpjMask,
    cpfMask,
} from "../../../../../../_metronic/_helpers/MasksHelper";
import {
    toAbsoluteUrl
} from "../../../../../../_metronic/_helpers";

export const DOCUMENT_TYPE = new Map([
    [
        "CPF",
        {
            title: "CPF consultado",
            maskedDocument: document => cpfMask(document),
        },
    ],
    [
        "CNPJ",
        {
            title: "CNPJ consultado",
            maskedDocument: document => cnpjMask(document),
        },
    ],
]);

export const ITEMS_HEADER = [{
        title: "Placa",
        icon: toAbsoluteUrl("/media/jusfinder/car-plate.svg"),
    },
    {
        title: "Ano/Modelo",
        icon: toAbsoluteUrl("/media/jusfinder/model.svg"),
    },
    {
        title: "Cidade/UF",
        icon: toAbsoluteUrl("/media/jusfinder/city.svg"),
    },
];
export const LARGES = {
    0: "80px",
    1: "100px",
    2: "140px",
};

export const STATUS_VEHICLE = "EM_CIRCULACAO";

export const INITIALMAXWIDTHSM = 578;