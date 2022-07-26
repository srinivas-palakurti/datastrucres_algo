	// we have to think it's like a unorederd graph
    // map children to parent
	// this is so we can traverse "up" from our given target node
    // from map, get the target node
    // traverse from target node to left, right and root.val at distance 0
    // increment distance to 1 and traverse to next FIFO elements from Queue
    // at distance === k, push root.val to Queue and return the queue. This is what we required 

const distanceK = (root, target, k) => {
    
    const parentMap = new Map();
    const visitedSet = new Set();

    const traverse = (node) => {
        if (!node) return;
        
        if (node.left) {
            parentMap.set(node.left, node);
            traverse(node.left);
        }

        if (node.right) {
            parentMap.set(node.right, node);
            traverse(node.right);
        }
    }

    const result = [];

    const findNodes = (targetNode, distance) => {
        if (!targetNode) {
            return;
        }
        
        if (visitedSet.has(targetNode)) {
            return;
        }

        if (distance === k) {
            result.push(targetNode.val);
            return;
        }

        visitedSet.add(targetNode);
        findNodes(parentMap.get(targetNode), distance+1);
        findNodes(targetNode.left, distance+1);
        findNodes(targetNode.right, distance+1);        
    }

    traverse(root);
    findNodes(target, 0);
    return result;
}