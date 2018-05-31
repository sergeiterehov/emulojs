import { LogicNode } from "./base";
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
/**
 * Узел входа
 */
export declare function input(): LogicNode;
/**
 * Положительное значение
 */
export declare const positive: number[];
/**
 * Отрицательное значение
 */
export declare const negative: number[];
/**
 * Задает значение для узла входа (включая зависимости)
 *
 * @param value Значение
 * @param nodes Узлы
 */
export declare function set(value: any, ...nodes: LogicNode[]): void;
/**
 * Выводит структуру и ее значения
 *
 * @param node Узел
 */
export declare function trace(node: LogicNode): string;
