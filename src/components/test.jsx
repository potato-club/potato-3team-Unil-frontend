import React from 'react';

import { addSubscriber, removeSubscriber } from '액션실행함수위치';

const test = ({ count, addSubscriber, removeSubscriber }) => {
  return (
    <div>
      <p>구독자수 {count}</p>
      <button onClick={addSubscriber}>구독+1</button>
      <button onClick={removeSubscriber}>구독-1</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber()),
    removeSubscriber: () => dispatch(removeSubscriber()),
  };
};

const mapDispatchToProps = {
  addSubscriber,
  removeSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
