export default class StringExtension {
    constructor() {
        if (this instanceof StringExtension) {
            throw Error('A static class cannot be instantiated.');
        }
    }

    /**
     * Converts the first letter to lowercase.
     * 
     * @example <caption>Example usage of decapitalize.</caption>
     * // returns 'hello world'
     * StringExtension.decapitalize('Hello world');
     * 
     * @param {string} string
     */
    static decapitalize(string) {
        const [first, ...rest] = string;
        return first.toLowerCase() + rest.join('');
    }
}