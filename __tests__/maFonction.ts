import { greeter } from '../src/maFonction';

test('that', () => {
  expect(greeter("Machin")).toBe("Hello, Machin");
})