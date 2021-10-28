
const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategories.length);

const category = document.querySelectorAll('h2');

const parent = document.querySelector('#categories')
const animalList = parent.firstElementChild;
const productsList = animalList.nextElementSibling;
const technologiesList = productsList.nextElementSibling;

const animal = animalList.querySelectorAll('li')
const product = productsList.querySelectorAll('li')
const technologies = technologiesList.querySelectorAll('li')




console.log('Category:', category[0].textContent);
console.log('Elements:', animal.length);

console.log('Category:', category[1].textContent);
console.log('Elements:', product.length);

console.log('Category:', category[2].textContent);
console.log('Elements:', technologies.length);
