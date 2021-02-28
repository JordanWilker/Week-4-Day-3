import {ProxyState} from "../AppState.js"
import {apipokesService} from "../Services/ApiPokesService.js"

function _drawApiPoke(){
    let pokemon = ProxyState.apipokes

    let template = ""
    pokemon.forEach(s=> template += `<li onclick="app.apipokesController.setActivePokemon('${s.name}')"> ${s.name} </li>`)
    document.getElementById("poke-api").innerHTML =template;

}
function _drawActivePoke(){
    document.getElementById("active-poke").innerHTML = ProxyState.activepoke.ActiveTemplate
}


export default class ApiPokesController{
    constructor(){
        console.log("PokeApiController");
        ProxyState.on("apipokes", _drawApiPoke)
        ProxyState.on("activepoke",_drawActivePoke)
    }
    getPokeApiPokemon(){
        
    }
    setActivePokemon(name){
        console.log(name)
        apipokesService.setActivePokemon(name)
    }
}