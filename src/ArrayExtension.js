export default class ArrayExtension {
    constructor() {
        if (this instanceof ArrayExtension) {
            throw Error('A static class cannot be instantiated.');
        }
    }

    /**
     * Get the minimum number in an array or the required amount of numbers from this array.
     * 
     * @example <caption>Example usage of minNums.</caption>
     * // returns [2]
     * ArrayExtension.minNums([5,4,10,2,26]);
     * 
     * @example <caption>Example usage of minNums with additional argument - amount of minimum numbers.</caption>
     * // returns [2, 4]
     * ArrayExtension.minNums([5, 4, 10, 2, 26]);
     * 
     * @param {number[]} array 
     * @param {number} amount 
     */
    static minNums(array, amount = 1) {
        return array.sort((a, b) => a - b).slice(0, amount);
    }

    /**
     * Return new array with unique values.
     * 
     * @example <caption>Example usage of distinct.</caption>
     * // returns [1, 2, 3, 4, 5]
     * ArrayExtension.distinct([1, 2, 3, 2, 4, 3, 1, 5]);
     * 
     * @param {any[]} array 
     */
    static distinct(array) {
        return Array.from(new Set(array));
    }

    /**
     * Turns an array of objects into an object with keys from the field of each object.
     * 
     * @example <caption>Example usage of mapToObjectBy.</caption>
     * // returns {
     * //   one: {id: 1, value: 'one'},
     * //   two: {id: 2, value: 'two'}
     * // }
     * ArrayExtension.distinct([{id: 1, value: 'one'}, {id: 2, value: 'two'}], 'value');
     * 
     * @param {objcet[]} array 
     * @param {string} [key=id] 
     */
    static mapToObjectBy(array, key = 'id') {
        const initialValue = {};

        return array.reduce((object, item) => {
            return {
                ...object,
                [item[key]]: item,
            };
        }, initialValue);
    }

    /**
     * Shuffle elements in array.
     * 
     * @example <caption>Example usage of shuffle.</caption>
     * // returns [5, 2, 3, 1, 4]
     * ArrayExtension.shuffle([1, 2, 3, 4, 5]);
     * 
     * @param {any} array 
     */
    static shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    /**
     * Split elements in array by predicate.
     * 
     * The elements that pass the check are placed in the first array, other in second.
     *
     * @example <caption>Example usage of split.</caption>
     * // returns [[1,2,3,4,0], [5, 6,7,8,9]]
     * ArrayExtension.split([1,2,3,4,5,6,7,8,9,0], elem => elem < 5);
     * 
     * @param {any} array of two arrays
     */
    static split(array, predicate) {
        return array.reduce((accum, elem) => {
            predicate(elem) ? accum[0].push(elem) : accum[1].push(elem);
            
            return accum;
        }, [[], []]);
    }
}
