import "./styles.css";
import { useReducer } from "react";

//define reducer (state,action)
//...state is used so we can access all states and
//overwrite the state we want specifically

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

//this is to prevent mistyping actions
//use it on dispatch
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor"
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false
  });

  //Converting from useState to useReducer
  // const [userInput, setUserInput] = useState("");
  // // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(false);

  return (
    <main className="App" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
      <input
        type="text"
        value={state.userInput}
        //we also need the parameter (target.value) so dispatch
        //is slightly different
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Color
        </button>
      </section>
      <p>{state.userInput}</p>
    </main>
  );
}
