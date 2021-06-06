import { connect } from "../store/react-redux";

function ReactReduxPage(props) {
  console.log(props);
  const { count, dispatch, add, minus } = props;
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 3 });
  };
  return (
    <div>
      <h3>ReactReduxPage</h3>
      <p>{count}</p>
      <button className="add" onClick={handleAdd}>
        dispacth add
      </button>
      <button className="add" onClick={add}>
        add
      </button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = {
  add: () => ({ type: "ADD", payload: 3 }),
  minus: () => ({ type: "MINUS", payload: 4 })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
