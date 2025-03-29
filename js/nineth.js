// const loglogItems = function(array){
// let n = 0;
//     for(item of array){
//         // console.log(item)
//         console.log(`${n += 1} - ${item}`)
//     }
// }
// loglogItems(["Mango", "Ajax", "Poly"]);


// const calculateEngravingPrice = function(message, pricePerWord){
//     let newMessage = message.split(" ");
//     let total = newMessage.length * pricePerWord;
// return total;
// }
// console.log(calculateEngravingPrice("Mango, Ajax, Poly", 50));


// const findLongestWord = function(string){
// let array = string.split(" ");
// let theLongestWord = array[0];
// for(const word of array){
//     console.log(word);
//     console.log(word.length);
//     if(word.length > theLongestWord.length){
//         theLongestWord = word ;
//     }
// }
// return `Найдовше слово = ${theLongestWord}`;
// }
// console.log(findLongestWord("Mago eat bananas"));

// let arr;
// const formatString = function(string){
//     arr = string.split("")
// if(string.length <= 40){
//     return arr.join(" ");
// } else {
//     arr.length = 40;
//     arr.push("...");
//     return arr.join(" ");
// }
// }
// // console.log(formatString("У всякого своя доля І свій шлях широкий")); // 38 //
// // console.log(formatString("У всякого своя доля І свій шлях широкий Той мурує, той руйнує,")); // 60 //

// let massegeRegistered;
// const checkForSpam = function(message){
//     massegeRegistered = message.toLowerCase();
//     console.log(massegeRegistered);
//     if(massegeRegistered.includes("spam") || massegeRegistered.includes("sale")){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkForSpam("Mango tell SALE right now!"));


// let input = prompt("Будь ласка введіть число");
// let numbers = [];
// let total;
// numbers.push(input);
// console.log(numbers)
// for(let i = 0; i < numbers.length - 1; i += 0){

//     if(input === null || input === ''){
//         if(numbers !== ''){
//             total = numbers[i] + numbers[i + 1]
//             console.log(`Загальна сума чисел дорівнює ${total}`)
//         } else {
//             console.log("Wrong!!!")
//         }
//      } else{
//         input = prompt("Будь ласка введіть число");
//      }
// }
// 6 трохи не вийшло :(
