

function solution (A) {
    const nums = new Set();
    A.forEach(element => {
        if (nums.has(element)) {
            nums.delete(element);
        } else {
            nums.add(element);
        }
    });
    return nums.keys().next().value;
}