import React from 'react'

const GifList = ({ gifs }) => <ul>{gifs.map(gif => <img key={gif} src={gif} />)}</ul>

export default GifList