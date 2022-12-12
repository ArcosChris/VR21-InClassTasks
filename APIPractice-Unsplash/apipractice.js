const CLIENT_ID = "dfqB1OgrD8y4hs48PQCJeMc5n_IHEBKiIouHqrcmF8U";
const SEARCH_CONTAINER = document.querySelector('.item-cont');
let searchStrValue = 'cars';
let searchForm = document.querySelector('#searchImageForm');

searchForImages(searchStrValue);
searchForm.addEventListener('submit', submitFormGetInfo);

function submitFormGetInfo(e) {
    e.preventDefault();
    SEARCH_CONTAINER.innerHTML = ""
    searchStrValue = document.querySelector('#userSearch').value.toLowerCase();

    let previousSearch = checkIfExists(searchStrValue);

    if (previousSearch) {
        grabFromLocalAndAppend(searchStrValue);
    }
    else {
        searchForImages(searchStrValue);
    }
}

function searchForImages(searchString) {
    fetch(
        `https://api.unsplash.com/search/photos?query=${searchString}&per_page=20&client_id=${CLIENT_ID}`
    )
        .then((response) => response.json())
        .then((data) => {
            let info = data.results;
            addToSearchLocalStorage(searchStrValue, data.results);
            for (let i = 0; i < info.length - 1; i++) {
                createAndAppend(info[i]);
            }
        });
}

function createAndAppend(cardInfo) {
    let card = document.createElement('div');
    let description = cardInfo.description === null ? `${searchStrValue}` : (cardInfo.description).slice(0, 25);
    card.setAttribute('id', `card-${cardInfo.id}`);
    card.classList.add("item-card")

    let innerContent = `<div class="card shadow-sm col h-100">
                            <div>
                                <img class="idea-img card-img-top" width="100%"
                                    src=${cardInfo.urls.full}
                                    alt=${cardInfo.alt_description}>
                                
                                <button id="removeItem" type="button" class="btn-close card-close-btn"
                                    aria-label="Close"></button>
                                <button id="favorite" type= "button" class="heart-favorite"><i class="fa-solid fa-heart"></i></button>
                             </div>
                            <div class="card-body d-flex flex-column">
                                <h4 class="card-title text-center">${description}</h4>
                                <p class="idea-desc card-text">${description}</p>
                            </div>
                        </div>`

    card.innerHTML = innerContent;
    card.querySelector("#removeItem").addEventListener("click", removeItem);
    card.querySelector("#favorite").addEventListener("click", addToFavorite);
    SEARCH_CONTAINER.append(card);
}

function addToFavorite(e) {
    let cardFavorite = e.target.closest('.item-card');

    addUserFavoritesToLocalStorage();
}

function removeItem(e) {
    let cardButton = e.target;
    let cardId = cardButton.closest(".item-card").id;

    document.getElementById(cardId).remove();
    // removeFromLocalStorage(cardId);
}

function addUserFavoritesToLocalStorage() {
    let
}


function addToSearchLocalStorage(searchName, searchItems) {
    localStorage.setItem(searchName, JSON.stringify(searchItems));
}

//Dont want to remove from local storage (because if user removes all then their search would return nothing)
// function removeFromLocalStorage(itemId) {
//     let collection = JSON.parse(localStorage.getItem(searchStrValue));
//     let storageId = itemId.replace('card-', '');
//     let index = collection.findIndex(item => item.id === storageId);
//     collection.splice(index, 1);

//     addToSearchLocalStorage(searchStrValue, collection);
// }

function grabFromLocalAndAppend(itemToSearch) {
    let items = JSON.parse(localStorage.getItem(itemToSearch));
    items.forEach(item => {
        createAndAppend(item);
    });
}

function checkIfExists(itemToSearch) {
    return localStorage.getItem(itemToSearch) != null;
}
