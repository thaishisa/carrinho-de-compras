const Item = ({name, imageUrl, price, sellingPrice}) => {
  const itemLista = document.createElement("li");
  const divPrice = document.createElement("div");

  divPrice.classList.add("namePrice");

  const imageItem = document.createElement("img");
  imageItem.setAttribute("src", imageUrl);

  const nameItem = document.createElement("h3");
  nameItem.innerHTML=name;
  nameItem.classList.add("nameProduct");

  const priceItem = document.createElement("h3");
  priceItem.innerHTML= `R$${(price/100).toLocaleString()}`;
  priceItem.classList.add("priceOriginal");

  const sellingPriceItem = document.createElement("h3");
  sellingPriceItem.innerHTML=`R$${(sellingPrice/100).toLocaleString()}`;
  

  divPrice.append(nameItem, priceItem,sellingPriceItem);
  itemLista.append(imageItem, divPrice);

  
  return itemLista;
}

export default Item;