import { LogicNode } from '../base';
/**
 * RS-триггер
 *
 * @param R Вход сброса
 * @param S Вход установки
 */
export declare function LatchRS(R: LogicNode, S: LogicNode): {
    Q: LogicNode;
    NotQ: LogicNode;
};
