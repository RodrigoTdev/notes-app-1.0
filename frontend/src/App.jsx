import { useEffect, useState } from 'react'
import { Notes } from './Components/Notes'
import { Header } from './Components/Header'
import { AddNote } from './Components/AddNote'
import { UpdateNote } from './Components/UpdateNote'

function App() {
  const [addNote, setAddNote] = useState(false)
  const [updateNote, setUpdateNote] = useState(false)
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(null)
  const [item, setItem] = useState(null)
  const [searchData, setSearchData] = useState('')

  const colores = [
    '#4B443A',
    '#6D394F',
    '#256476',
    '#0C635D',
    '#692A18',
    '#7C4A03',
    '#76172D',
    '#274255',
    '#264D3B',
    '#482E5B',
  ]

  const urlLocal = 'http://localhost:3006/api/notes'
  // eslint-disable-next-line
  const urlRender = 'https://notes-app-qfv2.onrender.com/api/notes'

  useEffect(() => {
    fetch(urlLocal)
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, [newNote])

  const handleAddNoteClick = (event) => {
    event.preventDefault()
    setAddNote(!addNote)
  }

  const handleClickUpdateNote = () => {
    setUpdateNote(!updateNote)
  }

  return (
    <>
      {addNote === true && (
        <AddNote
          newNote={newNote}
          setNewNote={setNewNote}
          colores={colores}
          setAddNote={setAddNote}
        />
      )}
      {updateNote === true && (
        <UpdateNote
          newNote={newNote}
          setNewNote={setNewNote}
          colores={colores}
          setUpdateNote={setUpdateNote}
          item={item}
        />
      )}
      <Header
        handleAddNoteClick={handleAddNoteClick}
        colores={colores}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <Notes
        notas={notes}
        handleClickUpdateNote={handleClickUpdateNote}
        setItem={setItem}
        searchData={searchData}
      />
    </>
  )
}

export default App
