"use strict";
exports.__esModule = true;
var atom_1 = require("./atom");
/**
 * Полусумматор
 *
 * @param a A
 * @param b B
 */
function HalfAdder(a, b) {
    return {
        s: atom_1.xor(a, b),
        c: atom_1.and(a, b)
    };
}
exports.HalfAdder = HalfAdder;
/**
 * Полный сумматор
 *
 * @param a A
 * @param b B
 * @param c Cin
 */
function FullAdder(a, b, c) {
    var ha1 = HalfAdder(a, b);
    var ha2 = HalfAdder(ha1.s, c);
    return {
        s: ha2.s,
        c: atom_1.or(ha1.c, ha2.c)
    };
}
exports.FullAdder = FullAdder;
//# sourceMappingURL=arithmetic.js.map