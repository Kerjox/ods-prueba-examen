import { Proyecto } from './proyecto';

describe('Proyecto', () => {
  it('should create an instance', () => {
    expect(new Proyecto(1, "Prueba", new Date())).toBeTruthy();
  });
});
