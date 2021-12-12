import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((value) => json(value))
      .then((result) => new GameSaving(JSON.parse(result)));
  }
}
