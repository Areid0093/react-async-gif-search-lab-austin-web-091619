import React, { Component } from 'react';

export class GifSearch extends Component {
    
    state = {
        input: ''
    }
    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.componentDidMount(this.state.input)
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.input} onChange={this.handleChange} />
            </form>
            </div>
        );
    }
}

export default GifSearch;
