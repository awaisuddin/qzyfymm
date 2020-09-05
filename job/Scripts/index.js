let searchInput = document.querySelector('input[name="search"]')
let topics = document.querySelectorAll('.search li')

searchInput.addEventListener('input', () => {
    let filter = searchInput.value.toUpperCase()
    Array.from(topics).forEach(element => {
        if (element.innerText.toUpperCase().includes(filter)) {
            element.style.display = ''
            searchInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    console.log('submit')
                    document.querySelector('.search h3').innerText = `${element.innerText}`
                }
            })

        } else {
            element.style.display = 'none'
        }
    })
})


let createRoom = document.querySelector('.createRoom')
let players = document.querySelector('.players')
let search = document.querySelector('.search')

createRoom.style.display = 'none'
players.style.display = 'none'
search.style.display = 'none'

let nextButon = document.getElementsByClassName('circular')
nextButon[0].addEventListener('click', () => {
    createRoom.classList.remove('active')
    players.classList.add('active')
})
nextButon[1].addEventListener('click', () => {
    players.classList.remove('active')
    search.classList.add('active')
})