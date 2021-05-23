
tiles = prompt("How many tiles ? ", 10);
document.documentElement.style
    .setProperty('--tiles', tiles);
run = (tiles * tiles);

function promttiles() {
    window.location.reload();
}

for (let i = 0; i < tiles * tiles; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('item');
    container.appendChild(content);
}

const item = document.getElementsByClassName('item');
for (let i = 0; i < (tiles * tiles); i++) {
    item[i].addEventListener("mouseover", mouseover);
    function mouseover() {
        item[i].style.backgroundColor = "black";
    }
}

function refreshPage() {
    for (let i = 0; i < (tiles * tiles); i++) {
        item[i].style.backgroundColor = "white";
    }
}