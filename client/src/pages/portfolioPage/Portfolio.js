import { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import "./Portfolio.scss";
import axios from 'axios';
import PortfolioNav from "../../components/portfolioNav/Index";
//import AddCategoryForm from "../../components/froms/portfolioForms/addCategoryForm";

const categoryUrlProduction = 'https://fluffy-eel-waistcoat.cyclic.app/api/v1/category';


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
      <div className="fixed">
        <PortfolioNav />
      </div>
      {
        categoryName ? <Outlet></Outlet> :
          <div className="category-list-menu">
            {
              portfolioCategory.map((onePortfolioCategory) => {
                const { _id, categoryName, categoryImage } = onePortfolioCategory;
                const categoryNorme = updateValues(categoryName);
                return <div key={_id} className="category-picture-box-menu">
                  <Link to={categoryName}><img className="category-picture-menu" src={categoryImage} alt={categoryNorme} /></Link>
                  <div className="category-label">{categoryNorme}</div>
                </div>
              })
            }
            <div className="category-picture-menu-extra"></div>
            <div className="category-picture-menu-extra"></div>
          </div>
      }
    </section >
  )
};

export default Portfolio;