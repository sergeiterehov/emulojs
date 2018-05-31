import { LogicNode } from "./base";
import { not, and, or, xor } from "./atom";

/**
 * Выход сумматора
 */
export type AdderOutput = {
    s: LogicNode,
    c: LogicNode
}

/**
 * Выход вычитателя
 */
export type SubtractorOutput = {
    d: LogicNode,
    b: LogicNode
}

/**
 * Полусумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
export function HalfAdder(x: LogicNode, y: LogicNode): AdderOutput {
    return {
        s: xor(x, y),
        c: and(x, y)
    }
}

/**
 * Полувычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
export function HalfSubtractor(x: LogicNode, y: LogicNode): SubtractorOutput {
    return {
        d: xor(x, y),
        b: and(not(x), y)
    }
}

/**
 * Полный сумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param cIn Операнд переноса
 */
export function FullAdder(x: LogicNode, y: LogicNode, cIn: LogicNode): AdderOutput {
    const ha1 = HalfAdder(x, y)
    const ha2 = HalfAdder(ha1.s, cIn)

    return {
        s: ha2.s,
        c: or(ha1.c, ha2.c)
    }
}

/**
 * Полный вычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param bIn Операнд займа
 */
export function FullSubtractor(x: LogicNode, y: LogicNode, bIn: LogicNode): SubtractorOutput {
    return {
        d: xor(x, xor(y, bIn)),
        b: or(and(x, not(bIn)), or(and(x, not(y)), and(y, bIn)))
    }
}