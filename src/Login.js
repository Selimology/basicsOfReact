import React, { useReducer } from "react";
import { logincheck } from "./utils";

function reducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    case "login":
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true
      };
    case "error":
      return {
        ...state,
        error: "Incorrect password or username",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: ""
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: ""
      };

    default:
      break;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};

const ACTION = {
  LOGIN: "login",
  SUCCESS: "success",
  ERROR: "error",
  LOGOUT: "logout",
  FIELD: "field"
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: ACTION.LOGIN });

    try {
      await logincheck({ username, password });
      dispatch({ type: ACTION.SUCCESS });
    } catch (error) {
      dispatch({ type: ACTION.ERROR });
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Hello {username}</h1>
            <button onClick={() => dispatch({ type: ACTION.LOGOUT })}>
              Log out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Login</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: ACTION.FIELD,
                  fieldName: "username",
                  payload: e.currentTarget.value
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: ACTION.FIELD,
                  fieldName: "password",
                  payload: e.currentTarget.value
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
