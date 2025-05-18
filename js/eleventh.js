const bankAccount = {
    ownerName: "Riche-rich",
    accountNumber: 65436,
    balance: 10000000,
    deposit (value){
        const sure1 = confirm(`Are you sure you want to deposit on your bank account ${value}`);
        if(sure1 == true){
            this.balance = this.balance + value;
        }else{
            return alert("ok :)")
        }
    },
    withdraw (value){
        const sure2 = confirm(`Are you sure you want to withdraw from your bank account ${value}`);
        if(sure2 == true){
            this.balance = this.balance - value;
        }else{
            return alert("ok :)")
        }
    },
}
// const action = prompt("What you want: deposit or withdraw?");
// if(action === "deposit"){
//     bankAccount.deposit(Number(prompt("How much?")));
//     alert(`Your balance now ${bankAccount.balance}`)
// } else if(action === "withdraw"){
//     const sum = Number(prompt("How much?"));
//     if(sum < bankAccount.balance){
//         bankAccount.withdraw(sum);
//         alert(`Your balance now ${bankAccount.balance}`)
//     }else{ 
//         alert(`Sory but your bank account have only ${bankAccount.balance}`)
//     }
// } else {
//     alert("Wrong function")
// }
// console.log(bankAccount);


const weather = {
    temp : prompt("Введіть температуру"),
    humidity: 0,
    windSpeed: 0,
    belowZero () {
       if(Number(this.temp) < 0){
       return true;
       } else {
        return false;
       }
    }, 
}
// const answer = weather.belowZero();
// if(answer){
//     alert("Температура нище 0")
// } else {
//     alert("Температура вище 0")
// }
// console.log(answer);


// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  Додайте метод "login", який буде перевіряти правильність введеного email та password.


const user = {
    name: "Hlib",
    email: "boom@gmail.com",
    password: "123Boom",
    login(email, password){
        if(this.email === email && this.password === password){
return true;
        }else{
            console.log("Введіть правильний пароль");
        } 
    }
}
// const result = user.login("boom@gmail.com", "123Boom")


const movie = {
    title: "The Movie",
    director: "Hlib",
    year: "1988",
    rating: 7,
    checkRating(){
        if(this.rating > 8){
            return "Good movie"
        } else{
            return "Bad movie"
        }
    }
}
console.log(movie.checkRating());