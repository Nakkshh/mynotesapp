import React from 'react'
import Trash from '../icons/Trash'
import {db} from '../appwrite/databases.js'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext.jsx'

const DeleteButton = ({ noteId }) => {

    const {setNotes} = useContext(NoteContext);
    const handleDelete = async () => {
        db.notes.delete(noteId);
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteId)
        );
    }; 
  return (
    <div onClick={handleDelete}>
        <Trash/>
    </div>
  );
}

export default DeleteButton