
//<button class="primary" id ="abaixo">Abaixo</button>


const Button = ({className, content, onClick, id}) => {
    const buttonElem = document.createElement("button");
    buttonElem.classList.add(className);
    buttonElem.innerHTML=content;
    buttonElem.addEventListener("click", onClick);
    buttonElem.setAttribute("id", id );

    return buttonElem;

}

export default Button;