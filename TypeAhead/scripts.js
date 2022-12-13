const arrayOfObjects = [{ name: "Fox", link: "foxnews.com" }, { name: "Fandango", link: "fandango.com" }, { name: "CNN", link: "cnn.com" }];

let searchInput = document.querySelector('#searchInput');


searchInput.addEventListener('input', getItems);


function getItems(e) {
    let searchValue = e.target.value;
    let optionsContainer = document.querySelector('#datalistOptions');

    let items = arrayOfObjects.filter(x => x.name.toLowerCase().includes(searchValue.toLowerCase()));


    if (items) {
        optionsContainer.innerHTML = "";
        items.forEach(item => {
            let newOption = document.createElement('option');
            newOption.setAttribute('value', item.name);

            optionsContainer.append(newOption);
        })
    }
}



