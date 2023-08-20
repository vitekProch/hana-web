import { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import "./Portfolio.scss";
import axios from 'axios';
import PortfolioNav from "../../components/portfolioNav/Index";

const categoryUrlProduction = 'https://good-puce-llama-yoke.cyclic.app/api/v1/category';


const Portfolio = () => {
  const { categoryName } = useParams();


  const [portfolioCategory, setPortfolioCategory] = useState([]);

  const updateValues = (categoryName) => {
    const addedSpaces = categoryName.replace(/-+/g, ' ');

    const capitalized =
      addedSpaces.charAt(0).toUpperCase() + addedSpaces.slice(1);
    return capitalized;
  }

  const fetchCategoryData = async () => {
    try {
      const categoryResponse = await axios(categoryUrlProduction);
      setPortfolioCategory(categoryResponse.data.categories);
    } catch (error) {
      console.log(error.response);
    };
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <section className="portfolio-page page-header-margin">
      <div className="portfolio-fixed-menu">
        <PortfolioNav />
      </div>


      <div className="portfolio-gallery-container">
        {
          categoryName ? <Outlet></Outlet> :
            <div className="gallery">
              {
                portfolioCategory.map((onePortfolioCategory) => {
                  const { _id, categoryName, categoryImage } = onePortfolioCategory;
                  const categoryNorme = updateValues(categoryName);
                  return <div key={_id} className="image">
                      <Link to={`/portfolio/${categoryName}`}>
                        <img className="" src={categoryImage} alt={categoryNorme} />
                        <div className="portfolio-overlay">{categoryNorme}</div>
                      </Link>
                  </div>
                })
              }
            </div>
        }
      </div>
    </section >
  )
};

export default Portfolio;