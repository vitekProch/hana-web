import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./BigPersonalItemForm.css"
import axios from "axios"
import { useState } from "react";
const urlProductionBigPriceList = 'https://beige-crab-coat.cyclic.app/api/v1/bigPersonalPriceList';

const BigPersonalItemForm = ({ fetchData, onClose }) => {
    const [bigPriceTitle, setBigPriceTitle] = useState('');
    const [inputList, setInputList] = useState([{ subTitle: '', text: [[]], price: '' }]);

    const handleAddPackage = (e) => {
        e.preventDefault();
        setInputList([...inputList, { subTitle: '', text: [[]], price: '' }]);
    };

    const handleAddSpecifications = (e, data, index) => {
        e.preventDefault();
        inputList[index].text = [...data.text, []];
        setInputList([...inputList]);
    };
    const handleChangePackage = (e, index) => {
        const { className, value } = e.target;
        const list = [...inputList];
        list[index][className] = value;
        setInputList(list);
    };
    const handleChangeSpecifications = (e, index, i) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index].text[i] = value
        setInputList(list);
    };


    const handleRemovePackage = (e, index) => {
        e.preventDefault();
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    const handleRemoveSpecifications = (e, index, i) => {
        e.preventDefault();
        inputList[index].text.splice(i, 1);
        setInputList([...inputList]);
    };

    const smallPriceSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(urlProductionBigPriceList, {
                priseTitle: bigPriceTitle,
                priseCategory: inputList
            })
            fetchData();
            onClose();
            console.log(resp);
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <form className="smallPriceSubmit">
            <div className="title-and-btn">
                <button className="add-btn" onClick={(e) => handleAddPackage(e)}>Přidat Balíček</button>
                <input
                    type="text"
                    placeholder="Zadejte titulek"
                    className="smallPriceListTitle"
                    value={bigPriceTitle}
                    onChange={e => setBigPriceTitle(e.target.value)}
                />
            </div>
            <div className="packages">
                {
                    inputList.map((data, index) => {
                        return (
                            <div className="one-package" key={index}>
                                <p>Balíček číslo {index + 1}</p>
                                <input
                                    type="text"
                                    placeholder="Zadejte podtitulek"
                                    value={data.subTitle}
                                    className="subTitle"
                                    onChange={e => handleChangePackage(e, index)}
                                />
                                <input
                                    type="number"
                                    placeholder="Zadejte cenu"
                                    className="price"
                                    value={data.price}
                                    onChange={e => handleChangePackage(e, index)}
                                />
                                <button className="add-btn" onClick={(e) => handleAddSpecifications(e, data, index)}>Přidat Specifikaci</button>
                                {
                                    data.text.map((dataa, i) => {

                                        return (
                                            <div key={i} className="specific-and-btn">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                    type="text"
                                                    placeholder="Zadejte specifikaci"
                                                    className=""
                                                    value={dataa}
                                                    onChange={e => handleChangeSpecifications(e, index, i)}
                                                    />
                                                    <InputGroup.Text className="big-form-delete-specific" onClick={(e) => handleRemoveSpecifications(e, index, i)}>X</InputGroup.Text>
                                                </InputGroup>
                                                
                                            </div>
                                        )
                                    })
                                }
                                <button className="remove-btn" onClick={(e) => handleRemovePackage(e, index)}>Odstranit balíček č. {index + 1}</button>
                            </div>

                        )
                    })
                }
            </div>
            <input className="send-btn" type="submit" onClick={(e) => smallPriceSubmit(e)} />
        </form>
    )
}

export default BigPersonalItemForm