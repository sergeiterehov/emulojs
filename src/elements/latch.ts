import { LogicNode } from '../base'
import { or, not } from './atom'

/**
 * RS-триггер
 *
 * @param R Вход сброса
 * @param S Вход установки
 */
export function LatchRS(R: LogicNode, S: LogicNode): {Q: LogicNode, NotQ: LogicNode} {
    let or1 = or(R, null)
    let nor1 = not(or1)
    let or2 = or(S, nor1)
    let nor2 = not(or2)

    or1.connect(1, nor2)

    return {
        Q: nor1,
        NotQ: nor2
    }
}