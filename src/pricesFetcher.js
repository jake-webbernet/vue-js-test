window.axios = require('axios');
const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

function fetchCrypto(complete) {
    axios.get(url).then(response => {
        complete(response)
    })
}

module.exports.fetchCrypto = fetchCrypto;