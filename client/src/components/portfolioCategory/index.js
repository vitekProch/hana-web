import { useParams, Link } from 'react-router-dom'
import './portfolioCategory.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioCategory = () => {
  const { categoryName } = useParams();
  const [imageData, setImageData] = useState([{ _id: '647ade54b898e785dddd5402', url: 'https://beige-crab-coat.cyclic.app/static/media/uvodni_foto_vetsi.3338572ceb73eafcbd0d.jpeg', alt: 'glamour', category: 'glamour', createdAt: '2023-06-03T06:31:48.524Z' }]);
  const imagesUrl = `https://beige-crab-coat.cyclic.app/api/v1/images/${categoryName}`;


  const fetchCategoryData = async () => {
    try {
      const categoryUrlProduction = `https://beige-crab-coat.cyclic.app/api/v1/images/${categoryName}`
      const categoryResponse = await axios(categoryUrlProduction);
      setImageData(categoryResponse.data.images);
    } catch (error) {
      console.log(error.response);
    };
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);
  return (
    <section className="category-page">
      <Link to={'/portfolio'}>Zpět na výběr</Link>
      <div className='category-list'>
        {
          imageData.map((one) => {
            const { category, _id, url, alt } = one;
            return (
              <div key={_id}>
                <div className="category-menu">
                  <div className="category-menu-box">
                    <img src={url} alt={alt} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default PortfolioCategory