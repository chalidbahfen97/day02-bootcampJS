function findSum(array,count) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] + array[i + 1] === count) {
            return `${array[i]} & ${array[i + 1]} , ${array[i]} + ${array[i + 1]} = ${count}`
        }
    }
}
console.log(findSum([1,2,3,4,5],9));