import "./BigPersonalPriceItem.scss";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import TitleEditForm from "../froms/perosnalItemFormBoth/TitleEditForm";
import UpdatePackage from "../froms/bigPreronalItemForm/UpdatePackage";
import PriceListSign from "../priceListSigns";

const BigPersonalPriceItem = ({ _id, priseTitle, priseCategory }) => {
  const [priceTitleState, setPriceTitle] = useState(priseTitle);
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [showEditPackage, setShowEditPackage] = useState(false);
  const [packageData, setPackageData] = useState({})
  const editPackage = (price, subTitle, text) => {
    const newPackageData = {
      subTitle: subTitle,
      text: text,
      price: price,
    }
    setPackageData(newPackageData);
    setShowEditPackage(true);
  }
  return (
    <div className="price-group">
      <div className="price-item">
        <div className="big-price-title-and-btn">
          {editTitle ?
            <TitleEditForm
              id={_id} priceTitleUpdate={setPriceTitle}
              priceTitle={priceTitleState}
              closeUpdate={() => setEditTitle(false)}
              url="https://beige-crab-coat.cyclic.app/api/v1/bigPersonalPriceList/"
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

        {show && <div className="prise-list-container" >
          {showEditPackage ?
            <UpdatePackage id={_id} packageData={packageData} />
            :
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
                  <BsPencilSquare
                    onClick={() => editPackage(price, subTitle, text)}
                    className="small-price-item-update-pencil"
                  />
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

export default BigPersonalPriceItem