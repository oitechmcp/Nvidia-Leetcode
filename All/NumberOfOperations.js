const makeConnected = (n, connections) => {
  const parent = Array(n).fill(-1); 
  let spare = 0, notConnected = n - 1
  
  for (let [node, connection] of connections) {
    if (find(node) !== find(connection)) {
      union(node, connection);
      notConnected--;
    } else spare++;
  }
  
  return notConnected <= spare ? notConnected : -1;
  
  function find(node) {
    if (parent[node] === -1) return node
    parent[node] = find(parent[node])
    return parent[node]
  }
  
  function union(node1, node2) {
    const parent1 = find(node1), parent2 = find(node2);
    if (parent1 !== parent2) parent[parent2] = parent1;
  }
};