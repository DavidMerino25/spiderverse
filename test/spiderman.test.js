const Spiderman = require('./../app/spiderman')
describe("Unit test for spiderman Class", () => {
    test('Case 1 Create an spiderman object', () => {
      //aquí escribimos el codigo que queremos esxrbir tal cual
      //Quiero poder instanciar un objeto con esta información
      const andrewGarfield =new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
  //Validamos que este codigo funcione
  expect(andrewGarfield.name).toBe("Spiderman Sony")
  expect(andrewGarfield.age).toBe(31)
  expect(andrewGarfield.actor).toBe("Andrew Garfield")
  expect(andrewGarfield.movies).toBe(2)
  expect(andrewGarfield.studio).toBe("Sony")
  expect(andrewGarfield.getinfo()).toBe("Hey, I'm Andrew Garfield from Sony") 

    });
  })