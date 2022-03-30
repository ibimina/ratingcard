const submit = document.querySelector('.submit')
const main = document.querySelector('main')
const section = document.querySelector('section')
section.classList.add('hide')
const ratenumber = document.querySelectorAll('.one')
let score =0
const text = document.querySelector('.rate')

ratenumber.forEach(element => {
   element.addEventListener('click',()=>{
score = element.innerText
element.style.backgroundColor='hsl(25, 97%, 53%)'
element.style.color= 'white'

   }) 
});

function out() {
   if (!score) {
      submit.disabled = true
      submit.style.backgroundColor = 'grey'
     
return;
   } else if (score > 0) {
      submit.disabled = false
      main.classList.add('hide')
      section.classList.remove('hide')
      let rateMsg = `You selected ${score} out of 5`
      text.innerHTML = rateMsg; 
}
}
submit.addEventListener('click', out);