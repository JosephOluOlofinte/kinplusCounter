


let count = 0;
let counter = document.querySelector('.counter')
let button = document.querySelector('.button');

button.addEventListener('click', countClicks)


function countClicks() {

    ++count;
    counter.innerHTML = `${count}`
    
}
