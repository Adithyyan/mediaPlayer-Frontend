import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#" className="d-flex p-3 align-items-center">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
          >
            <i className="fa-solid fa-video fs-3 me-3 text-warning"></i>
            Video Player
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;