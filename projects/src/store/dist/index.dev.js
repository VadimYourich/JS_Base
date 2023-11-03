"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _ProjectDetailsModule = _interopRequireDefault(require("./modules/ProjectDetailsModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ProjectDetailsModule: _ProjectDetailsModule["default"]
  }
});

exports["default"] = _default;