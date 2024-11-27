const mapArrToStrings = require('./mapArrToStrings')

// toBe - сравнивает примитивные значения
// toEqual - сравнивает значения углубленно

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'fdsfsdf'])).toEqual(['1', '2', '3'])
    })
    test('Пустое значение', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
    })
})