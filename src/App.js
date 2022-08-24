import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Fav from "./components/Fav"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/fav" element={<Fav />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
