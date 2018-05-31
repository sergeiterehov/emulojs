import { LogicNode } from "../base";
/**
 * Выход сумматора
 */
export declare type AdderOutput = {
    s: LogicNode;
    c: LogicNode;
};
/**
 * Выход вычитателя
 */
export declare type SubtractorOutput = {
    d: LogicNode;
    b: LogicNode;
};
/**
 * Полусумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
export declare function HalfAdder(x: LogicNode, y: LogicNode): AdderOutput;
/**
 * Полувычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 */
export declare function HalfSubtractor(x: LogicNode, y: LogicNode): SubtractorOutput;
/**
 * Полный сумматор
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param cIn Операнд переноса
 */
export declare function FullAdder(x: LogicNode, y: LogicNode, cIn: LogicNode): AdderOutput;
/**
 * Полный вычитатель
 *
 * @param x Первый операнд
 * @param y Второй операнд
 * @param bIn Операнд займа
 */
export declare function FullSubtractor(x: LogicNode, y: LogicNode, bIn: LogicNode): SubtractorOutput;
