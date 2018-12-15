import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g'
// "q=YOUR QUERY HERE"

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  onSearchSubmit = term => {
    fetch(`${URL}&q=${term}`)
      .then(r => r.json())
      .then(data => {
        const gifs = data.data.map(d => d.images.original.url).slice(0,3)
        this.setState({ gifs })
      })
  }

  render() {
    return (
      <div className="container">
        <GifSearch onSearchSubmit={this.onSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}