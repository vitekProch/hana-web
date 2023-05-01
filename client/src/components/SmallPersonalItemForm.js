import "./SmallPersonalItemForm.css"
import axios from "axios"
import { useState } from "react";
const urlProductionSmallPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/smallPersonalPriceList';

const SmallPersonalItemForm = ({ fetchData, onClose }) => {
    const [smallPriceTitle, setSmallPriceTitle] = useState('');
    const [inputList, setInputList] = useState([{ smallPriceListSubtitle: '', smallPriceListQuantity: '', smallPriceListPrice: '' }]);

    const handleAdd = (e) => {
        e.preventDefault();
        setInputList([...inputList, { smallPriceListSubtitle: '', smallPriceListQuantity: '', smallPriceListPrice: '' }]);
    };
    const handleChange = (e, index) => {
        const { id, value } = e.target;
        const list = [...inputList];
        list[index][id] = value;
        setInputList(list);
    };
    const handleRemove = (e, index) => {
        e.preventDefault();
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const smallPriceSubmit = async (e) => {
        e.preventDefault();
        const values = inputList.map((one) => {
            const { smallPriceListSubtitle, smallPriceListQuantity, smallPriceListPrice } = one;
            return (
                {
                    "subTitle": smallPriceListSubtitle,
                    "quantity": smallPriceListQuantity,
                    "price": smallPriceListPrice,
                }
            )
        })
        try {
            const resp = await axios.post(urlProductionSmallPriceList, {
                priseTitle: smallPriceTitle,
                pricePackage: values
            })
            fetchData();
            onClose();
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <form className="smallPriceSubmit">
            <button className="add-btn" onClick={(e) => handleAdd(e)}>Přidat Balíček</button>
            <input
                type="text"
                placeholder="Zadejte titulek"
                className=""
                id="smallPriceListTitle"
                value={smallPriceTitle}
                onChange={e => setSmallPriceTitle(e.target.value)}
            />
            {
                inputList.map((data, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="Zadejte podtitulek"
                                className=""
                                id="smallPriceListSubtitle"
                                value={data.smallPriceListSubtitle}
                                onChange={e => handleChange(e, index)}
                            />
                            <input
                                type="number"
                                placeholder="Zadejte počet kusů"
                                className=""
                                id="smallPriceListQuantity"
                                value={data.smallPriceListQuantity}
                                onChange={e => handleChange(e, index)}
                            />
                            <input
                                type="number"
                                placeholder="Zadejte cenu"
                                className=""
                                id="smallPriceListPrice"
                                value={data.smallPriceListPrice}
                                onChange={e => handleChange(e, index)}
                            />
                            <button className="remove-btn" onClick={(e) => handleRemove(e, index)}>X</button>
                        </div>

                    )
                })
            }
            <input className="send-btn" type="submit" onClick={(e) =>  smallPriceSubmit(e) } />
        </form>
    )
}

export default SmallPersonalItemForm