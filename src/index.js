import React from 'react'
import ReactDOM from "react-dom";

/*
 Esto es un componente de clase, y tenemos un constructor que simplemente pasa
 hace un super(esto diciendo que no va a modificar el constructor)
 luego de eso agrega un nuevo "atributo" al objeto `state` llamado
 cantidad, el cual se ira actualizando usando this.setState.
 Esto succede a una funcion onClick dentro de un atributo de <button>
*/
class TarjetaFruta extends React.Component {
  constructor () {
    super()

    this.state = {
      cantidad: 0
    }
  }
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <div> Cantidad: { this.state.cantidad }</div>
        <button
          onClick={ () => {
            this.setState({
              cantidad: this.state.cantidad + 1
            })
          }}
        >
          Agregar
        </button>
        <hr/>
        <p>$ { this.props.price} </p>
      </div>
    )
  }
}

const TarjetaVerdura = (props) => (
    <div>
        <h3>{ props.name }</h3>
        <hr/>
        <p>$ { props.price} </p>
    </div>
)

let verduraRara = 'Zanahoria'
let frutaRara = 'Feijoa'

const App = () => (
    <div>
      <TarjetaVerdura name={`${verduraRara}`} price={2.00} />
      <TarjetaVerdura name='Papa' price={1.50} />
      <TarjetaVerdura name='Arracacha' price={5.00} />

      <TarjetaFruta name={`${frutaRara}`} price={9.00} />
      <TarjetaFruta name='Manzana' price={1.50} />
      <TarjetaFruta name='Sandia' price={5.00} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
