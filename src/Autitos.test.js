import { executeCommands } from "./Autitos";

describe("Avanzar tomando en cuenta una posición inicial por defecto 0,0N y una grilla por defecto 5,5", () => {
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

  describe("Girar a la izquierda tomando en cuenta una posición inicial por defecto 0,0N y una grilla por defecto 5,5", () => {
    it("deberia girar a la izquierda una vez", () => {
      expect(executeCommands("I")).toEqual("0,0 O");
    });
    it("deberia girar a la izquierda dos veces", () => {
        expect(executeCommands("II")).toEqual("0,0 S");
      });
    it("deberia girar a la izquierda tres veces", () => {
        expect(executeCommands("III")).toEqual("0,0 E");
    });
    it("deberia girar a la izquierda cuatro veces", () => {
        expect(executeCommands("IIII")).toEqual("0,0 N");
    });
  });

  describe("Girar a la derecha tomando en cuenta una posición inicial por defecto 0,0N y una grilla por defecto 5,5", () => {
    it("deberia girar a la derecha una vez", () => {
      expect(executeCommands("D")).toEqual("0,0 E");
    });
    it("deberia girar a la derecha dos veces", () => {
        expect(executeCommands("DD")).toEqual("0,0 S");
      });
    it("deberia girar a la derecha tres veces", () => {
        expect(executeCommands("DDD")).toEqual("0,0 O");
    });
    it("deberia girar a la derecha cuatro veces", () => {
        expect(executeCommands("DDDD")).toEqual("0,0 N");
    });
  });



