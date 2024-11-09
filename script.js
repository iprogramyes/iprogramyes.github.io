const elements = document.querySelectorAll('*');

document.addEventListener("click", () => {
    for (let element of elements) {
        element.style.width = Math.round(Math.random() * 200) + 'px'
        element.style.height = Math.round(Math.random() * 200) + 'px'
    }
});
