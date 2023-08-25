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
              url="https://good-puce-llama-yoke.cyclic.app/api/v1/smallPersonalPriceList/"
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
                    <h4 className="small-price-subTitle">{subTitle}</h4>
                    <p className="small-price-quantity">{quantity} Ks</p>
                    <p className="small-price-price">{price.toLocaleString('cs-CZ')} Kč</p>
                  </li>
                })
              }
              <li>
                <h4>Cesta do Prahy</h4>
                <p className="small-price-price">+340 Kč</p>
              </li>
              <li>
                <h4>Příplatek za víkend</h4>
                <p className="small-price-price">+300 Kč</p>
              </li>
              <li>
                <h4>Fotka nad rámec balíčku</h4>
                <p className="small-price-price">150 Kč</p>
              </li>
              <li>
                <h4>Možnost tvorby individuálních balíčků s vícero fotkama.</h4>
              </li>
            </ul>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default SmallPersonalPriceItem