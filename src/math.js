import Character from './character';

export default class MathChar extends Character {
  constructor(name, type = 'MathChar') {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
    this.distance = 0;
    this.stoned = false;
  }

  get attack() {
    let result = this._attack * (1 - (this._distance - 1) / 10);
    if (this._stoned) result -= Math.log2(this._distance) * 5;
    return result;
  }

  set attack(attack) {
    this._attack = attack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }
}
