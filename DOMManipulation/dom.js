let sectionGetById = document.getElementById('container');
console.log(sectionGetById)

let sectionGetByQuerySelector = document.querySelector('#container');
console.log(sectionGetByQuerySelector)

let allSecondListItems = document.querySelectorAll('.second');
console.log(allSecondListItems)

let getThirdInOL = document.getElementsByTagName('ol')[0].getElementsByClassName("third")[0];
console.log(getThirdInOL)

let newHello = document.createElement('h1');
let content = document.createTextNode("HELLO");
newHello.appendChild(content);
sectionGetById.prepend(newHello);

let footerClass = document.querySelector('.footer');
footerClass.classList.add('main');
console.log("ADD MAIN CLASS: ")
console.log(footerClass);

footerClass.classList.remove('main');
console.log("REMOVE MAIN CLASS: ")
console.log(footerClass);

let newListItem = document.createElement('li');
newListItem.classList.add('fourth')
newListItem.innerHTML = 'four';
console.log(newListItem);

let ulList = document.getElementsByTagName('ul')[0];
ulList.appendChild(newListItem);
console.log("UL with new element");
console.log(ulList)



let allListItemsInOL = document.querySelector('ol').querySelectorAll('li');
    allListItemsInOL.forEach(item => {
        item.style.background = 'green'
        item.style.marginBottom = '10px'
    })
console.log(allListItemsInOL);





