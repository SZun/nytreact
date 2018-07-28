import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
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
      topic: e.target.value
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
      const data = {
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      };
      const articles = await axios(data).get('/');

      for (var i = 0; i < 10; i++) {
        console.log(articles.data.response[i]);
      }
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  render() {
    return (
      <div>
        <BCard header={this.state.title}>
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
          <NavLink to="/results">
            <BButton
              color="primary"
              className="text-center"
              clicked={() => this.onClickHandler()}
            >
              Search
            </BButton>
          </NavLink>
        </BCard>
      </div>
    );
  }
}

export default Home;