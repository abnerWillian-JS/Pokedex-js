//datails
const data_name = document.querySelector('#pokemon_name')
const number = document.querySelector('#pokemon_id')
const image = document.querySelector('#mini_poke')
//search
const search = document.querySelector('#search_pokemon')
const form = document.querySelector('#form')
//buttons
const btnPrev = document.querySelector('.btn_prev')
const btnNext = document.querySelector('.btn_next')
//value
let searchPoke = 1

const fetch_pokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIresponse.status === 200) {
        const data = await APIresponse.json()
        return data
    }
}

const render_pokemon = async (pokemon) => {

    data_name.innerHTML = 'carregando'
    number.innerHTML = ''

    const data = await fetch_pokemon(pokemon)

    if (data) {
        image.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default']
        data_name.innerHTML = data.name
        number.innerHTML = data.id
    } else {
        data_name.innerHTML = 'Não encontrado'
        number.innerHTML = ''
        image.style.display = 'none'
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    render_pokemon(search.value.toLowerCase())
    InputDeviceInfo.value = ''
})

btnPrev.addEventListener("click", () => {
    searchPoke -= 1
    render_pokemon(searchPoke)
 })

 btnNext.addEventListener("click", () => {
    searchPoke += 1
    render_pokemon(searchPoke)
 })

render_pokemon(searchPoke)

