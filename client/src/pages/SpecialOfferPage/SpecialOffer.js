import "./SpecialOffer.scss";

const SpecialOffer = () => {
  const readOnlyHandler = (e) => {
    e.preventDefault();
    let tst = document.getElementById("test")
    if (tst.hasAttribute('readonly')) {
      tst.removeAttribute('readonly')
    } else {
      tst.setAttribute('readonly', 'readonly');
    }
  }
  return (
    <div>SpecialOffer
      <input id="test" placeholder="TEXT SEM" type="text" />
      <input type="submit" value="ReadOnly?" onClick={(e)=>readOnlyHandler(e)} />
    </div>
    
  )
};

export default SpecialOffer;