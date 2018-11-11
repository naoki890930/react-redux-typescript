import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ReduxState } from "../store";
import { Counter } from "./Counter";
import { counterActions, CounterState } from "./module";

export interface CounterProp {
  value: CounterState;
  action: typeof counterActions;
}

export default connect(
  (state: ReduxState) => ({ value: state.counter }),
  (dispatch: Dispatch) => ({
    action: bindActionCreators(counterActions, dispatch)
  })
)(Counter);
