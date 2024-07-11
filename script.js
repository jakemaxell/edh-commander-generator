async function searchForCommander() {
    const url = "https://api.scryfall.com/cards/random?q=legal:commander+is:commander";

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("There was an issue with the call you made.");
        }

        const data = await response.json();
        updatePage(data);
    } catch(error){
        console.error("Error fetching commander data: ", error);
        alert("There was an issue with the call you made.");
    }
};

function updatePage(cardData) {
    const name = cardData['name'];
    const cardImage = cardData['image_uris']['normal'];

    document.getElementById('name').textContent = "Name: " + name;
    document.getElementById('commander-image').src = cardImage;

    checkImageSource();
};

function checkImageSource(){
    const imageContainer = document.getElementById('image-container');
    const image = document.getElementById('commander-image');

    if(!image.src || image.src === window.location.href){
        imageContainer.classList.add('hidden');
    } else {
        imageContainer.classList.remove('hidden');
    }

};

document.addEventListener('DOMContentLoaded', checkImageSource());