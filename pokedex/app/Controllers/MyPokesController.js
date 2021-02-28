import { ProxyState } from "../AppState.js"
import Poke from "../Models/Poke.js"
import { sandboxApi } from "../Services/AxiosService.js"
import {myPokesService} from "../Services/MyPokesService.js"


function _drawMyPokes(){
    let pokes = ProxyState.mypokes
    let template = ""
    pokes.forEach(s=> template+=`<li> ${s.name} </li>`)
    document.getElementById("my-pokes").innerHTML =template;

}


export default class MyPokesController{
    constructor(){
        ProxyState.on("mypokes",_drawMyPokes)
    }
    catchMyPokemon(){
        myPokesService.catchMyPokemon()
    }
}