// 手写一个logger，日志打印
export default function logger({ getState, dispatch }) {
  return next => action => {
    console.log("---------------");
    console.log(action.type + "执行了");
    const preState = getState();
    console.log("pre state", preState);

    const returnValue = next(action);
    const nextState = getState();

    console.log("next state", nextState);

    console.log("---------------");
    return returnValue;
  };
}
