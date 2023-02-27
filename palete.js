// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");
// const bodyEl = document.querySelector("body");

// colorPalette.addEventListener("click", selectColor);

// createPaletteItems();

// function selectColor(event) {
//     if(event.target.tagName !== 'BUTTON') {
//         return
//     }
//   const selectColor = event.target.dataset.color;
//   bodyEl.style.backgroundColor = selectColor;
// }

// function createPaletteItems() {
//   const arrayPallete = [];
//   let numberColor = getRandomInterval(2, 15);
  
//   for (let index = 0; index < numberColor; index++) {
//     let randomColor = getRandomColor()
//     const newEl = document.createElement("button");
//     newEl.style.backgroundColor = randomColor;
//     newEl.type = "button";
//     newEl.classList.add("item");
//     newEl.dataset.color = randomColor;
//     arrayPallete.push(newEl);
//   }
//   return arrayPallete;
// }
// colorPalette.append(...createPaletteItems());

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// function getRandomInterval(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
