import { useEffect, useReducer } from "react";
import store from "../store";

function ReduxPage() {
  // 类似于类组件的this.forceUpdate()
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // 组件挂载和卸载时执行
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // add
  const handAdd = () => {
    store.dispatch({ type: "ADD", payload: 2 });
  };

  // async add
  const handAsyncMinus = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({
          type: "MINUS",
          payload: 1
        });
      }, 1000);
    });
  };

  return (
    <div>
      <h3>ReduxPage</h3>
      <p>{store.getState().count}</p>
      <button className="add" onClick={handAdd}>
        add
      </button>
      <button onClick={handAsyncMinus}>asycMinus</button>
    </div>
  );
}

export default ReduxPage;
