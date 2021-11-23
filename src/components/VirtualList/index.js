// VirtualList.js
import React from 'react';
import './index.css'


class VirtualList extends React.PureComponent {
  scrollDom = null;

  constructor(props) {
    super(props);
    this.state = {
      visibleData: [],
      itemHeight: 80,
      totalHeight: 800,
      startOffset: '',
      visibleCount: '',
      start: 0,
      end: null,
      screenHeight: 0, // 可视区域高度
    };
  }

  componentDidMount() {
    const { itemHeight, start } = this.state;
    const { listData } = this.props;
    const screenHeight = this.scrollDom.clientHeight;
    const visibleCount = Math.ceil(screenHeight/itemHeight);
    const end = start + visibleCount;
    this.setState({
      totalHeight: listData.length * itemHeight,
      screenHeight,
      visibleCount,
      end,
      visibleData: listData.slice(start, end)
    })
  }
  scrollEvent = (e) => {
    const { visibleCount, itemHeight  } = this.state;
    const {listData} = this.props;
    const scrollTop = this.scrollDom.scrollTop;
    const start = Math.ceil(scrollTop/itemHeight);
    const end = start + visibleCount;
    this.setState({
      start,
      end,
      visibleData: listData.slice(start, end),
      startOffset: scrollTop - (scrollTop % itemHeight)
    })
  }

  render() {
    const { visibleData, itemHeight, totalHeight, startOffset } = this.state;
    return (
    <div ref={(node) => this.scrollDom = node} className="infinite-list-container" onScroll={this.scrollEvent}>
      <div className="infinite-list-phantom" style={{ height: totalHeight + 'px' }}></div>
      <div className="infinite-list" style={{transform: `translateY(${startOffset}px)`}}>
        {
          visibleData.map((item, index) =>  <div 
          className="infinite-list-item" 
          key={index}
          style={{ 'height': itemHeight + 'px' }}
          >
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="content">
              <div>{item.name}</div>
              <div>{item.text}</div>
            </div>
          </div>)
        }
      </div>
    </div>
    );
  }
}
export default VirtualList;

VirtualList.defaultProps = {
  listData: Array(10000).fill().map((val, idx) => {
    return {
      id: idx, 
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: '回家范德萨花费巨大啥返回的数据撒繁华大街上返回的数据撒，回复'
    }
  })
};

