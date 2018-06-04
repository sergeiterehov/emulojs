/**
 * Логический узел
 */
export declare class LogicNode {
    type: string;
    inputs: LogicNode[];
    links: LogicNode[];
    value: any;
    constructor(type: string, inputs: LogicNode[]);
    /**
     * Позднее связывание элементов
     *
     * @param input Индекс входа
     * @param node Узел
     */
    connect(input: number, node: LogicNode): LogicNode;
}
/**
 * Положительное значение
 */
export declare const positive: number[];
/**
 * Отрицательное значение
 */
export declare const negative: number[];
/**
 * Типы атомарных логических элементов
 */
export declare enum LogicElement {
    Input = "input",
    Not = "not",
    And = "and",
    Or = "or",
    Xor = "xor",
}
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
