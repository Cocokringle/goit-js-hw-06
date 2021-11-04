const input = document.querySelector('input[data-length="6"]');


input.addEventListener("blur", () => {
    const inputDatasetLength = input.dataset.length;
    const numberInputDatasetLength = Number(inputDatasetLength);
    
  if (input.value.length === numberInputDatasetLength) {
      input.classList.remove("invalid");
      input.classList.add('valid')
  } else {
    input.classList.remove("valid")
    input.classList.add('invalid')
    }
  
});

