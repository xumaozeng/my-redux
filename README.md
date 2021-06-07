## My Redux



### 简介

研究 [redux](https://github.com/reduxjs/redux) 源码，写出js版本的my-redux

一共有以下几个API

- createStore
  - getState
  - dispatch
  - state
  - subscribe

- combineReducers
- applyMiddleware
  - redux-thunk
  - redux-logger

拓展react-redux源码，提供了connect和Provider两个最重要的API还有一些Hooks

- connect
- Provider
- useDispatch
- useSelector
- bindActionCreators