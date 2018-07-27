import React, { Component } from 'react';

import BCard from '../../components/Card/Card';
import BLabel from '../../components/Label/Label';
import BInput from '../../components/Input/Input';
import BButton from '../../components/Button/Button';

import axios from '../../axios/axios-nyt-api';

class Home extends Component {
  state = {
    year: '',
    month: ''
  };

  options = e => {
    const optionTags = [];
    for (var i = 1; i < 13; i++) {
      var option = (
        <option value={i} key={i} className="month">
          {i}
        </option>
      );
      optionTags.push(option);
    }
    return optionTags;
  };

  getYear = e => {
    this.setState({
      year: e.target.value
    });
  };

  getMonth = e => {
    this.setState({
      month: e.target.value
    });
  };

  onClickHandler = async () => {
    const data = {
      year: this.state.year,
      month: this.state.month
    };
    const articles = await axios(data).get('/');
    console.log(articles);
  };

  render() {
    return (
      <div>
        <BCard header="Search">
          <BLabel>Year</BLabel>
          <BInput
            type="number"
            placeholder="1974"
            change={e => this.getYear(e)}
          />
          <BLabel>Month</BLabel>
          <select onChange={e => this.getMonth(e)}>{this.options()}</select>
          <br />
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
