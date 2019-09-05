
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

colorInput.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        btn.click();
    }
})

function createSquares(){
    for(i = 1; i <= 20; i++){
    let div = document.createElement('div');
    div.classList = "square";
    document.body.appendChild(div);
        
    }
}

createSquares();