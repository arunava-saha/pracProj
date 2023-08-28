let container = document.querySelector('.container');

let icon = document.querySelector('i');

const heart = container.addEventListener("dblclick", () => {
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.5;
    setTimeout(() => {
        icon.style.transform = "translate(-50%, -50%) scale(0)"
    }, 3000)
    setTimeout(() => {
        icon.style.opacity = 0
    }, 1000)
})

