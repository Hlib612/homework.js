// for(let i = 1; i < 10; i += 1){
//     console.log(i);
// }


// for(let i = 2; i < 20; i += 1){
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
// }


// let num = 7;
// for(let i = 1; i <= 10; i += 1){
//     console.log(i);
//     const total = num * i;
//     console.log(total);
// }


let n = prompt("Ведіть число");
for(let i = 0; i < n; i += 1){
    if(n > 100){
        alert(`Вітаємо ви б зламали свій компютер!!! Проте все добре бо щоб це зробити вам потрібно клацнути ще ${n - i} разів :)`);
        console.log(i);
        // break;
    } else {
        console.log(i);
    }
}


// let i = 1;
// while(i < 20){
//     i += 1;
//     if(i % 3 !== 0){
//         continue;
//     }
//     console.log(i);
// }


