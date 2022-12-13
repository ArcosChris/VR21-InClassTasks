const arrayOfObjects = [{ name: "Fox", link: "foxnews.com" }, { name: "Fandango", link: "fandango.com" }, { name: "CNN", link: "cnn.com" }];

let searchInput = document.querySelector('#searchInput');



searchInput.addEventListener('input', getItems);


function getItems(e) {
    let searchValue = e.target.value;
    let optionsContainer = document.querySelector('#itemOptions');

    let items = arrayOfObjects.filter(x => x.name.toLowerCase().includes(searchValue.toLowerCase()));


    if (items) {
        optionsContainer.innerHTML = "";
        items.forEach(item => {
            let newOption = document.createElement('li');
            newOption.innerHTML = `<a href='https://www.${item.link}' target="_blank">${item.name}</a>`;
            optionsContainer.append(newOption);
        })
    }
}
