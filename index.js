let playkeys = (val) => {
    switch (val) {
        case 'w':
            {
                playSound("./sounds/tom-1.mp3");
                break;
            }
        case 'a':
            {
                playSound("./sounds/tom-2.mp3");
                break;
            }
        case 's':
            {
                playSound("./sounds/tom-3.mp3");
                break;
            }
        case 'd':
            {
                playSound("./sounds/tom-4.mp3");
                break;
            }
        case 'j':
            {
                playSound("./sounds/snare.mp3");
                break;
            }
        case 'k':
            {
                playSound("./sounds/crash.mp3");
                break;
            }
        case 'l':
            {
                playSound("./sounds/kick-bass.mp3");
                break;
            }

        default:
    }

}
let handleClick = (e) => {

    let letter = e.target;
    playkeys(letter.innerHTML);
    buttonAnim(letter.innerHTML);
};

let allBtn = document.querySelectorAll("button");
allBtn.forEach(element => {
    element.addEventListener("click", handleClick);
});

let playSound = (elem) => {
    var audio = new Audio(elem);
    audio.play();
};

document.addEventListener("keypress", (e) => {
    playkeys(e.key);
    buttonAnim(e.key);
});

let buttonAnim = (val) => {
    let anim = document.querySelector('.' + val);
    anim.classList.add("pressed");
    setTimeout(() => {
        anim.classList.remove('pressed')
    }, 300);
};