// alert("Список: 1 = чай, 2 = кава, 3 = сік.")
// const variant = prompt("Введіть свій варіант від одного до трьох");
// let drinks;
// switch(variant){
//     case "1" :
//     drinks = "Чай"
//     alert(`Ви обрали ${drinks}`);
//     break;
//     case "2" :
//         drinks = "Кава"
//         alert(`Ви обрали ${drinks}`);
//         break;
//         case "3" :
//             drinks = "Сік";
//             alert(`Ви обрали ${drinks}`);
//             break;
//             default : 
//             alert("Введений варіант не існує");
// }

// const dayf = prompt("Ведіть день тижня");
// const dayt = dayf.toLowerCase();
// let dayClasification;
// switch(dayt){
//     case "понеділок":
//         case "вівторок":
//             case "середа":
//                 case "четверг":
//                     case "п'ятниця":
//             dayClasification = "Робочий день";
//                  alert(dayClasification);
//                  break;
//                  case "субота":
//         case "неділя":
//             dayClasification = "вихідний";
//             alert(dayClasification);
//     default:
//         alert("Некоректне значення");
// }

// const month = prompt("Ведіть номер місяця");
// let season;
// switch(month){
//     case "1":
//         case "2":
//             case "12":
//             season = "Зима";
//                  alert(season);
//                  break;
//             case "3":
//                 case "4":
//                     case "5":
//             season = "Весна";
//                  alert(season);
//                  break;
//                  case "6":
//                     case "7":
//                         case "8":
//                 season = "Літо";
//                      alert(season);
//                      break;
//                      case "9":
//                         case "10":
//                             case "11":
//                     season = "Осінь";
//                          alert(season);
//                          break;
//     default:
//         alert("Некоректне значення");
// }

// const colorF = prompt("Ведіть колір");
// const colorT = colorF.toLowerCase();
// let signal;
// switch(colorT){
//     case "зелений":
//             signal = "йти";
//                  alert(signal);
//                  break;
//                  case "жовтий":
//             signal = "чекати";
//                  alert(signal);
//                  break;
//                  case "червоний":
//             signal = "стоп";
//                  alert(signal);
//                  break;
//     default:
//         alert("Некоректне значення");
// }

const x = prompt("Ведіть перше значення");
const y = prompt("Ведіть друге значення");
const xN = Number(x);
const yN = Number(y);
const action = prompt("Ведіть дію (-, +, *, /, %)");
let result;
switch(action){
    case "-":
        result = xN - yN;
                 alert(`Різниця = ${result}`);
                 break;
                 case "жовтий":
                    case "+":
                        result = xN + yN;
                                 alert(`Сумма = ${result}`);
                                 break;
                                 case "*":
                        result = xN * yN;
                                 alert(`Добуток = ${result}`);
                                 break;
                                 case "/" && yN != 0:
                        result = xN / yN;
                                 alert(`Частка = ${result}`);
                                 break;
                                 case "%":
                        result = xN % yN;
                                 alert(`Остача від ділення = ${result}`);
                                 break;
                                //  case "/" && yN === 0:
                                //  alert("На нуль ділити не можна");
                                //  break;
    default:
        alert("Некоректне значення або на нуль ділити не можна");
}
