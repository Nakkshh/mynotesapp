import NoteProvider from "./context/NoteContext";
import NotesPage from "./Pages/notespage";
 
function App() {
    return (
        <div id="app">
        <NoteProvider>       
            <NotesPage />
        </NoteProvider>     
        </div>
    );
}

export default App;