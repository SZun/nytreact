import axios from 'axios';

const instance = req =>
  axios.create({
    baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      req.body.topic
    }?&begin_date=${req.body.startYear}?&end_date=${req.body.endYear}&api_key=${
      process.env.NYT_API_KEY
    }`
  });

export default instance;
