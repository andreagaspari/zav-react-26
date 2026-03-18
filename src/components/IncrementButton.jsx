import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function IncrementButton() {
    const [clicked, setClicked] = useState(0)

    return <Button onClick={() => {
        setClicked(clicked + 1)
    }}>
        {clicked}
    </Button>
}