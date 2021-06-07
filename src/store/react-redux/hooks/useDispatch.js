// set

import useStore from "./useStore";

export default function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}
