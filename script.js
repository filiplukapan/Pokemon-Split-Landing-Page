const box = document.querySelectorAll('.box');

window.addEventListener('scroll', theBoxes)

theBoxes()

function theBoxes() {
    const trigger = window.innerHeight / 5 * 5;

    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < trigger) {
            box.classList.add('show');
        }
        else if (document.documentElement.scrollHeight==window.innerHeight+window.scrollY) {
            box.classList.add("show")
        }
        else {
            box.classList.remove('show');
        }
    })
}