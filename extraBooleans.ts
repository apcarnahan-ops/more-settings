
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */

namespace logic {
    /**
     * Toggle Boolean
     * @param n boolean, eg: true
     */
    //% block="true $n"
    //% n.shadow="toggleYesNo"
    //% group="Boolean"
    //% weight=5
    export function booleanSwitch(n: boolean): boolean {
        return(n);
    }
}
