"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/* tslint:disable-next-line no-submodule-imports */
var server_1 = require("react-dom/server");
var app_1 = require("../client/component/app");
exports.default = {
    render: function () {
        return server_1.renderToString(React.createElement(app_1.default, null));
    },
};
