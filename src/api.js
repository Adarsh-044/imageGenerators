// It would basically handles all api calls 

import axios from "axios"

const searchImages = async (term) => {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            headers: {
                  Authorization: `Client-ID 1BWDehZi4eC_H0dcx002EYOd8NBbb3thL1EnXoHgAqg`
            },
            params: {
                  query: term
            }
      });
      return response.data.results;
}
export default searchImages; 
