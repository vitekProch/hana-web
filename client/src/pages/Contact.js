import Mapycz from "../components/Mapycz";
import "./Contact.scss";


const Contact = () => {

  return (
    <section className="contact-page mt-5">
      <div className="map">
        <Mapycz/>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h1 className="title text-center">Kontakt</h1>
        </div>
        <div className="contact-inf-box">
          <div className="adress">
          <h4>Adresa ateliéru:</h4>
                    <strong>
                        Smetanova 49<br />
                        33701 Rokycany<br />
                        Střed, Česko<br />
                    </strong>
          </div>
          <div className="email">
          <h4>Email</h4>
              <strong><a href="mailto:fotografieodhanky@seznam.cz">fotografieodhanky@seznam.cz</a></strong>
          </div>
        </div>
      <form className="contact_form">
        <input type="text" placeholder="Vaše jméno" />
        <input type="text" placeholder="Váš e-mail" />
        <input type="text" placeholder="Vaše zpráva" />
        <input type="submit" />
      </form>
      </div>
    </section>
  )
}

export default Contact;