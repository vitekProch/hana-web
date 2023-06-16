import "./SmallPersonalPriceItem.scss"
import { useState } from "react"
import { BsPencilSquare } from "react-icons/bs";
import TitleEditForm from "../froms/perosnalItemFormBoth/TitleEditForm";
import PriceListSign from "../priceListSigns";

const SmallPersonalPriceItem = ({ _id, priseTitle, pricePackage }) => {
  const [priceTitleState, setPriceTitle] = useState(priseTitle)
  const [editTitle, setEditTitle] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div className="price-group">
      <div className="price-item">
        <div className="price-title-and-btn">
          {editTitle ?
            <TitleEditForm
              id={_id} priceTitleUpdate={setPriceTitle}
              priceTitle={priceTitleState}
              closeUpdate={() => setEditTitle(false)}
              url="https://beige-crab-coat.cyclic.app/api/v1/smallPersonalPriceList/"
            /> :
            <h2 className="price-title">
              {priceTitleState}
              <BsPencilSquare
                onClick={() => setEditTitle(true)}
                className="small-price-item-update-pencil"
              />
            </h2>}
            <PriceListSign showInfo={setShow} />
            
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

export default SmallPersonalPriceItem