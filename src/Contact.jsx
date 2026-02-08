import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    klasse: '',
    telefon: '',
    nachricht: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiBase = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:5000`;
      const response = await fetch(`${apiBase}/api/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (response.ok) {
        alert('Anfrage erfolgreich gesendet!')
        setFormData({ name: '', email: '', klasse: '', telefon: '', nachricht: '' })
      } else {
        alert('Fehler: ' + data.error)
      }
    } catch (error) {
        alert('Fehler beim Senden der Anfrage: ' + error)
      }
  }
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Kontakt</h1>
        <p>Schreiben Sie mir eine Nachricht</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefon">Telefon *</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="klasse">Klasse</label>
            <input
              type="text"
              id="klasse"
              name="klasse"
              value={formData.klasse}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nachricht">Nachricht *</label>
            <textarea
              id="nachricht"
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Nachricht senden</button>
        </form>

        <a href="/" className="back-link">← Zurück zur Startseite</a>
      </div>
    </div>
  )
}

export default Contact
