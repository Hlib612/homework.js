const arr1 = [1, 3, 5, 8, 2, 9];
const processArray = (array, callback) => {
    let finish = callback(array);
    return finish;
};
const getSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};
const getMin = (arr) => {
  return Math.min(...arr);
};
const getMax = (arr) => {
  return Math.max(...arr);
};

console.log(processArray(arr1, getSum));

console.log("=========================================");


const operate = (a, b, callback) => {
    let finish = callback(a, b);
     return finish;
};

// Виклик функції з різними операціями
console.log(operate(10, 5, (a, b) => { return a - b})); 
console.log(operate(10, 5, (a, b) => { return a + b})); 
console.log(operate(10, 5, (a, b) => { return a * b})); 
console.log(operate(10, 5, (a, b) => { return a / b}));