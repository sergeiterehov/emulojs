import { LogicNode } from "./base";
/**
 * Узел входа
 */
export declare function input(): LogicNode;
/**
 * Узел НЕ
 *
 * @param a A
 * @param b B
 */
export declare function not(a: LogicNode): LogicNode;
/**
 * Узел И
 *
 * @param a A
 * @param b B
 */
export declare function and(a: LogicNode, b: LogicNode): LogicNode;
/**
 * Узел ИЛИ
 *
 * @param a A
 * @param b B
 */
export declare function or(a: LogicNode, b: LogicNode): LogicNode;
/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param a A
 * @param b B
 */
export declare function xor(a: LogicNode, b: LogicNode): LogicNode;
