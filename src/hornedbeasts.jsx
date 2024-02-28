import { useState } from 'react';
import { Card } from 'react-bootstrap';

function hornedbeasts(props) {
    const [likes, setLikes] = useState(0);
    return (
        <>
            <Card.Img style={{width:"50%"}} onClick={() => setLikes(likes + 1)} src={props.imageUrl} alt="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text> {props.description} </Card.Text>
                <Card.Text> Favorites: {likes} </Card.Text>
            </Card.Body>
        </>
    )
}

export default HornedBeast;
