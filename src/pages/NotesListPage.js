import React, {useState, useEffect} from 'react'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNodes()
  }, [])

  let getNodes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = response.json()
    console.log('DATA: ', data)
    setNotes(data)
  }

  return (
    <div>
      notes
    </div>
  )
}

export default NotesListPage