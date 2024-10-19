/**
 * This method is like `partial` except that partially applied arguments are appended to the arguments it receives.
 *
 * The partialRight.placeholder value, which defaults to a `symbol`, may be used as a placeholder for partially applied arguments.
 *
 * Note: This method doesn't set the `length` property of partially applied functions.
 *
 * @template F The type of the function to partially apply.
 * @param {F} func The function to partially apply arguments to.
 * @param {any[]} partialArgs The arguments to be partially applied.
 * @returns {F} Returns the new partially applied function.
 *
 * @example
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * const greetFred = partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // Partially applied with placeholders.
 * const sayHelloTo = partialRight(greet, 'hello', partialRight.placeholder);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */
declare function partialRight<F extends (...args: any[]) => any>(func: F, ...partialArgs: any[]): F;
declare namespace partialRight {
    var placeholder: typeof partialRightPlaceholder;
}
declare const partialRightPlaceholder: unique symbol;

export { partialRight };
