import { useState, useEffect } from "react";
import "./Portfolio.scss";
import axios from 'axios';

// const categoryUrl = 'http://localhost:3000/api/v1/category';
// const portfolioImagesUrl = 'http://localhost:3000/api/v1/images';

const categoryUrlProduction = 'https://beige-crab-coat.cyclic.app/api/v1/category';
const portfolioImagesUrlProduction = 'https://beige-crab-coat.cyclic.app/api/v1/images';

const Portfolio = () => {
  const [portfolioCategory, setPortfolioCategory] = useState([]);
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [filteredPortfolioImages, setFilteredPortfolioImages] = useState([]);
  
  
  const updateValues = (categoryName) => {
    const addedSpaces = categoryName.replace(/-+/g,' ');
    
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

  const fetchPortfolioImagesData = async () => {
    try {
      const portfolioImagesResponse = await axios(portfolioImagesUrlProduction);
      // const portfolioImagesResponse = await axios(portfolioImagesUrl);
      setPortfolioImages(portfolioImagesResponse.data.images);
      setFilteredPortfolioImages(portfolioImagesResponse.data.images);
      
    } catch (error) {
      console.log(error.response);
    };
  };

  useEffect(() => {
    fetchCategoryData();
    fetchPortfolioImagesData();
  }, []);
  
  const filterCategory = (category) => {
    const filtered = portfolioImages.filter((onePicture) => {
      return updateValues(onePicture.category) === category;
    })
    if (category === "Vše") {
      return setFilteredPortfolioImages(portfolioImages);
    }
    setFilteredPortfolioImages(filtered);
  }
  
  return (
    <div className="portfolio-page">
      <div className="category-box mt-5">
        <div className="category-list mt-5">
          {
            portfolioCategory.map((onePortfolioCategory) => {
              const { _id, categoryName } = onePortfolioCategory;
              const categoryNorme = updateValues(categoryName);
                return <div key={_id} className="category-name" onClick={() => filterCategory(categoryNorme)}>
                  <p>{categoryNorme}</p>
                </div>
            })
          }
        </div>
      </div>
      <div className="image-gallery">
        {
          filteredPortfolioImages.map((onePicture) => {
            const {_id, url, alt } = onePicture
            return <div key={_id} className="item-box">
              <img src={url} alt={alt} />
            </div>
          })
        }
      </div>
    </div>
  )
};

export default Portfolio;