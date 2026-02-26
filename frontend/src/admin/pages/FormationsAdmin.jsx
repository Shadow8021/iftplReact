import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as formationsApi from '../../services/formationsApi'
import { BookOpen, Plus, Pencil, Trash2, ExternalLink } from 'lucide-react'

const CATEGORIES = ['Industrie', 'Construction', 'Agriculture', 'Restauration', 'Environnement']
const NIVEAUX = ['Débutant', 'Intermédiaire', 'Avancé']
const emptyForm = {
  titre: '', description: '', image: '', duree: '3 ans', niveauAcces: 'BEPC', categorie: 'Industrie',
  place: '', certification: '', stage: '', classes: 'Seconde, Première, Terminale', modules: 10, niveau: 'Intermédiaire'
}
const inputClass = 'w-full rounded-lg border-2 border-[#002E6D]/20 bg-white py-2.5 px-3 text-[#002E6D] placeholder-slate-400 focus:border-[#D00D2D] focus:outline-none focus:ring-2 focus:ring-[#D00D2D]/30 transition-colors'

export default function FormationsAdmin() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const stored = localStorage.getItem('user')
    const parsed = stored ? JSON.parse(stored) : null
    setUser(parsed)
    if (!parsed) { navigate('/admin/login'); return }
    formationsApi.getFormations()
      .then(data => setItems(data))
      .catch(err => setMessage({ type: 'error', text: 'Erreur: ' + err.message }))
  }, [navigate])

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const startEdit = (formation) => {
    setEditingId(formation.id)
    setForm({
      titre: formation.titre, description: formation.description || '', image: formation.image || '',
      duree: formation.duree || '3 ans', niveauAcces: formation.niveauAcces || 'BEPC', categorie: formation.categorie || 'Industrie',
      place: formation.place || '', certification: formation.certification || '', stage: formation.stage || '',
      classes: Array.isArray(formation.classes) ? formation.classes.join(', ') : (formation.classes || ''),
      modules: formation.modules ?? 10, niveau: formation.niveau || 'Intermédiaire'
    })
  }
  const cancelEdit = () => { setEditingId(null); setForm(emptyForm) }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.titre.trim()) { setMessage({ type: 'error', text: 'Le titre est obligatoire.' }); return }
    const payload = { ...form, classes: form.classes.split(',').map((s) => s.trim()).filter(Boolean), modules: typeof form.modules === 'number' ? form.modules : parseInt(form.modules, 10) || 10 }
    try {
      if (editingId) { await formationsApi.updateFormation(editingId, payload); setMessage({ type: 'success', text: 'Formation modifiée.' }) }
      else { await formationsApi.createFormation(payload); setMessage({ type: 'success', text: 'Formation ajoutée.' }) }
      const data = await formationsApi.getFormations()
      setItems(data)
      setForm(emptyForm)
      setEditingId(null)
    } catch (err) { setMessage({ type: 'error', text: 'Erreur: ' + err.message }) }
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }
  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cette formation ?')) return
    try {
      await formationsApi.deleteFormation(id)
      const data = await formationsApi.getFormations()
      setItems(data)
      if (editingId === id) cancelEdit()
      setMessage({ type: 'success', text: 'Formation supprimée.' })
    } catch (err) { setMessage({ type: 'error', text: 'Erreur: ' + err.message }) }
    setTimeout(() => setMessage({ type: '', text: '' }), 3000)
  }

  if (!user) return null

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Contenus</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#002E6D]">Formations</h1>
        </div>
        <Link to="/formation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#002E6D]/20 bg-white px-4 py-2 text-sm font-medium text-[#002E6D] shadow-sm transition-colors hover:border-[#D00D2D]/30 hover:text-[#D00D2D]">
          Voir la page <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {message.text && (
        <div className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${message.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-emerald-200 bg-emerald-50 text-emerald-800'}`}>
          {message.text}
        </div>
      )}

      <div className="mb-10 overflow-hidden rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">{editingId ? 'Modifier la formation' : 'Nouvelle formation'}</h2>
          <p className="mt-0.5 text-xs text-[#0553c1]/80">Titre, description, durée, catégorie, etc.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Titre *</label>
            <input type="text" name="titre" value={form.titre} onChange={handleChange} placeholder="Ex. Maintenance des Industriels (M.E.I.)" className={inputClass} required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" rows={3} className={`${inputClass} resize-y`} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">URL image</label>
            <input type="url" name="image" value={form.image} onChange={handleChange} placeholder="https://..." className={inputClass} />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Durée</label>
              <input type="text" name="duree" value={form.duree} onChange={handleChange} placeholder="3 ans" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Niveau d'accès</label>
              <input type="text" name="niveauAcces" value={form.niveauAcces} onChange={handleChange} placeholder="BEPC" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Catégorie</label>
              <select name="categorie" value={form.categorie} onChange={handleChange} className={inputClass}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Niveau</label>
              <select name="niveau" value={form.niveau} onChange={handleChange} className={inputClass}>
                {NIVEAUX.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Places</label>
              <input type="text" name="place" value={form.place} onChange={handleChange} placeholder="20-25 places" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Nombre de modules</label>
              <input type="number" name="modules" value={form.modules} onChange={handleChange} min={1} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Certification</label>
            <input type="text" name="certification" value={form.certification} onChange={handleChange} placeholder="Diplôme d'État..." className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Stage</label>
            <input type="text" name="stage" value={form.stage} onChange={handleChange} placeholder="Stage après la Première..." className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#002E6D]">Classes (séparées par des virgules)</label>
            <input type="text" name="classes" value={form.classes} onChange={handleChange} placeholder="Seconde, Première, Terminale" className={inputClass} />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#D00D2D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#b00b26]">
              {editingId ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {editingId ? 'Enregistrer' : 'Ajouter'}
            </button>
            {editingId && (
              <button type="button" onClick={cancelEdit} className="rounded-lg border-2 border-[#002E6D]/20 bg-white px-4 py-2.5 text-sm font-medium text-[#002E6D] transition-colors hover:bg-[#002E6D]/5">Annuler</button>
            )}
          </div>
        </form>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">Liste ({items.length})</h2>
        </div>
        <div className="divide-y divide-[#002E6D]/10">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-[#0553c1]/80">Aucune formation.</p>
          ) : (
            items.map((formation) => (
              <div key={formation.id} className="flex flex-wrap items-center gap-4 px-6 py-4 transition-colors hover:bg-[#002E6D]/5">
                <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-[#002E6D]/5">
                  {formation.image ? <img src={formation.image} alt="" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-xs text-[#0553c1]/60">Sans image</div>}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[#002E6D]">{formation.titre}</p>
                  <p className="line-clamp-1 text-sm text-[#0553c1]/80">{formation.description}</p>
                  <span className="mt-1 inline-block rounded-full bg-[#D00D2D]/10 px-2 py-0.5 text-xs font-medium text-[#D00D2D]">{formation.categorie}</span>
                </div>
                <div className="flex gap-2">
                  <Link to={`/formation-detail/${formation.id}`} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-[#0553c1]/80 transition-colors hover:bg-[#002E6D]/10 hover:text-[#002E6D]" title="Voir"><ExternalLink className="h-4 w-4" /></Link>
                  <button type="button" onClick={() => startEdit(formation)} className="rounded-lg p-2 text-[#0553c1]/80 transition-colors hover:bg-[#002E6D]/10 hover:text-[#002E6D]" title="Modifier"><Pencil className="h-4 w-4" /></button>
                  <button type="button" onClick={() => handleDelete(formation.id)} className="rounded-lg p-2 text-[#0553c1]/80 transition-colors hover:bg-[#D00D2D]/10 hover:text-[#D00D2D]" title="Supprimer"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
