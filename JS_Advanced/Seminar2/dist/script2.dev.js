"use strict";
/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(firstname, lastname) {
  _classCallCheck(this, User);

  this.firstname = firstname;
  this.lastname = lastname;
};

var PremiumUser =
/*#__PURE__*/
function (_User) {
  _inherits(PremiumUser, _User);

  function PremiumUser(firstname, lastname, premiumExpiration) {
    var _this;

    _classCallCheck(this, PremiumUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PremiumUser).call(this, firstname, lastname));
    _this.premiumExpiration = premiumExpiration;
    return _this;
  }

  return PremiumUser;
}(User);

var RegularUser =
/*#__PURE__*/
function (_User2) {
  _inherits(RegularUser, _User2);

  function RegularUser() {
    _classCallCheck(this, RegularUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegularUser).apply(this, arguments));
  }

  return RegularUser;
}(User);

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    console.log("User has premium status until ".concat(user.premiumExpiration));
  } else {
    console.log("User hasn't premium status");
  }
}

var user = new PremiumUser("Jon", "Smit", "30.12.2023");
var mainUser = new User("Tom", "Black");
var normalUser = new RegularUser("Jain", "White");
getAccountInfo(user);
getAccountInfo(mainUser);
getAccountInfo(normalUser);