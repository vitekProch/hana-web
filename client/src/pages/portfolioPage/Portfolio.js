import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
import axios from 'axios';

import AddCategoryForm from "../../components/froms/portfolioForms/addCategoryForm";

// const categoryUrl = 'http://localhost:3000/api/v1/category';
// const portfolioImagesUrl = 'http://localhost:3000/api/v1/images';

const categoryUrlProduction = 'https://beige-crab-coat.cyclic.app/api/v1/category';


const Portfolio = () => {
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
      // const categoryResponse = await axios(categoryUrl);
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
      <div className="category-list">
        {
          portfolioCategory.map((onePortfolioCategory) => {
            const { _id, categoryName, categoryImage } = onePortfolioCategory;
            const categoryNorme = updateValues(categoryName);
            return <div key={_id} className="">
              <Link to={`/portfolio/${categoryName}`}>{categoryNorme}</Link>
              <div className="category-menu-picture">
                <div className="category-menu-picture-box">
                  <img src={categoryImage} alt={categoryNorme} />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
};

export default Portfolio;