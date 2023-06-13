import Mapycz from "../../components/mapyCz/Mapycz";
import "./Contact.scss";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {

  return (
    <section className="contact-page mt-5">
      <div className="map">
        <Mapycz />
      </div>
      <div className="contact">
        <div className="contact-title">
          <h1 className="title text-center">Kontakt</h1>
        </div>
        <div className="contact-inf-box">
          <div className="adress">
            <strong>
              Smetanova 49<br />
              33701 Rokycany<br />
              Střed, Česko<br />
            </strong>
            <a href="mailto:fotografieodhanky@seznam.cz"><strong>fotografieodhanky@seznam.cz</strong></a>
            <p>IČO: <strong>00000000</strong></p>
          </div>
        </div>
        <div className="contact-form-container">
          <form>
            <input required type="text" placeholder="Vaše jméno" />
            <input required type="text" placeholder="Váš e-mail" />
            <textarea required placeholder="Vaše zpráva"></textarea>
            <div className="contact-link-with-button">
              <div className="contact-social-links">
                <a href="https://www.facebook.com/Fotografieodhanky" target="_blank" rel="noopener noreferrer"><FaFacebook className="contact-social-icon" /></a>
                <a href="https://www.instagram.com/fotografie_od_hanky/" target="_blank" rel="noopener noreferrer"><FaInstagram className="contact-social-icon" /></a>
              </div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;