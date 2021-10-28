import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

function _drawWildPokemon() {
    const pokemon = ProxyState.wildPokemon
    let template = ''
    pokemon.forEach(p => template += `<p class="m-1 selectable text-dark pt-2 pb-1" onclick="app.pokemonController.getPokemonByName('${p.name}')" >${p.name}</p>`)
    document.getElementById('wild-pokemon').innerHTML = template

}

function _drawActivePokemon() {
    let template = ''
    if (ProxyState.activePokemon) {
        template = ProxyState.activePokemon.Template
    }
    document.getElementById('active-pokemon').innerHTML = template
}

function toast(message, type, time = 2000) {
    // @ts-ignore
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: time,
        timerProgressBar: true
    })

    Toast.fire({
        icon: type,
        title: message
    })
}
export class PokemonController {
    constructor() {
        this.getWildPokemon()

        ProxyState.on('wildPokemon', _drawWildPokemon)
        // ProxyState.on('caughtPokemon', _drawCaughtPokemon)
        ProxyState.on('activePokemon', _drawActivePokemon)
    }

    async getWildPokemon() {
        try {
            await pokemonService.getWildPokemon()
        } catch (error) {
            toast(error.message, 'error')
            console.error("[PokeAPI Error]", error)
        }
    }

    async catchPokemon() {
        try {
            await pokemonService.catchPokemon()
            toast('Caught Pokemon!', 'success')
        } catch (error) {
            toast(error.message, 'error')
        }
    }

    async getPokemonByName(name) {
        try {
            await pokemonService.getPokemonByName(name)
        } catch (error) {
            toast(error.message, 'error')
            console.error("[Poke Api Error]", error)
        }
    }

    setActive(name) {
        pokemonService.setActive(name)
    }

    async inParty() {
        try {
            await pokemonService.inParty()
        } catch (error) {
            console.error("[sandbox Api error]", error.message)
        }
    }
}