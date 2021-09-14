const box = document.getElementById('boxes')
const create = document.querySelector('[data-action="render"]')
const destroy = document.querySelector('[data-action="destroy"]')
create.addEventListener('click', val);
destroy.addEventListener('click', deleteBoxes);
   function val () {
   createBoxes(document.querySelector('#controls input').value);
   }
   function createBoxes(amount) {
      const initialSize = 30
      const squares = []
         for (let i = 1; i <= amount; i += 1) {
            const square = document.createElement('div')
            const size = initialSize + i*10
            square.style.width = `${size}px`
            square.style.height = `${size}px`
            square.style.backgroundColor = (`${generateRandomColor()}`)
            squares.push(square)
         }
      return (box.append(...squares))
   }
   function deleteBoxes() {
      box.innerHTML = ''
   }
   function generateRandomColor () {
      const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
      return randomColor;
   }
