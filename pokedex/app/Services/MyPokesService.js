import {ProxyState} from "../AppState.js"
import Poke from "../Models/Poke.js"
import { sandboxApi } from "./AxiosService.js"


class MyPokesService{
    constructor(){
        this.getMyPokemon()
    }

    async getMyPokemon(){
        try {
           let res = await sandboxApi.get("")
           console.log(res)
           ProxyState.mypokes = res.data.map(s=>new Poke(s))
        } catch (error) {
            console.error(error)
        }
    }
    async catchMyPokemon(){
        try {
           let res = await sandboxApi.post("",ProxyState.activepoke) 
           console.log(res);
           this.getMyPokemon()
        } catch (error) {
           console.error(error) 
        }
    }
}
export const myPokesService = new MyPokesService()