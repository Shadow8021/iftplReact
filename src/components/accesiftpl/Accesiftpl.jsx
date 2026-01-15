import image from "../../../public/iftpl.jpg"
export default function Accesiftpl() {
    return (
        <section className="w-full flex flex-col items-center justify-evenly py-10 px-5 h-auto contenaire lg:flex-row gap-9">
            <div className="w-full">
                <img src={image} alt="toto" />
            </div>
            <div className="w-full">
                <h3 className="text-[2.5rem] py-5 font-bold">Commencez votre
                    parcours de baccalaureat à I.F.T.P.L</h3>
                <div className="shadow-2xl p-4 bg-[#dbdbda] rounded-lg">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tempore quis deleniti saepe possimus
                        molestiae soluta id impedit incidunt ipsa, praesentium alias rem, sint et sed, veniam quibusdam nam dolorem
                        est. Asperiores nihil neque ex facere ab mollitia consectetur similique.</p>
                </div>
            </div>
        </section>
    )
}
