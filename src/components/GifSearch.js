import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    term: ''
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label htmlFor="term">Search</label>
          <input className="form-control" name="term" type="text" value={this.state.term} onChange={this.onInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}