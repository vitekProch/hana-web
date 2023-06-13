import "./PortfolioNav.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Index = () => {
    const [portfolioCategory, setPortfolioCategory] = useState([]);

    const updateValues = (categoryName) => {
        const addedSpaces = categoryName.replace(/-+/g, ' ');

        const capitalized =
            addedSpaces.charAt(0).toUpperCase() + addedSpaces.slice(1);
        return capitalized;
    }

    const fetchCategoryData = async () => {
        try {
            const categoryResponse = await axios("https://beige-crab-coat.cyclic.app/api/v1/category");
            // const categoryResponse = await axios(categoryUrl);
            setPortfolioCategory(categoryResponse.data.categories);
        } catch (error) {
            console.log(error.response);
        };
    };

    useEffect(() => {
        fetchCategoryData();
    }, []);



    return (
        <nav className="portfolio-nav">
            <ul className="portfolio-nav-links">
            {
                portfolioCategory.map((onePortfolioCategory) => {
                    const { _id, categoryName } = onePortfolioCategory;
                    const categoryNorme = updateValues(categoryName);
                    return <li key={_id}>
                        <Link to={`/portfolio/${categoryName}`}>{categoryNorme}</Link>
                    </li>
                })
            }
            </ul>
        </nav>
    )
}

export default Index;