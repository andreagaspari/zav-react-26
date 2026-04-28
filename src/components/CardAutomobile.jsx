import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router'
import { Card, Button, Stack } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

export default function CardAutomobile({
    automobile = {}
}) {

    const [isInWishlist, setInWishlist] = useState(false)
    const navigate = useNavigate();

    return <>
        <Card id={"cardAutoo-" + automobile.id}>
            <Card.Img 
                variant="top" 
                style={
                    {
                        aspectRatio: "16/9",
                        objectFit: "cover"
                    }
                }
                src={automobile.immagine ?? "https://placehold.co/600x400"}
                onClick={() => {
                    navigate(`/automobili/${automobile.id}`)
                }}
            />
            <Card.Body>
                <Card.Title>
                    <Stack direction="horizontal">
                        <Link className="me-auto" to={`/automobili/${automobile.id}`}>
                            { automobile.marca + " " + automobile.modello }
                        </Link>
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