document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', buttonValue)
})


function buttonValue(event) {
    let val = event.target.value
    document.querySelector('#text').innerText += val
}
