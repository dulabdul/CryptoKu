import { createBtcDetailTemplate } from '../templates/template-creator';
import KriptoSource from '../../data/kripto-source-data';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return /* html */`
    <div class="container mt-4">
    <h2>Detail</h2>
    </div>
    <div id="bitcoinDetail" class="container mt-3">
  </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await KriptoSource.detailKripto(url.id);
    const bitcoinContainer = document.querySelector('#bitcoinDetail');
    bitcoinContainer.innerHTML = createBtcDetailTemplate(detail);
  },
};

export default Detail;
