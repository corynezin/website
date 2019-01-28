function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typewrite(i, text, time) {
    var writtenText = ''
    // Loop over characters, adding one by one
    for (i = 0; i < text.length; i++) {
        writtenText += text.charAt(i)
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
