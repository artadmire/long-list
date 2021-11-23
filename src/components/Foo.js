// Foo.js
import React from 'react';
import moment from 'moment';
import { TEXT } from '../utils/index'


class Foo extends React.Component {
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
    return (
      <div>
        Foo { this.state.now }
        {TEXT}
      </div>
    );
  }
}

export default Foo;