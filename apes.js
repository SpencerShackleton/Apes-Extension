function checkRanks() {
    punksInPage = document.getElementsByClassName('text-black text-xl')

    for (i in punksInPage) {
        let punk = punksInPage[i]
        if (punk.textContent == null | punk.textContent == undefined) continue
        if (punk.textContent.includes('Rank')) continue
        
        punkId = punk.textContent.replace('APE #','')
        editPunk(punkId, punk)
    }
}

function editPunk(punkId, punk) {
    fetch(`https://ragepit.dev/ape/${punkId}`)
                .then(res => res.json())
                .then(data => {
                    punk.textContent = `APE #${punkId} Rank: ${data.Rank}`
                })
                .catch(e => console.error(e))
}

var items
var containerDiv

function timing() {
    if (items != document.getElementsByClassName(containerDiv).item(0)) checkRanks()  
    items = document.getElementsByClassName(containerDiv).item(0)
}

window.addEventListener("load", function(event) {
    if (window.location.pathname == '/myapes') containerDiv = 'flex max-w-6xl mt-8 flex-1 gap-7 justify-center flex-wrap'
    else containerDiv = 'w-full flex max-w-4xl mt-8 flex-1 gap-5 justify-start flex-wrap'
    var intervalID = window.setInterval(timing, 1000)
});


