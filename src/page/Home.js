import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (  
        <div>
            <Navbar />
            <h1>Home</h1>
            <div>
                <Link to="/list-car">
                    <button>List Car</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;