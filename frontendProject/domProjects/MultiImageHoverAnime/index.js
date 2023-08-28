let elem1 = document.querySelector('#elem1');
let element = document.querySelectorAll('.elem');
// let elem1Image = document.querySelector('.elem img')

element.forEach((elem) => {
    let elem1Image = elem.childNodes[3];
    elem.addEventListener('mousemove', (ele) => {
        elem1Image.style.left = ele.x + 'px';
        // elem1Image.style.top = ele.y + 'px';
    })
    elem.addEventListener('mouseenter', (ele) => {
        elem1Image.style.opacity = 1;
    })
    elem.addEventListener('mouseleave', (ele) => {
        elem1Image.style.opacity = 0;
    })
})