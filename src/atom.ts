import { LogicNode } from "./base";

/**
 * Тип узла - НЕ
 */
const TYPE_LOGIC_NOT = 'not'
/**
 * Тип узла - И
 */
const TYPE_LOGIC_AND = 'and'
/**
 * Тип узла - ИЛИ
 */
const TYPE_LOGIC_OR = 'or'
/**
 * Тип узла - ИСКЛЮЧАЮЩЕЕ ИЛИ
 */
const TYPE_LOGIC_XOR = 'xor'

/**
 * Тип узла - вход
 */
const TYPE_LOGIC_INPUT = 'input'

/**
 * Узел НЕ
 *
 * @param a A
 * @param b B
 */
export function not(a: LogicNode): LogicNode {
    return new LogicNode(TYPE_LOGIC_NOT, [a])
}

/**
 * Узел И
 *
 * @param a A
 * @param b B
 */
export function and(a: LogicNode, b: LogicNode): LogicNode {
    return new LogicNode(TYPE_LOGIC_AND, [a, b])
}

/**
 * Узел ИЛИ
 *
 * @param a A
 * @param b B
 */
export function or(a: LogicNode, b: LogicNode): LogicNode {
    return new LogicNode(TYPE_LOGIC_OR, [a, b])
}

/**
 * Узел ИСКЛЮЧАЮЩЕГО ИЛИ
 *
 * @param a A
 * @param b B
 */
export function xor(a: LogicNode, b: LogicNode): LogicNode {
    return new LogicNode(TYPE_LOGIC_XOR, [a, b])
}

/**
 * Узел входа
 */
export function input(): LogicNode {
    return new LogicNode(TYPE_LOGIC_INPUT, [])
}

/**
 * Положительное значение
 */
export const positive = [1]
/**
 * Отрицательное значение
 */
export const negative = [-1]

/**
 * Пересчитывает значение узла
 *
 * @param node Узел
 */
function render(node: LogicNode): void {
    switch (node.type) {
        case TYPE_LOGIC_AND:
            update(node.inputs[0].value === positive && node.inputs[1].value === positive ? positive : negative, node)
            break
        case TYPE_LOGIC_OR:
            update(node.inputs[0].value === positive || node.inputs[1].value === positive ? positive : negative, node)
            break
        case TYPE_LOGIC_NOT:
            update(node.inputs[0].value === positive ? negative : positive, node)
            break
        case TYPE_LOGIC_XOR:
            update((node.inputs[0].value === positive) !== (node.inputs[1].value === positive) ? positive : negative, node)
            break
    }
}

/**
 * Обновляет значение узла (включая зависимости)
 *
 * @param value Значение
 * @param node Узел
 */
function update(value: any, node: LogicNode): void {
    if (value === node.value) {
        return
    }

    node.value = value

    node.links.forEach(render)
}

/**
 * Задает значение для узла входа (включая зависимости)
 *
 * @param value Значение
 * @param nodes Узлы
 */
export function set(value: any, ...nodes: LogicNode[]): void {
    nodes.forEach(node => {
        if (TYPE_LOGIC_INPUT !== node.type) {
            throw 'BED_LOGIC_NODE_TYPE'
        }
        
        update(value, node)
    })
}

/**
 * Выводит структуру и ее значения
 *
 * @param node Узел
 */
export function trace(node: LogicNode): string {
    if (TYPE_LOGIC_INPUT === node.type) {
        return `${node.value > 0 ? true : false}`
    }

    return `${node.type}:${node.value > 0 ? true : false}( ${node.inputs.map(trace).join(', ')} )`
}