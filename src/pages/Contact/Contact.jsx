import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simuler l'envoi
        setTimeout(() => {
            alert('Merci! Votre message a été envoyé.');
            setFormData({ nom: '', email: '', sujet: '', message: '' });
            setLoading(false);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-8 h-8 text-[#D00D2D]" />,
            titre: "E-mail",
            detail: "contact@iftpl.com",
            lien: "mailto:contact@iftpl.com"
        },
        {
            icon: <Phone className="w-8 h-8 text-[#D00D2D]" />,
            titre: "Téléphone",
            detail: "+242 06 671 6211",
            lien: "tel:+242066716211"
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#D00D2D]" />,
            titre: "Adresse",
            detail: "Kitaka, Loudima, République du Congo",
            lien: "#"
        }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-6 h-6" />, url: "https://www.facebook.com/", name: "Facebook" },
        { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/", name: "Twitter" },
        { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/", name: "Instagram" }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white py-16 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Entrez en <span className="text-[#D00D2D]">Contact</span></h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Vous avez des questions ? Nous serions ravis de vous entendre. Contactez-nous dès maintenant
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="w-full py-16 px-5 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.lien}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#D00D2D]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-red-50 rounded-xl group-hover:bg-[#D00D2D] group-hover:scale-110 transition-all">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#002E6D]">{info.titre}</h3>
                                </div>
                                <p className="text-gray-700 font-semibold">{info.detail}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="w-full py-16 px-5 bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-[#011f4b] p-8 rounded-2xl shadow-2xl">
                            <h2 className="text-3xl font-bold text-white mb-8">Envoyez-nous un Message</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-left text-white mb-2">Nom complet</label>
                                    <input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        placeholder="Votre nom"
                                        className="w-full p-4 rounded-lg bg-white  text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-left font-semibold  text-white mb-2">Adresse e-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="votre.email@example.com"
                                        className="w-full p-4 rounded-lg bg-white text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-left text-white mb-2">Sujet</label>
                                    <input
                                        type="text"
                                        name="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        placeholder="Sujet de votre message"
                                        className="w-full p-4 rounded-lg bg-white text-left text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-left text-white mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Votre message..."
                                        rows="6"
                                        className="w-full p-4 rounded-lg bg-white text-left text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none resize-none transition-all"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-[#D00D2D] hover:bg-[#ff1a3c] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                                </button>
                            </form>
                        </div>

                        {/* Info Sidebar */}
                        <div className="flex flex-col gap-8">
                            {/* Map Placeholder */}
                            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.506124!2d12.981107728696614!3d-4.062914068486169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sLoudima%20Swapo%2C%20Congo-Brazzaville!2sLoudima%20Swapo!5e0!3m2!1sen!2s!4v1612234567890"
                                ></iframe>
                            </div>

                            {/* Hours */}
                            <div className="bg-linear-to-br from-[#002E6D] to-[#0553c1] text-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">Horaires d'Ouverture</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Lundi - Vendredi</span>
                                        <span className="font-bold">8:00 - 17:00</span>
                                    </div>
                                    <hr className="border-blue-300" />
                                    <div className="flex justify-between">
                                        <span>Samedi</span>
                                        <span className="font-bold">9:00 - 12:00</span>
                                    </div>
                                    <hr className="border-blue-300" />
                                    <div className="flex justify-between">
                                        <span>Dimanche</span>
                                        <span className="font-bold text-[#D00D2D]">Fermé</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white border-2 border-[#D00D2D] p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-[#002E6D] mb-6">Suivez-nous</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-[#D00D2D] hover:bg-[#ff1a3c] text-white rounded-full transition-all duration-300 hover:scale-110"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 px-5 bg-linear-to-r from-[#D00D2D] to-[#ff1a3c] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Avez vous d'autres questions ?</h2>
                    <p className="text-lg text-red-100 mb-8">
                        Notre équipe administrative est disponible pour répondre à toutes vos questions sur nos formations.
                    </p>
                    <a href="#form" className="inline-block bg-white text-[#D00D2D] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                        Nous contacter
                    </a>
                </div>
            </section>
        </div>
    )
}
