import image from "/iftpl.jpg"
import { Asterisk } from 'lucide-react';

export default function Accesiftpl() {
    const documentsRequired = [
        { id: 1, label: "Une demande manuscrite adressée à monsieur le Ministre de l'enseignement technique et professionnel" },
        { id: 2, label: "Une attestation de réussite au baccalauréat légalisée" },
        { id: 3, label: "Un relevé de note légalisé du baccalauréat" },
        { id: 4, label: "Une photocopie de l'acte de naissance en couleur" },
        { id: 5, label: "Un certificat médical délivré par le médecin du METP" },
        { id: 6, label: "Un certificat de nationalité" },
        { id: 7, label: "Un casier judiciaire" },
        { id: 8, label: "Quatre (04) cartes photos format d'identité avec fond blanc" },
        { id: 9, label: "Une enveloppe kaki A4 et une chemise cartonnée" }
    ]

    return (
        <section className="w-full flex flex-col items-center justify-evenly py-10 px-5 h-auto contenaire lg:flex-row gap-9">
            <div className="w-full">
                <img className=" rounded-2xl" src={image} alt="toto" />
            </div>
            <div className="w-full">
                <h3 className="text-[2.5rem] py-5 font-bold text-white">Commencez votre
                    parcours de baccalaureat à I.F.T.P.L</h3>
                <div className="shadow-2xl p-4 ml-4 bg-[#dbdbda] text-black rounded-lg">
                    <p className="text-left font-bold text-2xl text-[#D00D2D]">Composition du dossier</p>
                    {documentsRequired.map((doc) => (
                        <p key={doc.id} className="text-left text-sm ml-3 font-bold">
                            <span className="text-[#D00D2D]">
                                <Asterisk className="w-4 h-4 inline mr-1" />
                            </span>
                            {doc.label}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
