import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

test('app.js', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const expected = new GameSaving(JSON.parse(data));
  let actual = {};
  await GameSavingLoader.load().then((saving) => { actual = saving; });
  expect(expected).toEqual(actual);
});
