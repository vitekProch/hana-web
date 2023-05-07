import "./BigPersonalPriceItem.scss"
import { useState } from "react"
import { BsPencilSquare } from "react-icons/bs";

const PriceItem = ({ priseTitle, priseCategory }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="price-group">
      <div className="price-item">
        <div className="big-price-title-and-btn">
          <h2 className="price-title">
            {priseTitle}
            <BsPencilSquare className="big-price-item-update-pencil" />
          </h2>
          
          <button onClick={() => setShow(!show)}>{show ? "Schovat" : "Ukázat"}</button>
        </div>

        {show && <div className="prise-list-container" >
          {
            priseCategory.map((data, index) => {

              const { price, subTitle, text } = data
              return (
                <div key={index} className="info-box">
                  <h4>{subTitle}</h4>
                  <ul>
                    {
                      text.map((one, index) => {
                        return <li key={index}>{one}</li>
                      })
                    }
                  </ul>
                  <p className="">{price.toLocaleString('cs-CZ')} Kč</p>
                </div>
              )
            })
          }
        </div>
        }
      </div>
    </div>
  )
}

export default PriceItem