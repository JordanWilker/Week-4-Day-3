import {ProxyState} from "../AppState.js"
import Poke from "../Models/Poke.js";
import API from "../Models/Poke.js"
import {pokeApi} from "../Services/AxiosService.js"

class PokeApiService{
    constructor(){
        console.log("PokeApiService");
        this.getPokeApiPokemon()
        
    }
    
    async getPokeApiPokemon(){
        try {
            const res = await pokeApi.get("?limit=494")
            console.log(res);
            ProxyState.apipokes = res.data.results
        } catch (error) {
            console.error(error)
        }
    }
    async setActivePokemon(name) {
        try {
            let res = await pokeApi.get(name)
            console.log(res);
            ProxyState.activepoke = new Poke(res.data)
        } catch (error) {
            console.error(error)
        }
    }
}
export const apipokesService = new PokeApiService();