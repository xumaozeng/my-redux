import compose from "./compose";

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    // 得到store
    const store = createStore(reducer);

    // 普通版的dispatch
    let dispatch = store.dispatch;
    // 加强版的dispatch
    let midAPI = {
      getState: store.getState,
      // 每个中间件都有自己的作用域
      dispatch: (action, ...args) => dispatch(action, ...args)
    };

    // 执行中间件数组
    const middlewareChain = middlewares.map(middleware => middleware(midAPI));

    // 用compose组合函数顺序执行，得到加强版的dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);
    return { ...store, dispatch };
  };
}
