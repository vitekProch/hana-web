import "./PricesList.scss";
import BigPriceItem from "../components/BigPersonalPriceItem";
import BigPersonalItemForm from "../components/BigPersonalItemForm";

import SmallPriceItem from "../components/SmallPersonalPriceItem";
import SmallPersonalItemForm from "../components/SmallPersonalItemForm";

import Modal from "../components/Modal";

import { useState, useEffect } from "react";
import axios from 'axios';

// const urlBigPriceList = 'http://localhost:3000/api/v1/bigPersonalPriceList';
// const urlSmallPriceList = 'http://localhost:3000/api/v1/smallPersonalPriceList';

const urlProductionBigPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/bigPersonalPriceList';
const urlProductionSmallPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/smallPersonalPriceList';

const PricesList = () => {
  const [bigPriceList, setBigPriceList] = useState([]);
  const [smallPriceList, setSmallPriceList] = useState([]);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isBigOpen, setIsBigOpen] = useState(false);


  const fetchBigPriceListData = async () => {
    try {
      const responseBigPriceList = await axios(urlProductionBigPriceList);
      // const responseBig = await axios(urlBigPriceList);
      setBigPriceList(responseBigPriceList.data.priceList);

    } catch (error) {
      console.log(error.response);
    };
  };
  const fetchSmallPriceList = async () => {
    try {
      const responseSmallPriceList = await axios(urlProductionSmallPriceList);
      // const responseSmall = await axios(urlSmallPriceList);
      setSmallPriceList(responseSmallPriceList.data.priceList);

    } catch (error) {
      console.log(error.response);
    };
  };
  useEffect(() => {
    fetchBigPriceListData();
    fetchSmallPriceList();
  }, []);



  return (
    <>
      <section className="prices-page">
        <div className="prices-list-and-buttons">
          <div className="add-buttons-group">
            <button onClick={() => setIsSmallOpen(true)}>Přidat standartní balíček</button>
            <button onClick={() => setIsBigOpen(true)}>Přidat rozsáhlejší balíček</button>
          </div>
          <div className="prices-lists">
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
        </div>
      </section>

      <Modal open={isSmallOpen} onClose={() => setIsSmallOpen(false)}>
        <SmallPersonalItemForm fetchSmallPriceList={fetchSmallPriceList} onClose={() => setIsSmallOpen(false)} />
      </Modal>

      <Modal open={isBigOpen} onClose={() => setIsBigOpen(false)}>
        <BigPersonalItemForm fetchBigPriceListData={fetchBigPriceListData} onClose={() => setIsBigOpen(false)} />
      </Modal>

    </>
  )
};

export default PricesList;