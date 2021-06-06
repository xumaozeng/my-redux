// import ReduxPage from "./pages/ReduxPage";
import { Provider } from "./store/react-redux";
import store from "./store";
import ReactReduxPage from "./pages/ReactReduxPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxPage />
      </Provider>
    </div>
  );
}

export default App;
