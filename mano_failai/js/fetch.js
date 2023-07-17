document.addEventListener('DOMContentLoaded', function() {

const mygtukas = document.querySelector('#mygtukas');
const output = document.querySelector('#output');

mygtukas.addEventListener('click', function() {
gautiDuomenisIsServerio();
});

function gautiDuomenisIsServerio() {
fetch('galery.fetch')
.then(response => response.json())
.then(data => {
for (let galeryElementData of data) {
    output.innerHTML += galeryElementData.title + ' - ' + galeryElementData.url;

    const imgElement = document.createElement('img');
    imgElement.src = galeryElementData.url;
    imgElement.alt = galeryElementData.title;
    imgElement.classList.add('galery_fetch');

    const divElement = document.createElement('div');
    divElement.appendChild(imgElement);

    output.appendChild(divElement);

}
});
}
});