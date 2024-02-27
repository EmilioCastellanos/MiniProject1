const pokes = ['mudkip', 'swellow', 'treecko', 'torchic', 'lotad', 'aggron', 'wailord', 'cradily', 'milotic', 'absol',
                'metagross', 'latios', 'rayquaza', 'flygon', 'torkoal', 'hariyama', 'shedinja', 'gardevoir', 'regirock', 'kyogre'];

const strBut = document.querySelector('#strBut');
const but1 = document.getElementById('option1');
const but2 = document.getElementById('option2');
const but3 = document.getElementById('option3');
const but4 = document.getElementById('option4');
const pageImg = document.getElementById('pageImg');

but1.disabled = true;
but2.disabled = true;
but3.disabled = true;
but4.disabled = true;

var link = '';
var pokeOptions = [];
var pokeI = [];
var right = 0;
var userScore = 0;
var isStart = 0;



strBut.addEventListener('click', async() => {

    doChecks();

    isStart++;

    strBut.disabled = true;
    but1.disabled = false;
    but2.disabled = false;
    but3.disabled = false;
    but4.disabled = false;

    setOptions();
    setSprite();

    console.log(isStart);
    
});



//Some funcitonality checks
function doChecks(){
    if(isStart === 0){
        strBut.textContent = 'Next Cuestion';
        userScore = 0;
        document.getElementById('score').textContent = `${userScore}/3`
        document.getElementById('endScore').textContent = '';
    }else if(isStart === 3){
        strBut.textContent = 'Start';
        isStart = 0;

        document.getElementById('endScore').innerHTML = `Congrats! Your final score is ${userScore}/3<br>Press Start to play again!`;


    }
}



//Set the pokemons' options in the buttons
function setOptions(){
    console.log(pokeOptions);
    
    while(pokeOptions.length < 4){
        const i = Math.floor(Math.random() * (20));
        if(!pokeI.includes(i)){
            pokeI.push(i);
            pokeOptions.push(pokes[i]);
        }
    }
    
    right = Math.floor(Math.random() * (4));
    console.log(`llena: ${pokeOptions}, ${right}`);

    for(let j = 0; j < 4; j++){
        document.getElementById(`option${j+1}`).textContent=pokeOptions[j];
    }
}



//Generate and set the srite of the new pokemon
async function setSprite(){
    try{
        link = `https://pokeapi.co/api/v2/pokemon/${pokeOptions[right]}/`;
        const response = await fetch(link);
        const pkm = await response.json();
    
        pageImg.src = pkm.sprites.front_default;
    }catch(error){
        alert(`Error: ${error.message}`);
    }
}



//Buttons part
but1.addEventListener('click', () => {
    strBut.disabled = false;
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
    
    if(but1.textContent === pokeOptions[right]){
        userScore++;
        document.getElementById('score').textContent = `${userScore}/3`
    }
    
    doChecks();

    pokeOptions = [];
    pokeI = [];
});

but2.addEventListener('click', () => {
    strBut.disabled = false;
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
    
    if(but2.textContent === pokeOptions[right]){
        userScore++;
        document.getElementById('score').textContent = `${userScore}/3`
    }
    
    doChecks();

    pokeOptions = [];
    pokeI = [];
});

but3.addEventListener('click', () => {
    strBut.disabled = false;
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
    
    if(but3.textContent === pokeOptions[right]){
        userScore++;
        document.getElementById('score').textContent = `${userScore}/3`
    }
    
    doChecks();

    pokeOptions = [];
    pokeI = [];
});

but4.addEventListener('click', () => {
    strBut.disabled = false;
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
    
    if(but4.textContent === pokeOptions[right]){
        userScore++;
        document.getElementById('score').textContent = `${userScore}/3`
    }
    
    doChecks();

    pokeOptions = [];
    pokeI = [];
});