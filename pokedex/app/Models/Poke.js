export default class Poke{
    constructor(data){
    
        this.name = data.name,
        this.img = data.img|| data.sprites["other"]["official-artwork"]["front_default"]
        this.description = "",
        this.weight = data.weight,
        this.height = data.height,
        this.types = data.types,
        this.user = data.user

        if(Array.isArray(this.description)){
            this.description = this.description.join("\n")
          }
    }
    getTypes(){
        let types = " "
        for (let i = 0; i< this.types.length; i++){
        
        types = types+(this.types[i].type.name)+" "
        }
        return types
    }
    
    get ActiveTemplate() {
        return /*html*/`
        <div class="card">
        <div class="card-body">
        <img class="card-img-top" src = "${this.img}">
        <h3 class="card-title text-capitalize">Name: ${this.name}</h3>
        <p class="card-text text-capitalize">Types: ${this.getTypes()}</p>
        <p class="card-text">Height: ${this.height} in</p>
        <p class="card-text">Weight: ${this.weight} lbs</p>
        </div>
            ${this.ButtonBuilder}
        </div>
        `
    }
    get ButtonBuilder(){
        if(this.user){
            return '<button class="btn btn-danger">Release</button>'
        }else {
            return '<button class="btn btn-success" onclick="app.mypokesController.catchMyPokemon()">Catch Pokemon</button>'
        }
    }
}
// {
//     "name": {
//     "type": "String",
//     "required": true
//     },
//     "img": {
//     "type": "String",
//     "required": true
//     },
//     "description": {
//     "type": "String"
//     },
//     "weight": {
//     "type": "String"
//     },
//     "height": {
//     "type": "String"
//     },
//     "types": [
//     {}
//     ],
//     "user": {
//     "type": "String",
//     "required": true
//     }
//     }