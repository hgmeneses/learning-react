import React from 'react'
// import './TarjetaFruta.css' /* webpack hace esto posible con sus louder, ya que revisa los import y carga los archivos css cuando se necesitan */
import styles from './TarjetaFruta.module.css'

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
    /* esto me permite llamar clases por separado pero no me deja complementar
        las ya existentes, por lo que ahora pasaremos a usar una especie de interpolacion de strings
        const classes = hasItems ? 'TarjetaFruta-active' : 'TarjetaFruta' */
    const hasItems = this.state.cantidad > 0
    const activeClass = hasItems ? styles['card-active'] : '' // Aqui estoy usando la notacion de corchetes para llamar una llave del objecto `styles`

    /* usar templeta strings que es poner un string con `` y dentro de estos
           template podemos hacer evaluacion de expresiones usando ${} */
    const classes = styles.card + ' ' + activeClass

    return (
      <div className={classes}>
        <h3>{this.props.name}</h3>
        <div> Cantidad: {this.state.cantidad} </div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.restar}> - </button>
        <button onClick={this.limpiar}> 0 </button>
        <hr />
        <p>$ {this.props.price} </p>
        <p>Total: ${this.props.price * this.state.cantidad}</p>
      </div>
    )
  }
}

export default TarjetaFruta
