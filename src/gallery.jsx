import hornedbeasts from "hornedbeasts.jsx";
import beastData from "assets/data.json"
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {beastData.map(obj => {
              return (
                <hornedbeasts 
                key={obj._id}
                title={obj.title} 
                description={obj.description} 
                imageUrl={obj.image_url} />  
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery
