import React from 'react';

// App.js
class App extends React.Component {
  constructor(props) {
    
    function initWebSocket(wsUri) {
      var websocket = new WebSocket(wsUri);
      websocket.onopen = function(evt) {
          console.log('open...', evt);
      };
      websocket.onclose = function(evt) {

          console.log('close...', evt);
      };
      websocket.onmessage = function(evt) {
          console.log('recv: ', evt.data);
      };
      websocket.onerror = function(evt) {
          console.log('error...', evt);
      };
      return websocket;
  }

  // initWebSocket('ws://localhost:8080/')



    super(props);
    this.state = {
    };

    this.loadFoo = () => {
      import('./components/Foo').then((Foo) => {
        this.setState({
          Foo: Foo.default,
        });
      });
    };

    this.loadBar = () => {
      import('./components/Bar').then((Bar) => {
        this.setState({
          Bar: Bar.default,
        });
      });
    };
  }

  render() {
    const { Foo, Bar } = this.state;

    return (
      <div>
        <button onClick={this.loadFoo}> load foo </button>
        <button onClick={this.loadBar}> load bar </button>

        { Foo && <Foo /> }
        { Bar && <Bar /> }
      </div>
    );
  }
}
export default App