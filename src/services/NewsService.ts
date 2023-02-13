import axios from 'axios'

const API_KEY = 'pub_16891bc6b819a4874ac43bae1c3900f2798ce&q'
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}`

export const NewsService = {
  async getHealthNews() {
    return axios.get(API_URL, {
      params: {
        language: 'en',
        category: 'health',
      },
    })
  },
}
