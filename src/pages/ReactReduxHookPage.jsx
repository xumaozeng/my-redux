import { useCallback } from "react";
import { useDispatch, useSelector } from "../store/react-redux";

function ReactReduxHookPage() {
  const dispatch = useDispatch();
  const count = useSelector(({ count }) => count);

  const add = useCallback(
    () => dispatch({ type: "ADD", payload: 20 }),
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  );
}
export default ReactReduxHookPage;
