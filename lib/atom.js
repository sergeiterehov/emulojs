"use strict";
exports.__esModule = true;
var base_1 = require("./base");
/**
 * Тип узла - НЕ
 */
var TYPE_LOGIC_NOT = 'not';
/**
 * Тип узла - И
 */
var TYPE_LOGIC_AND = 'and';
/**
 * Тип узла - ИЛИ
 */
var TYPE_LOGIC_OR = 'or';
/**
 * Тип узла - ИСКЛЮЧАЮЩЕЕ ИЛИ
 */
var TYPE_LOGIC_XOR = 'xor';
/**
 * Тип узла - вход
 */
var TYPE_LOGIC_INPUT = 'input';
/**
 * Узел НЕ
 *
 * @param a A
 * @param b B
 */
function not(a) {
    return new base_1.LogicNode(TYPE_LOGIC_NOT, [a]);
}
exports.not = not;
/**
 * Узел И
 *
 * @param a A
 * @param b B
 */
function and(a, b) {
    return new base_1.LogicNode(TYPE_LOGIC_AND, [a, b]);
}
exports.and = and;
/**
 * Узел ИЛИ
 *
 * @param a A
 * @param b B
 */
function or(a, b) {
    return new base_1.LogicNode(TYPE_LOGIC_OR, [a, b]);
}
exports.or = or;
/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param a A
 * @param b B
 */
function xor(a, b) {
    return new base_1.LogicNode(TYPE_LOGIC_XOR, [a, b]);
}
exports.xor = xor;
/**
 * Узел входа
 */
function input() {
    return new base_1.LogicNode(TYPE_LOGIC_INPUT, []);
}
exports.input = input;
/**
 * Положительное значение
 */
exports.positive = [1];
/**
 * Отрицательное значение
 */
exports.negative = [-1];
/**
 * Пересчитывает значение узла
 *
 * @param node Узел
 */
function render(node) {
    switch (node.type) {
        case TYPE_LOGIC_AND:
            update(node.inputs[0].value === exports.positive && node.inputs[1].value === exports.positive ? exports.positive : exports.negative, node);
            break;
        case TYPE_LOGIC_OR:
            update(node.inputs[0].value === exports.positive || node.inputs[1].value === exports.positive ? exports.positive : exports.negative, node);
            break;
        case TYPE_LOGIC_NOT:
            update(node.inputs[0].value === exports.positive ? exports.negative : exports.positive, node);
            break;
        case TYPE_LOGIC_XOR:
            update((node.inputs[0].value === exports.positive) !== (node.inputs[1].value === exports.positive) ? exports.positive : exports.negative, node);
            break;
    }
}
/**
 * Обновляет значение узла (включая зависимости)
 *
 * @param value Значение
 * @param node Узел
 */
function update(value, node) {
    if (value === node.value) {
        return;
    }
    node.value = value;
    node.links.forEach(render);
}
/**
 * Задает значение для узла входа (включая зависимости)
 *
 * @param value Значение
 * @param nodes Узлы
 */
function set(value) {
    var nodes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nodes[_i - 1] = arguments[_i];
    }
    nodes.forEach(function (node) {
        if (TYPE_LOGIC_INPUT !== node.type) {
            throw 'BED_LOGIC_NODE_TYPE';
        }
        update(value, node);
    });
}
exports.set = set;
/**
 * Выводит структуру и ее значения
 *
 * @param node Узел
 */
function trace(node) {
    if (TYPE_LOGIC_INPUT === node.type) {
        return "" + (node.value > 0 ? true : false);
    }
    return node.type + ":" + (node.value > 0 ? true : false) + "( " + node.inputs.map(trace).join(', ') + " )";
}
exports.trace = trace;
//# sourceMappingURL=atom.js.map