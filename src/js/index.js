//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let segundos = 0; // unidades

let minuto = 0 // decimales

let centena = 0

let miles = 0

setInterval(() => {

    segundos++

    if (
        segundos > 9
    ) {
        segundos = 0

        minuto++
    }

    if (minuto >9 )

    {
        minuto = 0

        centena++

    }

    if (centena >9){

        centena = 0

        miles++

    }

    ReactDOM.render(<Home segundos={segundos} minuto={minuto} centena={centena} miles={miles}/>, document.querySelector("#app"));
}, 1000);



