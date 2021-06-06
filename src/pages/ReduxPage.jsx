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
  return (
    <div>
      <h3>ReduxPage</h3>
      <p>{store.getState()}</p>
      <button className="add" onClick={handAdd}>
        add
      </button>
      <button>asycAdd</button>
    </div>
  );
}

export default ReduxPage;
