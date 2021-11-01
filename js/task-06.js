const input = document.querySelector('input[data-length="6"]');
const inputValue = document.querySelector('input[data-length="6"]').value;

input.addEventListener("blur", () => {
    const inputDatasetLength = input.dataset.length;
    const numberInputDatasetLength = Number(inputDatasetLength);
    
    if (inputValue.length === numberInputDatasetLength) {
      input.classList.add('valid')
    } else {
    input.classList.add('invalid')
    }
    console.log('тип первого значения:',typeof inputValue.length)
    console.log('тип второго значения:',typeof numberInputDatasetLength)
});


// input.addEventListener("blur", () => {
//     if (inputValue.length === input.dataset.length) {
//       input.classList.add('valid')
//     } else {
//     input.classList.add('invalid')
//     }
// });

