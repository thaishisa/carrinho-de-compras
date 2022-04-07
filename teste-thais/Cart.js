/*
<main>
    <h1>Meu carrinho</h1>

        <div class="lista">

        </div>

        <div class="total">
            <span>Total</span>
            <span class="valor">Valor</span>
        </div >

        <div class="footer">
         <button class="primary">Finalizar compra</button>   
        </div>
      
</main>*/

import Button from "./Button";
import List from "./List";



const Cart = ({items, value}) => {
    
    const main = document.createElement("main");

    const title = document.createElement("h1");
    title.innerHTML = "Meu carrinho";

    const divList = document.createElement("div");
    divList.classList.add("lista");
    divList.append(List(items));

    const divTotal = document.createElement("div");
    divTotal.classList.add("total");

    const divValues = document.createElement("div");
    divValues.classList.add("values");

    const spanTotal = document.createElement("span");
    spanTotal.innerHTML="Total";

    const spanValue = document.createElement("span");
    spanValue.classList.add("valor");
    spanValue.innerHTML= `R$${(value/100).toLocaleString()}`;
        
    divValues.append(spanTotal, spanValue);

    divTotal.append(divValues);

    if ((value/100>10)){
        const divFreight = document.createElement("div");
        divFreight.innerHTML = "Parabéns, sua compra tem frete grátis!";
        divFreight.classList.add("freight");
        divTotal.append(divFreight);

    }

    

    const divFooter = document.createElement("div");
    divFooter.append(Button({className: "primary" , content: "Finalizar compra", onClick: cleanCart}));
    divFooter.classList.add("footer");

    main.append(title, divList, divTotal, divFooter );

    return main;

}

function cleanCart () {
    const main  = document.querySelector("main");
    main.parentNode.removeChild(main);

    const buttons = document.querySelectorAll("button");
    
    buttons.forEach( (button)=>{
      button.setAttribute("style", "");
    })

}

export default Cart;