import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Galerie from "./pages/Galerie/Galerie"
import Actualite from "./pages/Actualite/Actualite"
import Error404 from './utils/Error404';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}