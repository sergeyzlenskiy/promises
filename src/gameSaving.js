export default class GameSaving {
  constructor(gameData) {
    const {
      id,
      created,
      userInfo,
    } = gameData;
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}
