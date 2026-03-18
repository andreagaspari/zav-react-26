import { useState } from 'react'
import { Card, Button, Stack } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

export default function CardAutomobile({
    automobile = {}
}) {

    const [isInWishlist, setInWishlist] = useState(false)
    console.log("Render CardAutomobile");

    return <>
        <Card id={"cardAutoo-" + automobile.id}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title>
                    <Stack direction="horizontal">
                        <span className="me-auto">
                            { automobile.marca + " " + automobile.modello }
                        </span>
                        <Button onClick={() => {
                            setInWishlist(!isInWishlist)
                        }}>
                            { (isInWishlist) ? <FaHeart /> : <FaRegHeart /> }
                        </Button>
                    </Stack>
                </Card.Title>
            </Card.Body>
            <Card.Footer>{automobile.anno}</Card.Footer>
        </Card>
    </>;
}