
import "./AboutMe.css"
import  { Container, Row, Col }  from 'react-bootstrap'
import picture1 from "../images/selfPhoto.jpg"
import picture2 from "../images/selfPhoto2.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
  return (

   <Container className="mt-5">
    <Row>
        <Col xs={12} md={6}>
            <h1 className="mb-5">Hana Jedličková</h1>
            <p>
                Quisque iuvaret purus tellus aliquam veniam. Adipisci tacimates duis animal erat laoreet. Mus dictumst nam
                ad ad. Neglegentur ea doctus non atqui. Sonet veniam inciderint ei ultricies tantas. Deseruisse liber
                sociosqu alia postulant. Tristique dicit adipiscing praesent facilis.
            </p>
            <p>
                Quisque iuvaret purus tellus aliquam veniam. Adipisci tacimates duis animal erat laoreet. Mus dictumst nam
                ad ad. Neglegentur ea doctus non atqui. Sonet veniam inciderint ei ultricies tantas. Deseruisse liber
                sociosqu alia postulant. Tristique dicit adipiscing praesent facilis.
            </p>
        </Col>

        <Col xs={12} md={6} align="center"  className="al">
            <img className="about_me_photo" src={picture2} alt="IGOR"  />
        </Col>
    </Row>

    <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col  xs={12} md={6} align="center">
            <img className="about_me_photo" src={picture1} alt="IGOR" />
        </Col>
        <Col xs={12} md={6}>
            <p>
                Quisque iuvaret purus tellus aliquam veniam. Adipisci tacimates duis animal erat laoreet. Mus dictumst nam
                ad ad. Neglegentur ea doctus non atqui. Sonet veniam inciderint ei ultricies tantas. Deseruisse liber
                sociosqu alia postulant. Tristique dicit adipiscing praesent facilis.
            </p>
            <p>
                Quisque iuvaret purus tellus aliquam veniam. Adipisci tacimates duis animal erat laoreet. Mus dictumst nam
                ad ad. Neglegentur ea doctus non atqui. Sonet veniam inciderint ei ultricies tantas. Deseruisse liber
                sociosqu alia postulant. Tristique dicit adipiscing praesent facilis.
            </p>
        </Col>
    </Row>
   </Container>
  )
}

export default AboutMe