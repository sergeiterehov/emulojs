"use strict";
exports.__esModule = true;
var atom_1 = require("./atom");
/**
 * RS-триггер, основанный на NOR элементах
 *
 * @param R Вход сброса
 * @param S Вход установки
 */
function LatchRS(R, S) {
    var or1 = atom_1.or(R, null);
    var nor1 = atom_1.not(or1);
    var or2 = atom_1.or(S, nor1);
    var nor2 = atom_1.not(or2);
    or1.connect(1, nor2);
    return {
        Q: nor1,
        NotQ: nor2
    };
}
exports.LatchRS = LatchRS;
/**
 * D-триггер, основанный на NOR элементах
 *
 * @param D Вход данных
 * @param E Вход разрешения
 */
function LatchD(D, E) {
    var rs = LatchRS(atom_1.and(atom_1.not(D), E), atom_1.and(D, E));
    return rs;
}
exports.LatchD = LatchD;
