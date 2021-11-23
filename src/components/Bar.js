// Bar.js
import React from 'react';
import moment from 'moment';
import { TEXT } from '../utils/index'



class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      now: moment().format('YYYY-MM-DD hh:mm:ss'),
    });
  }

  render() {
    const { now } = this.state;
    return (
      <div>
        Bar { now }
        { TEXT }
      </div>
    );
  }
}
export default Bar