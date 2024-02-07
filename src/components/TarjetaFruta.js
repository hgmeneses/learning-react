import React from 'react'

/*
 Esto es un componente de clase, y tenemos un constructor que simplemente pasa
 hace un super(esto diciendo que no va a modificar el constructor)
 luego de eso agrega un nuevo "atributo" al objeto `state` llamado
 cantidad, el cual se ira actualizando usando this.setState.
 Esto succede a una funcion onClick dentro de un atributo de <button>
*/
class TarjetaFruta extends React.Component {
	/* en este caso, eliminamos el constructor entero */
	state = {
		cantidad: 0,
	}

	agregar = () =>
		this.setState({
			cantidad: this.state.cantidad + 1,
		})

	restar = () =>
		this.setState({
			cantidad: this.state.cantidad - 1,
		})

	limpiar = () =>
		this.setState({
			cantidad: 0,
		})

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

export default TarjetaFruta
