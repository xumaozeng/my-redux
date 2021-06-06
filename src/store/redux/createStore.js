export default function createStore(reducer, enhancer) {
  // 如果存在中间件则执行以下
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  // 初始state为undefined也可以为用户传进来的，暂时没设置
  let currentState;
  let currentListeners = [];

  // get
  function getState() {
    return currentState;
  }

  // set
  function dispatch(action) {
    currentState = reducer(currentState, action);
    // state改变，执行订阅的函数
    currentListeners.forEach(listener => listener());
  }

  // 订阅和取消订阅要成对出现
  function subscribe(listener) {
    currentListeners.push(listener);
    // 返回一个函数删除currentListeners里的监听函数
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  // 初始化的时候执行下dispatch，设置初始值
  dispatch({ type: "REDUXXXXXXXXXXXX" });

  return {
    getState,
    dispatch,
    subscribe
  };
}
