"use strict";
exports.__esModule = true;
var base_1 = require("../base");
/**
 * Узел входа
 */
function input() {
    return new base_1.LogicNode(base_1.LogicElement.Input, []);
}
exports.input = input;
/**
 * Узел НЕ
 *
 * @param x Операнд
 */
function not(x) {
    return new base_1.LogicNode(base_1.LogicElement.Not, [x]);
}
exports.not = not;
/**
 * Узел И
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
function and(x, y) {
    return new base_1.LogicNode(base_1.LogicElement.And, [x, y]);
}
exports.and = and;
/**
 * Узел ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
function or(x, y) {
    return new base_1.LogicNode(base_1.LogicElement.Or, [x, y]);
}
exports.or = or;
/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
function xor(x, y) {
    return new base_1.LogicNode(base_1.LogicElement.Xor, [x, y]);
}
exports.xor = xor;
//# sourceMappingURL=atom.js.map