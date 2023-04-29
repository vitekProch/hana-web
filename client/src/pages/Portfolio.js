import { useState, useEffect } from "react"
import "./Portfolio.css"
import axios from 'axios';

const categoryUrl = 'http://localhost:3000/api/v1/category';
const imagesUrl = 'http://localhost:3000/api/v1/images';
const categoryUrlProduction = 'https://hana-web.herokuapp.com/api/v1/category';
const imagesUrlProduction = 'https://hana-web.herokuapp.com/api/v1/images';

const Portfolio = () => {
  const [Categ, setCateg] = useState([]);
  const [images, setImages] = useState([]);
  const [filteredData, setData] = useState([]);
  
  
  const updateValues = (textCat) => {
    const addedSpaces = textCat.replace(/-+/g,' ');
    
    const capitalized =
    addedSpaces.charAt(0).toUpperCase()
    + addedSpaces.slice(1)
    return capitalized;
  }
  
  const fetchData = async () => {
    try {
      const categoryResponse = await axios(categoryUrlProduction);
      setCateg(categoryResponse.data.categories);
      
      const imagesResponse = await axios(imagesUrlProduction);
      setImages(imagesResponse.data.images);
      setData(imagesResponse.data.images);
    } catch (error) {
      console.log(error.categoryResponse);
      console.log(error.imagesResponse);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  const filterCategory = (category) => {
    const filtered = images.filter((onePicture) => {
      return updateValues(onePicture.category) === category;
    })
    if (category === "Vše") {
      return setData(images)
    }
    setData(filtered)
  }
  
  return (
    <div className="portfolio-page">
      <div className="category-box mt-5">
        <div className="category-list mt-5">
          {
            Categ.map((oneCateg) => {
              const { _id, categoryName } = oneCateg;
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
          filteredData.map((onePicture) => {
            console.log(onePicture);
            const {_id, url, alt } = onePicture
            return <div key={_id} className="itemBox">
              <img src={url} alt={alt} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Portfolio