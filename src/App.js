import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import TarjetaVerdura from './components/TarjetaVerdura'
import Contador from './components/Contador/Contador'

const App = () => (
	<div>
		<TarjetaVerdura name="Papa" price={1.5} />
		<TarjetaVerdura name="Arracacha" price={5.0} />

		<TarjetaFruta name="Manzana" price={1.5} />
		<TarjetaFruta name="Sandia" price={5.0} />
        <Contador />
	</div>
)

export default App
