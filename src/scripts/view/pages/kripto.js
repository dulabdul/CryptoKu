import KriptoSource from '../../data/kripto-source-data';
import { createAllPriceTemplate } from '../templates/template-creator';

const Kripto = {
  async render() {
    return /* html */ `
    <h2 class="text-title text-center mt-5">All Cryptocurrencies</h2>
    <div class="mt-5 p-2 mb-4 table-responsive">
    <table class="table table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Marketcap</th>
      <th scope="col">Price</th>
      <th scope="col">Max Supply</th>
      <th scope="col">Circulating Supply</th>
      <th scope="col">Volume 24H</th>
      <th scope="col">% 1H</th>
      <th scope="col">% 24H</th>
    </tr>
  </thead>
  <tbody id="all_price">
  </tbody>
</table>
    </div>
      `;
  },

  async afterRender() {
    const allPrice = await KriptoSource.allPriceKripto();
    const allPriceContainer = document.querySelector('#all_price');
    allPrice.forEach((btc) => {
      allPriceContainer.innerHTML += createAllPriceTemplate(btc);
    });
  },
};

export default Kripto;
