/**
 * Логический узел
 */
export declare class LogicNode {
    type: string;
    inputs: LogicNode[];
    links: LogicNode[];
    value: any;
    constructor(type: string, inputs: LogicNode[]);
}
