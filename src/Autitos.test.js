import { executeCommands } from "./Autitos";

describe("Avanzar", () => {
    it("deberia avanzar una posición", () => {
      expect(executeCommands("A")).toEqual("0,1 N");
    });
    it("deberia avanzar dos posiciones", () => {
        expect(executeCommands("AA")).toEqual("0,2 N");
      });
      it("deberia avanzar cinco posiciones, toma en cuenta el limite de la grilla", () => {
        expect(executeCommands("AAAAAAA")).toEqual("0,5 N");
      });
    

  });