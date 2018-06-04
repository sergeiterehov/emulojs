import { LogicNode } from '../base';
/**
 * RS-триггер, основанный на NOR элементах
 *
 * @param R Вход сброса
 * @param S Вход установки
 */
export declare function LatchRS(R: LogicNode, S: LogicNode): {
    Q: LogicNode;
    NotQ: LogicNode;
};
/**
 * D-триггер, основанный на NOR элементах
 *
 * @param D Вход данных
 * @param E Вход разрешения
 */
export declare function LatchD(D: LogicNode, E: LogicNode): {
    Q: LogicNode;
    NotQ: LogicNode;
};
