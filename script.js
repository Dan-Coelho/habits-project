"use strict"
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
/*const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-04"],
  food: ["01-01", "01-06"],
}
nlwSetup.setData(data);
nlwSetup.load()*/
const button = document.querySelector("header button")
button.addEventListener("click", add)
form.addEventListener('change', save)
function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExist = nlwSetup.dayExists(today)
  if (dayExist) {
    alert('Dia ja incluso')
    return
  } 
    nlwSetup.addDay(today)
  
}
function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data);
nlwSetup.load()