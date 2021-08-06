import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRICE: `${CONFIG.BASE_URL}listings/latest?CMC_PRO_API_KEY=${CONFIG.KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}info?id=${id}&CMC_PRO_API_KEY=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
