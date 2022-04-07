import Item from "./Item.js";

const List = (items) => {
  const listaUl = document.createElement("ul");
  let total = 0;
  items.forEach((item) => {
       
    const li= Item(item);

    listaUl.append(li);
  })
return listaUl;
}


export default List;