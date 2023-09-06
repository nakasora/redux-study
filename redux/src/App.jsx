import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <>
      <h3>hello redux</h3>
      <h3>カウンター:{counter}</h3>
      <button
        onClick={() => dispatch(increment(Math.ceil(Math.random() * 10)))}
        style={{ border: "1px solid" }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement(Math.ceil(Math.random() * 10)))}
        style={{ border: "1px solid" }}
      >
        -
      </button>
      <button onClick={() => dispatch(login())} style={{ border: "1px solid" }}>
        login or logout
      </button>
      {isLogin ? <h3>ログイン成功</h3> : <h3>ログインしてください</h3>}
    </>
  );
}

export default App;
