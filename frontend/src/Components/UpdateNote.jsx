import React, { useEffect, useState } from 'react'

export const UpdateNote = ({
  colores,
  newNote,
  setNewNote,
  setUpdateNote,
  item,
}) => {
  const [chosenColor2, setChosenColor2] = useState(null)

  const urlLocal = 'http://localhost:3006/api/notes'
  // eslint-disable-next-line
  const urlRender = 'https://notes-app-qfv2.onrender.com/api/notes'

  const handleNewNote = (e) => {
    e.preventDefault()
    setUpdateNote(false)

    fetch(`${urlLocal}/${item._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note: e.target[1].value,
        color: chosenColor2,
      }),
    })

    setNewNote({ note: e.target[1].value, color: chosenColor2 })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setUpdateNote(false)

    fetch(`${urlRender}/${item._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setNewNote(null)
  }

  const handleClose = () => {
    setUpdateNote(false)
  }

  return (
    <form
      className='modalContainer'
      id='modalContainerUpdate'
      onSubmit={handleNewNote}
    >
      <div className='title'>
        <label>Ingresar nota:</label>
        <button
          className='iconFont'
          onClick={handleClose}
        >
          &apos;
        </button>
      </div>
      <textarea
        cols='30'
        rows='10'
        defaultValue={item.note}
      ></textarea>
      <label>Choose color:</label>
      <div className='colorChoices'>
        {colores.map((color, index) => {
          return (
            <div key={index}>
              <label style={{ backgroundColor: `${colores[index]}` }}>
                <input
                  type='radio'
                  name='color'
                  onChange={() => setChosenColor2(`${colores[index]}`)}
                />
              </label>
            </div>
          )
        })}
      </div>
      <div className='footer'>
        <input
          type='submit'
          value='Agregar nota'
          className='addNoteButton'
        />
        <button
          className='iconFont'
          onClick={handleDelete}
        >
          t
        </button>
      </div>
    </form>
  )
}
