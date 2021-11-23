import React from 'react';
import './index.css';

const rowCount = 10000;

class Common extends React.Component {
  constructor() {
    super();
    // 以下每条数据都包含 id、用户名、图片、随机生成4~8个字评论。
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: '回家范德萨花费巨大啥返回的数据撒繁华大街上返回的数据撒，回复'
      }
    });
  }
  renderRow(item) {
    return (
      <div key={item.id} className="row">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <div>{item.name}</div>
          <div>{item.text}</div>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list">
          {this.list.map(this.renderRow.bind(this))}
        </div>
      </div>
    );
  }
  
}

export default Common;
