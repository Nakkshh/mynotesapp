import NoteCard from "../components/NoteCard.jsx";
import Controls from "../components/Controls.jsx";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";

const NotesPage = () => {
    const {notes} = useContext(NoteContext);
    return (
        <div>
            {notes.map((note) => (
                <NoteCard key={note.$id} note={note} /> 
            ))}
            <Controls/>
        </div>
    );
};

export default NotesPage;