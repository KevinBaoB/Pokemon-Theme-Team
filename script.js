function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const pokeList = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "steel",
  "fairy",
];

document.querySelector(".submission").addEventListener("click", function () {
  // let input = document.querySelector(".input-type").value;

  const getMon = async () => {
    const maxTeam = 6;
    let randomType = pokeList[Math.trunc(Math.random() * pokeList.length)];
    for (let i = 1; i <= maxTeam; i++) {
      let pokeType = "";
      let pokeType2 = "";
      do {
        const pokeIndex = Math.trunc(Math.random() * 898) + 1;
        // const pokeIndex = i;
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`
        );
        pokeType = response.data.types[0].type.name;

        if (response.data.types.length > 1) {
          pokeType2 = response.data.types[1].type.name;
        } else {
          pokeType2 = "";
        }
      } while (pokeType !== randomType);

      console.log(pokeType);
      const sprite = response.data.sprites["front_default"];
      //   console.log(sprite);

      const image = document.createElement("img");
      image.classList.add(`poker_${i}`);
      image.src = sprite;
      image.classList.add("poke");
      const description = document.createElement("div");
      description.classList.add("description");

      if (pokeType2.length > 0) {
        description.textContent = `${response.data.name} ${pokeType} ${pokeType2}`;
      } else {
        description.textContent = `${response.data.name} ${pokeType}`;
      }

      let pokemon = document.querySelector(`.poke_${i}`);

      removeAllChildNodes(pokemon);

      pokemon.appendChild(image);
      pokemon.appendChild(description);
    }
  };
  getMon();
});
