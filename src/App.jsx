import './App.css'
import Navbar from './components/Navbar'
import Heros from './components/hero/Heros'
import Programme from './components/progammes/Programme'
import Accesiftpl from './components/accesiftpl/Accesiftpl'
import Information from './components/infomation/Information'
import ProjectForm from './components/projectForm/ProjectForm'
import Statistique from './components/statistique/Statistique'
import Partenaires from './components/partenaire/Partenaires'
import Temoignages from './components/Temoignages/Temoignages'
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
      <Partenaires />
      <Temoignages />
    </div>
  )
}