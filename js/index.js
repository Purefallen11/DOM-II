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
