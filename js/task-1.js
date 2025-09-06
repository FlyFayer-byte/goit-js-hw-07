// 1. Знаходимо всі елементи li з класом item
const categories = document.querySelectorAll('li.item');
// 2. Виводимо кількість знайдених елементів
console.log(`Number of categories: ${categories.length}`);
// 3. Перебираємо кожен елемент li.item
categories.forEach(category => {
// 4. Знаходимо заголовок (тег h2) всередині поточного елемента li.item
    const title = category.querySelector('h2').textContent;
// 5. Знаходимо всі вкладені елементи li всередині поточного елемента li.item
    const items = category.querySelectorAll('ul li').length;
// 6. Виводимо заголовок і кількість елементів у категорії
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
});