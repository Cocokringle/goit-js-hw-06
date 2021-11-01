// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.





const buttonSubtract = document.querySelector('[data-action="decrement"]')
const buttonAdd = document.querySelector('[data-action="increment"]')
const counterValue = document.querySelector("#value");

buttonAdd.addEventListener('click', targetButtonAddClick)
function targetButtonAddClick() {
    counterValue.innerHTML++;
 
};

buttonSubtract.addEventListener('click', targetButtonSubtractClick)
function targetButtonSubtractClick() {
        counterValue.innerHTML--;
};
