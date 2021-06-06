// get

import useStore from "./useStore";
import useForceUpdate from "./useForceUpdate";
import { useLayoutEffect } from "react";

export default function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectorState = selector(getState());

  // 订阅更新
  const forceUpdate = useForceUpdate();
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, [store]);

  return selectorState;
}
