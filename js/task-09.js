const changeColorBtn = document.querySelector('.change-color')
const colorName = document.querySelector('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  
function changeBackgroundColor() {
  document.body.style.background = getRandomHexColor();
  
}

function changeColorName() {
  colorName.textContent = getRandomHexColor();
}
 
changeColorBtn.addEventListener('click', getRandomHexColor)
changeColorBtn.addEventListener('click', changeBackgroundColor)
changeColorBtn.addEventListener('click', changeColorName)
