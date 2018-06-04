/**
 * Логический узел
 */
export class LogicNode {
    type: string
    inputs: LogicNode[]
    links: LogicNode[]

    value: any

    constructor(type: string, inputs: LogicNode[]) {
        this.type = type
        this.inputs = inputs
        this.links = []

        this.value = null

        inputs.filter(item => !! item).forEach(item => item.links.push(this))
    }

    /**
     * Позднее связывание элементов
     *
     * @param input Индекс входа
     * @param node Узел
     */
    connect(input: number, node: LogicNode): LogicNode {
        this.inputs[input] = node

        node.links.push(this)

        return this
    }
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
 * Типы атомарных логических элементов
 */
export enum LogicElement {
    Input = 'input',
    Not = 'not',
    And = 'and',
    Or = 'or',
    Xor = 'xor'
}

/**
 * Пересчитывает значение узла
 *
 * @param node Узел
 */
function render(node: LogicNode): void {
    switch (node.type) {
        case LogicElement.Not:
            update(node.inputs[0].value === positive ? negative : positive, node)
            break
        case LogicElement.And:
            update(node.inputs[0].value === positive && node.inputs[1].value === positive ? positive : negative, node)
            break
        case LogicElement.Or:
            update(node.inputs[0].value === positive || node.inputs[1].value === positive ? positive : negative, node)
            break
        case LogicElement.Xor:
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
        if (LogicElement.Input !== node.type) {
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
    if (LogicElement.Input === node.type) {
        return `${node.value > 0 ? true : false}`
    }

    return `${node.type}:${node.value > 0 ? true : false}( ${node.inputs.map(trace).join(', ')} )`
}