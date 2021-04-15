
function getcat() {
    fetch("https://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => updateCatImageSearch(data.file));
}

function updateCatImageSearch(src) {
    //get cat image element//
    let img = document.querySelector("img");
    //Update its src//
    img.src = src;
}