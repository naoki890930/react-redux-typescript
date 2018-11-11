import { produce } from "immer";
import { actionCreatorFactory } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const actionCreator = actionCreatorFactory()

// ActionCreator

enum ActionType {
  INC = "counter/increment",
  DEC = "counter/decrement"
}

const increment = actionCreator<number>(ActionType.INC)
const decrement = actionCreator<number>(ActionType.DEC)

export const counterActions = { increment, decrement }

// Reducer

export interface CounterState {
  num: number;
}

const initialState: CounterState = {
  num: 0
};

export const counterReducer = reducerWithInitialState(initialState)
  .case(increment, (state, payload) => produce(state, draft => {
    draft.num += payload
  }))
  .case(decrement, (state, payload) => produce(state, draft => {
    draft.num -= payload
  }))
