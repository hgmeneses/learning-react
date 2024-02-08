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
        /* si es necesario podemos usarla en la constante de styles directamente o refactorizarla poniendola en una constante */
        const hasItems = this.state.cantidad > 0

		/* Dentro de react tenemos la opcion de usar stylos como si  fueran objetos
           y llamarlos en el atributo `style` de html para que jsx lo pueda
           entender como nuestra voluntad de agregar estilos a esta etiqueta.
           Tambien recordar que para palabras compuesta usamos notacion camelCase */
		const styles = {
			border: '1px solid black',
			marginBottom: '1em',
			borderRadius: '0.5em',
			padding: '1em',
			background: hasItems ? 'linear-gradient(45deg, #2e3440, #a3be8c)': '#FFF',
            color: hasItems ? '#FFF' : '#000',
            transition: 'all 400ms ease-out' /* hace los efectos de transicion mas suaves */
		}

		return (
			<div style={styles}>
				<h3>{this.props.name}</h3>
				<div> Cantidad: {this.state.cantidad} </div>
				<button onClick={this.agregar}> + </button>
				<button onClick={this.restar}> - </button>
				<button onClick={this.limpiar}> 0 </button>
				<hr />
				<p>$ {this.props.price} </p>
                <p>
                    Total: ${this.props.price * this.state.cantidad}
                </p>
			</div>
		)
	}
}

export default TarjetaFruta
