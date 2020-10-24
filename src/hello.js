/**
 * Use latest ES syntax to write the module.
 */

export default class {
  constructor() {
    this._name = 'World';
  }

  useName(name) {
    this._name = name;
    return this;
  }

  async say() {
    return `Hello ${this._name}`;
  }
}