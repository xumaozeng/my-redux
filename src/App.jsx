// import ReduxPage from "./pages/ReduxPage";
import { Provider } from "./store/react-redux";
import store from "./store";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";
// import ReactReduxPage from "./pages/ReactReduxPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxHookPage />
      </Provider>
    </div>
  );
}

export default App;
