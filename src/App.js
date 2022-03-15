import "./App.css";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from "./pages/Note";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
