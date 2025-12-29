/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {

    let x = 0;
    let y = 0;
    let dir = 0; // 0: North, 1: East, 2: South, 3: West

    const DIRS = [
        [0, 1],   // North
        [1, 0],   // East
        [0, -1],  // South
        [-1, 0]   // West
    ];

    for (let inst of instructions) {
        
        if (inst === 'G') {
            x += DIRS[dir][0];
            y += DIRS[dir][1];
        } else if (inst === 'L') {
            dir = (dir + 3) % 4; // turn left
        } else if (inst === 'R') {
            dir = (dir + 1) % 4; // turn right
        }
    }

    // Bounded if back at origin or not facing north
    return (x === 0 && y === 0) || dir !== 0;
};