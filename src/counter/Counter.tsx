import * as React from "react";
import { CounterProp } from "./Container";
import * as styles from "./style.pcss";

export class Counter extends React.Component<CounterProp, {}> {
  constructor(props: CounterProp) {
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
    this.props.action.increment(3);
  }

  private onClickDecrement() {
    this.props.action.decrement(2);
  }
}
