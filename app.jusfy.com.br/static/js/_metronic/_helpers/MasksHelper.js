export const cpfMask = value => {
    return value
        .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};
export const cnpjMask = value => {
    const digits = value.replace(/\D/g, "").slice(0, 14);
    const parts = digits.match(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/);
    if (!parts) return digits;
    const [, p1, p2, p3, p4, p5] = parts;
    let result = p1;
    if (p2) result += `.${p2}`;
    if (p3) result += `.${p3}`;
    if (p4) result += `/${p4}`;
    if (p5) result += `-${p5}`;
    return result;
};
export const pasepMask = value =>
    value
    .replace(/\D/g, "") // substitui tudo que não seja número por nada
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3}\.\d{5})(\d)/, "$1.$2")
    .replace(/(\d{3}\.\d{5}\.\d{2})(\d)/, "$1-$2")
    .replace(/(\.\d{5})\d+?$/, "$1") // Garante 5 números após primeiro ponto
    .replace(/(-\d{1})\d+?$/, "$1"); // Garante 1 numero depois do traço

export const timeMask = value => {
    var v;
    v = value.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{2})$/, "$1:$2");
    return v;
};

export const timeFormat = value => {
    const hasColon = value.indexOf(":") > -1;

    if (!hasColon && value.length === 1) {
        // ex.: 2, output: 02:00
        return `0${value}:00`;
    }

    if (!hasColon && value.length === 2) {
        // ex.: 02, output: 02:00
        return `${value}:00`;
    }

    if (hasColon && value.length === 4) {
        // ex.: 3:30, output: 03:30
        return `0${value}`;
    }

    return value;
};

export const phoneMask = value => {
    let v = value.replace(/\D/g, "").slice(0, 11); // Limita a 11 dígitos (máx. para telefones BR)
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); // Parênteses nos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); // Hífen entre o quarto e o quinto dígitos
    return v.slice(0, 15); // Limita a 15 caracteres formatados
};

export const cepMask = value => {
    var v;
    v = value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return v;
};

export const cardMask = value => {
    var v;
    v = value.replace(/\D/g, "");
    v = v
        .match(/(\d{0,4})/g)
        .join(" ")
        .trim();
    return v;
};

export const expirationMask = value => {
    return value.length === 3 && value.substring(2) !== "/" ?
        `${value.substring(0, 2)}/${value.substring(2)}` :
        value;
};

export const cnjMask = value => {
    const cleanedValue = value.replace(/[^\d]/g, "");
    const newValue = cleanedValue.replace(
        /(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/,
        "$1-$2.$3.$4.$5.$6"
    );
    return newValue;
};