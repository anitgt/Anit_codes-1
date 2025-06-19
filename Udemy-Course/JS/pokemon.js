const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


const container = document.querySelector('#container');


for(let i = 1; i < 1210; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImage = document.createElement('img');
    newImage.src = `${baseUrl}${i}.png `
    pokemon.appendChild(newImage)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}

