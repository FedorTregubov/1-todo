import React from 'react'
import './search-panel.css'
import ItemStatusFilter from '../item-status-filter'

const SearchPanel = (props) => {
  return ( 
    <div class="search">
      <input 
        className="search-input" 
        placeholder={props.searchText} 
      />
      <ItemStatusFilter />
    </div>
    )
}

export default SearchPanel