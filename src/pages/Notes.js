import { useState, useEffect } from "react";
import CreateItem from "../components/CreateItem";
// import notes from "../assets/data";
import ListItem from "../components/ListItem";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNodes();
  }, []);

  const getNodes = async () => {
    const response = await fetch("http://localhost:5000/notes");
    const data = await response.json();
    setNotes(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Ro'yhat</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((i) => (
          <ListItem note={i} key={i.id} />
        ))}
      </div>
      <CreateItem />
    </div>
  );
};

export default Notes;
