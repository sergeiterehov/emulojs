import { LogicNode } from "./base";
import { not, and, or, xor } from "./atom";

/**
 * Выход сумматора
 */
export type AdderOutput = {
    s: LogicNode,
    c: LogicNode,
}

/**
 * Полусумматор
 *
 * @param a A
 * @param b B
 */
export function HalfAdder(a: LogicNode, b: LogicNode): AdderOutput {
    return {
        s: xor(a, b),
        c: and(a, b)
    }
}

/**
 * Полный сумматор
 *
 * @param a A
 * @param b B
 * @param c Cin
 */
export function FullAdder(a: LogicNode, b: LogicNode, c: LogicNode): AdderOutput {
    const ha1 = HalfAdder(a, b)
    const ha2 = HalfAdder(ha1.s, c)

    return {
        s: ha2.s,
        c: or(ha1.c, ha2.c)
    }
}