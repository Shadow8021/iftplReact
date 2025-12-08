import './App.css'
import Navbar from './components/Navbar'
import Heros from './components/hero/Heros'
import Programme from './components/progammes/Programme'
import Accesiftpl from './components/accesiftpl/Accesiftpl'
import Information from './components/infomation/Information'
import ProjectForm from './components/projectForm/ProjectForm'
import Statistique from './components/statistique/Statistique'
export default function App() {
  return (
    <div>
      <Navbar />
      <Heros />
      <Programme />
      <Accesiftpl />
      <Information />
      <ProjectForm />
      <Statistique />
    </div>
  )
}