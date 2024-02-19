/* this component is created to learn how works the state mutation in a function */
import React, {Component} from 'react'

class Contador extends Component {
	state = {
        video: {
            title: 'Super Video',
            likes: 0
        }
    }

    add = () => {
        this.setState((prevState) => ({
            video: {
                ...prevState.video,
                likes: prevState.video.likes + 1
            }
        }))
    }

	render() {
		return(
            <div>
                <h1>
                  {this.state.video.title}
                </h1>
                <button onClick={this.add}>
                    Likes: ({this.state.video.likes})
                </button>
            </div>
        )
	}
}

export default Contador
