let storys = [
    {
        dp: "https://media.istockphoto.com/id/1267038858/photo/black-haired-woman-with-voluminous-shiny-and-curly-hairstyle-frizzy-hair.webp?b=1&s=170667a&w=0&k=20&c=QPdgtGyy9aW7EplArlH8ZTMl3aAQkU6hFfWJbBSS2fI=",
        story: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1687360441387-0179af118555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];

let clutter = "";

storys.forEach((ele, id) => {
    console.log(ele.dp);
    clutter += `<div class="story">
    <img id="${id}" src="${ele.dp}" alt="">
</div>`
})

let story = document.querySelector('#story_container');
story.innerHTML = clutter;
story.addEventListener("click", (e) => {
    let detail = storys[e.target.id].story;
    let fullScreen =
        document.querySelector('#fullScreen');
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${detail})`;

    setTimeout(() => {
        fullScreen.style.display = "none";
    }, 3000)
})