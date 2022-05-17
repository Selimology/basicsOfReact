import "./styles.css";
import { useReducer } from "react";

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

const reducer = (state, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case "getArticleStart":
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }

  return state;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("render", state);
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => dispatch({ type: "getArticleStart" })}>
        Start getting article
      </button>
    </>
  );
}
