const manaDisplay = document.getElementById("mana-total")
const manaCap = document.getElementById("manaCap")
const manaEff = document.getElementById("manaEff")
let manaTotal
let mEff
let mCap

function apply() {
    mEff = parseInt(document.getElementById("manaEff").value)
    mCap = parseInt(document.getElementById("manaCap").value)
    manaTotal = mEff * mCap
    manaDisplay.innerHTML = manaTotal
}
function add() {
    let spell = document.createElement("div")
    spell.style.width = "auto"
    spell.style.height = "auto"
    spell.style.backgroundColor = "red"
    spell.style.margin = "10px"
    spell.style.float = "left"
    spell.style.backgroundColor = "#4287f5"

    let name = document.createElement("input")
    name.type = "text"
    name.style.width = "150px"
    name.style.height = "30px"
    name.style.margin = "10px"
    name.style.position = "relative"
    name.placeholder = "Spell Name"
    name.style.backgroundColor = "#1e72f7"

    let cost = document.createElement("input")
    cost.type = "number"
    cost.style.width = "50px"
    cost.style.height = "30px"
    cost.style.margin = "10px"
    cost.placeholder = "Cost"
    cost.style.position = "relative"
    cost.style.backgroundColor = "#1e72f7"

    let use = document.createElement("button")
    use.type = "button"
    use.style.margin = "10px"
    use.style.position = "relative"
    use.innerHTML = "Use"
    use.onclick = function thing() {
        manaTotal -= cost.value
        manaDisplay.innerHTML = manaTotal
    }

    let description = document.createElement("input")
    description.type = "text"
    description.style.width = "400px"
    description.style.height = "30px"
    description.style.margin = "10px"
    description.style.position = "relative"
    description.placeholder = "Spell Description"
    description.style.backgroundColor = "#1e72f7"

    let damage = document.createElement("input")
    damage.type = "text"
    damage.style.width = "90px"
    damage.style.height = "30px"
    damage.style.margin = "10px"
    damage.style.position = "relative"
    damage.placeholder = "Spell Damage"
    damage.style.backgroundColor = "#1e72f7"

    spell.appendChild(name)
    spell.appendChild(cost)
    spell.appendChild(damage)
    spell.appendChild(description)
    spell.appendChild(use)
    document.getElementById("main").appendChild(spell)
}