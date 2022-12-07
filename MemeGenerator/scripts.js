


let form = document.getElementById('meme-form');
form.addEventListener('submit', gatherFormData);


function gatherFormData(e) {
    e.preventDefault();

    let memeData = {
        img: form.querySelector('.imgURL').value,
        topText: form.querySelector('.topText').value,
        bottomText: form.querySelector('.bottomText').value
    }

    isValidImage(memeData);
}

function mapAndAppendMeme(meme) {
    let message = document.querySelector('.invalid-img').classList;
    if (!message.contains('d-none')) {
        message.add('d-none');
    }

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
    e.target.closest('.meme-card-wrap').remove();
}

function showErrorMessage() {
    let errorMessage = document.querySelector('.invalid-img').classList;
    if (errorMessage.contains('d-none')) {
        errorMessage.remove('d-none');
    }
}

function isValidImage(meme) {
    fetch(meme.img, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                mapAndAppendMeme(meme);
            } else {
                showErrorMessage();
            }
        })
}