
const array = [];

function display(playerNames){
    console.log(playerNames)
}

function getPlayerName(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const playerObj = playerName
        

    array.push(playerObj);
    // console.log(array.length)
    display(playerObj)
}