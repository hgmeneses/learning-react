import React from 'react'
import ReactDOM from "react-dom";

const TarjetaFruta = () => {
    return (
        <div>
          <h3>Titulo</h3>
          <hr/>
          <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit</p>
        </div>
    )
}

const TarjetaVerdura = () => (
    <div>
        <h3>Titulo</h3>
        <hr/>
        <p>Descripcion ... </p>
    </div>
)

const App = () => (
    <div>
      <TarjetaFruta />
      <TarjetaVerdura />

    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
