import { Link } from "react-router-dom";
import { createNewPlayer } from '../App.jsx';

const Navbar = ({setPlayer}) => {   

    const handleReset = () =>{
        setTimeout(() => {
            setPlayer(createNewPlayer());
        }, 1000); // 1000ms = 1 segundo de retardo
    }

    return (<>
        <div className="nav">
            <div className="logo">
                <Link className="nav-link" to="/Home">by: KevinHGX </Link>
            </div>
            <div className="nav-links">
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Home" onClick={handleReset} >Home</Link>
                    </div>
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Select" onClick={handleReset} >Select</Link>
                    </div>
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Ranking">Ranking</Link>
                    </div>

            </div>
        </div>
    </>);
}

export default Navbar;