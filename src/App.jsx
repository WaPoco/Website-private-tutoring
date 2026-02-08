import Nav from './nav.jsx'
import Button from './button.jsx'
import './App.css'
import Diashow from './diashow.jsx'

function App() {

  return (
    <>
      <div className="title-section">
        <Nav />
      </div>
      <h1>Mathe- und Physiknachhilfe</h1>

      <div className="content-section">
        <div className="text-section">
          <p className="intro-text">
            Individueller Einzelunterricht für Mittel- und Oberstufe - online
            oder vor Ort in Berlin.
          </p>
          <p className="intro-text">
            Ich biete Nachhilfe in den Fächern Mathematik und Physik an, abgestimmt auf
            die Bedürfnisse von Schülerinnen und Schülern der Mittelstufe bis Oberstufe. Egal ob
            online oder vor Ort, gemeinsam arbeiten wir daran, Verständnis zu schaffen,
            Sicherheit zu gewinnen und die Noten zu verbessern.
            <br></br>
            Melden dich noch heute für eine kostenlose Probestunde an!
            Das ist der erste Schritt zu mehr Erfolg in der Schule.
          </p>
          <Button/>
        </div>
        <div className="image-section">
          <Diashow/>
        </div>
      </div>
    </>
  )
}

export default App
