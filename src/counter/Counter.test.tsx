import { shallow } from "enzyme";
import * as React from "react"
import { CounterProp } from "./Container"
import { Counter } from "./Counter"

describe("Counter Component", () => {
  test("Counterの表示", () => {
    const props: CounterProp = {
      value: {num: 0},
      action: {
        increment: jest.fn(),
        decrement: jest.fn()
      }
    }
    const component = shallow(<Counter {...props} />)
    expect(component.find("p").text()).toBe(`score: ${props.value.num}`)
  })
})
