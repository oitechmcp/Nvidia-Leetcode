/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let a of asteroids) {
        let alive = true;

        while ( alive && a < 0 && stack.length && stack.at(-1) > 0 ) {
            
            const top = stack.at(-1);
            if (Math.abs(a) > top) {
                stack.pop(); // top explodes
            } else if (Math.abs(a) === top) {
                stack.pop(); // both explode
                alive = false;
            } else {
                alive = false; // incoming asteroid explodes
            }
        }

        if (alive) stack.push(a);
    }

    return stack;
};