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
  constructor(tempValue, selectDegree, selectTemp) {
    this.tempValue = tempValue
    this.selectDegree = selectDegree
    this.selectTemp = selectTemp
  }
}
class Answer {
  convertToFahrenheit(temp) {
    const tempAnswer = document.getElementById("tempAnswer")
    const degreeIcon = document.getElementById("degreeIcon")
    let fahrCalc = Number(9 / 5 + 32)
    tempAnswer.innerHTML = parseFloat(
      parseInt(temp.tempValue) * fahrCalc
    ).toFixed(0)
  }
}

// Event listeners
document.getElementById("convert").addEventListener("click", (e) => {
  const tempValue = Number(document.getElementById("degreeInput").value),
    selectDegree = document.getElementById("selectDegree"),
    selectTemp = document.getElementById("selectTemp")

  const temp = new Temp(tempValue, selectDegree, selectTemp)

  const answer = new Answer()

  if (selectDegree.value === "Celsius" && selectTemp.value === "Fahrenheit") {
    answer.convertToFahrenheit(temp)
  }
  e.preventDefault()
})
