"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Use latest ES syntax to write the module.
 */
class _default {
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

exports.default = _default;