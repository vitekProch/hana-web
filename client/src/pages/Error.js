import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>Strárnka nebyla nalezena :( </h2>
        <p><Link to="/">Uvodní stránka</Link></p>
    </div>
  )
}

export default Error;