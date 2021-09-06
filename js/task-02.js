const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const pointInjection = document.querySelector('#ingredients')
const listAdd = arr => arr.map(item => {
  const list = document.createElement('li')
  list.textContent = item
 // console.log(list)
  return list
})
pointInjection.append(...listAdd(ingredients))

