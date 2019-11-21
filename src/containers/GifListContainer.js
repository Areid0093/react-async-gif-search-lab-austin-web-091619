import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    
    state = {
        gifs: []
    }
    
    render() {
        return (
            <div>
            <GifList gifs={this.state.gifs} />  
            <GifSearch componentDidMount={(e) => this.componentDidMount(e)} />
            </div>
        );
    }

    componentDidMount(input = "noob") {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=jdIxFrfXoKRIzsjBQQVwv3BeVNFldLkX&q=${input}&limit=3&offset=0&rating=PG-13&lang=en`)
        .then(r => r.json())
        .then(({data}) => this.setState({
            gifs: data.map(gif => ({
                url: gif.images.original.url
            }))
        })
        )
    }
}



export default GifListContainer
