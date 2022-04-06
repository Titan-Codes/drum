for (var a = 0; a < document.querySelectorAll(".drum").length; a++) {
    document.querySelectorAll('.drum')[a].addEventListener("click", handleClick);

    function handleClick() {

        var buttonVal = this.innerHTML;
        makeSound(buttonVal);
    }
}

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(buttonVal)
            break;
    }
}