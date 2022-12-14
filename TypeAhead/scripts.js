const arrayOfObjects = [
    { name: "Fox", link: "foxnews.com" },
    { name: "Fandango", link: "fandango.com" },
    { name: "CNN", link: "cnn.com" },


    { name: "ABC", link: "abc.com" },
    { name: "Disney", link: "disney.com" },
    { name: "Disney+", link: "disneyplus.com" },

    { name: "CBS", link: "cbs.com" },
    { name: "Netflix", link: "netflix.com" },
    { name: "Hulu", link: "hulu.com" },

    { name: "Amazon Prime", link: "amazon.com/amazonprime" },
    { name: "StackOverflow", link: "stackoverflow.com" },
    { name: "FontAwesome", link: "fontawesome.com" },
];

let searchInput = document.querySelector('#searchInput');



searchInput.addEventListener('input', getItems);


function getItems(e) {
    let searchValue = e.target.value;
    let optionsContainer = document.querySelector('#itemOptions');

    if (searchValue != '') {

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
    else {
        optionsContainer.innerHTML = "";
    }
}
