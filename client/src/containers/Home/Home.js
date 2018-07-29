import React, { Component } from 'react';

import axios from '../../axios/axios-nyt-api';

import BCard from '../../components/Card/Card';
import BLabel from '../../components/Label/Label';
import BInput from '../../components/Input/Input';
import BButton from '../../components/Button/Button';

class Home extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: '',
    title: 'Search'
  };

  getTopic = e => {
    this.setState({
      topic: `${e.target.value}`
    });
  };

  getStart = e => {
    this.setState({
      startYear: e.target.value
    });
  };

  getEnd = e => {
    this.setState({
      endYear: e.target.value
    });
  };

  onClickHandler = async () => {
    try {
      localStorage.removeItem('allArticles');
      const data = {
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      };
      const articles = await axios(data).get('/');
      const allArticles = [];
      for (var i = 0; i < 10; i++) {
        var title = articles.data.response.docs[i].headline.main;
        var date = articles.data.response.docs[i].pub_date;
        var url = articles.data.response.docs[i].web_url;
        var results = {
          title: title,
          date: date,
          url: url
        };
        allArticles.push(results);
      }
      localStorage.setItem('allArticles', JSON.stringify(allArticles));
      this.props.history.push('/results');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  render() {
    return (
      <div>
        <BCard header={this.state.title} className="Home">
          <BLabel>Topic</BLabel>
          <BInput
            type="text"
            placeholder="Canada"
            change={e => this.getTopic(e)}
          />
          <BLabel>Start Year</BLabel>
          <BInput
            type="text"
            placeholder="19740101"
            change={e => this.getStart(e)}
          />
          <BLabel>End Year</BLabel>
          <BInput
            type="text"
            placeholder="19970505"
            change={e => this.getEnd(e)}
          />
          <BButton
            color="primary"
            className="text-center my-3 px-5"
            clicked={() => this.onClickHandler()}
          >
            Search
          </BButton>
        </BCard>
      </div>
    );
  }
}

export default Home;
