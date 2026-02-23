import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail } from 'lucide-react'

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        // Simulation de connexion (à remplacer par un vrai appel API)
        setTimeout(() => {
            if (formData.email && formData.password) {
                // En production : vérifier identifiants, stocker token, etc.
                let user = {
                    email: formData.email,
                    password: formData.password
                }
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/admin')
            } else {
                setError('Veuillez remplir tous les champs.')
            }
            setLoading(false)
        }, 800)
    }

    return (
        <section className="min-h-[calc(100vh-8rem)] h-screen w-full bg-[#002E6D] bg-linear-to-br from-[#002E6D] to-[#0553c1] text-white py-16 px-5 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="bg-[#011f4b] p-8 rounded-2xl shadow-2xl border border-[#D00D2D]/30">
                    <h1 className="text-3xl font-bold text-center mb-2">
                        Espace <span className="text-[#D00D2D]">Administrateur</span>
                    </h1>
                    <p className="text-blue-200 text-center text-sm mb-8">
                        Connectez-vous pour accéder au tableau de bord
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-left text-white mb-2">
                                Adresse e-mail
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D00D2D]" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="admin@iftpl.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-left text-white mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D00D2D]" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-black border-2 border-[#D00D2D] focus:border-[#ff1a3c] focus:ring-2 focus:ring-[#D00D2D] focus:ring-opacity-50 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-[#D00D2D] text-sm font-semibold text-center">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#D00D2D] hover:bg-[#ff1a3c] disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <Lock className="w-5 h-5" />
                            {loading ? 'Connexion...' : 'Se connecter'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
