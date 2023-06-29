let spanClicks = document.querySelector('.first')
let spanKeys = document.querySelector('.second')
let button = document.querySelector('.button')

let enter = {
    clicks: 0, 
    keys: 0
}
 
let read = renderLocal();
if (read != null){
    enter = read;
}
startPosition()

function startPosition(){
   spanClicks.textContent = enter.clicks;
   spanKeys.textContent = enter.keys;
}

function toDoLocal(){
   let a = JSON.stringify(enter)
   localStorage.setItem('objects', a);
}

function renderLocal(){
    let b = localStorage.getItem('objects')
    JSON.parse(b)
    if (b == null){
        return null;
    }
    return JSON.parse(b)
}

function recet() {
    enter.clicks = -1;
    enter.keys = 0;
    spanClicks.textContent = 0;
    spanKeys.textContent = 0;
}

window.addEventListener('click', () => {
    enter.clicks++ 
    startPosition()
    toDoLocal()
})
window.addEventListener('keydown', () => {
    enter.keys++
    startPosition()
    toDoLocal()
})

button.addEventListener("click", recet)