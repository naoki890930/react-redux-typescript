import * as React from "react";
import { ActionDispatcher } from "./Container";
import { CounterState } from "./module";
import * as styles from "./style.pcss"

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
        <h1>Counter App</h1>
        <p>score: {this.props.value.num}</p>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button} ${styles.increment}`}
            onClick={this.onClickIncrement}
          >
            increment: 3
          </button>
          <button
            className={`${styles.button} ${styles.decrement}`}
            onClick={this.onClickDecrement}
          >
            decrement: 2
          </button>
        </div>
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
