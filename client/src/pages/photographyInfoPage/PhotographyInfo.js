import "./PhotographyInfo.scss";
import { Link } from "react-router-dom";
const PhotographyInfo = () => {
  return (
    <>
      <section className="photography-info-page">
        <div className="photography-info-title">
          <h1>Informace k focení</h1>
        </div>
        <div className="photography-info-content">
          <h4>Jak si domluvit focení?</h4>
          <ul>
            <li>Objednat si svůj termín na focení můžete zde vyplněním formuláře v kategorii <Link className="" to="/kontakt">kontakt</Link>. Můžete mě ale také kontaktovat do zprávy na sociálních sítích, jako je <a href="https://www.facebook.com/Fotografieodhanky" target="_blank" rel="noopener noreferrer">Facebook</a> nebo <a href="https://www.instagram.com/fotografie_od_hanky/" target="_blank" rel="noopener noreferrer">Instagram</a>.</li>
          </ul>
          <h4>Jak takové focení probíhá?</h4>
          <ul>
            <li>Nejprve vždy prostřednictvím zpráv probereme vaši představu o fotografiích. Váš nápad je u mě na prvním místě. Pokud sami představu nemáte, společně ji vymyslíme do detailu. Můžete si najít i nějaké konkrétní inspirace, samozřejmě jen pokud chcete.</li>
            <li>Následně se sejdeme na domluveném místě a fotíme cca 2 hodiny. Čas se může lišit dle náročnosti realizace.</li>
            <li>Bojíte se pózování? Ke každému se hodí jiná póza a jiný výraz. Vše vás naučím.</li>
            <li>Neexistuje u mě žádný nátlak, spěch ani stres.</li>
            <li>Během focení spolu vše konzultujeme a ladíme k dokonalosti.</li>
            <li>Záleží mi na tom, aby pro vás váš foto den byl největším zážitkem a vzpomínkou!</li>
          </ul>
          <h4>Co s sebou?</h4>
          <ul>
            <li>Vždy říkám, že je důležité vzít si oblečení, ve kterém se cítíte dobře a sami sobě se v něm líbíte. Také samozřejmě odpovídající nápadu, který se bude fotit.</li>
            <li>Pokud fotíme klasický portrét, vždy se hodí džíny, teplákové soupravy, šaty, sukně, sako, tričko, mikina, košile...</li>
            <li>Pokud fotíme odvážnější snímky, hodí se nějaké body, sladěné spodní prádlo, podvazky, silonky klasické i se vzorem, jednobarevná košile...</li>
            <li>Vše záleží na vkusu a na představě. S výběrem ráda individuálně pomohu.</li>
            <li>Vždy se k výběru oblečení snažte sladit i boty.</li>
            <li>Dále s sebou rozhodně zabalte hřeben. Případně i kosmetickou taštičku na poupravení.</li>
            <li>Chybět nesmí dobrá nálada a úsměv, který sluší každému! :)</li>
          </ul>
          <h4>Co následuje po focení?</h4>
          <ul>
            <li>Po focení vám zašlu neupravené náhledy snímků, ze kterých si sami online vyberete ty fotografie, které se vám budou líbit. (Vše k výběru vám vysvětlím na místě).</li>
            <li>Na výběr budete mít dostatek času.</li>
            <li>Jakmile od vás obdržím výběr, začnu pracovat na úpravách.</li>
            <li>Hotové fotografie vám pošlu elektronicky upravené a přirozeně retušované max. do 5 dnů od poslání výběru.</li>
            <li>Neupravené fotografie neposkytuji.</li>
          </ul>
          <h4>Nevíte si rady?</h4>
          <ul>
            <li>Pokud vám něco nebude jasné, <Link className="" to="/kontakt">kontaktujte mě</Link>. Ráda vám s čímkoliv poradím a pomohu.</li>
          </ul>
        </div>
      </section>
    </>
  )
};

export default PhotographyInfo;