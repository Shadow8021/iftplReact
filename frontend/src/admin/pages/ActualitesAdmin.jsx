import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  getActualites,
  addActualite,
  updateActualite,
  removeActualite,
} from '../../utils/storeActualites'
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
} from 'lucide-react'

const EMPTY_FORM = {
  titre: '',
  description: '',
  image: '',
  date: '',
  contenu: '',
}

const inputClass =
  'w-full rounded-lg border-2 border-[#002E6D]/20 bg-white py-2.5 px-3 text-[#002E6D] placeholder-slate-400 focus:border-[#D00D2D] focus:outline-none focus:ring-2 focus:ring-[#D00D2D]/30 transition-colors'

export default function ActualitesAdmin() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [message, setMessage] = useState(null)

  /* ================= AUTH ================= */

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('user') || 'null')
      if (!stored) {
        navigate('/admin/login', { replace: true })
      } else {
        setUser(stored)
        setItems(getActualites())
      }
    } catch {
      navigate('/admin/login', { replace: true })
    }
  }, [navigate])

  /* ================= HELPERS ================= */

  const resetForm = useCallback(() => {
    setEditingId(null)
    setForm(EMPTY_FORM)
  }, [])

  const showMessage = useCallback((type, text) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 3000)
  }, [])

  const refreshItems = useCallback(() => {
    setItems(getActualites())
  }, [])

  /* ================= EVENTS ================= */

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const startEdit = useCallback((item) => {
    setEditingId(item.id)
    setForm({
      titre: item.titre,
      description: item.description || '',
      image: item.image || '',
      date: item.date || '',
      contenu: item.contenu || '',
    })
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (!form.titre.trim()) {
        showMessage('error', 'Le titre est obligatoire.')
        return
      }

      if (editingId) {
        updateActualite(editingId, form)
        showMessage('success', 'Actualité modifiée.')
      } else {
        addActualite(form)
        showMessage('success', 'Actualité ajoutée.')
      }

      refreshItems()
      resetForm()
    },
    [form, editingId, refreshItems, resetForm, showMessage]
  )

  const handleDelete = useCallback(
    (id) => {
      if (!window.confirm('Supprimer cette actualité ?')) return

      removeActualite(id)
      refreshItems()

      if (editingId === id) resetForm()

      showMessage('success', 'Actualité supprimée.')
    },
    [editingId, refreshItems, resetForm, showMessage]
  )

  if (!user) return null

  /* ================= UI ================= */

  return (
    <div className="p-8 space-y-10">

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Contenus</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#002E6D]">
            Actualités
          </h1>
        </div>

        <Link
          to="/actualite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-[#002E6D]/20 bg-white px-4 py-2 text-sm font-medium text-[#002E6D] shadow-sm transition-colors hover:border-[#D00D2D]/30 hover:text-[#D00D2D]"
        >
          Voir la page <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* MESSAGE */}
      {message && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm font-medium ${
            message.type === 'error'
              ? 'border-red-200 bg-red-50 text-red-800'
              : 'border-emerald-200 bg-emerald-50 text-emerald-800'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* FORM */}
      <div className="rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">
            {editingId ? "Modifier l'actualité" : 'Nouvelle actualité'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <input
            type="text"
            name="titre"
            value={form.titre}
            onChange={handleChange}
            placeholder="Titre *"
            className={inputClass}
            required
          />

          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description (résumé)"
            className={inputClass}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="URL image"
              className={inputClass}
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <textarea
            name="contenu"
            value={form.contenu}
            onChange={handleChange}
            placeholder="Contenu complet"
            rows={5}
            className={`${inputClass} resize-y`}
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D00D2D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#b00b26]"
            >
              {editingId ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {editingId ? 'Enregistrer' : 'Ajouter'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border-2 border-[#002E6D]/20 bg-white px-4 py-2.5 text-sm font-medium text-[#002E6D] transition-colors hover:bg-[#002E6D]/5"
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </div>

      {/* LIST */}
      <div className="rounded-xl border border-[#002E6D]/10 bg-white shadow-sm">
        <div className="border-b border-[#002E6D]/10 bg-[#002E6D]/5 px-6 py-4">
          <h2 className="text-sm font-medium text-[#002E6D]">
            Liste ({items.length})
          </h2>
        </div>

        <div className="divide-y divide-[#002E6D]/10">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-[#0553c1]/80">
              Aucune actualité.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-4 px-6 py-4 transition-colors hover:bg-[#002E6D]/5"
              >
                <div className="h-14 w-20 overflow-hidden rounded-lg bg-[#002E6D]/5">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.titre}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-[#0553c1]/60">
                      Sans image
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[#002E6D]">
                    {item.titre}
                  </p>
                  <p className="truncate text-sm text-[#0553c1]/80">
                    {item.description || item.contenu?.slice(0, 80)}
                  </p>
                  {item.date && (
                    <p className="mt-0.5 text-xs text-[#0553c1]/60">
                      {item.date}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(item)}
                    className="rounded-lg p-2 hover:bg-[#002E6D]/10"
                  >
                    <Pencil className="h-4 w-4 text-[#0553c1]" />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg p-2 hover:bg-[#D00D2D]/10"
                  >
                    <Trash2 className="h-4 w-4 text-[#D00D2D]" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}