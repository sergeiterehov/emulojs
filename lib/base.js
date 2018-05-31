"use strict";
exports.__esModule = true;
/**
 * Логический узел
 */
var LogicNode = /** @class */ (function () {
    function LogicNode(type, inputs) {
        var _this = this;
        this.type = type;
        this.inputs = inputs;
        this.links = [];
        this.value = null;
        inputs.forEach(function (item) { return item.links.push(_this); });
    }
    return LogicNode;
}());
exports.LogicNode = LogicNode;
/**
 * Положительное значение
 */
exports.positive = [1];
/**
 * Отрицательное значение
 */
exports.negative = [-1];
/**
 * Типы атомарных логических элементов
 */
var LogicElement;
(function (LogicElement) {
    LogicElement["Input"] = "input";
    LogicElement["Not"] = "not";
    LogicElement["And"] = "and";
    LogicElement["Or"] = "or";
    LogicElement["Xor"] = "xor";
})(LogicElement = exports.LogicElement || (exports.LogicElement = {}));
/**
 * Пересчитывает значение узла
 *
 * @param node Узел
 */
function render(node) {
    switch (node.type) {
        case LogicElement.Not:
            update(node.inputs[0].value === exports.positive ? exports.negative : exports.positive, node);
            break;
        case LogicElement.And:
            update(node.inputs[0].value === exports.positive && node.inputs[1].value === exports.positive ? exports.positive : exports.negative, node);
            break;
        case LogicElement.Or:
            update(node.inputs[0].value === exports.positive || node.inputs[1].value === exports.positive ? exports.positive : exports.negative, node);
            break;
        case LogicElement.Xor:
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
        if (LogicElement.Input !== node.type) {
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
    if (LogicElement.Input === node.type) {
        return "" + (node.value > 0 ? true : false);
    }
    return node.type + ":" + (node.value > 0 ? true : false) + "( " + node.inputs.map(trace).join(', ') + " )";
}
exports.trace = trace;
//# sourceMappingURL=base.js.map