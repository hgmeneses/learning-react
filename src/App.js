import React, { Component } from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import TarjetaVerdura from './components/TarjetaVerdura'
import Contador from './components/Contador/Contador'
import Gato from './components/Gato/Gato'

const otrosDatos = {
    raza: 'tropical',
    peleasNocturnas: 300
}

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'

}


class App extends Component {
    /* remove this comment to able the Gato props */
    /* state =  { fuerza: 100, vidasRestantes: 7, name: 'Pirry' } */

    state = {
        x: 0,
        y: 0
    }

    manejador = (event) => {
        /* para que el boton funcione, descomente la siguiente linea y uno de los escuchadores de eventos */
        /* alert('HEY Ninja') */
        this.setState({
            x: event.clientX,
            y: event.clientY
        })

    }

    render() {
        return (
            <div>
                <TarjetaVerdura name="Papa" price={1.5} />
                <TarjetaVerdura name="Arracacha" price={5.0} />

                <TarjetaFruta name="Manzana" price={1.5} />
                <TarjetaFruta name="Sandia" price={5.0} />
                <Contador />
                <Gato
                name='Garfield'
                age='2 años'
                { ...otrosDatos }
                /* { ...this.state } */
                />

                <button
                    /* onClick={this.manejador} */
                    /* onMouseUp={this.manejador} */
                    /* onMouseDown={this.manejador} */
                    onDoubleClick={this.manejador}
                >
                    Dispara
                </button>
                <div
                    style={styles}
                    onMouseMove={this.manejador}
                >
                    <div>
                        x: { this.state.x }
                        y: { this.state.y }
                    </div>
                </div>
            </div>
        )
    }
}

export default App
