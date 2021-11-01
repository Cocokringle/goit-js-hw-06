const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
    const inputValue = document.querySelector('#name-input').value;
    if (inputValue.length === 0) {
          userName.textContent = "Anonymous"
    } else {
        userName.textContent = event.currentTarget.value;
    }
});

