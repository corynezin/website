window.onload = function() {
    text = document.getElementById('topText').innerHTML
    typewrite(text)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typewrite(text) {
    var writtenText = ''
    // Loop over characters, adding one by one
    var i = 0
    for (i = 0; i < text.length; i++) {
        writtenText += text.charAt(i)
        console.log(writtenText)
        document.getElementById('topText').innerHTML = writtenText + '|'
        sleeptime = 300 - (Math.random()*100 + Math.random()*100 + Math.random()*100)
        console.log(sleeptime)
        await sleep(sleeptime)
    }
    await sleep(1000)
    while (true) {
        document.getElementById('topText').innerHTML = writtenText + ''
        await sleep(1000)
        document.getElementById('topText').innerHTML = writtenText + '|'
        await sleep(1000)
    }
}

function changeTitle() {
    document.getElementById('topText').innerHTML='Deborah Gorelik'
}
