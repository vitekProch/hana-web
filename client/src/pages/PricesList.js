import "./PricesList.css"
import BigPriceItem from "../components/BigPersonalPriceItem"
import SmallPriceItem from "../components/SmallPersonalPriceItem"
import SmallPersonalItemForm from "../components/SmallPersonalItemForm"
import Modal from "../components/Modal"

import { useState, useEffect } from "react"
import axios from 'axios';

// const urlBigPriceList = 'http://localhost:3000/api/v1/bigPersonalPriceList';
// const urlSmallPriceList = 'http://localhost:3000/api/v1/smallPersonalPriceList';

const urlProductionBigPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/bigPersonalPriceList';
const urlProductionSmallPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/smallPersonalPriceList';

const PricesList = () => {
  const [bigPriceList, setBigPriceList] = useState([]);
  const [smallPriceList, setSmallPriceList] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [correctSubmit, setCorrectSubmit] = useState(false);


  const fetchData = async () => {
    try {
      const responseBig = await axios(urlProductionBigPriceList);
      // const responseBig = await axios(urlBigPriceList);
      setBigPriceList(responseBig.data.priceList);

      const responseSmall = await axios(urlProductionSmallPriceList);
      // const responseSmall = await axios(urlSmallPriceList);
      setSmallPriceList(responseSmall.data.priceList);

    } catch (error) {
      console.log(error);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <section className="prices-page">
          <button onClick={() => setIsOpen(true)}>Přidat základní balíček</button>
        <div className="prices-list">
          {
            bigPriceList.map((onePrice) => {
              return <BigPriceItem key={onePrice._id} {...onePrice}></BigPriceItem>
            })
          }
          {
            smallPriceList.map((onePrice) => {
              return <SmallPriceItem key={onePrice._id} {...onePrice}></SmallPriceItem>
            })
          }
        </div>
      </section>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <SmallPersonalItemForm fetchData={fetchData} onClose={() => setIsOpen(false)} />
      </Modal>

    </>
  )
}

export default PricesList