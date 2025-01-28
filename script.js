


let count = 0;
let body = document.querySelector('.body');
let countMessage = document.querySelector('.count-message');
let button = document.querySelector('.button')
let messageDiv = document.querySelector('.message-div');
let iniMsg = document.querySelector('#initial-message');

const messageBox = document.createElement("div");


button.addEventListener('click', countClicks)


function countClicks() {

    countMessage.innerHTML = `Click count: ${count}. <br/> <br/> Click 10 times for your surprise.`
    button.innerHTML = `Click me!`
    iniMsg.innerHTML =``
    ++count;

    if (count >= 11) {

        countMessage.innerHTML = `Yay! You've clicked <span style="font-size: 50px;">${count - 1}</span> times.`;
        messageDiv.appendChild(messageBox);
        messageBox.innerHTML = `<h2>Welcome to the game!</h2> <br/> This is stage <span style="font-size: 25px;">1</span>. You are a rookie. Let's see how far you can go.`;
        
    } 
    
    if (count >= 16) {

        messageBox.innerHTML = `<h2>Welcome to Stage <span style="font-size: 35px;">2</span>.</h2> <br/> Only the hard and strong may call themselves Spartans. Only the hard, only the strong. <p><b>— King Leonidas I of Sparta</b></p> <br><br> You're no longer a rookie. You are a <b>Strong Man</b>💪💪`
        
    }

    if (count >= 26) {

        messageBox.innerHTML = `<h2>Welcome to Stage <span style="font-size: 35px;">3</span>.</h2> <br/> The brave man is not he who does not feel afraid, but he who conquers that fear. <p>— <b>Nelson Mandela</b></p> <br><br> You are officially a <b>Brave man</b>`
        
    }

    if (count >= 41) {

        messageBox.innerHTML = `<h2>Welcome to Stage <span style="font-size: 35px;">4</span>.</h2> <br/>
        A wise man can learn more from a foolish question than a fool can learn from a wise answer. <p>— <b>Bruce Lee</b></p> <br><br> You are officially a <b>Wise man</b>`
        
    }

    if (count === 71) {

        countMessage.innerHTML = `You've clicked ${count - 1} times. <br> That's a high score!`
        messageBox.innerHTML = `<h2> You have exceeded my expectations. You win!</h2>`
        button.disabled = true
    }
    
}
