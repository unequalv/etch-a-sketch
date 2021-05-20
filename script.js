let i;
for (i = 0; i < 25; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('grid-item');
    container.appendChild(content);
}