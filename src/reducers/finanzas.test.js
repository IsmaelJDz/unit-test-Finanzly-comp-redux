import React from "react";
import reducer, { agregar, eliminar } from "./finanzas";

describe("Finanzas Duck", () => {
  describe("Actions Creators", () => {
    it("Agregar", () => {
      const resultado = agregar({});
      expect(resultado).toEqual({
        type: "AGREGAR",
        payload: {}
      });
    });
    it("Eliminar", () => {
      const resultado = eliminar(1);
      expect(resultado).toEqual({
        type: "ELIMINAR",
        index: 1
      });
    });
  });
  describe("reducer", () => {
    it("Agregar accion", () => {
      const resultado = reducer([1], {
        type: "AGREGAR",
        payload: 2
      });
      expect(resultado).toEqual([1, 2]);
    });
    it("Eliminar elemento", () => {
      const resultado = reducer([1, 2, 3], {
        type: "ELIMINAR",
        index: 0
      });
      expect(resultado).toEqual([2, 3]);
    });
    it("Accion por defecto", () => {
      const resultado = reducer([1, 2], {
        type: "OTRA"
      });
      expect(resultado).toEqual([1, 2]);
    });
  });
});
