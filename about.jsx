import React from 'react'
class About extends React.Component {

    constructor() {
        super()  
        console.log("constructor")

        this.state = {
            name: "Ashish",
            count: 0
        }
    }

    componentDidMount() {
        console.log("Did mount")
    }

    componentDidUpdate() {
        console.log("Did update")
    }

    componentWillUnmount() {
        console.log("Will unmount")
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.count}</h1>

                <button 
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                    Increment
                </button>
            </div>
        )
    }
}

// Exporting the component so it can be used in other files
export default About
