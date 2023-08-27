let info = document.querySelector("h5");
let add = document.querySelector("#add");
// let remove = document.createElement("div");


add.addEventListener("click", () => {
    if (info.innerText === 'Friends') {
        info.innerText = 'Stranger';
        info.style.color = 'crimson';
        add.innerText = "Add Friend";
        add.classList = 'add';

    } else {
        info.innerText = 'Friends';
        info.style.color = 'green';
        add.innerText = "Remove";
        add.classList = 'remove';
    }
})
