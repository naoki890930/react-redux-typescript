import { combineReducers, createStore } from "redux";
import counter, { CounterState } from "./counter/module";

export default createStore(
  combineReducers({
    counter
  }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export interface ReduxState {
  counter: CounterState;
}
