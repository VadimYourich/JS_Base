"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _InternoComponent = _interopRequireDefault(require("../pages/InternoComponent.vue"));

var _BlogComponent = _interopRequireDefault(require("../pages/BlogComponent.vue"));

var _BlogDetailsComponent = _interopRequireDefault(require("../pages/BlogDetailsComponent.vue"));

var _ProjectComponent = _interopRequireDefault(require("../pages/ProjectComponent.vue"));

var _ProjectDetailsComponent = _interopRequireDefault(require("../pages/ProjectDetailsComponent.vue"));

var _NotFoundComponent = _interopRequireDefault(require("../pages/NotFoundComponent.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "Home",
  component: _InternoComponent["default"]
}, {
  path: "/blog",
  name: "Blog",
  component: _BlogComponent["default"]
}, {
  path: "/blogdetails",
  name: "BlogDetails",
  component: _BlogDetailsComponent["default"]
}, {
  path: "/project",
  name: "Project",
  component: _ProjectComponent["default"]
}, {
  path: "/projectdetails",
  name: "ProjectDetails",
  component: _ProjectDetailsComponent["default"]
}, {
  path: "/:CatchAll(.*)",
  name: "404",
  component: _NotFoundComponent["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;