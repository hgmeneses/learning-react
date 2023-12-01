import React from 'react'
import ReactDOM from "react-dom";

//const name = 'Gabriel Meneses'

const user = {
    name: 'Gabriel Meneses',
    age: 28,
    country: 'Colombia'
}

function getInfo(user) {
    return `Hola mi nombre es ${user.name}, soy de ${user.country} y tengo ${user.age} de edad.`
}
const App = <h1>{ getInfo(user) }</h1>
// const App = React.createElement("h1", null, "Hola React")
//

ReactDOM.render(App, document.getElementById('root'))
