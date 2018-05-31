import { LogicNode } from "../base";
/**
 * Узел входа
 */
export declare function input(): LogicNode;
/**
 * Узел НЕ
 *
 * @param x Операнд
 */
export declare function not(x: LogicNode): LogicNode;
/**
 * Узел И
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export declare function and(x: LogicNode, y: LogicNode): LogicNode;
/**
 * Узел ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export declare function or(x: LogicNode, y: LogicNode): LogicNode;
/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export declare function xor(x: LogicNode, y: LogicNode): LogicNode;
