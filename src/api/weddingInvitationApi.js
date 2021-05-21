import axios from 'axios';
import CONFIG from '../CONFIG.json';

class WeddingInvitationApi {
  static async getData(id) {
    const { data } = await axios.get(CONFIG.API_BASE_URL + '/bridegroom/' + id);
    return data;
  }

  static async getWish(id) {
    const { data } = await axios.get(CONFIG.API_BASE_URL + '/bridegroom/' + id);
    return data.wishes;
  }

  static async postWish(wish, id) {
    const { data } = await axios.post(
      CONFIG.API_BASE_URL + '/bridegroom/' + id + '/wishes',
      wish
    );
    return data;
  }

  static async deleteWish(wishId, id) {
    const { data } = await axios.delete(
      CONFIG.API_BASE_URL + '/bridegroom/' + id + '/wishes/' + wishId
    );
    return data;
  }
}

export default WeddingInvitationApi;
