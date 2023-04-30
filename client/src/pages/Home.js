import "./Home.css"
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";
const Home = () => {
  // const slides = [
  //   { url: "http://localhost:3000/img/03.jpg", title: "italy" },
  //   { url: "http://localhost:3000/img/03.jpg", title: "italy" },
  //   { url: "http://localhost:3000/img/movie2.png", title: "italy" },
  // ];
  const slidesProduction = [
    { url: "https://beige-crab-coat.cyclic.app/images/03.jpg", title: "italy" },
    { url: "https://beige-crab-coat.cyclic.app/images/03.jpg", title: "italy" },
    { url: "https://beige-crab-coat.cyclic.app/images/03.jpg", title: "italy" },
  ];

  return <div className="home-page">
  <section className="slide-container">
    <ImageSlider slides={slidesProduction} />
  </section>
  <section className="opening-text">
    <div>
        <p>Vítám tě na svých stránkách. Líbí se ti moje práce a chceš také takové fotografie? Mrkni na to, kdo tě bude fotit. -{'>'} <span><Link to="/o-mne">O mně</Link></span></p>
    </div>
</section>
</div>
}

export default Home