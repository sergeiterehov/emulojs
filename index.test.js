const emulogic = require('./')

const atom = emulogic.atom
const arithmetic = emulogic.arithmetic

const not = atom.not
const and = atom.and
const or = atom.or
const xor = atom.xor
const input = atom.input
const set = atom.set
const trace = atom.trace
const negative = atom.negative
const positive = atom.positive

test('Функция трассировки и простая схема', () => {
    let f = (a, b, c) => and(a, or(b, not(c)))

    let a = [input(), input(), input()]
    let root = f(a[0], a[1], a[2])

    set(negative, ...a)
    expect(trace(root)).toBe('and:false( false, or:true( false, not:true( false ) ) )')

    set(positive, a[0])
    expect(root.value).toBe(positive)

    set(positive, a[2])
    expect(root.value).toBe(negative)
})

test('Полный сумматор, полусумматор', () => {
    let a = [input(), input(), input()]
    let adder = arithmetic.FullAdder(...a)

    set(negative, ...a)

    // [a, b, c], [s, c]
    const list = [
        [[positive, positive, negative], [negative, positive]],
        [[positive, negative, positive], [negative, positive]],
        [[negative, positive, negative], [positive, negative]],
        [[negative, negative, positive], [positive, negative]],
        [[positive, positive, positive], [positive, positive]],
    ]

    list.forEach(item => {
        item[0].forEach((item, i) => set(item, a[i]))

        expect(adder.s.value).toBe(item[1][0])
        expect(adder.c.value).toBe(item[1][1])
    })
})