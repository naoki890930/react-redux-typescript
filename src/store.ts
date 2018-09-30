import counter, { CounterActions, CounterState } from "./counter/module"
import {createStore, combineReducers, Action} from "redux"

export default createStore(
  combineReducers({
    counter
  }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export type ReduxState = {
  counter: CounterState
}

export type ReduxAction = CounterActions | Action
