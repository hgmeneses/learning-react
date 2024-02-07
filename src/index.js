import React from 'react'
import ReactDOM from 'react-dom'

/*
 Esto es un componente de clase, y tenemos un constructor que simplemente pasa
 hace un super(esto diciendo que no va a modificar el constructor)
 luego de eso agrega un nuevo "atributo" al objeto `state` llamado
 cantidad, el cual se ira actualizando usando this.setState.
 Esto succede a una funcion onClick dentro de un atributo de <button>
*/
class TarjetaFruta extends React.Component {
	constructor() {
		super()

		/*o tambien podemos agregar el llamado desde el constructor
      lo que a mi parecer le da un acabado mas limpio, Dejamos en la
      funcion `onClick` el llamado a this.agregar solamente.

      Esto es funcional con algunos bind pero podemos hacerlo aun mas chevere
      this.agregar = this.agregar.bind(this)
      this.restar = this.restar.bind(this)
    */

		/* Creamos un array para agregar nuestros metodos */
		const METHODS = ['agregar', 'restar', 'limpiar']

		/* Luego recorremos el array y a cada metodo le hacemos el bind(this) */
		METHODS.forEach((method) => {
			this[method] = this[method].bind(this)
		})

		this.state = {
			cantidad: 0,
		}
	}

	agregar() {
		this.setState({
			cantidad: this.state.cantidad + 1,
		})
	}

	restar() {
		this.setState({
			cantidad: this.state.cantidad - 1,
		})
	}

	limpiar() {
		this.setState({
			cantidad: 0,
		})
	}

	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<div> Cantidad: {this.state.cantidad} </div>
				{/*Esta es una forma de decirle a js que use this de la clase
           y no del metodo en si: `.bind(this)` sin agregar nada al
           constructor de la clase.

           onClick={ this.agregar.bind(this) }
         */}
				<button onClick={this.agregar}> + </button>
				<button onClick={this.restar}> - </button>
				<button onClick={this.limpiar}> 0 </button>
				<hr />
				<p>$ {this.props.price} </p>
			</div>
		)
	}
}

const TarjetaVerdura = (props) => (
	<div>
		<h3>{props.name}</h3>
		<hr />
		<p>$ {props.price} </p>
	</div>
)

let verduraRara = 'Zanahoria'
let frutaRara = 'Feijoa'

const App = () => (
	<div>
		<TarjetaVerdura name={`${verduraRara}`} price={2.0} />
		<TarjetaVerdura name="Papa" price={1.5} />
		<TarjetaVerdura name="Arracacha" price={5.0} />

		<TarjetaFruta name={`${frutaRara}`} price={9.0} />
		<TarjetaFruta name="Manzana" price={1.5} />
		<TarjetaFruta name="Sandia" price={5.0} />
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
