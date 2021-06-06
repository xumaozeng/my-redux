import { useContext } from "react";
import { Context } from "../components/Context";

export default function useStore() {
  const store = useContext(Context);
  return store;
}
