function bestSum(targetSum, numbers) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombo = null

    for (let num of numbers) {
        let remainder = targetSum - num
        const remainderCombo = bestSum(remainder, numbers)
        if (remainderCombo != null) {
            const combination = [...remainderCombo, num]
            if (shortestCombo === null || combination.length < shortestCombo.length) {
                shortestCombo = combination
            }
        }
    } 
    return shortestCombo
}

console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
console.log(bestSum(8, [1,4,5]))