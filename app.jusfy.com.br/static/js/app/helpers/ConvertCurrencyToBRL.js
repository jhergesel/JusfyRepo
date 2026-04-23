const ConvertCurrencyToBRL = amount => {
    const currencyFormat = amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return currencyFormat;
};

export default ConvertCurrencyToBRL;