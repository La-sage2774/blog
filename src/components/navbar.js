 import { Link } from "react-router-dom";
 const Navbar = () =>{
    return(
        <nav  className="navbar">
            <h2>Blog post</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">new blog</Link> 
                {/* <Link to="/BlogDetails/id">Blog Details</Link> */}
                {/* <Link to="/NotFound">NotFound</Link>  */}
               
            </div>
        </nav>
    );
 }

 export default Navbar;