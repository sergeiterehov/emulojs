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
    return {
        d: atom_1.xor(x, atom_1.xor(y, bIn)),
        b: atom_1.or(atom_1.and(x, atom_1.not(bIn)), atom_1.or(atom_1.and(x, atom_1.not(y)), atom_1.and(y, bIn)))
    };
}
exports.FullSubtractor = FullSubtractor;
//# sourceMappingURL=arithmetic.js.map