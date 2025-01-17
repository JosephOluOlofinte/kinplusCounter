


let count = 0;
let body = document.querySelector('.body')
let countMessage = document.querySelector('.count-message')
let button = document.querySelector('.button');

const messageBox = document.createElement("div")
        messageBox.className = "main"
        messageBox.innerHTML = `<h2>Welcome to the game!</h2> <br/> This is stage 1. You are a rookie. Let's see how far you can go.`

button.addEventListener('click', countClicks)


function countClicks() {

    countMessage.innerHTML = `Click count: ${count}. <br/> <br/> Click 10 times for your message.`
    button.innerHTML = `Click me!`
    ++count;

    if (count >= 11) {

        countMessage.innerHTML = `Yay! You've clicked ${count - 1} times. <br/> <br/> Keep clicking; I still have more!.`
         document.body.appendChild(messageBox)
        
    } 
    
    if (count === 16) {

        messageBox.innerHTML = `<h2>Welcome to Stage 2</h2> <br/> Only the hard and strong may call themselves Spartans. Only the hard, only the strong. — <b>King Leonidas I of Sparta</b> <br> You're no longer a rookie. You are a <b>Strong Man</b>💪💪`
        
    }

    if (count === 26) {

        messageBox.innerHTML = `<h2>Welcome to Stage 3</h2> <br/> The brave man is not he who does not feel afraid, but he who conquers that fear. — <b>Nelson Mandela</b> <br> You are officially a <b>Brave man</b>`
        
    }

    if (count === 41) {

        messageBox.innerHTML = `<h2>Welcome to Stage 4</h2> <br/>
A wise man can learn more from a foolish question than a fool can learn from a wise answer. — <b>Bruce Lee</b> <br> You are officially a <b>Wise man</b>`
        
    }

    if (count === 71) {

        countMessage.innerHTML = `You've clicked ${count - 1} times. Congratulations You've set a high score!`
        messageBox.innerHTML = `<h2> You have exceeded my expectations. You win!</h2>`
        
    }

    if (count === 101) {

        messageBox.innerHTML = `<h2> Hmnnn... Interesting 🤔🤔🤔</h2>`
    }
    
}
