import React from 'react';
import LazyLoad from './components/LazyLoad'
// import './AppList.css'
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
        <LazyLoad/>
      </div>
    );
  }
}
export default App