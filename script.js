
const playerArray = [];

function display(playerNames){
    const singlePlayer = document.getElementById('per-player');
    singlePlayer.innerHTML = ''
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
        return
    }

    display(playerArray);

   
}