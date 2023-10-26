"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _vue.createApp)(_App["default"]).mount("#app");