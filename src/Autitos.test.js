import { executeCommands } from "./Autitos";
//Primera historia de usuario
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
//Segunda historia de usuario
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
//Tercera historia de usuario
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
//Cuarta historia de usuario
  describe("Ejecutar la combinación de comandos tomando en cuenta una posición inicial por defecto 0,0N y una grilla por defecto 5,5", () => {
    it("deberia combinar los comandos A y D", () => {
      expect(executeCommands("ADA")).toEqual("1,1 E");
    });
    it("deberia combinar los comandos A e I", () => {
        expect(executeCommands("AIA")).toEqual("0,1 O");
      });
    it("deberia combinar los comandos ADI", () => {
        expect(executeCommands("ADAIA")).toEqual("1,2 N");
    });
    it("deberia combinar los comandos ADD", () => {
        expect(executeCommands("ADADA")).toEqual("1,0 S");
    });
  });
//Quinta historia de usuario
describe("Ejecutar la combinación de comandos tomando en cuenta una posición inicial por defecto 0,0N y una grilla especificada", () => {
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
      expect(executeCommands("ADAAAA/3,3")).toEqual("3,1 E");
    });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("AIAAAAAA/4,4")).toEqual("0,1 O");
      });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("DAIAAAAAA/3,3")).toEqual("1,3 N");
    });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("AAAAADADAAAAAAA/4,4")).toEqual("1,0 S");
    });
  });
//Sexta historia de usuario -> olvidé hacer el commmit de esta historia de usuario
describe("Ejecutar la combinación de comandos tomando en cuenta una posición inicial especificada y una grilla especificada", () => {
    it("deberia devolver la posición final según la posición inicial, los comandos y los límites de la grilla", () => {
      expect(executeCommands("ADAAAA/3,3/1,1N")).toEqual("3,2 E");
    });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("ADAIAAIAAA/6,6/2,2E")).toEqual("5,4 N");
      });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("AAADAADAAIAA/6,6/5,5S")).toEqual("1,4 O");
    });
    it("deberia devolver la posición final según los comandos y los límites de la grilla", () => {
        expect(executeCommands("AADAADAAAAADA/4,4/1,1O")).toEqual("4,2 S");
    });
  });
//Séptima historia de usuario -> Verificación de comandos erróneos
  describe("Sending incorrect commands",()=>{
    it("deberia devolver la posición inicial", () => {
        expect(executeCommands("YWFTUB")).toEqual("0,0 N");
      });
    it("deberia devolver la posición inicial", () => {
        expect(executeCommands("MCFPHJ/6,6/2,2E")).toEqual("2,2 E");
      });
    it("deberia devolver la posición inicial", () => {
          expect(executeCommands("AAHGTYJKL/6,6/3,1O")).toEqual("1,1 O");
        });
  });
  // Probar el saltar
  describe("Sending S",()=>{
    it("deberia saltar -> avanzar 2 posiciones",()=>{
      expect(executeCommands("S")).toEqual("0,2 N");
      expect(executeCommands("S/4,4/2,2N")).toEqual("2,4 N");
    });
    it("deberia saltar limitado por la grilla",()=>{
      expect(executeCommands("SSSS/2,2")).toEqual("0,2 N");
      expect(executeCommands("SSS/6,6/2,2N")).toEqual("2,6 N");
    })
    it("deberia saltar hacia el este",()=>{
      expect(executeCommands("DSSSS/2,2")).toEqual("0,2 E");
    })
  });