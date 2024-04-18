import React from 'react'
import PropTypes from 'prop-types';

export const Notes = ({notas, handleClickUpdateNote, setItem, searchData}) => {

    const firstHalf = notas.length % 2 !== 0 ? notas.slice(0,notas.length / 2 + 1) : notas.slice(0,notas.length / 2)
    
    const secondHalf = notas.length % 2 !== 0 ? notas.slice(notas.length / 2 + 1, notas.length) : notas.slice(notas.length / 2, notas.length)
    
    const filteredNotes = notas.filter(item => item.note.toLowerCase().includes(searchData.toLowerCase()))

    const firstHalfFiltered = filteredNotes.length % 2 !== 0 ? filteredNotes.slice(0,filteredNotes.length / 2 + 1) : filteredNotes.slice(0,filteredNotes.length / 2)
    
    const secondHalfFiltered = filteredNotes.length % 2 !== 0 ? filteredNotes.slice(filteredNotes.length / 2 + 1, filteredNotes.length) : filteredNotes.slice(filteredNotes.length / 2, filteredNotes.length)

    const handleClick = (item) => {
      handleClickUpdateNote()
      setItem(item)
    }

    return (
    <div className="container">
    <div className="column first" key="test1234">
      {searchData.length < 1 && firstHalf.map(item => {
        return(
          <div
            className='card oneline'
            key={item._id}
            style={{ background: `${item.color}` }}
            onClick={() => handleClick(item)}
          >
            <p>{item.note}</p>
          </div>
        )
      }) }
      {searchData.length >= 1 && firstHalfFiltered.map(item => {
        return(
          <div
            className='card oneline'
            key={item._id}
            style={{ background: `${item.color}` }}
            onClick={() => handleClick(item)}
          >
            <p>{item.note}</p>
          </div>
        )
      })}
    </div>
    <div className="column second" key="test12345">
    {searchData.length < 1 && secondHalf.map(item => {
        return(
          <div
            className='card oneline'
            key={item._id}
            style={{ background: `${item.color}` }}
            onClick={() => handleClick(item)}
          >
            <p>{item.note}</p>
          </div>
        )
      }) }
    {searchData.length >= 1 && secondHalfFiltered.map(item => {
        return(
          <div
            className='card oneline'
            key={item._id}
            style={{ background: `${item.color}` }}
            onClick={() => handleClick(item)}
          >
            <p>{item.note}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}



Notes.propTypes = {
  notas: PropTypes.any,
  setUpdateNote: PropTypes.any,
  updateNote: PropTypes.any,
  handleClickUpdateNote: PropTypes.any,
  setItem: PropTypes.any,
}
