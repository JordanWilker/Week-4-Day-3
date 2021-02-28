//import ValuesController from "./Controllers/ValuesController.js";

import ApiPokesController from "./Controllers/ApiPokesController.js";
import MyPokesController from "./Controllers/MyPokesController.js";

class App {
  //valuesController = new ValuesController();
  apipokesController = new ApiPokesController()
  mypokesController = new MyPokesController()
}

window["app"] = new App();
