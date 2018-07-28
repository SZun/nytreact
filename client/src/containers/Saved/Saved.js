import React, { Component } from 'react';

import SavedArticle from '../../components/SavedArticle/SavedArticle';
import BCard from '../../components/Card/Card';

import axios from '../../axios/axios-articles';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      ctrl: false
    };
    this.getSavedArticles = async () => {
      const results = await axios.get('/');
      this.setState({
        articles: [...results.data],
        ctrl: true
      });
      console.log(this.state.articles);
    };
    this.onClickHandler = async art => {
      console.log(`clicked`);
      console.log(art._id);
      await axios.delete(`/${art._id}`);
      return this.getSavedArticles();
    };

    this.componentDidUpdate = () => {
      return this.state.ctrl ? null : this.getSavedArticles();
    };

    this.componentDidUpdate();
  }

  render() {
    return (
      <div>
        <BCard header="Saved Articles">
          {this.state.articles.map(art => (
            <SavedArticle
              title={art.title}
              date={art.date}
              key={art._id}
              clicked={() => this.onClickHandler(art)}
            />
          ))}
        </BCard>
      </div>
    );
  }
}

export default Saved;

// state = {
//   articles: [],
//   ctrl: false
// };
