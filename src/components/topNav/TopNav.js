import './TopNav.css';
import Seach from './topNav-img/Search.svg';
import Shoping from './topNav-img/Shoping-cart.svg';
import User from './topNav-img/User.svg';

function TopNav() {
    return (
        <div>
            <header className="navbar">
                <div className="navbar-left">
                    <a href="#" className="icon search-icon"><img src={Seach} alt=""/></a>
                </div>
                <div className="navbar-center">
                    <h1 className="logo">Avion</h1>
                </div>
                <div className="navbar-right">
                    <a href="#" className="cart-icon"><img src={Shoping} alt=""/></a>
                    <a href="#" className="user-icon"><img src={User} alt=""/></a>
                </div>
            </header>
            <nav className="nav-links">
                <ul>
                    <li><a href="#plant-pots">Plant pots</a></li>
                    <li><a href="#ceramics">Ceramics</a></li>
                    <li><a href="#tables">Tables</a></li>
                    <li><a href="#chairs">Chairs</a></li>
                    <li><a href="#crockery">Crockery</a></li>
                    <li><a href="#tableware">Tableware</a></li>
                    <li><a href="#cutlery">Cutlery</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;