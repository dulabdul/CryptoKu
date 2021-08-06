import API_ENDPOINT from '../globals/api-endpoint';

class KriptoSource {
  static async allPriceKripto() {
    const response = await fetch(API_ENDPOINT.ALL_PRICE);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailKripto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.data[id];
  }
}

export default KriptoSource;
