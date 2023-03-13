document.querySelector('button').addEventListener("click", getphoto)

async function getphoto() {
  let all_divs = document.querySelectorAll("[id*='extraFive']")
  for (let div of all_divs){
      let element = document.getElementById(div.id)
      if (element) {
        element.remove()
      }
  }

  let  num = Math.floor(Math.random() * 1010) + 1
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
  let pokemonTypes = []
  for (let type of response.data['types']) {
    pokemonTypes.push(type['type']['name'])
  }
  let maintype = pokemonTypes[0]
  let sprite = response.data['sprites']['front_default']
  let name = response.data['species']['name']
  document.getElementById('first_image').src = sprite
  document.getElementById('type').innerText = `Pokemon type: ${maintype}`
  document.getElementById('name').innerText = `Name: ${name.charAt(0).toUpperCase() + name.slice(1)}`
  document.getElementById('allTypes').innerText = `Type: ${pokemonTypes}`
  const responseWithAllTypes = await axios.get(`https://pokeapi.co/api/v2/type/${maintype}/`)
  let pokemonCountIndex = responseWithAllTypes.data['pokemon'].length - 1
  let  allNames = [name]
  let imageCount = 0

  while (imageCount <=4) {
    let randomIndex = Math.floor(Math.random() * pokemonCountIndex) + 1
    let newPokemon = responseWithAllTypes.data['pokemon'][randomIndex]['pokemon']['url']
    let newPokemonResponse = await axios.get(`${newPokemon}`);

    if (newPokemonResponse) {
      let newSprite = newPokemonResponse.data['sprites']['front_default']
      let newPokemonName = newPokemonResponse.data['species']['name']
      let pokemonTypes = []
      for (let type of newPokemonResponse.data['types']) {
        pokemonTypes.push(type['type']['name'])
      }

      if (!allNames.includes(newPokemonName)) {
        
        if (newSprite) {

          let newdiv = document.createElement('div')
          newdiv.setAttribute("id",`extraFive${imageCount}`)
          document.getElementById('pics').appendChild(newdiv)

          let newName = document.createElement('p')
          newName.setAttribute("id",`extraFive${imageCount}`)
          newName.innerText = `Name: ${newPokemonName.charAt(0).toUpperCase() + newPokemonName.slice(1)}`
          document.getElementById(`extraFive${imageCount}`).appendChild(newName)

          let newTypes = document.createElement('p')
          newTypes.setAttribute("id",`extraFive${imageCount}`)
          newTypes.innerText = `Type: ${pokemonTypes}`
          document.getElementById(`extraFive${imageCount}`).appendChild(newTypes)

          let newImg = document.createElement('img')
          newImg.src = newSprite
          newImg.setAttribute("id",`extraFive${imageCount}`)
          document.getElementById('pics').appendChild(newImg)

          imageCount++
          allNames.push(newPokemonName)
        }
      }
    }
  } 
};