/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));*/

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const imgelemnt = document.getElementById("pokemonSP");
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch resaurce");
        }
        const data = await response.json();
        const pokemonSP = data.sprites.front_default;
        imgelemnt.src= pokemonSP;
        imgelemnt.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}    