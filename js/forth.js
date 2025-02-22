// const field1 = prompt();
// const field2 = prompt();
// if(field1 && field2){
// alert( "Обидва поля заповнені")
// } else {
//     alert("Не всі поля заповнені") 
// }

// const number1f = prompt();
// const number2f = prompt();
// const number1t = Number(number1f);
// console.log(number1t)
// const number2t = Number(number2f);
// console.log(number2t)
// const allcost = number1t + number2t;
// console.log(allcost)
// if(allcost > 10){
//     alert("Сума більша за 10");
//     } else if(allcost === 10){
//         alert("Сума дорівнює 10");
//     } else {
//         alert("Сума менша 10") ;
//     }

// const text1 = prompt();
// const qestion1 = text1.includes('JavaScript')
// console.log(qestion1)
// if(qestion1 === true){
//     alert("Текст містить слово JavaScript");
// } else{
//     alert("Текст не містить слово JavaScript");
// }

// const dpsNumberf = prompt();
// const dpsNumbert = Number(dpsNumberf);
// if(dpsNumbert >= 10 && dpsNumbert <= 20){
//         alert("Число входить в діапазон від 10 до 20");
//     } else{
//         alert("Число не входить в діапазон від 10 до 20");
//     }

const Username = prompt("Ведіть своє ім'я не більше 25 символів");
console.log(Username.lenght)
const email = prompt("Ведіть свою електрону пошту(email)");
console.log(email.includes('@.'))
const password = prompt("Ведіть свій пароль не менше 6 і не більше 15 символів");
console.log(password.lenght)
const qestion = email.includes('@.')
console.log(qestion)
const qestion2 = Username.lenght >= 3 && Username.lenght <= 25;
console.log(qestion2)
const qestion3 = password.lenght >= 6 && password.lenght <= 15;
console.log(qestion3)
if(qestion === true, qestion2 === true, qestion3 === true){
            alert("Перенаправлення на іншу сторінку");
        } else{
            alert("Помилка: неправильне заповнення");
        }