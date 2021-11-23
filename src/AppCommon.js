import React from 'react';
import Common from './components/Common'
import './AppList.css'
// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="v-list-wrap">
        <Common/>
      </div>
    );
  }
}
export default App