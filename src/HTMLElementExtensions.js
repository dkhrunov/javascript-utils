export default class HTMLElementExtensions {
    constructor() {
        if (this instanceof HTMLElementExtensions) {
            throw Error('A static class cannot be instantiated.');
        }
    }

    /**
     * Create element with specific content.
     * 
     * @example <caption>Example usage of createHtmlTag with text argument.</caption>
     * // returns <div>testText</div>
     * HTMLElementExtensions.createHtmlTag('div')('testText');
     * 
     * @example <caption>Example usage of createHtmlTag via currying.</caption>
     * // returns <div>divElement</div>
     * const createDiv = HTMLElementExtensions.createHtmlTag('div');
     * createDiv('divElement');
     * 
     * @example <caption>Example usage of createHtmlTag with DOMString argument.</caption>
     * // returns <div><p>testText</p></div>
     * HTMLElementExtensions.createHtmlTag('div')('<p>testText<p>');
     * 
     * @example <caption>Example usage of createHtmlTag with HTMLElement argument.</caption>
     * // returns <div><div>child</div></div>
     * const createDiv = HTMLElementExtensions.createHtmlTag('div');
     * const childElement = createDiv('child');
     * createDiv(childElement);
     * 
     * @param {string} tagName
     */
    static createHtmlTag(tagName) {
        /**
         * Add content to element.
         * @param {string | HTMLElement} content 
         */
        function addContent(content) {
            const element = document.createElement(tagName);

            if (content instanceof HTMLElement) {
                element.appendChild(content);
            } else {
                element.innerHTML = content;
            }

            return element;
        }

        return addContent;
    }

    /**
     * Toggle the visibility state of an element.
     * 
     * @example <caption>Example usage of toggleVisibility.</caption>
     * // make body element invisible, if body before was visible
     * const bodyElement = document.querySelector('body');
     * HTMLElementExtensions.toogleVisibility(bodyElement);
     * 
     * @param {HTMLElement} element 
     */
    static toggleVisibility(element) {
        element.hasAttribute("hidden")
            ? this.showElement(element)
            : this.hideElement(element);
    }

    /**
     * Show element.
     * 
     * @example <caption>Example usage of showElement.</caption>
     * // make body element visible
     * const bodyElement = document.querySelector('body');
     * HTMLElementExtensions.showElement(bodyElement);
     * 
     * @param {HTMLElement} element 
     */
    static showElement(element) {
        this.visibility(element, true);
    }

    /**
     * Hide element.
     * 
     * @example <caption>Example usage of visibility.</caption>
     * // make body element invisible
     * const bodyElement = document.querySelector('body');
     * HTMLElementExtensions.hideElement(bodyElement);
     * 
     * @param {HTMLElement} element 
     */
    static hideElement(element) {
        this.visibility(element, false);
    }

    /**
     * Set the display state for an element.
     * 
     * @example <caption>Example usage of visibility.</caption>
     * // hide body element
     * const bodyElement = document.querySelector('body');
     * HTMLElementExtensions.visibility(bodyElement, false);
     * 
     * @param {HTMLElement} element 
     * @param {boolean} state 
     */
    static visibility(element, state) {
        state
            ? element.removeAttribute('hidden')
            : element.setAttribute('hidden', '');
    }
}