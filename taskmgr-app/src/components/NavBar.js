import { Link } from "react-router-dom";
function NavBar() {
    return (
      <>
          <nav className="nav-bar">
            <Link to="/">Home</Link> {" | "}
            <Link to="/contactus">Contact Us</Link> {" | "}
          </nav>
      </>
    );
}
 
export default NavBar;