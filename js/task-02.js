const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')

const vegetables = ingredients.map(item  => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item')
  ingredientsItem.textContent = item;
  return ingredientsItem;
})

ingredientsList.append(...vegetables)