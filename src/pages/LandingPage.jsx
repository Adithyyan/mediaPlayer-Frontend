import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigateByUrl = useNavigate()
  return (
    <div>
      <Row className="mt-5 mb-5 d-flex justify-content-evenly align-items-center w-100">
        <Col></Col>
        <Col lg={5}>
          <h2>
            Welcome to <span className="text-warning">Media Player</span>
          </h2>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            veritatis reprehenderit, maiores libero sequi cupiditate enim at,
            ipsam inventore, pariatur neque earum natus magni? Suscipit neque a
            ex facere ducimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum nesciunt quasi ea incidunt accusantium nobis
            voluptates esse a molestias deserunt? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptatum nostrum reprehenderit odit
            illo veniam necessitatibus quasi, optio beatae incidunt deserunt.
          </p>
          <button onClick={()=>navigateByUrl('/home')} className="btn btn-warning">
            Get Started <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            style={{ width: "100%" }}
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt=""
          />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center w-100 flex-column ">
        <h3>Feacture</h3>
        <div className="d-flex gap-5 mt-5">
          <Card style={{ width: "19rem" }}>
            <Card.Img style={{width:'302px', height:'300px'}}
              variant="top"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "19rem" }}>
            <Card.Img style={{width:'302px', height:'300px'}}
              variant="top"
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "19rem" }}>
            <Card.Img style={{width:'302px', height:'300px'}}
              variant="top"
              src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between">
          <Row>
            <Col lg={6}>
              <h3 className="text-warning mb-5">Simple fast and Powerful</h3>
              <h6 className='mb-3'> Play<span className='text-warning'>Everything</span>  : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odjcbadvjdakc </h6>
          <h6 className='mb-3'> Play <span className='text-warning'>Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit.sint</h6>
          <h6 className='mb-3 '> Play<span className='text-warning'>Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint</h6>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <iframe width='160%' height='450px' src="https://youtube.com/embed/WWr9086eWtY" title="LEO - ordinary person Lyric | Thalapathy Vijay ,Anirudh Ravichander | Lokesh Kanagaraj" frameBorder='0'allow='accelerometer;autoplay; clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share' allowFullScreen></iframe>
            </Col>
          </Row>

        </div>
      </div>
    </div>
  );
};
export default LandingPage;