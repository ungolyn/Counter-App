let countEl = document.getElementById ("count-er")
let saveEl = document.getElementById("save-it")
count = 0

function increasing () {
    count += 1
    countEl.textContent = count
}

function save() {
    let Countr = count + " - "
    saveEl.textContent += Countr
    countEl.textContent = 0
    count = 0

}