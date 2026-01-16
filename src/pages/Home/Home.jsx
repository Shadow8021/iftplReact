import Navbar from '../../components/Navbar'
import Heros from '../../components/hero/Heros'
import Programme from '../../components/progammes/Programme'
import Accesiftpl from '../../components/accesiftpl/Accesiftpl'
import Information from '../../components/infomation/Information'
import ProjectForm from '../../components/projectForm/ProjectForm'
import Statistique from '../../components/statistique/Statistique'
import Partenaires from '../../components/partenaire/Partenaires'
import Temoignages from '../../components/Temoignages/Temoignages'
import { Contacts } from '../../components/contacts/Contacts'
import Footer from '../../components/footer/Footer'
export default function Home() {
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
            <Contacts />
            <Footer />
        </div>
    )
}
