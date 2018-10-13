import { Action, combineReducers, createStore } from "redux";
import counter, { CounterActions, CounterState } from "./counter/module";

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

export type ReduxAction = CounterActions | Action;
