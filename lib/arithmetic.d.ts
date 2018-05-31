import { LogicNode } from "./base";
/**
 * Выход сумматора
 */
export declare type AdderOutput = {
    s: LogicNode;
    c: LogicNode;
};
/**
 * Полусумматор
 *
 * @param a A
 * @param b B
 */
export declare function HalfAdder(a: LogicNode, b: LogicNode): AdderOutput;
/**
 * Полный сумматор
 *
 * @param a A
 * @param b B
 * @param c Cin
 */
export declare function FullAdder(a: LogicNode, b: LogicNode, c: LogicNode): AdderOutput;
