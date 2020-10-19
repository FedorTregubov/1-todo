import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
  const style = {
    fontWegiht: important ? '700' : '400',
    color: important ? 'steelblue' : 'black'
  }

  return <span className="todo-list-item" style={ style }>
    { label }

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
}

export default TodoListItem