// DOGWALKER
const dgwplay = document.getElementById("playdogwalker")
const dgwgame = document.getElementById("dogwalkergame")
const dgwimgs = document.getElementById("dogwalkerimgs")

dgwplay.addEventListener(
    "click", function () {
        if (dgwplay.innerHTML == "Play") {
            dgwimgs.classList.add("hidden")
            dgwgame.src = "games/Dogwalker_WebGL/index.html"
            dgwgame.classList.remove("hidden")
            dgwplay.innerHTML = "Stop"
        }
        else {
            dgwgame.classList.add("hidden")
            dgwgame.src = ""
            dgwimgs.classList.remove("hidden")
            dgwplay.innerHTML = "Play"
        }
    }
)

document.getElementById("itchdogwalker").addEventListener(
    "click", function () { 
        window.open("https://ohitscookie.itch.io/dogwalker", "_blank")
    })

// NSH
const honshplay = document.getElementById("playhonsh")
const honshgame = document.getElementById("honshgame")
const honshimgs = document.getElementById("honshimgs")

honshplay.addEventListener(
    "click", function () {
        if (honshplay.innerHTML == "Play") {
            honshimgs.classList.add("hidden")
            honshgame.src = "games/TankHorror_WebGL/index.html"
            honshgame.classList.remove("hidden")
            honshplay.innerHTML = "Stop"
        }
        else {
            honshgame.classList.add("hidden")
            honshgame.src = ""
            honshimgs.classList.remove("hidden")
            honshplay.innerHTML = "Play"
        }
    }
)

document.getElementById("itchhonsh").addEventListener(
    "click", function () { 
        window.open("https://ohitscookie.itch.io/the-horrors-of-newell-simon-hall", "_blank")
    })

// GENODICE
const gdplay = document.getElementById("playgenodice")
const gdgame = document.getElementById("genodicegame")
const gdimgs = document.getElementById("genodiceimgs")

gdplay.addEventListener(
    "click", function () {
        if (gdplay.innerHTML == "Play") {
            gdimgs.classList.add("hidden")
            gdgame.src = "games/Genodice_WebGL/index.html"
            gdgame.classList.remove("hidden")
            gdplay.innerHTML = "Stop"
        }
        else {
            gdgame.classList.add("hidden")
            gdgame.src = ""
            gdimgs.classList.remove("hidden")
            gdplay.innerHTML = "Play"
        }
    }
)

document.getElementById("itchgenodice").addEventListener(
    "click", function () { 
        window.open("https://ohitscookie.itch.io/genodice", "_blank")
    })