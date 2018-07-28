import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

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

  setData = data => {
    localStorage.removeItem('topic');
    localStorage.removeItem('startYear');
    localStorage.removeItem('endYear');
    localStorage.setItem('topic', data.topic);
    localStorage.setItem('startYear', data.startYear);
    localStorage.setItem('endYear', data.endYear);
  };

  onClickHandler = async () => {
    const data = {
      topic: this.state.topic,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    };
    this.setData(data);
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
