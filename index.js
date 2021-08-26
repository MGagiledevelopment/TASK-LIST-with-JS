const input = document.querySelector("input");
const addButton = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

const empty = document.querySelector(".empty");

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const text = input.value; //texto exscrito en input

  if (text !== "") {
    const li = document.createElement("li"); // creacion de li
    const p = document.createElement("p"); //creacion de p
    p.textContent = text; // agregar contenido a p

    li.appendChild(p); // a ese li creado le ponemos p que va tener un texto
    li.appendChild(addDeleteButton());
    ul.appendChild(li); //a UL le vamos agregar el LI nuevo
    input.value = "";
    empty.style.display = "none";
  }

  // const items = document.querySelectorAll("li")
  // console.log(items.length);
  // if(items.length ==! 0){
  //   ul.appendChild(addRefreshButton())
  // }


});



const addDeleteButton = () => {
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "x";
  deleteButton.className = "btn-delete";

  deleteButton.addEventListener("click", (element) => {
    const item = element.target.parentElement; //el parent elemnt hace referencia a su elemento PADRE por eso selecciona al LI !! PARA eliminarlo
    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteButton;
};







const addRefreshButton = () =>{

  const refreshButton =  document.createElement("button");
  const items = document.querySelectorAll("li")
  refreshButton.textContext = "delete all"
  refreshButton.className = "btn-refresh"

 
return refreshButton;

}