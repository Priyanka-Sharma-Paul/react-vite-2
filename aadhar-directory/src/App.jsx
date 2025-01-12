import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Retrieve from "./components/retrieve/Retrieve";
import AddNewPerson from "./components/addNewPerson/AddNewPerson";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
