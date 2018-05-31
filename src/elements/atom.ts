import { LogicNode, LogicElement } from "../base";

/**
 * Узел входа
 */
export function input(): LogicNode {
    return new LogicNode(LogicElement.Input, [])
}

/**
 * Узел НЕ
 *
 * @param x Операнд
 */
export function not(x: LogicNode): LogicNode {
    return new LogicNode(LogicElement.Not, [x])
}

/**
 * Узел И
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export function and(x: LogicNode, y: LogicNode): LogicNode {
    return new LogicNode(LogicElement.And, [x, y])
}

/**
 * Узел ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export function or(x: LogicNode, y: LogicNode): LogicNode {
    return new LogicNode(LogicElement.Or, [x, y])
}

/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param x Первый операнд
 * @param b Второй операнд
 */
export function xor(x: LogicNode, y: LogicNode): LogicNode {
    return new LogicNode(LogicElement.Xor, [x, y])
}