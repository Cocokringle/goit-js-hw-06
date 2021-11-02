const input = document.querySelector('[type="number"]')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
 boxes.innerHTML = '';

    const number = input.value;
    const items = [];

    for (let i = 1; i <= number; i += 1) {
        const makeBox = document.createElement('div');

        makeBox.style.backgroundColor = getRandomHexColor();
        makeBox.style.width = (i * 10) + 20 + 'px';
        makeBox.style.height = (i * 10) + 20 + 'px';
        makeBox.style.marginTop = 10 + 'px';
        items.push(makeBox);
    }

    boxes.append(...items);
}


function destroyBoxes() {
  boxes.innerHTML = "";
}


btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)
