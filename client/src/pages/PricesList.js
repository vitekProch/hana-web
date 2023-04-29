import "./PricesList.css"
import PriceItem from "../components/BigPersonalPriceItem"
import { useState, useEffect } from "react"
import axios from 'axios';
const urlProduction = 'https://beige-crab-coat.cyclic.app/api/v1/priceList';
const url = 'http://localhost:3000/api/v1/priceList';

const PricesList = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(urlProduction);
      setData(response.data.priceList);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <section className="prices-page">
      <div className="prices-list">
        {
          data.map((onePrice) => {
            return <PriceItem key={onePrice._id} {...onePrice}></PriceItem>
          })
        }
      </div>
      <div className="prices-list">
        <div className="price-group">
          <div className="price-item">
            <div className="price-title-and-btn">
              <h2 className="price-title">Velky titulek</h2>
              <button >Ukázat</button>
            </div>

            <div className="prise-list-container" >

              <div className="info-box">
                <h4>POdtext</h4>
                <ul>
                  <li>Cislo jedna </li>

                </ul>
                <p className="">2000 Kč</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PricesList