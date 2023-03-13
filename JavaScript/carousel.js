const controls = document.querySelectorAll("control");
const item = document.querySelectorAll(".imgsProjects");

const maxItens = item.length;

let currentItem;

controls.forEach(control => {
    control.addEventListener('click', () => {
        console.log('control')
    });
});
