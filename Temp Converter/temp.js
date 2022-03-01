// psuedo code
// if my option value =  &deg;C and my
// convert in option is fahrenheit
// get the input variable
// and convert it from celsius to fahrenheit
// append the answer to our innerhtml (h1) and
// degree icon innertext will be my option value innertext

// else if my option value is equal to &deg;f
//  convert in option is celcius
// get the input variable
// and convert it from fahrenheit to celsius
// append the answer to our innerhtml (h1) and
// degree icon innertext will be my option value innertext

// else through error message

class Temp {
  constructor(tempValue, degFahr, degCels) {
    this.tempValue = tempValue
    this.degree = degree
    this.convertIn = convertIn
  }
}
class Answer {}

// Event listeners
document.getElementById("convert").addEventListener("click", (e) => {
  const tempValue = document.getElementById("degreeInput").value,
    degFahr = document.getElementById("degFahr").value,
    degCels = document.getElementById("degCels").value,
    tFahr = document.getElementById("tFahr").value

  // console.log(degCels)
  e.preventDefault()
})
