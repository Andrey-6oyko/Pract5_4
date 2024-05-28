const numInput = document.getElementById("num")
const btn = document.getElementById("btn")

function calc() {
  const num = parseFloat(numInput.value);

  if (isNaN(num)) {
    alert("Enter the number!")
    return
  }

  switch (true) {
    case (num > 0):
      alert(`x > 0\n\n${Math.pow(Math.E, 3) - Math.sin(num)}`)
      break
    case (num == 0):
      alert(`x = 0\n\n${89}`)
      break
    case (num < 0):
      alert(`x < 0\n\n${Math.log10(num) + Math.sqrt(2 * num)}`)
      break
  }
}

btn.addEventListener("click", calc)