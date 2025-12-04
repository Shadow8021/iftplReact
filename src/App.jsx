import './App.css'
import Contenaire from './components/Contenaire'
import Navbar from './components/Navbar'
import Heros from './components/hero/Heros'
import Programme from './components/progammes/Programme'
import Accesiftpl from './components/accesiftpl/Accesiftpl'
export default function App() {
  return (
    <div>
      <Navbar />
      <Heros />
      <Programme />
      <Accesiftpl />
    </div>
  )
}