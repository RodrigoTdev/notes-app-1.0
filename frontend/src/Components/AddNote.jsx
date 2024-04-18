import React, { useState } from 'react'

export const AddNote = ({ colores, setAddNote, setNewNote, newNote }) => {
  const [chosenColor, setChosenColor] = useState('')

  const urlLocal = 'http://localhost:3006/api/notes'
  const urlRender = 'https://notes-app-qfv2.onrender.com/api/notes'

  const handleNewNote = (e) => {
    e.preventDefault()
    setAddNote(false)
    setNewNote({ note: e.target[0].value, color: chosenColor })

    fetch(urlLocal, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        note: e.target[0].value,
        color: chosenColor,
      }),
    })
  }

  return (
    <form
      className='modalContainer'
      onSubmit={handleNewNote}
    >
      <label>Ingresar nota:</label>
      <textarea
        cols='30'
        rows='10'
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
                  value={`${colores[index]}`}
                  onChange={() => setChosenColor(`${colores[index]}`)}
                />
              </label>
            </div>
          )
        })}
      </div>
      <input
        type='submit'
        value='Agregar nota'
        className='addNoteButton'
      />
    </form>
  )
}
