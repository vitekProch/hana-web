import "./AddCategoryForm.scss"
import { useState } from "react";

const AddCategoryForm = () => {
    const [categoryName, setCategoryName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const editFormHandle = async (e) => {
        e.preventDefault();
        console.log(imageUrl);
        try {

        } catch (error) {
            
        }
    }
    return (
        <form className="title-edit-form" onSubmit={(e) => editFormHandle(e)}>
            <h2>
                <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
            </h2>
            <h2>
                <input type="file" value={categoryName} onChange={(e) => setImageUrl(e.target.files[0])} />
            </h2>
            <div>
                <input className="title-edit-submit" type="submit" value="Upload" />
            </div>
        </form>
    )
}

export default AddCategoryForm