import axios from 'axios';

const instance = data =>
  axios.create({
    baseURL: `http://api.nytimes.com/svc/archive/v1/${data.year}/${
      data.month
    }.json?api-key=${process.env.NYT_API_KEY}`
  });

export default instance;
