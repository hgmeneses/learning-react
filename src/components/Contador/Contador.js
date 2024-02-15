/* this component is created to learn how works the state mutation in a function */
import React, {Component} from 'react'

class Contador extends Component {
	state = {
        clicks: 0,
    }

    add = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

	render() {
		return(
            <button onClick={this.add}>
                Clicks: ({this.state.clicks})
            </button>
        )
	}
}

export default Contador
