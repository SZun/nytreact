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

  const postArticle = async (title, date, url) => {
    try {
      const data = {
        title: title,
        date: date,
        url: url
      };
      await axios.post('/', data);
      props.history.push('/saved');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <BCard header="Latest Results">
        {state.banan.map(article => {
          return (
            <Result
              key={article.date}
              link={article.url}
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
