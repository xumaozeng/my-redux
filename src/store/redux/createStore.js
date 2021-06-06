export default function createStore(reducer: any, enhancer: any) {
  // 如果存在中间件则执行以下
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState: any;
  let currentListeners = [];

  // get
  function getState() {
    return currentState;
  }
}
