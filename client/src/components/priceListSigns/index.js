import { useState } from "react";
import "./PriceListSigns.scss";
const Index = ({showInfo}) => {
    const [show, setShow] = useState(false);
  return (
    <div  onClick={() => {setShow(!show); showInfo(!show)}} className="price-list-signs">{show ?
        <>
          <div className="sign-bar"></div>
        </>
        :
        <>
          <div className="sign-bar"></div>
          <div className="sign-bar"></div>
        </>}
      </div>
  )
}

export default Index