let main = document.querySelector('#main');

let curser = document.querySelector('.curser');

main.addEventListener("mousemove", (ele) => {
    curser.style.left = ele.x + 'px'
    curser.style.top = ele.y + 'px'
})