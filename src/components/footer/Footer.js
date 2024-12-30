import "./Footer.sass";
import LinkedIn from './footer-img/LinkedIn.svg';
import Facebook from './footer-img/Facebook.svg';
import Twitter from './footer-img/Twitter.svg';
import Instagram from './footer-img/Instagram.svg';
import Skype from './footer-img/Skype.svg';
import Pinterest from './footer-img/Pinterest.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="#">New arrivals</a></li>
                        <li><a href="#">Best sellers</a></li>
                        <li><a href="#">Recently viewed</a></li>
                        <li><a href="#">Popular this week</a></li>
                        <li><a href="#">All products</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Crockery</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Homeware</a></li>
                        <li><a href="#">Plant pots</a></li>
                        <li><a href="#">Chairs</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Our company</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Vacancies</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Returns policy</a></li>
                    </ul>
                </div>
                <div className="footer-mailing-list">
                    <h4>Join our mailing list</h4>
                    <div className="mailing-list">
                        <input type="email" placeholder="your@email.com"/>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p>Copyright 2022 Avion LTD</p>
                <div className="social-icons">
                    <a href="#"><img src={LinkedIn} alt="LinkedIn"/></a>
                    <a href="#"><img src={Facebook} alt="Facebook"/></a>
                    <a href="#"><img src={Instagram} alt="Instagram"/></a>
                    <a href="#"><img src={Skype} alt="Skype"/></a>
                    <a href="#"><img src={Twitter} alt="Twitter"/></a>
                    <a href="#"><img src={Pinterest} alt="Pinterest"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;