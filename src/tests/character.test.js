import Character from '../character';

test(('class Character'), () => {
  const name = 'character1';
  const type = 'Daemon';
  const expected = {
    name,
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  const zomb = new Character(name, type);
  expect(zomb).toEqual(expected);
});

test(('class Character wrong name'), () => {
  expect(() => new Character('F', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character wrong type'), () => {
  expect(() => new Character('boom', 'Krys')).toThrow('This type Krys is wrong');
});
