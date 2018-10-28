import { Action } from "redux";

export type AppAction<T extends string, Extra extends {} = {}> = Action<T> & { [K in keyof Extra]: Extra[K] }

// ActionCreator

enum ActionType {
  INC = "counter/increment",
  DEC = "counter/decrement"
}

type CounterAction =
  | AppAction<ActionType.INC, { plusAmount: number }>
  | AppAction<ActionType.DEC, { minusAmount: number }>

const increment = (amount: number): CounterAction => ({
  type: ActionType.INC,
  plusAmount: amount
})

const decrement = (amount: number): CounterAction => ({
  type: ActionType.DEC,
  minusAmount: amount
})

export const counterActions = { increment, decrement }

// Reducer

export interface CounterState {
  num: number;
}

const initialState: CounterState = {
  num: 0
};

export default function reducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case ActionType.INC:
      return { num: state.num + action.plusAmount };
    case ActionType.DEC:
      return { num: state.num - action.minusAmount };
    default:
      return state;
  }
}
