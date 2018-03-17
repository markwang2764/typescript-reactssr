"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var app_1 = require("./component/app");
function renderApp() {
    ReactDOM.hydrate(app_1.default, document.getElementById('app'));
}
window.onload = function () {
    renderApp();
};
