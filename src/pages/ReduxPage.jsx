import store from "../store";

function ReduxPage() {
  return (
    <div>
      <h3>ReduxPage</h3>
      <div>{store.getState()}</div>
      <button className="add">add</button>
      <button>asycAdd</button>
    </div>
  );
}

export default ReduxPage;
