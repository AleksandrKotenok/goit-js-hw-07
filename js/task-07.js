const input = document.getElementById('font-size-control')
input.addEventListener('input', change)
function change () {
   let text = document.getElementById('text')
   //console.log(input.value)
   // console.log(text.style.fontSize)
   text.style.fontSize = `${input.value}px`
}