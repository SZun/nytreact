import React, { Component } from 'react';

import BCard from '../../components/Card/Card';
import BLabel from '../../components/Label/Label';
import BInput from '../../components/Input/Input';
import BButton from '../../components/Button/Button';

import axios from '../../axios/axios-nyt-api';

class Home extends Component {
  state = {
    topic: ''
  };

  getTopic = e => {
    this.setState({
      topic: e.target.value
    });
  };

  onClickHandler = async () => {
    try {
      const data = {
        topic: this.state.topic
      };
      const articles = await axios(data).get('/');
      console.log(articles);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  render() {
    return (
      <div>
        <BCard header="Search">
          <BLabel>Topic</BLabel>
          <BInput
            type="text"
            placeholder="Canada"
            change={e => this.getTopic(e)}
          />
          <BButton
            color="primary"
            className="text-center"
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
