import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./SmallPersonalItemForm.scss"
import axios from "axios"
import { useState } from "react";
const urlProductionSmallPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/smallPersonalPriceList';

const SmallPersonalItemForm = ({ fetchSmallPriceList, smallOnClose }) => {
    const [smallPriceTitle, setSmallPriceTitle] = useState('');
    const [inputList, setInputList] = useState([{ smallPriceListSubtitle: '', smallPriceListQuantity: '', smallPriceListPrice: '' }]);

    const handleAdd = (e) => {
        e.preventDefault();
        setInputList([...inputList, { smallPriceListSubtitle: '', smallPriceListQuantity: '', smallPriceListPrice: '' }]);
    };
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
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
            console.log(resp);
            fetchSmallPriceList();
            smallOnClose();
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <form className="small-price-submit">
            <button className="add-btn" onClick={(e) => handleAdd(e)}>Přidat Balíček</button>
            <input
                type="text"
                placeholder="Zadejte titulek"
                name="smallPriceListTitle"
                value={smallPriceTitle}
                onChange={e => setSmallPriceTitle(e.target.value)}
            />
            {
                inputList.map((data, index) => {
                    return (
                        <InputGroup key={index} className="mb-3">
                            <Form.Control 
                                type="text"
                                placeholder="Zadejte podtitulek"
                                name="smallPriceListSubtitle"
                                value={data.smallPriceListSubtitle}
                                onChange={e => handleChange(e, index)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Zadejte počet kusů"
                                name="smallPriceListQuantity"
                                value={data.smallPriceListQuantity}
                                onChange={e => handleChange(e, index)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Zadejte cenu"
                                name="smallPriceListPrice"
                                value={data.smallPriceListPrice}
                                onChange={e => handleChange(e, index)}
                            />
                            <InputGroup.Text className="small-price-delete-specific" onClick={(e) => handleRemove(e, index)}>X</InputGroup.Text>
                        </InputGroup>
                    )
                })
            }
            <input className="send-btn" type="submit" onClick={(e) => smallPriceSubmit(e)} />
        </form>
    )
}

export default SmallPersonalItemForm