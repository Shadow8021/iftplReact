import { Helmet } from 'react-helmet-async'
import Actualite from '../../components/actualite/Actualite'
import Heros from '../../components/hero/Heros'
import Programme from '../../components/progammes/Programme'
import Accesiftpl from '../../components/accesiftpl/Accesiftpl'
import Information from '../../components/infomation/Information'
import ProjectForm from '../../components/projectForm/ProjectForm'
import Statistique from '../../components/statistique/Statistique'
import Partenaires from '../../components/partenaire/Partenaires'
import Temoignages from '../../components/Temoignages/Temoignages'
export default function Home() {
    let age = 18
    return (
        <div>
            <Helmet>
                <title>IFTPL - Institut de Formation Technique et Professionnelle de Loudima</title>
                <meta name="description" content="IFTPL offre des formations techniques et professionnelles à Loudima, Congo, avec un accent sur l'employabilité et l'innovation." />
                <meta name="keywords" content="formation technique, IFTPL, Loudima, Congo, formation professionnelle" />
                <meta property="og:title" content="IFTPL - Institut de Formation Technique et Professionnelle" />
                <meta property="og:description" content="Découvrez l'IFTPL : programmes, actualités, projets, témoignages et possibilités de formation" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Heros />
            <Programme />
            <Accesiftpl />
            <Information />
            <ProjectForm />
            {age ? <Actualite /> : null}
            <Statistique />
            <Partenaires />
            <Temoignages />
        </div>
    )
}
