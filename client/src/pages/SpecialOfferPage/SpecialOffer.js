import "./SpecialOffer.scss";
import Special1 from "../../images//Special1.jpg"
import Special2 from "../../images//Special2.jpg"

const SpecialOffer = () => {
  return (
    <section className="news-page page-header-margin">
      <div className="special-offer-pictures">
        <div className="special-offer-pictures-box">
          <img src={Special1} alt="" />
        </div>
        <div className="special-offer-pictures-box">
          <img src={Special2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;