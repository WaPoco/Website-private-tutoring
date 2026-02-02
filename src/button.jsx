import { Link } from 'react-router-dom'

function Button() {
  return (
    <>
     <Link to="/contact">
       <button className="contact-button">Jetzt Kontakt aufnehmen</button>
     </Link>     
    </>
  );
}

export default Button;