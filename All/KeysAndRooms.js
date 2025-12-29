/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    const n = rooms.length;
    const visited = new Set();
    let count = 0;

    function dfs(node) {
        count++;
        visited.add(node);
        for (let newKey of  rooms[node]) {

            if (!visited.has(newKey)) {
                dfs(newKey);
            }
        }
    }

    
    dfs(0);
   
    return count===n; 
};