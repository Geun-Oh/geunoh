const axios = require("axios");

const call = async () => {
    await axios("https://api.coinpaprika.com/v1/tickers")
        .then(res => console.log(res))
}

call();