import "./Home.css"
import ImageSlider from "../components/ImageSlider";
const Home = () => {
  const slides = [
    { url: "http://localhost:3000/img/03.jpg", title: "italy" },
    { url: "http://localhost:3000/img/03.jpg", title: "italy" },
    { url: "http://localhost:3000/img/movie2.png", title: "italy" },
  ];
  const slidesProduction = [
    { url: "../images/03.jpg", title: "italy" },
    { url: "../images/03.jpg", title: "italy" },
    { url: "../images/03.jpg", title: "italy" },
  ];

  return <div className="home-page">
  <section className="slide-container">
    <ImageSlider slides={slidesProduction} />
  </section>
  <section className="opening-text">
    <div>
        <p>Ludus consetetur ocurreret donec vidisse mediocrem ipsum cu. Est senectus gloriatur sociosqu
            nostrum ipsum mollis. Postea eget detracto urna molestie viris dissentiunt ius parturient delenit. Mutat possit
            possim metus epicuri detraxit cu sagittis dolorem tacimates.</p>
    </div>
</section>
</div>
}

export default Home