import { useState, useEffect } from "react";
import CreateItem from "../components/CreateItem";
// import notes from "../assets/data";
import ListItem from "../components/ListItem";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNodes();
    // fetch(`https://fake-server-app-alibekoff.herokuapp.com/notes/8`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify([
    //     {
    //       "id": 2,
    //       "body": "Xo'l Meva\n\n- Olma\n- Uzum\n- Banan\n- Nok",
    //       "updated": "2021-09-16T13:25:35.411Z"
    //     },
    //     {
    //       "id": 3,
    //       "body": "Suxo Frukt\n\n- Turshak\n- Bodom\n- Pista",
    //       "updated": "2021-09-16T13:35:02.019Z"
    //     },
    //     {
    //       "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n",
    //       "updated": "2021-09-16T13:34:44.901Z",
    //       "id": 4
    //     },
    //     {
    //       "body": "daw ad",
    //       "updated": "2022-03-15T13:40:30.385Z",
    //       "id": 5
    //     },
    //     {
    //       "body": "salom aleykum",
    //       "updated": "2022-03-18T04:35:00.156Z",
    //       "id": 6
    //     },
    //     {
    //       "updated": "2022-03-18T04:38:54.531Z",
    //       "id": 7
    //     },
    //     {
    //       "updated": "2022-03-18T04:38:59.106Z",
    //       "id": 8
    //     }
    //   ]),
    // });
  }, []);

  const getNodes = async () => {
    const response = await fetch(
      "https://fake-server-app-alibekoff.herokuapp.com/notes"
    );
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
