import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

const globalState = {
  totalOrder: 0,
};

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case "PLUS_ORDER":
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };

    case "MINUS_ORDER":
      if (state.totalOrder > 0) {
        return {
          ...state,
          totalOrder: state.totalOrder - 1,
        };
      }

    default:
      return state;
  }
};

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
