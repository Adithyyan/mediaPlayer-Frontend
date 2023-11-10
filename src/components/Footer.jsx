import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ width: "100%", height: "300px" }}
      className="d-flex align-items-center justify-content-center flex-column "
    >
      <div className="footer d-flex gap-5">
        <div className="website">
          <h4>
            <i className="fa-solid fa-video fs-3 me-3 text-warning"></i>
            Video Player
          </h4>
          <h6>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            voluptatum.
          </h6>
        </div>
        <div className="links d-flex flex-column ">
          <h4>Links</h4>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <Link
            to="/watchhistory"
            style={{ textDecoration: "none", color: "white" }}
          >
            watch History
          </Link>
        </div>
        <div className="guides d-flex flex-column ">
          <h4>Guides</h4>
          <Link
            to="https://www.react.org/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to="https://react-bootstrap.netlify.app/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to="https://bootswatch.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Bootstrap Watch
          </Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="d-flex gap-3">
            <input className="form-control " type="text" />
            <button className="btn btn-warning ">Subscribe</button>
          </div>
          <div className="d-flex gap-5 mt-2">
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-linkedin fa-2x"></i>
          <i class="fa-brands fa-facebook fa-2x"></i>
          </div>
        </div>
      </div>
      <p className="text-center">
        {" "}
        copyright @ 2023 media player built with reat
      </p>
    </div>
  );
};
export default Footer;