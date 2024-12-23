import './FirstFeature.css';
import Delivery from './firstFeature-img/Delivery.svg';
import Verify from './firstFeature-img/Veryfied.svg';
import Card from './firstFeature-img/Card.svg';
import Sprout from './firstFeature-img/Sprout.svg';

function FirstFeature() {
        return (
            <div>
                <h4 className="brand-diff">What makes our brand different</h4>
                <div className="feature">
                    <div className="feature-block Delivery">
                        <img src={Delivery} alt="Delivery"/>
                        <h6>Next day as standard</h6>
                        <p>Order before 3pm and get your order <br/>
                            the next day as standard</p>
                    </div>
                    <div className="feature-block Verify">
                        <img src={Verify} alt="Verify"/>
                        <h6>Made by true artisans</h6>
                        <p>Handmade crafted goods made with <br/>
                            real passion and craftmanship</p>
                    </div>
                    <div className="feature-block Card">
                        <img src={Card} alt="Card"/>
                        <h6>Unbeatable prices</h6>
                        <p>For our materials and quality you <br/>
                            won’t find better prices anywhere</p>
                    </div>
                    <div className="feature-block Sprout">
                        <img src={Sprout} alt="Sprout"/>
                        <h6>Recycled packaging</h6>
                        <p>We use 100% recycled packaging to <br/>
                            ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
                );
                }

                export default FirstFeature;