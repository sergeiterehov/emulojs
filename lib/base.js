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
//# sourceMappingURL=base.js.map