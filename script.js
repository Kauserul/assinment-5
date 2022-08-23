
const playerArray = [];

function display(playerNames){
    const singlePlayer = document.getElementById('per-player');
    singlePlayer.innerHTML = '';

    // console.log(singlePlayer)
    for(let i = 0; i < playerNames.length; i++){
        // console.log(playerArray[i].playerName)

        const name = playerArray[i].playerName;

        const li = document.createElement('li');
        li.innerHTML = `
            
        
        <li class="mb-3 list d-inline mb-5">${name}</li>
        `
        singlePlayer.appendChild(li)
    }
}

function getPlayerName(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const playerObj = {
        playerName : playerName
    };

    playerArray.push(playerObj);

    if(playerArray.length > 5){
        alert('You can not add more');
        playerArray.pop()
        return
    }

    display(playerArray);

   
}


document.getElementById('per-player-cost').addEventListener('click', function(){
    const input = document.getElementById('input-field');
    const inputValue = parseFloat(input.value);
    
    if(isNaN(inputValue)){
        alert('Pleass Enter The Amount');
        return;
    }

    const expences = document.getElementById('player-expenses');
    const playerExpance = playerArray.length * inputValue;
    expences.innerText = playerExpance
    
});

document.getElementById('total-cost').addEventListener('click', function(){
    const manager = document.getElementById('manage-cost');
    const managerCost = parseFloat(manager.value);
    
    if(isNaN(managerCost)){
        alert('Please Enter The Amount');
        return;
    }

    const coach = document.getElementById('coach-cost');
    const coachCost = parseFloat(coach.value);
    
    if(isNaN(coachCost)){
        alert('Please Enter The Amount');
        return;
    }

    const expences = document.getElementById('player-expenses');
    const totalExpences = parseFloat(expences.innerText);

    const total = document.getElementById('total')
    
    const totalCost = totalExpences + managerCost + coachCost;
    total.innerText = totalCost
    
    
    
})