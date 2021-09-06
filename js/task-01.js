const elementUl = document.querySelectorAll('.item')
console.log(`В списке ${elementUl.length} категории.`)
elementUl.forEach(element => {
   console.log(`- Категорія:`, element.firstElementChild.textContent)
   console.log(`- Кількість елементів:`, element.lastElementChild.children.length)
});
