import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

  onLabelClick = () => {
    console.log(`Done ${this.props.label}`)
  }
  
  render () {
    const { label, important = false } = this.props
    
    const style = {
      fontWegiht: important ? '700' : '400',
      color: important ? 'steelblue' : 'black'
    }
  
    return (
      <span className="todo-list-item" style={ style }>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={ this.onLabelClick }
        >
          { label }
        </span>
    
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-exclamation" />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    )
  }
}
