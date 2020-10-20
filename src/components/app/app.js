import React, { Component } from 'react'

import './app.css'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import AddItem from '../add-item'

export default class App extends Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoITem('Learn React'),
      this.createTodoITem('Build Awesome app'),
      this.createTodoITem('Drink coffee'),
    ]
  }

  createTodoITem (label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: todoData.filter(i => i.id !== id) }
    })
  }

  addItem = (label) => {
    const newItem = this.createTodoITem(label)

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem]
      }
    })
  }

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render () {
    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="app container">
        <AppHeader todo={ todoCount } done={ doneCount } />
        <SearchPanel searchText='Type here to search' />
        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <AddItem onAddItem={ this.addItem } />
      </div>
    )
  }
}
