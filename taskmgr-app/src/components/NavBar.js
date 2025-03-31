import { Link } from "react-router-dom";
function NavBar() {
    return (
      <>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/contactus">Contact Us</Link> {" | "}
          </nav>
      </>
    );
}
 
export default NavBar;