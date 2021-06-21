let x = 0;
let dx = 0;

const middle = document.querySelector(".middle")
const leftPane = document.querySelector(".leftPane")
const rightPane = document.querySelector(".rightPane")
const clientWidth = document.body.clientWidth;


middle.addEventListener("mousedown", mouseDown)


function mouseDown(e){
    x = e.clientX;
    document.body.addEventListener('mousemove', mouseMove)
    document.body.addEventListener("mouseup",mouseUp)
}


function mouseMove(e){
    dx =  e.clientX;
} 


function mouseUp(e) {
    document.body.removeEventListener('mousemove',mouseMove)
    leftPane.style.width = dx+"px"
    rightPane.style.width = clientWidth - dx+"px"
    console.log("got triggered")
}
