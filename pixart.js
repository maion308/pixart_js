
const btn = document.querySelector("#set-color");
const colorInput = document.querySelector("#color-field");
const myBrush = document.querySelector(".brush");



function setColor(){
    btn.addEventListener('click', (ev)=>{
    let color = getColor();
        myBrush.style.background = color;
      ev.preventDefault();
    })

}

function getColor(){
    return colorInput.value;
}

setColor();
