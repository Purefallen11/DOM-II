// Your code goes here
const navHover = document.querySelectorAll(".logo-heading, .nav-link")

navHover.forEach(item => {
    item.addEventListener("mouseenter", e => {
        e.target.style.color = "purple"
    })
})

navHover.forEach(item => {

    item.addEventListener("mouseout", e => {
        e.target.style.color = "black"
    })
})

const konami = document.querySelector("body")

konami.addEventListener("keydown", (e) => {
    const keyName = e.keyCode;
    const playSound = () => {
        let sound = new Audio(
            "https://vgmsite.com/soundtracks/teenage-mutant-ninja-turtles-tournament-fighters-snes-audio/zepykxueeo/01%20Konami%20Fanfare.mp3"
        );
        sound.play();
    }
    
    if (keyName === 65) {
       playSound()
    }
})

const easterEgg = document.querySelector(".intro h2")

easterEgg.addEventListener("mouseover", (e) => {
    e.target.textContent = "Press A"
})

easterEgg.addEventListener("mouseout", (e) => {
    e.target.textContent = "Welcome To Fun Bus!"
})
