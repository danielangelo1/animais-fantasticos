export default function initBitcoinFetch() {
  async function fetchBitcoin(url) {
    try {
      const btcRes = await fetch(url);
      const btcJSON = await btcRes.json();

      const btcBuyPriceBRL = btcJSON.BRL.buy;

      const btcPrice = document.querySelector(".btc-preco");
      btcPrice.innerText = (1000 / btcBuyPriceBRL).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBitcoin("https://blockchain.info/ticker");
}
