// let input = document.querySelector(".form-control").value;

// console.log(input);

// const getMon = async () => {
//   for (let i = 1; i <= 6; i++) {
//     let response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${
//         Math.trunc(Math.random() * 151) + 1
//       }/`
//     );
//     let pokeType = response.data.types[0].type.name;
//     while (pokeType !== "grass") {
//       response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${
//           Math.trunc(Math.random() * 151) + 1
//         }/`
//       );
//       pokeType = response.data.types[0].type.name;
//     }
//     console.log(pokeType);
//     const sprite = response.data.sprites["front_default"];
//     //   console.log(sprite);
//     const image = document.createElement("img");
//     image.src = sprite;
//     document.querySelector(`.poke_${i}`).appendChild(image);
//   }

//   //   const typeResponse = await axios.get(typeUrl);
//   //   console.log(typeResponse);
// };

document.querySelector(".submission").addEventListener("click", function () {
  // let input = document.querySelector(".input-type").value;
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

  let randomType = pokeList[Math.trunc(Math.random() * pokeList.length)];
  console.log(randomType);

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const getMon = async () => {
    for (let i = 1; i <= 6; i++) {
      let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${
          Math.trunc(Math.random() * 898) + 1
        }/`
      );
      let pokeType = response.data.types[0].type.name;
      while (pokeType !== randomType) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${
            Math.trunc(Math.random() * 898) + 1
          }/`
        );
        pokeType = response.data.types[0].type.name;
      }
      console.log(pokeType);
      const sprite = response.data.sprites["front_default"];
      //   console.log(sprite);

      const image = document.createElement("img");
      image.classList.add(`poker_${i}`);
      image.src = sprite;
      image.classList.add("poke");
      const description = document.createElement("div");
      description.classList.add("description");

      description.textContent = `${response.data.name}`;

      let pokemon = document.querySelector(`.poke_${i}`);

      removeAllChildNodes(pokemon);

      pokemon.appendChild(image);
      pokemon.appendChild(description);
    }
  };
  getMon();
});
