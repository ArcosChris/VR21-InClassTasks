


let form = document.getElementById('meme-form');
form.addEventListener('submit', gatherFormData);


function gatherFormData(e) {
    e.preventDefault();

    let memeData = {
        img: form.querySelector('.imgURL').value,
        topText: form.querySelector('.topText').value,
        bottomText: form.querySelector('.bottomText').value
    }

    mapAndAppendMeme(memeData);
}

function mapAndAppendMeme(meme) {
    const memeCardTemplate = document.getElementById('meme-card');
    const memeContainer = document.getElementById('meme-container');

    let templateClone = memeCardTemplate.content.firstElementChild.cloneNode(true);

    templateClone.getElementsByClassName('remove-meme')[0].addEventListener('click', removeMeme);

    templateClone.querySelector('.meme-card-img').src = meme.img;
    templateClone.querySelector('.top-text').innerHTML = meme.topText;
    templateClone.querySelector('.bottom-text').innerHTML = meme.bottomText;

    memeContainer.append(templateClone);
    form.reset();

}

function removeMeme(e) {
    let buttonClicked = e.target;
    buttonClicked.closest('.meme-card-col').remove();
}