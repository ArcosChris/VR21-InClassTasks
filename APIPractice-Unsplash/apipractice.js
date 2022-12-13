const CLIENT_ID = "dfqB1OgrD8y4hs48PQCJeMc5n_IHEBKiIouHqrcmF8U";
const USER_FAVORITES = "userFavorites";
const SEARCH_CONTAINER = document.querySelector('.item-cont');
let searchStrValue = 'cars';
let searchForm = document.querySelector('#searchImageForm');

searchForImages(searchStrValue);
searchForm.addEventListener('submit', submitFormGetInfo);
loadUserFavorites();

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
    card.classList.add("item-card", "main-item")

    let innerContent = `<div class="card shadow-sm col h-100">
                            <div>
                                <img class="idea-img card-img-top" width="100%"
                                    src=${cardInfo.urls.thumb}
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
    let favoriteInformation = {
        id: `favorite-${cardFavorite.id}`,
        imgSrc: cardFavorite.querySelector('.idea-img').src,
        itemDesc: cardFavorite.querySelector('.idea-desc').innerText,
        itemTitle: cardFavorite.querySelector('.card-title').innerText
    };
    addFavoritesToContainer(favoriteInformation);
    addUserFavoritesToLocalStorage(favoriteInformation);
}

function addFavoritesToContainer(favoriteInformation) {
    let container = document.querySelector('.favorite-container');
    let newItem = document.createElement('div');
    newItem.classList.add('card', 'mb-3', 'main-item');
    newItem.setAttribute('id', favoriteInformation.id);
    newItem.style.maxWidth = '540px';

    let innerContent = `<div class="row g-0">
                            <div class="col-md-4">
                                <img src=${favoriteInformation.imgSrc}
                                    class="img-fluid rounded-start favorite-img" alt=${favoriteInformation.itemTitle}>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <button id="removeFavorite" type="button" class="btn-close card-close-btn"
                                aria-label="Close"></button>
                                    <h5 class="card-title">${favoriteInformation.itemTitle}</h5>
                                    <p class="card-text">${favoriteInformation.itemDesc}</p>
                                </div>
                            </div>
                        </div>`

    newItem.innerHTML = innerContent;
    newItem.querySelector('#removeFavorite').addEventListener('click', removeItem);
    container.prepend(newItem);
}

function removeItem(e) {
    let itemSelected = e.target.closest('.main-item').id;

    console.log(itemSelected)

    document.getElementById(itemSelected).remove();

    if (itemSelected.includes('favorite')) {
        removeFavoriteFromLocalStorage(itemSelected);
    }
}

function loadUserFavorites() {
    let favorites = JSON.parse(localStorage.getItem(USER_FAVORITES));

    if (favorites) {
        favorites.forEach(item => addFavoritesToContainer(item));
    }
}
function removeFavoriteFromLocalStorage(id) {
    let existingData = JSON.parse(localStorage.getItem(USER_FAVORITES));
    let newData = existingData.filter(item => item.id !== id);
    localStorage.setItem(USER_FAVORITES, JSON.stringify(newData));
}

function addUserFavoritesToLocalStorage(item) {
    let favorites = locaStorageData(USER_FAVORITES);

    if (favorites) {
        favorites.push(item)
    }
    else {
        favorites = [item];
    }

    localStorage.setItem(USER_FAVORITES, JSON.stringify(favorites));
}

function addToSearchLocalStorage(searchName, searchItems) {
    localStorage.setItem(searchName, JSON.stringify(searchItems));
}

function grabFromLocalAndAppend(itemToSearch) {
    let items = localStorage(itemToSearch);
    items.forEach(item => {
        createAndAppend(item);
    });
}

function locaStorageData(key) {
    return JSON.parse(localStorage.getItem(key));
}

function checkIfExists(itemToSearch) {
    return localStorage.getItem(itemToSearch) != null;
}
