import Daemon from '../daemon';

test(('class Daemon'), () => {
  const name = 'Ib';
  const expected = {
    name,
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 10,
    defense: 40,
    _distance: 0,
    _stoned: false,
  };
  const daemon = new Daemon(name);
  expect(daemon).toEqual(expected);
});

test(('class Daemon wrong name'), () => {
  expect(() => new Daemon('C', 'Daemon')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Daemon wrong type'), () => {
  expect(() => new Daemon('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});

test(('class Daemon attack with stoned'), () => {
  const name = 'Daemon';
  const magician = new Daemon(name);
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test(('class Daemon attack no stoned'), () => {
  const name = 'Daemon';
  const magician = new Daemon(name);
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
});
