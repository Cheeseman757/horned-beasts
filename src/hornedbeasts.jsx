import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const HornedBeasts = (props) => {
    const [likes, setLikes] = useState(0);
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.imageUrl} alt="horned beast image" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button onClick={() => setLikes(likes + 1)} variant="primary">💖 Like</Button>
          </Card.Body>
        </Card>
      );
    }

export default HornedBeasts;
