export class Pokemon {
    constructor(data) {
        this.id = data.id || ''
        this.name = data.name || ''
        this.img = data.img || data.sprites.other.dream_world.front_default
        this.types = data.type || data.types[0].type.name
        this.height = data.height || ''
        this.weight = data.weight || ''
        this.inParty = data.inParty || false
    }

    get Template() {
        return `
        <div class="w-75 bg-white elevation-1 p-3 d-flex flex-column">
          <div class="text-center">
            <h3>${this.name}</h3>
            <p><b>Type:</b> ${this.types} | <b>Height:</b> ${this.height} | <b>Weight:</b> ${this.weight}</p>
            <img src="${this.img}">
          </div>
          <div class="d-flex justify-content-between justify-self-end mt-5">
            <div>
                ${this.Checkbox}
            </div>
            <button class="btn btn-light" onclick="app.pokemonService.catchPokemon()">Catch!<img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/738311f5-a42a-4b05-9ba2-3b3ca53d1261/dbgkdxc-79242889-edf0-43b6-993c-e14de30517c5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83MzgzMTFmNS1hNDJhLTRiMDUtOWJhMi0zYjNjYTUzZDEyNjEvZGJna2R4Yy03OTI0Mjg4OS1lZGYwLTQzYjYtOTkzYy1lMTRkZTMwNTE3YzUuZ2lmIn1dXX0.pP0fhdd9snciMD-oRGY4z8DPPt7nNUzKM-Pz-fGGm34"
                class="img-fluid imgclass">
            </button>
          </div>
        </div>
        `
    }

    get Checkbox() {
        if (!this.id) {
            return ''
        }
        return `
        <input type="checkbox" name="in-party" id="in-party">
            <label for="in-party">In Party</label>
        `
    }

    get Button() {
        if (this.id) {
            return `
            <button class="btn btn-light" onclick="app.pokemonController.catchPokemon()">Catch!<img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/738311f5-a42a-4b05-9ba2-3b3ca53d1261/dbgkdxc-79242889-edf0-43b6-993c-e14de30517c5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83MzgzMTFmNS1hNDJhLTRiMDUtOWJhMi0zYjNjYTUzZDEyNjEvZGJna2R4Yy03OTI0Mjg4OS1lZGYwLTQzYjYtOTkzYy1lMTRkZTMwNTE3YzUuZ2lmIn1dXX0.pP0fhdd9snciMD-oRGY4z8DPPt7nNUzKM-Pz-fGGm34"
                class="img-fluid imgclass">
            </button>
            `
        }
    }
}
