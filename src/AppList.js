import React from 'react';
import VirtualList from './components/VirtualList'
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
        <VirtualList/>
      </div>
    );
  }
}
export default App