const axios = require('axios');

const getAll = async (req, res) => {
 
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                ids: 'bitcoin,ethereum,binancecoin,solana,xrp,cardano,dogecoin,tron,polkadot,polygon,shiba-inu,toncoin,chainlink,litecoin,uniswap,bitcoin-cash,stellar,okb,near-protocol,internet-computer,avalanche-2,cosmos,terra-luna,algorand',
                vs_currency: 'usd',
            },
        });
        const coinsData = response.data.map(coin => ({
            name: coin.name,
            price: coin.current_price,
            market_cap: coin.market_cap,
            total_volume: coin.total_volume,
          }));
        res.json(coinsData);
};

module.exports = { getAll };