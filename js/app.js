document.querySelectorAll('.button').forEach(button => {
    if (button.value) {
        button.addEventListener('click', buttonValue)
    }
})

function buttonValue(event) {
    let number = event.target.value
    document.querySelector('#text').innerText += number
}

