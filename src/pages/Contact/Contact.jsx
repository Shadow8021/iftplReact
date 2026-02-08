import { Facebook, Send } from 'lucide-react';
export default function Contact() {
    return (
        <section id="contact" className="w-full bg-[#002E6D] text-white py-16 px-5 lg:px-20">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Contactez-nous</h2>

            <div className="flex flex-col lg:flex-row gap-10 justify-between">

                <div className="flex-1">
                    <form className="flex flex-col gap-5 bg-[#011f4b] p-8 rounded-2xl shadow-2xl">
                        <input type="text" placeholder="Votre nom" className="p-3 rounded-md text-white outline-none border-2 border-[#D00D2D] focus:ring-2 focus:ring-[#D00D2D]" required />
                        <input type="email" placeholder="Votre email" className="p-3 rounded-md text-white outline-none border-2 border-[#D00D2D] focus:ring-2 focus:ring-[#D00D2D]" required />
                        <textarea placeholder="Votre message" rows="5" className="p-3 rounded-md text-white outline-none border-2 border-[#D00D2D] resize-none focus:ring-2 focus:ring-[#D00D2D]" required></textarea>
                        <button type="submit" className="bg-[#D00D2D] pointer-fine hover:bg-[#ff1a3c] transition-colors font-bold py-3 rounded-md">Envoyer</button>
                    </form>
                </div>


                <div className="flex-1 flex flex-col gap-6 justify-center">
                    <div className='hidden lg:flex items-start h-60 gap-4 shadow-4xl rounded-2xl p-6 bg-[#011f4b]'>
                        <Send size={150} color='#D00D2D' className='mx-auto pt-2' />
                    </div>
                    <div className="flex flex-col items-start gap-4 shadow-4xl rounded-2xl p-6 bg-[#011f4b]">
                        <p className="font-bold text-white">Suivez-nous</p>
                        <div className="flex gap-3">
                            <a className='hover:bg-[#ff1a3c] bg-[#D00D2D] transition ease-in-out p-2 rounded-xl' href="https://www.facebook.com/p/Institut-de-Formation-Technique-Et-Professionnelle-de-Loudima-IFTPL-100064190430141/"><Facebook color='#ffffff' /></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
