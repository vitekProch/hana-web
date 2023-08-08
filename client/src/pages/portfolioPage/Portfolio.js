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
    <section className="portfolio-page">
      <div className="fixed">
        <PortfolioNav />
      </div>

      <div className="tst">
        {
          categoryName ? <Outlet></Outlet> :
            <div class="grid-container">
              {
                portfolioCategory.map((onePortfolioCategory) => {
                  const { _id, categoryName, categoryImage } = onePortfolioCategory;
                  const categoryNorme = updateValues(categoryName);
                  return <div key={_id} class="category-picture-menus">
                    <Link to={`/portfolio/${categoryName}`}>
                      <img className="portfolio-images" src={categoryImage} alt={categoryNorme} />
                    </Link>
                    <div className="category-label">{categoryNorme}</div>
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