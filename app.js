var height = 0;
var weight = 0;
var bmi = 0;
var seconds = 0;
var obj;
const myWeight = document.getElementById("weightInput")
const myHeight = document.getElementById("heightInput")
const mySubmit = document.getElementById("submit")
const myModal = document.getElementById('modal')
const myResult = document.getElementById('result')
const myClose = document.getElementById('restart')
const myDarkmode = document.getElementById('dark-mode')
const mySeconds = document.getElementById('seconds')

function timing(){
  seconds++
  mySeconds.textContent = seconds
  if(seconds < 10){
    mySeconds.textContent = "0" + seconds
  }
}

obj = setInterval(timing, 1000)

mySubmit.addEventListener('click', () =>{
   height = myHeight.value;
   weight = myWeight.value;
   var lastHeight = height * height;
  bmi = Math.floor(weight / lastHeight) ;
  clearInterval(obj)
  myWeight.value = ""
  myHeight.value = ""

  if(bmi > 35){
    myModal.showModal()
    myResult.textContent = bmi + " ,you are too fat"
    myClose.addEventListener('click',() =>{
    location.reload()
 })
  }
  if (bmi > 30 && bmi < 35){
    myModal.showModal()
    myResult.textContent = bmi + " ,you are fat"
    myClose.addEventListener('click',() =>{
      location.reload()
   })
  }
  if (bmi > 25 && bmi < 30){
    myModal.showModal()
    myResult.textContent = bmi + " ,you are not bad"
    myClose.addEventListener('click',() =>{
      location.reload()
   })
  }
  if (bmi > 20 && bmi < 25){
    myModal.showModal()
    myResult.textContent =  bmi  + ",you are normal"
    myClose.addEventListener('click',() =>{
      location.reload()
   })
  }
  if ( bmi < 20){
    myModal.showModal()
    myResult.textContent = bmi + " ,you are too thin"
    myClose.addEventListener('click',() =>{
      location.reload()
   })
  }
})
myDarkmode.addEventListener('click', ()=>{
  if(myDarkmode.checked){
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  document.body.style.transition = "1s"

}
else
{
  document.body.style.backgroundColor = "rgb(82, 37, 37)"
  document.body.style.color = "yellow"
}
})


