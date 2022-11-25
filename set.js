module.exports = function MyAwesomeSet(array) {
    let arr = [];
    if (array) {
        arr = [];
        for (let i = 0; i < array.length; i++) {
            if (!arr.includes(array[i])) {
                arr.push(array[i]);
            }
        }
    }

    return {
        get size() {
            return arr.length; // длина массива
        },

        has(item) {
            return arr.includes(item); // существует ли элемент в массиве true/false
        },

        add(item) {
            if (!arr.includes(item)) { // элемент не существует в массиве
                arr.push(item); // добавить элемент в массив
            }
            return this; // элемент уже существует, поэтому не добовляем
        },

        delete(item) {
            if (arr.includes(item)) { // существует ли элемент в массиве true/false
                if (Number.isNaN(item)) { // Проверка на NaN
                    arr.splice(arr.findIndex(Number.isNaN), 1); // удаляем элемент
                    return true;
                }
                arr.splice(arr.indexOf(item), 1); // находим по индексу элемент и удаляем его
                return true;
            }
            return false; // false: элемент не найден
        },

        clear() {
            arr = []; // очистка массива
            return this;
        },
    };
}


// // Tests
// let object = null
// let array = null
// let set = null
// let res = null
//
// // size
// array = [1, 2, 3, 4, 5]
// set = MyAwesomeSet(array)
// console.assert(set.size === array.length, 'size property')
//
// array = [4, 4, 8, 15, 15, 16, 23, 42]
// set = MyAwesomeSet(array)
// console.assert(set.size === new Set(array).size, 'unique value')
//
//
// // has, add, delete, clear
// object = {}
// array = [{}, object, 42, NaN, undefined]
// set = MyAwesomeSet(array)
//
// console.assert(set.has(23) === false, 'has not 23')
// console.assert(set.has({}) === false, 'has not {}')
// console.assert(set.has(42) === true, 'has 42')
// console.assert(set.has(NaN) === true, 'has NaN')
// console.assert(set.has(object) === true, 'has object')
// console.assert(set.has(undefined) === true, 'has undefined')
//
// set.add(NaN).add(undefined)
// console.assert(set.size === array.length, 'add NaN & undefined')
//
// set.add({})
// array.push({})
// console.assert(set.size === array.length, 'add {}')
//
// res = set.delete(23)
// console.assert(res === false, '23 is not deleted')
// console.assert(set.size === array.length, 'same size after delete 23')
//
// res = set.delete({})
// console.assert(res === false, '{} is not deleted')
// console.assert(set.size === array.length, 'same size after delete {}')
//
// res = set.delete(42)
// console.assert(res === true, '42 is deleted')
// console.assert(set.has(42) === false, 'do not includes 42')
//
// res = set.delete(object)
// console.assert(res === true, 'object is deleted')
// console.assert(set.has(object) === false, 'do not includes object')
//
// res = set.delete(NaN)
// console.assert(res === true, 'NaN is deleted')
// console.assert(set.has(NaN) === false, 'do not includes NaN')
//
// res = set.delete(undefined)
// console.assert(res === true, 'undefined is deleted')
// console.assert(set.has(undefined) === false, 'do not includes undefined')
//
// set.clear()
// console.assert(set.size === 0, 'empty after clear')
//
// set.add(4).add(4).add(8).add(15).add(16).add(23).add(42).add(42)
// console.assert(set.size === 6, 'add handels not unique values')
//
// set.clear()
// set.add({}).add({}).add({})
// set.add(object).add(object).add(object).add(object).add(object)
// console.assert(set.size === 4, 'add handels not unique refs')