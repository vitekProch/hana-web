import "./Home.scss";
import imageThree from "../../images/uvodni_foto_hanka.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import sliderSettings from "../../components/sliderSettings/settings";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Home = () => {
  const categoryUrlProduction = 'https://fluffy-eel-waistcoat.cyclic.app/api/v1/category';
  const [portfolioCategory, setPortfolioCategory] = useState([]);
  const [peopleReviewCategory, setPeopleReviewCategory] = useState([]);
  const { portfolioSettings, reactionSettings } = sliderSettings;

  const fetchCategoryData = async () => {
    try {
      const categoryResponse = await axios(categoryUrlProduction);
      const peopleReviewResponse = await axios('https://fluffy-eel-waistcoat.cyclic.app/api/v1/peopleReview');
      // const categoryResponse = await axios(categoryUrl);
      setPortfolioCategory(categoryResponse.data.categories);
      setPeopleReviewCategory(peopleReviewResponse.data.peopleReview);
    } catch (error) {
      console.log(error.response);
    };
  };
  const updateValues = (categoryName) => {
    const addedSpaces = categoryName.replace(/-+/g, ' ');

    const capitalized =
      addedSpaces.charAt(0).toUpperCase() + addedSpaces.slice(1);
    return capitalized;
  }

  useEffect(() => {
    fetchCategoryData();
  }, []);



  return <div className="home-page">
    <section className="hero-section">
      <div className="tile-images-container">
        <div className="img1" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/uvodni_foto_mensi.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="img2" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/uvodni_foto_vetsi.jpeg)",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}></div>
      </div>
      <div className="contact-link-container">
        <Link className="contact-link-homepage" to="/kontakt">Kontaktuj mě!</Link>
      </div>
    </section>

    <section className="opening-text-section">
      <div className="opening-text-image"> 
          <img src={imageThree} alt="" />
      </div>
      <div className="opening-text">
        <div className="opening-text-container">
          <p><strong>BcA. Hana Jedličková</strong></p>
          <p>Vítám tě na svých stránkách. Líbí se ti moje práce a chceš také takové fotografie? Mrkni na to, kdo tě bude fotit.</p>
          <p><em>Kdo jsem?</em><br />Jmenuji se Hana Jedličková a v oboru fotografie se pohybuji už od dětství. Vše začalo, už když mi bylo 11 let a já dostala svůj první fotoaparát. Od té doby se fotografie stala moji životní cestou. Není to pro mě pouze koníček či práce. Je to dalo by se říci můj životní směr, ve kterém jsem se rozhodla zdokonalovat a vložit do toho kus sebe. Své znalosti v oboru jsem rozvíjela jak na střední, tak i na vysoké škole.</p>
          <p className="home-page-about-me-link"><a href="/o-mne">Čti dále...</a></p>
        </div>
      </div>
    </section>
    <section className="review">
      <h2 className="home-page-titles">Vaše reakce</h2>
      <div className="review-slider">
        <Slider  {...reactionSettings}>
          {
            peopleReviewCategory.map((onePeopleReview) => {
              const { _id, url, alt } = onePeopleReview;
              return (
                <div key={_id} className="review-img">
                  <img src={url} alt={alt} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </section>
    <section className="homepage-portfolio">
      <h2 className="home-page-titles">Portfolio</h2>
      <Slider  {...portfolioSettings}>
        {
          portfolioCategory.map((onePortfolioCategory) => {
            const { _id, categoryName, categoryImage } = onePortfolioCategory;
            const categoryNorme = updateValues(categoryName);
            return (
              <div key={_id} className="card">
                <div className="card-top">
                  <img src={categoryImage} alt={categoryNorme} />
                  <Link to={`/portfolio/${categoryName}`}>{categoryNorme}</Link>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </section >
    <section className="social-sites-section">
      <div className="social-sites-title">
        <h2 className="home-page-titles">Sleduj mě na sociálních sítích</h2>
      </div>
      <div className="social-site">
        <div className="social-site-img" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/social_media_1.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="overlay">
            <div className="social-site-links">
              <a href="https://www.facebook.com/Fotografieodhanky" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
              <a href="https://www.instagram.com/fotografie_od_hanky/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            </div>
          </div>
        </div>
        <div className="social-site-img" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/social_media_2.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>
        <div className="social-site-img" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/social_media_3.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>
        <div className="social-site-img" style={{
          backgroundImage: "url(https://fluffy-eel-waistcoat.cyclic.app/images/social_media_4.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}>
        </div>
      </div>

    </section>
  </div >
}

export default Home;