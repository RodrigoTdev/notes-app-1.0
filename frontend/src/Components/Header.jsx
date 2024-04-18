import React from 'react'

export const Header = ({handleAddNoteClick, searchData, setSearchData}) => {

  const handleChange = (e) => {
    setSearchData(e.target.value)
  }

  return (
    <div className="header">
    <input type="text" placeholder='search your notes' className='search' onChange={handleChange}/>
    <button onClick={handleAddNoteClick} className='addNote'>+</button>
  </div>
  )
}
