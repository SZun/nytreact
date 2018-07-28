import React, { Component } from 'react';

import SavedArticle from '../../components/SavedArticle/SavedArticle';
import BCard from '../../components/Card/Card';

import axios from '../../axios/axios-articles';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      ctrl: false,
      inputVal: '',
      comments: 'None'
    };

    this.onChangeHandler = e => {
      this.setState({
        inputVal: `${e.target.value}`
      });
      console.log(this.state.inputVal);
    };

    this.getSavedArticles = async () => {
      try {
        const results = await axios.get('/');
        this.setState({
          articles: [...results.data],
          ctrl: true
        });
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    this.onRemoveHandler = async art => {
      try {
        await axios.delete(`/${art._id}`);
        return this.getSavedArticles();
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    this.onCommentHandler = () => {
      this.setState({
        comments: this.state.inputVal
      });
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
              removed={() => this.onRemoveHandler(art)}
              comment={e => this.onCommentHandler(e)}
              change={e => this.onChangeHandler(e)}
              comments={this.state.comments}
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
