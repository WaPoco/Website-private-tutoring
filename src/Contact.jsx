import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Erstelle mailto Link mit den Formulardaten
    const subject = `Kontaktanfrage von ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}

Nachricht:
${formData.message}
    `
    
    const mailtoLink = `mailto:deine-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
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
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Nachricht *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
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
