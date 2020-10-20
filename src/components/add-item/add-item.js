import React, { Component } from 'react'
import './add-item.css'

export default class addItem extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({ label: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAddItem(this.state.label)
    this.setState({ label: '' })
  }

  render () {
    return (
      <form className="add" onSubmit={ this.onSubmit }>
        <input
          className="add-input"
          type="text"
          placeholder="Type new todo"
          onChange={ this.onLabelChange }
          value={ this.state.label }
        />
        <button
          className="btn btn-success"
          type="submit"
        >Add</button>
      </form>
    )
  }
}
