import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

test(('GameSaving'), () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const expected = new GameSaving(JSON.parse(data));
  return GameSavingLoader.load(data).then((result) => {
    expect(result).toEqual(expected);
  });
});
