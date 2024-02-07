import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import TarjetaVerdura from './components/TarjetaVerdura'

let frutaRara = 'Feijoa' /* Realmente esto no es necesario pero siguiendo el ejemplo voy a poderlo aca y luego eliminarlo */
let verduraRara = 'Zanahoria' /* Realmente esto no es necesario pero siguiendo el ejemplo voy a poderlo aca y luego eliminarlo */

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

export default App
