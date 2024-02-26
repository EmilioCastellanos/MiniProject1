const strBut = document.querySelector('#strBut');
const pageImg = document.getElementById('pageImg');
const pokes = ['mudkip', 'swellow', 'treecko', 'torchic', 'lotad', 'aggron', 'wailord', 'cradily', 'milotic', 'absol',
                'metagross', 'latios', 'rayquaza', 'flygon', 'torkoal', 'hariyama', 'shedinja', 'gardevoir', 'regirock', 'kyogre'];
var link = '';

strBut.addEventListener('click', async() => {
    
    var pokeOptions = [];
    var pokeI = [];
    var pokesCount = 0;
    while(pokeOptions.length < 4){
        const i = Math.floor(Math.random() * (20));
        if(!pokeI.includes(i)){
            pokeI.push(i);
            pokeOptions.push(pokes[i]);
        }
    }

    const right = Math.floor(Math.random() * (4)) + 1;

    link = `https://pokeapi.co/api/v2/pokemon/${pokeOptions[right]}/`;
    const response = await fetch(link);
    const pkm = await response.json();

    pageImg.src = pkm.sprites.front_default;

});