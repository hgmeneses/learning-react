import React from 'react'
import ReactDOM from "react-dom";

const TarjetaVerdura = (props) => (
    <div>
        <h3>{ props.name }</h3>
        <hr/>
        <p>$ { props.price} </p>
    </div>
)

let verduraRara = 'Zanahoria'

const App = () => (
    <div>
      <TarjetaFruta />
      <TarjetaVerdura name={`${verduraRara}`} price={2.00} />
      <TarjetaVerdura name='Papa' price={1.50} />
      <TarjetaVerdura name='Arracacha' price={5.00} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
