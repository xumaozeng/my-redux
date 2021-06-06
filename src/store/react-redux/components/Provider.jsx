/**
 * Provider API
 * React跨层级数据传递 context
 */
import { Context } from "./Context";

// Provider传递value

function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default Provider;
