setup();

function setup() {
  getCat();
}

function getCat() {
  fetch("https://aws.random.cat/meow")
    .then(response => response.json())
    .then(data => updateCatImgSrc(data.file));
}

function updateCatImgSrc(src) {
  /* Get the cat image element */
  let img = document.querySelector("img");
  /* Update its src*/
  img.src = src;
}