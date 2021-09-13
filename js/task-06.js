const input = document.getElementById('validation-input')
const len = input.dataset.length
input.addEventListener('blur', check)
function check () {
   if (input.value.length == len) {
      
      input.classList.remove('invalid')
      input.classList.add('valid')
   }
   else {
      input.classList.remove('valid')
      input.classList.add('invalid')
   }
}     