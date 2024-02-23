import React, {Component} from 'react'
import TarjetaFruta from './components/TarjetaFruta'
import TarjetaVerdura from './components/TarjetaVerdura'

class App extends Component {
  render() {
    return (
      <div>
        <TarjetaVerdura name="Papa" price={1.5} />
        <TarjetaVerdura name="Arracacha" price={5.0} />

        <TarjetaFruta name="Manzana" price={1.5} />
        <TarjetaFruta name="Sandia" price={5.0} />
      </div>
    )
  }
}

export default App
