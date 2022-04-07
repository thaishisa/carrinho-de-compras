const Item = ({name, imageUrl, price, sellingPrice}) => {
  const itemLista = document.createElement("li");
  const divPreco = document.createElement("div");

  divPreco.classList.add("nomePreco");

  const imageItem = document.createElement("img");
  imageItem.setAttribute("src", imageUrl);

  const nameItem = document.createElement("label");
  nameItem.innerHTML=name;

  const priceItem = document.createElement("label");
  priceItem.innerHTML= `R$${(price/100).toLocaleString()}`;
  priceItem.classList.add("priceOriginal");

  const sellingPriceItem = document.createElement("label");
  sellingPriceItem.innerHTML=`R$${(sellingPrice/100).toLocaleString()}`;
  

  divPreco.append(nameItem, priceItem,sellingPriceItem);
  itemLista.append(imageItem, divPreco);

  
  return itemLista;
}

export default Item;