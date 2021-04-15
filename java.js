
setup();

function setup() {
    getCat();
}

function getCat() {
    fetch("https://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => updateCatImageSrc(data.file));
}

function updateCatImageSrc(src) {
    //get cat image element//
    let img = document.querySelector("img");
    //Update its src//
    img.src = src;
}