import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((result) => {
  localStorage.setItem('GameSaving', result);
}, (error) => { throw new Error(error); });
