let number = 0
document.getElementById('c').addEventListener('click', multiplication)

// This code gives me a calculator  that calculates area of squars
function multiplication () {
  number = document.getElementById('input').value
  number = parseInt(number)
  number = number * number
  alert(number)
}
