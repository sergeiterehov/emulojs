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

        inputs.forEach(item => item.links.push(this))
    }
}