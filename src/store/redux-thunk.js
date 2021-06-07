// 手写一个thunk，处理异步的thunk
export default function thunk({ getState, dispatch }) {
  return next => action => {
    // next是聚合函数applyMiddlerware里的compose()
    // action相当于dispatch
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
