import React from 'react';

import Result from '../../components/Result/Result';
import BCard from '../../components/Card/Card';

import axios from '../../axios/axios-nyt-api';

const Results = () => {
  const rezz = [];

  const getItem = item => {
    return localStorage.getItem(item);
  };

  const printArticles = results => {
    for (var i = 0; i < results.length; i++) {
      var allResults = results[i].headline.main;
      rezz.push(allResults);
    }
    return rezz;
  };

  const getArticles = async () => {
    try {
      const data = {
        topic: getItem('topic'),
        startYear: getItem('startYear'),
        endYear: getItem('endYear')
      };
      const articles = await axios(data).get();
      const docs = articles.data.response.docs;
      const results = await printArticles(docs);
      return results;
    } catch (err) {}
  };

  getArticles();

  console.log(rezz);

  return (
    <div>
      <BCard header="Results">{}</BCard>
    </div>
  );
};

export default Results;
