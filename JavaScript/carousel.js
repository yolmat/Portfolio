const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".imgsProjects");

const maxItens = items.length;

let currentItem = 0;



controls.forEach(control => {
    function test() {
        const isLeft = control.classList.contains('arrowLeft')

        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItens) {
            currentItem = 0
        }

        if (currentItem < 0) {
            currentItem = maxItens - 1
        }

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
    }
    control.addEventListener('click', test)
});

