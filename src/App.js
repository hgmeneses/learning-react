import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import TarjetaVerdura from './components/TarjetaVerdura'
import Contador from './components/Contador/Contador'
import Gato from './components/Gato/Gato'

const otrosDatos = {
    raza: 'tropical',
    peleasNocturnas: 300
}

const masAtributos = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Pirry' /* Recordemos que si ejecutamos esta linea al estar haciendo untado de objetos sobreescribira el nombre que estamos pasando primero en las props */
}

const App = () => (

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
            { ...masAtributos }
        />
	</div>
)

export default App
