import axios from 'axios';

const instance = data =>
  axios.create({
    baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      data.topic
    }?&begin_date=${data.startYear}?&end_date=${data.endYear}&api_key=${
      process.env.NYT_API_KEY
    }`
  });

export default instance;
