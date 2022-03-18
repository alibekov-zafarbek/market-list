import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const Note = (props) => {
  const [note, setNote] = useState(null);
  const navigate = useNavigate()
  let { id } = useParams();
  let noteId = id;

  console.log(note);

  useEffect(() => {
    getNode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);

  const getNode = async () => {
    const response = await fetch(`https://fake-server-app-alibekoff.herokuapp.com/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };
  const createNode = async() => {
    await fetch(`https://fake-server-app-alibekoff.herokuapp.com/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });

  }

  const updateNode = async () => {
    await fetch(`https://fake-server-app-alibekoff.herokuapp.com/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const deleteNote = async () => {
    await fetch(`https://fake-server-app-alibekoff.herokuapp.com/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate('/')
  };
  const submitNode = async () => {
    if(noteId !== "new" && !note.body){
      deleteNote()
    } else if(noteId !== 'new' ){
      updateNode()
    } else if(noteId === 'new' && note !== null){
      createNode()
    }
    updateNode();
    navigate('/')
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={submitNode} />
          </Link>
        </h3>
        {noteId !== 'new' ? (
        <button onClick={deleteNote}>
          Delete
        </button>
        ) : 
          <button onClick={submitNode}>Done</button>
        }

      </div>

      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default Note;
