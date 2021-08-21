const input = document.querySelector('input')
const addButton =  document.querySelector('.btn-add')
const ul = document.querySelector("ul")
const empty = document.querySelector('.empty')



addButton.addEventListener('click', (event) => {
    event.preventDefault()



    const text = input.value; //texto exscrito en input
    const li = document.createElement('li') // creacion de li
    const p= document.createElement('p') //creacion de p
    p.textContent = text; // agregar contenido a p

    li.appendChild(p) // a ese li creado le ponemos p que va tener un texto
    ul.appendChild(li) //a UL le vamos agregar el LI nuevo




})