
import "./AboutMe.scss";
import { Container, Row, Col } from 'react-bootstrap';
import picture1 from "../../images/selfPhoto.jpg";
import picture2 from "../../images/selfPhoto2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
    return (

        <Container className="mt-5">
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="mb-5">Hana Jedličková</h1>
                    <h4>
                        Kdo jsem?
                    </h4>
                    <p>

                        Jmenuji se Hana Jedličková a v oboru fotografie se pohybuji už od dětství. Vše začalo, už když mi bylo 11 let a já dostala svůj první fotoaparát. Od té doby se fotografie stala moji životní cestou.
                    </p>
                    <p>
                        Není to pro mě pouze koníček či práce. Je to dalo by se říci můj životní směr, ve kterém jsem se rozhodla zdokonalovat a vložit do toho kus sebe. Své znalosti v oboru jsem rozvíjela jak na střední, tak i na vysoké škole.
                    </p>
                </Col>

                <Col xs={12} md={6} align="center" className="al">
                    <img className="about-me-photo" src={picture2} alt="Hanka" />
                </Col>
            </Row>

            <Row className="align-items-center flex-column-reverse flex-md-row">
                <Col xs={12} md={6} align="center">
                    <img className="about-me-photo" src={picture1} alt="Hanka" />
                </Col>
                <Col xs={12} md={6}>
                    <h4>
                        Přístup ke klientům je pro mě to nejdůležitější!
                    </h4>
                    <p>
                        Díky těmto zkušenostem jsem dosáhla svého fotografického stylu, a především si ujasnila, jak přistupovat ke klientům. Je pro mě opravdu důležité vkládat do své práce srdce a vnímat vás individuálně. Zaměřuji se tedy jak na lidi se zkušenostmi s focením, tak samozřejmě i na ty, kteří chtějí vystoupit z komfortní zóny a splnit si poprvé svůj sen stát před objektivem.
                    </p>
                    <p>
                        Podstatné je zde zmínit i to, že si nevybírám, koho budu fotit! Nezáleží tedy na vašem věku ani například na typu postavy. Mojí prací je ukázat každému z vás, že jste fotogeničtí a splnit vaše očekávání o slušivých a přirozených fotkách. Přesně to je ta kouzelná příležitost, vyzdvihnout to, v čem jste zrovna vy jedineční.
                    </p>
                    <p>
                        Náš společně strávený čas bude přizpůsoben každému zvlášť. S nervozitou se zde samo sebou počítá, ale my vše pokoříme a společný čas si užijeme s úsměvem na plno. Zakládám si na přátelské atmosféře.
                    </p>
                    <p>
                        Baví mě plnit vám vaše představy, tvořit sezónní nebo tematické scény, a především mě baví poznávat vás a trávit s vámi čas. Neexistuje u mě žádný spěch ani nátlak a největší odměnou je pro mě vaše spokojenost. Úplně nejkrásnější pocit je pro mě ten, když vidím, jak se vaše nervozita mění v sebevědomí a odcházíte usměvaví a plní pozitivní energie.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <h4>
                        Co vlastně fotím?
                    </h4>
                    <p>

                        Nejdůležitější je pro mě vaše představa. Kde a co budeme fotit je zcela na vás a já vám přání ráda splním. Pokud však představu nemáte, dejte mi volnou ruku a o dokonalý výsledek se postarám.

                        Nedokážu říci, co fotím nejraději. Každé focení je pro mě obrovským zážitkem, nehledě na to, zda fotím jednotlivce, rodiny, děti, mazlíčky, firemní akce, svatby...
                    </p>
                    <p>
                        Z mého portfolia lze z cela jistě poznat, že největší oblibu mám ve focení v exteriéru. Ať už v městském prostředí, kde si můžeme vyhrát s moderní či historickou architekturou, tak hlavně v přírodě. Například žena a příroda je to nejkrásnější a jedinečné propojení, které následně vyzařuje nesmírnou přirozeností a jemností.
                    </p>
                    <p>
                        Nabízím i focení uvnitř, v malém ateliéru, který je založen především na konceptu jednoduchosti a minimalismu. Je tedy vhodný pro každého, kdo jednoduchost miluje. Fotí se zde jak jednotlivci a páry, tak i rodiny či domácí mazlíčci.
                    </p>
                    <p>
                        Musím však zdůraznit, že ať už si vyberete focení v interiéru či v exteriéru, vše má své kouzlo a výsledek bude stát za to!
                    </p>
                    <p>
                        Pokaždé je mi ctí, být vám po boku při důležitých dnech vašeho života a nejrůznějších akcích, při kterých pro vás mohu zachytit a uchovat vzpomínky na celý život. (Ať už to jsou svatby, narozeniny, křtiny, těhotenství nebo narození potomka ...)
                    </p>
                </Col>

                <Col xs={12} md={6} align="center" className="al">
                    <img className="about-me-photo" src={picture2} alt="Hanka" />
                </Col>
            </Row>
            <Row className="align-items-center flex-column-reverse flex-md-row">
                <Col xs={12} md={6} align="center">
                    <img className="about-me-photo" src={picture1} alt="Hanka" />
                </Col>
                <Col xs={12} md={6}>
                    <h4>
                        Sebevědomí se dá budovat i formou fotografie.
                    </h4>
                    <p>
                        Připadáte si nefotogeničtí, ale toužíte po svých krásných snímcích? Brání vám strach? U mě jste na správném místě!
                    </p>
                    <p>
                        Často se setkávám s tím, že především ženy odmítají focení i přesto, že je to jejich sen, a to jen z toho důvodu, že si nepřijdou fotogenické anebo mají strach z pózování. Od toho tady jsem a celým
                        focením vás budu s radostí provázet. Poradím s myšlenkou, s tím, co na sebe, a dokonce i přijdeme na vhodné pózy a výrazy přímo pro vás. Je důležité vnímat jedinečnost a originalitu každého člověka. Během focení můžete počítat s tím, že vám ukážu náhledy fotografií a vše budeme průběžně konzultovat, abychom fotografie vyladili k dokonalosti. Stačí vykročit ze své komfortní zóny a dát sobě šanci.
                    </p>
                    <p>
                        Jak vždy říkám, dokud to člověk nezkusí, nikdy nezjistí, co v sobě ukrývá.
                    </p>

                </Col>
            </Row>
            <Row>
                <Col className="text-align-center">
                    <h4>
                        Pár slov na závěr.
                    </h4>
                    <p>
                        Focení není jen o strachu a nervozitě, je to především o zážitku, zkušenosti, pozitivní energii, a především o zachycení vzpomínek. Společný čas si užijeme naplno a výsledné fotografie budou i památkou na váš den před objektivem.

                        Pokud vás zaujala moje tvorba a přístup, stačí se ozvat a budu vám plně k dispozici.
                    </p>
                    <p>
                        Těším se vás a na to, co krásného společně vytvoříme.
                    </p>
                    <p>S láskou,</p>
                    <p>Hanka♥</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;