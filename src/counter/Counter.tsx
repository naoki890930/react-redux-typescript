import * as React from "react";
import { ActionDispatcher } from "./Container";
import { CounterState } from "./module";

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  public render() {
    return (
      <div>
        <p>score: {this.props.value.num}</p>
        <button onClick={this.onClickIncrement}>increment: 3</button>
        <button onClick={this.onClickDecrement}>decrement: 2</button>
      </div>
    );
  }

  private onClickIncrement() {
    this.props.actions.increment(3);
  }

  private onClickDecrement() {
    this.props.actions.decrement(2);
  }
}
