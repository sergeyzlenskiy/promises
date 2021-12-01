import MathChar from '../math';

test(('class MathChar'), () => {
  const name = 'MathChar';
  const expected = {
    name,
    type: 'MathChar',
    health: 100,
    level: 1,
    _attack: 10,
    defense: 40,
    _distance: 0,
    _stoned: false,
  };
  const mathChar = new MathChar(name);
  expect(mathChar).toEqual(expected);
});

test(('class MathChar test getters stoned & distance'), () => {
  const name = 'MathChar';
  const mathChar = new MathChar(name);
  const expectedDistance = 50;
  mathChar.distance = expectedDistance;
  expect(mathChar.distance).toEqual(expectedDistance);
  expect(mathChar.stoned).toEqual(false);
});
