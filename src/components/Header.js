
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <header style={styles.header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
               
                <Link className="navbar-brand" to="/">
                    <img 
                        src="/ThePenClupLogo.png" 
                        alt="Logo"
                        className="d-inline-block align-top"
                        style={styles.logo} 
                    />
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    );
}

const styles={
    header:{
        backgroundColor: '#282c34',
    },
    logo:{
        width: '200px',
        height: 'auto' 
    }
}

export default Header;