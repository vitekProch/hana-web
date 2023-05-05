import "./SmallPersonalPriceItem.scss"
import { useState } from "react"

const PriceItem = ({ _id, priseTitle, pricePackage }) => {

  const [show, setShow] = useState(false)
  return (
    <div className="price-group">
      <div className="price-item">
        <div className="price-title-and-btn">
          <h2 className="price-title">{priseTitle}</h2>
          <button onClick={() => setShow(!show)}>{show ? "Schovat" : "Ukázat"}</button>
        </div>

        {show && <div className="small-prise-list-container" >
          <div key={_id} className="small-info-box">
            <ul>
              {
                pricePackage.map((oneList, index) => {
                  const { subTitle, quantity, price } = oneList;
                  return <li key={index}>
                    <h4>{subTitle}</h4>
                    <p>{quantity} Ks</p>
                    <p>{price.toLocaleString('cs-CZ')} Kč</p>
                  </li>
                })
              }

            </ul>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default PriceItem