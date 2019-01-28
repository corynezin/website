function typewrite(i, text, time) {
    if (text === undefined) {
        text = ''
    }
    // Get text already in body
    // text = document.getElementById('topText').innerHTML
    // Set to empty string to stop display
    // Loop over characters, adding one by one
    if (i < text.length) {
        console.log(i)
        console.log(text.charAt(i))
        document.getElementById('topText').innerHTML += text.charAt(i)
        i++
        setTimeout(function() {typewrite(i, text, time); }, time)
    }
}

function changeTitle() {
    document.getElementById('topText').innerHTML='Deborah Gorelik'
}
