import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/pokemon.js";
import { pokeApi, sandboxApi } from "./AxiosService.js"

class PokemonService {
    constructor() {

    }

    async getWildPokemon() {
        const res = await pokeApi.get('')
        ProxyState.wildPokemon = res.data.results
    }

    async getPokemonByName(name) {
        const res = await pokeApi.get(name)
        const poke = new Pokemon(res.data)
        ProxyState.activePokemon = poke
    }

    setActive(name) {
        const poke = ProxyState.caughtPokemon.find(p => p.name == name)
        ProxyState.activePokemon = poke
    }

    async inParty() {
        const poke = ProxyState.activePokemon
        poke.inParty = !poke.inParty
        const res = await sandboxApi.put(poke.name, poke)
        ProxyState.caughtPokemon = ProxyState.caughtPokemon
    }

}

export const pokemonService = new PokemonService