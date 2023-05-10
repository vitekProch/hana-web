import { useState } from "react"
import "./TitleEditForm.scss"
import axios from "axios";
import { BsXLg } from "react-icons/bs";

const TitleEditForm = ({ id, priceTitle, closeUpdate, priceTitleUpdate, url }) => {
    const [title, setTitle] = useState("");
    const editFormHandle = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.patch(url + id, {
                priseTitle: title
            })
            priceTitleUpdate(title);
            closeUpdate();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="title-edit-form" onSubmit={(e) => editFormHandle(e)}>
            <h2>
                <input type="text" placeholder={priceTitle} value={title} onChange={(e) => setTitle(e.target.value)} />
            </h2>
            <div>
                <input className="title-edit-submit" type="submit" value="Upravit" />
                <BsXLg className="title-edit-close" onClick={() => closeUpdate()} />
            </div>
        </form>
    )
}

export default TitleEditForm