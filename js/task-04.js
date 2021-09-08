
const value = document.getElementById('value') // поточне
const increment = document.querySelector('[data-action="increment"]') // +
const decrement = document.querySelector('[data-action="decrement"]') //-
let counterValue = 0
const incr = () => (value.textContent = counterValue += 1)
   increment.addEventListener("click", incr)
const decr = () => { if(counterValue<=0) return  // перевірка на відємне
   return value.textContent = counterValue -= 1
}
   decrement.addEventListener("click", decr)

