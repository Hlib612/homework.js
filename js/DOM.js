
// const buttonJs = document.querySelector('#button_js_id');
// const textForButtonJs = document.querySelector('#text_js_id');
// buttonJs.textContent = textForButtonJs.textContent;

// const pictureJs = document.querySelector('.picture_js');
// pictureJs.src = "https://firtka.if.ua/media/cache/blog_thumb/data/blog/266413/16e900eed9b4b6fc7b1e706200e7a013.jpeg";

// const avocadoLinkJs = document.querySelector('.link_js');
// avocadoLinkJs.href = "https://en.wikipedia.org/wiki/Apple";

// const fruitsImgJs = document.querySelector('.img_js');
// fruitsImgJs.src = "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg";
// fruitsImgJs.alt = "apple";
// console.log(fruitsImgJs.alt);

// const fruitListJs = document.querySelector('.list_js');
// console.log(fruitListJs);
// const fruitListJsFirstChild = fruitListJs.firstElementChild;
// fruitListJsFirstChild.textContent = "Pineapple";


// // Homework 2
// const parentList = document.querySelector(".homework_2_lis");
// console.log(parentList);
// // const childList = document.querySelector(".homework_2_item");
// // console.log(childList);
// let childLists = [];
// childLists = parentList
// console.log(childLists)

const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const ingredientsUl = document.querySelector("#ingredients");

for(let i; i <= ingredients.length; i += 1){
    const ingredientsLi = document.createElement("li");
    ingredientsLi.textContent = ingredients[i];
    ingredientsUl.prepend(ingredientsLi);
}

