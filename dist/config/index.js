"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = 3344;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
exports.isDev = process.env.NODE_ENV === 'development';
