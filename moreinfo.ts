
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum infoType {
    //% block="score"
    Score,
    //% block="life"
    Life,
    //% block="countdown"
    Countdown
}

/**
 * Custom blocks
 */

namespace info {
    /**
     * Determines whether to display the score
     * @param n boolean, eg: true
     */
    //% block="Display score $n"
    //% n.shadow="toggleOnOff"
    //% group="Display"
    //% weight=50
    export function displayScore(n: boolean): void {
        info.showScore(n);
    }

    /**
     * Determines whether to display the lives
     * @param n boolean, eg: true
     */
    //% block="Display lives $n"
    //% n.shadow="toggleOnOff"
    //% group="Display"
    //% weight=40
    export function displayLife(n: boolean): void {
        info.showLife(n);
    }

    /**
    * Determines whether to display the countdown timer
    * @param n boolean, eg: true
    */
    //% block="Display countdown $n"
    //% n.shadow="toggleOnOff"
    //% group="Display"
    //% weight=30
    export function displayCountdown(n: boolean): void {
        info.showCountdown(n);
    }


    /**
    * Determines whether to display the selected element
    * @param n boolean, eg: true
    * @param type enum, eg: infoType
    */
    //% block="Display $type $n"
    //% n.shadow="toggleOnOff"
    //% group="Display"
    //% weight=20
    export function Countdown(type: infoType, n: boolean): void {
        if(type==0){
            info.showScore(n);
        } else if (type==1) {
            info.showLife(n);
        } else if (type==2) {
            info.showCountdown(n);
        }
    }
}
