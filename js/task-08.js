
const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }} = event.currentTarget;
  const formData = new FormData(event.currentTarget);

    if (email.value === "" || password.value === "") {
        return alert("Будь котиком, заполни все поля, а то покусаю 😈");
    } else {
        formData.forEach((value, name) => {
            console.log('name:', name);
            console.log('value:', value);
        })
    }
  
  event.currentTarget.reset();
}