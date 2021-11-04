
const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const categoriesArray = [...numberOfCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);




