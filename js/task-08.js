
const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
 
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value
  const password = formElements.password.value
  const formData = {
    email, password,
  }

    if (email === "" || password === "") {
        return alert("Будь котиком, заполни все поля, а то покусаю 😈");
    } else {
        console.log(formData)
    }
  
  event.currentTarget.reset();
}