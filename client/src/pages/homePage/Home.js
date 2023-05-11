import "./Home.scss";
import imageOne from "../../images/1 (13).jpeg";
import imageTwo from "../../images/zmena.jpeg";
import imageThree from "../../images/oriznute.jpg";
import recenze from "../../images/Screenshot_20230510_172917_com.instagram.android_edit_93504492621669.jpg";
import svatba from "../../images/svatby.jpg";
import rodinna from "../../images/rodinna.jpeg";
import portrety from "../../images/portrety.jpeg";
import socialSiteImg from "../../images/03.jpg";


import { Link } from "react-router-dom";

const Home = () => {


  return <div className="home-page">
    <section className="tile-images-container">
      <div className="img1"><img src={imageOne} alt="" /></div>
      <div className="img2"><img src={imageTwo} alt="" /></div>
    </section>
    <section className="contact-section">
      <Link className="contact-link-homepage" to="/kontakt">Kontaktuj mě!</Link>
    </section>
    <section className="opening-text-section">
      <div className="opening-text-image">
        <img src={imageThree} alt="" />
      </div>
      <div className="opening-text">
        <div className="opening-text-container">
          <p><strong>BcA. Hana Jedličková</strong></p>

          <p>Vítám tě na svých stránkách. Líbí se ti moje práce a chceš také takové fotografie? Mrkni na to, kdo tě bude fotit.</p>

          <p><em>Kdo jsem?</em><br />

            Jmenuji se Hana Jedličková a v oboru fotografie se pohybuji už od dětství. Vše začalo, už když mi bylo 11 let a já dostala svůj první fotoaparát. Od té doby se fotografie stala moji životní cestou.

            Není to pro mě pouze koníček či práce. Je to dalo by se říci můj životní směr, ve kterém jsem se rozhodla zdokonalovat a vložit do toho kus sebe. Své znalosti v oboru jsem rozvíjela jak na střední, tak i na vysoké škole.</p>
          <p className="home-page-about-me-link"><Link to="/o-mne">Čti dále...</Link></p>
        </div>
      </div>
    </section>
    <section className="recenze">
      <h2 className="home-page-title">Vaše reakce</h2>
      <div><img src={recenze} alt="" /></div>
    </section>
    <section className="homepage-portfolio">
      <h2 className="home-page-title">Portfólio</h2>
      <div className="transparent-images">
        <div style={{
          backgroundImage: `url(${rodinna})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="transparent-images-svatby">
          <button>Rodinná</button>
        </div>
        <div style={{
          backgroundImage: `url(${svatba})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="transparent-images-portrety">
          <button>Svatby</button>
        </div>
        <div style={{
          backgroundImage: `url(${portrety})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="transparent-images-rodinna">
          <button>Portréty</button>
        </div>
      </div>
    </section>
    <section className="social-sites-section">
      <div className="social-sites-title">
        <h2 className="home-page-title">Sleduj mě na sociálních sítích</h2>
      </div>
      <div style={{
        backgroundImage: `url(${socialSiteImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="social-site-img">
        <div className="social-site-links">
          <a href="https://www.facebook.com/Fotografieodhanky" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          <a href="https://www.instagram.com/fotografie_od_hanky/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </div>
      </div>
    </section>
  </div>
}

export default Home;