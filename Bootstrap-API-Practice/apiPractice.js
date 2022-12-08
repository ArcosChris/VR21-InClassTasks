fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(data => {
        data.forEach(photo => {
            mapAndAppendItem(photo);
        });
    })



function mapAndAppendItem(item) {
    let container = document.getElementById('cardContainer');
    let newDiv = document.createElement('div');
    newDiv.classList.add('col-3');
    newDiv.setAttribute('id', `card-${item.id}`);

    let content = `
        <div class="card my-3">
            <img src = ${item.url} class="card-img-top" alt = "img" >
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                </div>
        </div>`;

    newDiv.innerHTML = content;
    container.appendChild(newDiv);
}