import Magician from '../magician';

test(('class Magician'), () => {
  const name = 'Mag';
  const expected = {
    name,
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 10,
    defense: 40,
    _distance: 0,
    _stoned: false,
  };
  const magician = new Magician(name);
  expect(magician).toEqual(expected);
});

test(('class Magician wrong name'), () => {
  expect(() => new Magician('P', 'Magician')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character wrong type'), () => {
  expect(() => new Magician('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});

test(('class Magician attack with stoned'), () => {
  const name = 'Mag';
  const magician = new Magician(name);
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test(('class Magician attack no stoned'), () => {
  const name = 'Mag';
  const magician = new Magician(name);
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
});
