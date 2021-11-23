import React, { useEffect, useState, useRef, useMemo } from 'react';

import PropTypes from 'prop-types';

// import loadable from '@loadable/component';

import { splitArray } from '../../utils/index';
import './index.css'

// const RenderComponentByType = loadable(() => import('../RenderComponentByType/index'));

function LazyLoadC({ dataSource }) {
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 视窗高

  const componentGroups = useMemo(() => splitArray(dataSource, 10), [dataSource]); // 分割数组

  const groupLen = componentGroups.length;

  const [groupIdx, setGroupIdx] = useState(0);

  const [componentList, setComponentList] = useState([]); // 当前视窗，页面组件数据

  const bottomDomRef = useRef(null);

   useEffect(() => {
    const firstScreenData = componentGroups.length > 0 ? componentGroups[0] : [];
    setComponentList(firstScreenData);
    setGroupIdx(1);
  }, [componentGroups]); // 第一屏渲染

  useEffect(() => {
    const handleScroll = () => {
      const { top } = bottomDomRef.current.getBoundingClientRect();
      if (top < clientHeight && groupIdx < groupLen) {
        setComponentList(componentList.concat(componentGroups[groupIdx]));
        setGroupIdx(groupIdx + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [clientHeight, componentGroups, componentList, groupIdx, groupLen]);
  
  
  return (
    <div>
      <div className="list">
        {componentList.map((item) => 
          <div key={item.id} className="row">
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="content">
              <div>{item.name}</div>
              <div>{item.text}</div>
            </div>
          </div>
        )}
      </div>
      <div ref={bottomDomRef}> Loading </div>
    </div>
  );
};

LazyLoadC.defaultProps = {
  dataSource: Array(10000).fill().map((val, idx) => {
    return {
      id: idx, 
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: '回家范德萨花费巨大啥返回的数据撒繁华大街上返回的数据撒，回复'
    }
  })
};

export default LazyLoadC;
