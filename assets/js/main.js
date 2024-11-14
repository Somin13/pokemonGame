// fetch("https://pokeapi.co/api/v2/pokemon/1/").then((response) =>{
//     response.json().then((data) =>{
//         console.log(data);

//     })

// })

let pokemonGame = document.querySelector("#pokemon")
let guessContainer = document.querySelector("#guess-name")
let nomPoke = null



async function getPoke() {

    let randomId = random(1, 151)
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomId + "/")
    let data = await response.json()
    console.log(data);

    pokeGame(data)

}


function pokeGame(data) {

    pokemonGame.textContent = "";
    guessContainer.textContent = "";

    let statContainer = document.createElement("div")
    statContainer.classList.add("stat-container")
    pokemonGame.appendChild(statContainer)

    let msgpoke = document.createElement("div")
    msgpoke.classList.add("msgpoke")
    msgpoke.textContent = "Pokémon"
    statContainer.appendChild(msgpoke)
    let statistiques = document.createElement("div")
    statistiques.textContent = data.stats[0].base_stat
    statistiques.classList.add("statistiques")
    statContainer.appendChild(statistiques)
    let nom = document.createElement("div");
    let statImg = document.createElement("img")
    statImg.src = "assets/image/filepng.png"
    statImg.classList.add("stat-img")
    statContainer.appendChild(statImg)
    
    nom.classList.add('nom');
    pokemonGame.appendChild(nom);
    nomPoke = data.name;

    let image = document.createElement("img");
    image.classList.add("img-container");;
    image.src = data.sprites.other.dream_world.front_default;
    pokemonGame.appendChild(image);
    image.addEventListener("click", () => {
        let sound = new Audio(data.cries.latest);
        pokemonGame.appendChild(sound);
        sound.play();
    });

    let abilContainer = document.createElement("div")
    abilContainer.classList.add("abil-container")
    pokemonGame.appendChild(abilContainer)

    let ability = document.createElement("div")
    let mesa = document.createElement("img")
    mesa.classList.add("mesa")
    mesa.src = "assets/image/ability.png"
    ability.classList.add("ability")
    ability.textContent = data.abilities[0].ability.name
    abilContainer.appendChild(mesa)
    abilContainer.appendChild(ability)

    let messageGame = document.createElement("div")
    messageGame.textContent = "Devinez le nom du Pokémon qui apparaît à l'écran en observant bien son image et ses caractéristiques. Tapez votre réponse et appuyez sur Entrée pour voir si vous avez raison !"
    messageGame.classList.add("msng-game")
    pokemonGame.appendChild(messageGame)

    let moveContainer = document.createElement("div")
    moveContainer.classList.add("move-contain")
    pokemonGame.appendChild(moveContainer)

    let imgMove = document.createElement("img")
    imgMove.src = "assets/image/etoile.png"
    imgMove.classList.add("img-move")
    moveContainer.appendChild(imgMove)

    let moves = document.createElement("div")
    moves.classList.add("pokemon-moves")
    moves.textContent = data.moves[5].move.name
    moveContainer.appendChild(moves)

    let speciesContainer = document.createElement("div")
    speciesContainer.classList.add("specContainer")
    pokemonGame.appendChild(speciesContainer)
    
    let imgSpecies = document.createElement("img")
    imgSpecies.classList.add("img-species")
    imgSpecies.src = "assets/image/feuille.png"
    speciesContainer.appendChild(imgSpecies)
    let imgSpeciestwo = document.createElement("img")
    imgSpeciestwo.classList.add("img-species")
    imgSpeciestwo.src = "assets/image/feuille.png"
    speciesContainer.appendChild(imgSpeciestwo)
    let species = document.createElement("div")
    let msg = document.createElement("div")
    msg.classList.add("msg-species")
    species.classList.add("types-mode")
    species.textContent = data.types[0].type.name
    speciesContainer.appendChild(msg)
    speciesContainer.appendChild(species)

    let typeContaines = document.createElement("div")
    typeContaines.classList.add("typeCont")
    pokemonGame.appendChild(typeContaines)

    let imgType = document.createElement("img")
    imgType.classList.add("img-types")
    imgType.src = "assets/image/flamme.png"
    typeContaines.appendChild(imgType)
    let imgTypetwo = document.createElement("img")
    imgTypetwo.classList.add("img-types")
    imgTypetwo.src = "assets/image/flamme.png"
    typeContaines.appendChild(imgTypetwo)
    let typeSpecies = document.createElement("div")
    let mess = document.createElement("div")
    mess.classList.add("mess-types")
    typeSpecies.classList.add("types-mode")
    mess.textContent = ""
    typeSpecies.textContent = data.types[1].type.name
    typeContaines.appendChild(mess)
    typeContaines.appendChild(typeSpecies)


    let guess = document.createElement("input");
    guess.value = "";
    guessContainer.appendChild(guess);

    let enterButton = document.createElement("button")
    enterButton.textContent = "."
    guessContainer.appendChild(enterButton)
    guess.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkGame(guess.value);
        }
    });

    enterButton.addEventListener("click", function () {
        checkGame(guess.value)
    });

    let rond = document.createElement("div")
    rond.classList.add("rond")
    guessContainer.appendChild(rond)
    let barre = document.createElement("div")
    barre.classList.add("barre")
    guessContainer.appendChild(barre);
    let message = document.createElement("div");
    message.classList.add("message");
    guessContainer.appendChild(message);

};



function checkGame(guess) {
    let message = document.querySelector(".message");

    if (guess.toLowerCase() === nomPoke.toLowerCase()) {
        message.textContent = "Nice !";
        setTimeout(() => {
            getPoke();
        }, 200);
    } else {
        message.textContent = "Oh no...Try again.";
    };

};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

getPoke();










