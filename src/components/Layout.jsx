import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import FloatingChatbot from "./FloatingChatbot";

export default function Layout() {
    const navigate = useNavigate;
    return <>
        <header className="border-bottom" style={{"backgroundColor": "#efefef"}}>
            <Navbar expand="lg" className="justify-content-between">
                <Container fluid>
                    <Navbar.Brand onClick={() => { navigate('/') }}>
                        RentAuto
                    </Navbar.Brand>
                    <LogoutButton variant="danger" />
                </Container>
            </Navbar>
        </header>
        <main>
            <Container>
                <Outlet />  
            </Container>
        </main>
        <footer className="border-top" style={{"backgroundColor": "#efefef"}}>
            <Container>
                <div className="d-flex p-1 justify-content-between w-100">
                    <p className="m-0">&copy; 2026 - All rights reserved</p>
                    <p className="m-0"><a href="https://mywebsite.it" target="_blank">MySite.it</a></p>
                </div>
            </Container>
            <FloatingChatbot />
        </footer>
    </>;
}