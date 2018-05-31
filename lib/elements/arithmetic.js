"use strict";
exports.__esModule = true;
var atom_1 = require("./atom");
/**
 * Полусумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
function HalfAdder(x, y) {
    return {
        s: atom_1.xor(x, y),
        c: atom_1.and(x, y)
    };
}
exports.HalfAdder = HalfAdder;
/**
 * Полувычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
function HalfSubtractor(x, y) {
    return {
        d: atom_1.xor(x, y),
        b: atom_1.and(atom_1.not(x), y)
    };
}
exports.HalfSubtractor = HalfSubtractor;
/**
 * Полный сумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param cIn Операнд переноса
 */
function FullAdder(x, y, cIn) {
    var ha1 = HalfAdder(x, y);
    var ha2 = HalfAdder(ha1.s, cIn);
    return {
        s: ha2.s,
        c: atom_1.or(ha1.c, ha2.c)
    };
}
exports.FullAdder = FullAdder;
/**
 * Полный вычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param bIn Операнд займа
 */
function FullSubtractor(x, y, bIn) {
    var hs1 = HalfSubtractor(x, y);
    var hs2 = HalfSubtractor(hs1.d, bIn);
    return {
        d: hs2.d,
        b: atom_1.or(hs1.b, hs2.b)
    };
}
exports.FullSubtractor = FullSubtractor;
//# sourceMappingURL=arithmetic.js.map