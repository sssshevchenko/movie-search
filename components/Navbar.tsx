import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const router = useRouter()

    const onClikHandler = async () => {
        if(router.pathname !== '/:title') router.push('/' + searchQuery)
        setSearchQuery('')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>Movie Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link onClick={() => router.push('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => router.push('/favourites')}>Favourite</Nav.Link>
                </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={onClikHandler}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;