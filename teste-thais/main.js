import './reset.css'
import './style.css'

import List from "./List.js";
import Button from './Button';
//import Cart from './Cart.js';
import { BUTTONS_IDS, URLS } from './constants';
import Cart from './Cart';



function renderCart (event) {
  const loader= document.querySelector(".loading");
  loader.setAttribute("style", "display:flex");

  const buttonId = event.currentTarget.id;

  fetch(URLS[buttonId])
  .then((response) => {
    if (!response.ok) throw response.status;
    return response.json();
  })
  .then((json) => {

    const buttons = document.querySelectorAll("button");
    buttons.forEach( (button)=>{
      button.setAttribute("style", "display:none");
    })

    const app = document.querySelector('#app');
    const main = Cart(json);
    app.append(main);
    loader.setAttribute("style", "display:none");

  })
  .catch((error) => {
    console.error(error);
  });
}

const footer = document.querySelector("#app");
footer.append(Button({className: "primary" , content: "Acima", onClick: renderCart, id: BUTTONS_IDS.acima}), Button({className: "primary" , content: "Abaixo", onClick: renderCart, id: BUTTONS_IDS.abaixo}));

const loading = document.createElement("div");
loading.classList.add("loading");

footer.append(loading);
