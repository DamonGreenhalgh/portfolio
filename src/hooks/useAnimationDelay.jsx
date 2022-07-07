import { useEffect, useState } from "react";

/**
 * useAnimationDelay hook
 * This hook is used to apply a animation to children components
 * of a parent.
 * @param {*} ref parent reference to apply animations on children
 * @param {*} toChild apply to child or parent
 * @param {*} type the animation type, integer index
 * @param {*} delay the delay before applying the animation (in ms)
 * @param {*} speed the speed of the animation delay between children 
 * @param {*} duration the length of the animation
 * @param {*} trigger the state to wait for before applying animation 
 */

const animationTypes = [
    "drop-in-from-above",
    "rise-up-from-below",
    "fade-in"
];

export const useAnimationDelay = (ref, toChild, type, delay, speed, duration, trigger) => {
    const [played, setPlayed] = useState(false);
    useEffect(() => {

        // determine if to apply to children of parent
        const elements = toChild ? Object.values(ref.current.children) : [ref.current];

        // only apply animation once
        if (!played) {

            // hide elements
            elements.forEach((element, index) => {
                element.style.visibility = "hidden";
            });
            
            // only apply animation if trigger state is true
            if (trigger) {

                // apply animation after delay
                setTimeout(() => {
                    elements.forEach((element, index) => {
                            setTimeout(() => {
                                element.style.animation = animationTypes[type] + " " + duration + "s ease";
                                element.style.visibility = "visible";
                            }, index / speed * 1000)
                        }
                    );
                }, delay);

                // flag animation has been played, do not play again
                setPlayed(true);
            }
        }
    }, [played, ref, toChild, type, delay, speed, duration, trigger])
}
