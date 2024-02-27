const strBut = document.querySelector('#strBut');
const pageImg = document.getElementById('pageImg');
const pokes = ['mudkip', 'swellow', 'treecko', 'torchic', 'lotad', 'aggron', 'wailord', 'cradily', 'milotic', 'absol',
                'metagross', 'latios', 'rayquaza', 'flygon', 'torkoal', 'hariyama', 'shedinja', 'gardevoir', 'regirock', 'kyogre'];
var link = '';

strBut.addEventListener('click', async() => {
    
    var pokeOptions = [];
    var pokeI = [];

    console.log(pokeOptions);
    
    while(pokeOptions.length < 4){
        const i = Math.floor(Math.random() * (20));
        if(!pokeI.includes(i)){
            pokeI.push(i);
            pokeOptions.push(pokes[i]);
        }
    }
    
    const right = Math.floor(Math.random() * (4));
    console.log(`llena: ${pokeOptions}, ${right}`);

    for(let j = 0; j < 4; j++){
        console.log(`asignacion: ${j+1}`);
        document.getElementById(`option${j+1}`).textContent=pokeOptions[j];
        console.log(j);
    }

    

    try{
        link = `https://pokeapi.co/api/v2/pokemon/${pokeOptions[right]}/`;
        const response = await fetch(link);
        const pkm = await response.json();
    
        pageImg.src = pkm.sprites.front_default;
    }catch(error){
        alert(`Error: ${error.message}`);
    }

});
