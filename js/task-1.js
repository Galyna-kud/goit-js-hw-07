//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);


//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).за допомогою forEach()

categories.forEach((item) => {
    const titles = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li');

    console.log(`Category: ${titles}`);
    console.log(`Elements: ${elementsCount.length}`);
    
})