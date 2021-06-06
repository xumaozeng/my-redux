/**
 * 子组件消费context value
 * 消费方式有三种：
 * contextType(只能用在类组件，且订阅单一的context来源)
 * useContext(只能用在函数组件中以及自定义hook中)
 * Context.Consumer(没什么限制，只是步骤繁琐)
 */

import useStore from "../hooks/useStore";
import { bindActionCreators } from "../utils/bindActionCreators";
import useForceUpdate from "../hooks/useForceUpdate";
import { useLayoutEffect } from "react";

export const connect =
  (
    mapStateToProps, // function
    mapDispatchToProps // func|obj
  ) =>
  WrappedComponent =>
  props => {
    // 获取store
    const store = useStore();
    const { getState, dispatch, subscribe } = store;
    const stateProps = mapStateToProps(getState());

    let dispatchProps = { dispatch }; // 默认
    if (typeof mapDispatchToProps === "function") {
      dispatchProps = mapDispatchToProps(dispatch);
    } else if (typeof mapDispatchToProps === "object") {
      dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }

    // 订阅state的变更
    const forceUpdate = useForceUpdate();
    // dom更新effect立马执行
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate();
      });
      return () => {
        unsubscribe();
      };
      // eslint-disable-next-line
    }, [store]);

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
  };
