
for (let i = 0; i < 100; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('item');
    container.appendChild(content);
}

const item = document.getElementsByClassName('item');
for (let i = 0; i < 100; i++) {
    item[i].addEventListener("mouseover", mouseover);
    function mouseover() {
        item[i].style.backgroundColor = "black";
    }
}

function refreshPage() {
    window.location.reload();
}