const data = {
   input: document.getElementById('name-input'),
   output: document.getElementById('name-output')
}

data.input.addEventListener('input', change);
function change (event) {
   if (data.input.value === "")
   data.output.textContent = 'незнакомец'
   else
   data.output.textContent = event.currentTarget.value 
}
