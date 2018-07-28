import React from 'react';

import axios from '../../axios/axios-articles';

import Result from '../../components/Result/Result';
import BCard from '../../components/Card/Card';

const Results = props => {
  let allArticles = localStorage.getItem('allArticles');
  allArticles = JSON.parse(allArticles);
  const state = {
    banan: allArticles
  };

  const postArticle = (title, date, url) => {
    try {
      const data = {
        title: title,
        date: date,
        url: url
      };
      const res = axios.post('/', data);
      console.log(res);
      props.history.push('/saved');
      console.log(data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <BCard header="Results">
        {state.banan.map(article => {
          return (
            <Result
              key={article.date}
              clicked={() =>
                postArticle(article.title, article.date, article.url)
              }
            >
              {article.title}
            </Result>
          );
        })}
      </BCard>
    </div>
  );
};

export default Results;
