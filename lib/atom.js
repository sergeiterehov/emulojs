"use strict";
exports.__esModule = true;
var base_1 = require("./base");
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
 * @param a A
 * @param b B
 */
function not(a) {
    return new base_1.LogicNode(base_1.LogicElement.Not, [a]);
}
exports.not = not;
/**
 * Узел И
 *
 * @param a A
 * @param b B
 */
function and(a, b) {
    return new base_1.LogicNode(base_1.LogicElement.And, [a, b]);
}
exports.and = and;
/**
 * Узел ИЛИ
 *
 * @param a A
 * @param b B
 */
function or(a, b) {
    return new base_1.LogicNode(base_1.LogicElement.Or, [a, b]);
}
exports.or = or;
/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param a A
 * @param b B
 */
function xor(a, b) {
    return new base_1.LogicNode(base_1.LogicElement.Xor, [a, b]);
}
exports.xor = xor;
//# sourceMappingURL=atom.js.map