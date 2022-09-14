const axios = require("axios");
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
      },

  headers: {
    'X-RapidAPI-Key': '1184a24417msh5a6fc0af946821fp1a7e00jsn0025dd548c55',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;

  }
 