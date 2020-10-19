import React from 'react'

import './app.css'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'

const App = () => {

  const todoData = [
    { id: 1, label: 'Learn React', important: false },
    { id: 2, label: 'Build Awesome app', important: true },
    { id: 3, label: 'Drink coffee', important: false },
  ]

  return (
    <div className="app container">
      <AppHeader />
      <SearchPanel searchText='Type here to search' />
      <TodoList todos={ todoData } />
    </div>
  )
}

export default App