let playerAttack
let enemyAttack

function startGame() {
    const pet = document.getElementById('select-pet')
    pet.addEventListener('click', selectPet)

    const btnFire = document.getElementById('btn-fire').addEventListener('click', selectAtack)
    const btnWater = document.getElementById('btn-water').addEventListener('click', selectAtack)
    const btnGround = document.getElementById('btn-ground').addEventListener('click', selectAtack)
}

function selectPet() {
    const hipodoge = document.getElementById('hipodoge')
    const capipepo = document.getElementById('capipepo')
    const ratigueya = document.getElementById('ratigueya')

    if (hipodoge.checked) {
        console.log("HIPO")
    } else if (capipepo.checked) {
        console.log("CAPI")
    } else if (ratigueya.checked) {
        console.log("RATI")
    }
}

function 



window.addEventListener('load', startGame)