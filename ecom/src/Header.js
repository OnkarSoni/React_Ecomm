import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
    // This will help to fetch register or login user from local Storage
    const user = JSON.parse(localStorage.getItem('user-info'));
    const history = useNavigate();
    function logout() {
        localStorage.clear();
        history('/login');
    }
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand> <Link to="/" className="home_ico">HOME</Link></Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/add">Add Product</Link>
                                    <Link to="/upd">Update Product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                        }

                    </Nav>
                    {
                        localStorage.getItem('user-info') ?

                            <Nav>
                                <NavDropdown title={user && user.name}>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                            :
                            null
                    }

                </Container>
            </Navbar>
        </div>
    )
}
export default Header;