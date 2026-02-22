import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getGalerie, addImage, removeImage } from '../../utils/storeGalerie'
import { galerieCategories } from '../../data/galerieData'
import { Image as ImageIcon, Plus, Trash2, ExternalLink } from 'lucide-react'

const emptyForm = { src: '', title: '', category: 'Formations', description: '' }
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"%3E%3Crect fill="%23e5e7eb" width="400" height="225"/%3E%3Ctext fill="%236b7280" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14"%3EImage non disponible%3C/text%3E%3C/svg%3E'

const inputClass = 'w-full rounded-lg border-2 border-[#002E6D]/20 bg-white py-2.5 px-3 text-[#002E6D] placeholder-slate-400 focus:border-[#D00D2D] focus:outline-none focus:ring-2 focus:ring-[#D00D2D]/30 transition-colors'

export default function GalerieAdmin() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const stored = localStorage.getItem('user')
    const parsed = stored ? JSON.parse(stored) : null
    setUser(parsed)
    if (!parsed) { navigate('/admin/login'); return }
    setItems(getGalerie())
  }, [navigate])

  const handleChange = (e) => { setForm((f) => ({ ...f, [e.target.name]: e.target.value })) }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.src.trim()) { setMessage({ type: 'error', text: "L'URL de l'image est obligatoire." }); return }
    addImage(form)
    setItems(getGalerie())
    setForm(emptyForm)
    setMessage({ type: 'success', text: 'Image ajoutée.' })
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }
  const handleDelete = (id) => {
    if (!window.confirm('Supprimer cette image ?')) return
    removeImage(id)
    setItems(getGalerie())
    setMessage({ type: 'success', text: 'Image supprimée.' })
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }

  if (!user) return null

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[#0553c1]">Contenus</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#002E6D]">Galerie</h1>
        </div>
        <Link
          to="/galerie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-[#002E6D]/20 bg-white px-4 py-2 text-sm font-medium text-[#002E6D] shadow-sm transition-colors hover:border-[#D00D2D]/30 hover:text-[#D00D2D]"
        >
          Voir la galerie <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {message.text && (
        <div
          className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
            message.type === 'error'
              ? 'border-red-200 bg-red-50 text-red-800'
              : 'border-emerald-200 bg-emerald-50 text-emerald-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="mb-10 overflow-hidden rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">Ajouter une image</h2>
          <p className="mt-0.5 text-xs text-[#0553c1]/80">URL, titre, catégorie et description</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">URL de l'image *</label>
              <input type="url" name="src" value={form.src} onChange={handleChange} placeholder="https://..." className={inputClass} required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Titre</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Titre" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Catégorie</label>
              <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
                {galerieCategories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Description</label>
              <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Courte description" className={inputClass} />
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#D00D2D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#b00b26]">
              <Plus className="h-4 w-4" /> Ajouter
            </button>
          </div>
        </form>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">Images ({items.length})</h2>
        </div>
        <div className="p-6">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-[#0553c1]/80">Aucune image. Ajoutez-en une ci-dessus.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((img) => (
                <div key={img.id} className="overflow-hidden rounded-lg border border-[#002E6D]/10">
                  <div className="aspect-video bg-[#002E6D]/5">
                    <img src={img.src} alt={img.title} className="h-full w-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMG }} />
                  </div>
                  <div className="p-3">
                    <p className="truncate text-sm font-medium text-[#002E6D]">{img.title}</p>
                    <span className="mt-1 inline-block rounded-full bg-[#D00D2D]/10 px-2 py-0.5 text-xs font-medium text-[#D00D2D]">{img.category}</span>
                    <button type="button" onClick={() => handleDelete(img.id)} className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#002E6D]/5 py-2 text-xs font-medium text-[#0553c1] transition-colors hover:bg-[#D00D2D]/10 hover:text-[#D00D2D]">
                      <Trash2 className="h-3.5 w-3.5" /> Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
