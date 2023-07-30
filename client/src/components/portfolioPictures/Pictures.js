import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import "./portfolioPictures.scss";

import axios from 'axios';

const Picures = () => {
  const { categoryName } = useParams();
  const [imageData, setImageData] = useState([]);

  const fetchCategoryData = async () => {
    try {
      const categoryUrlProduction = `https://good-puce-llama-yoke.cyclic.app/api/v1/images/${categoryName}`
      const categoryResponse = await axios(categoryUrlProduction);
      setImageData(categoryResponse.data.images);
    } catch (error) {
      console.log(error.response);
    };
  };

  useEffect(() => {
    fetchCategoryData();
  }, [categoryName]);
  return (
    <div className="category-list">
      {
        imageData.map((one) => {
          const { _id, url, alt } = one;
          return (
            <div key={_id} className="category-menu-picture-box stacked">
              <img src={url} alt={alt} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Picures