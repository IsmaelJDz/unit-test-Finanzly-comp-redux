import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Finanzas from "./Finanzas";

configure({ adapter: new Adapter() });

describe("Finanzas test", () => {
  it("Llama a eliminar finanza onclick", () => {
    const finanzas = [
      {
        desc: "Finanza 1",
        cant: 1000
      },
      {
        desc: "Finanza 2",
        cant: 80
      }
    ];
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );

    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(eliminarFinanza.mock.calls).toEqual([[0]]);
    const resultado1 = wrapper.text().includes("Finanza 1");
    const resultado2 = wrapper.text().includes("Finanza 2");

    expect(resultado1).toEqual(true);
    expect(resultado2).toEqual(true);
  });
});
