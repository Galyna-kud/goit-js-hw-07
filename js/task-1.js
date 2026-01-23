//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const liItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItem.length}`);

//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
liItem.forEach((item) => {
    const title = item.querySelector("h2");
    const countLi = item.querySelectorAll("ul li")
    
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${countLi.length}`);
    
})