function moveEmpty(arr) {
    let nonEmpty = [];
    let emptyCount = 0;

    // Loop through the array and separate toys and empty boxes
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            emptyCount++; // Count empty boxes
        } else {
            nonEmpty.push(arr[i]); // Collect non-empty boxes (toys)
        }
    }

    // Add the empty boxes to the end
    while (emptyCount > 0) {
        nonEmpty.push(0);
        emptyCount--;
    }

    return {
        result: nonEmpty,  // The array with empty boxes at the end
        emptyCount: arr.length - nonEmpty.length // Count of empty boxes
    };
}

// Example usage:
const boxes = [1,0,2,0,3,4,0,5];
const result = moveEmpty(boxes);

console.log("Updated array:", result.result); // [3, 4, 1, 7, 0, 0, 0]
console.log("Count of empty boxes:", result.emptyCount); // 3