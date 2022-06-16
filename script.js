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

// getMon();
let count = 0;
document.querySelector(".submission").addEventListener("click", function () {
  let input = document.querySelector(".input-type").value;

  const getMon = async () => {
    for (let i = 1; i <= 6; i++) {
      let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${
          Math.trunc(Math.random() * 151) + 1
        }/`
      );
      let pokeType = response.data.types[0].type.name;
      while (pokeType !== input) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${
            Math.trunc(Math.random() * 151) + 1
          }/`
        );
        pokeType = response.data.types[0].type.name;
      }
      console.log(pokeType);
      const sprite = response.data.sprites["front_default"];
      //   console.log(sprite);
      const image = document.createElement("img");
      image.src = sprite;

      //   if (count < 7) {
      document.querySelector(`.poke_${i}`).appendChild(image);
      //     count++;
      //   } else {
      //     document.querySelector(`.poke_${i}`).removeChild(image);
      //   }
    }

    //   const typeResponse = await axios.get(typeUrl);
    //   console.log(typeResponse);
  };
  getMon();
});
