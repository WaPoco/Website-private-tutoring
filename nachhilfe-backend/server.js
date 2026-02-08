const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email-Konfiguration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teachmp94@gmail.com',
    pass: 'ppga xugy cxnb xjgj' // Google App Password!
  }
});

// POST-Route für Formular
app.post('/api/booking', async (req, res) => {
  const { name, email, telefon, klasse, nachricht } = req.body;

  // Validierung
  if (!name || !email || !telefon) {
    return res.status(400).json({ error: 'Alle Felder erforderlich!' });
  }

  try {
    // Email an dich senden
    await transporter.sendMail({
      from: email,
      to: 'teachmp94@gmail.com',
      subject: 'Neue Probestunden-Anfrage',
      html: `
        <h2>Neue Anfrage für Probestunde</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Klasse:</strong> ${klasse}</p>
	      <p><strong>Nachricht:</strong> ${nachricht}</p>
	`
    });

    // Bestätigungs-Email an User
    await transporter.sendMail({
      from: 'teachmp94@gmail.com',
      to: email,
      subject: 'Anfrage erhalten - Nachhilfe Berlin',
      html: `
        <h2>Vielen Dank, ${name}!</h2>
        <p>Wir haben deine Anfrage erhalten und melden uns in Kürze.</p>
      `
    });

    res.status(200).json({ message: 'Anfrage erfolgreich gesendet!' });
  } catch (error) {
    console.error('Fehler:', error);
    res.status(500).json({ error: 'Fehler beim Senden der Email' });
  }
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server läuft auf http://0.0.0.0:${PORT}`);
});
