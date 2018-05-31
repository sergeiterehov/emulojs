const { base, elements } = require('./')
const { atom, arithmetic } = elements

const { input, not, and, or, xor } = atom
const { set, trace, positive, negative } = base

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

    // [x, y, cIn], [s, c]
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

test('Полный вычитатель, полувычитатель', () => {
    let a = [input(), input(), input()]
    let subtractor = arithmetic.FullSubtractor(...a)

    set(negative, ...a)

    // [x, y, bIn], [d, b]
    const list = [
        [[positive, positive, negative], [negative, negative]],
        [[positive, negative, positive], [negative, negative]],
        [[negative, positive, negative], [positive, positive]],
        [[negative, negative, positive], [positive, positive]],
        [[positive, positive, positive], [positive, positive]],
    ]

    list.forEach(item => {
        item[0].forEach((item, i) => set(item, a[i]))

        expect(subtractor.d.value).toBe(item[1][0])
        expect(subtractor.b.value).toBe(item[1][1])
    })
})