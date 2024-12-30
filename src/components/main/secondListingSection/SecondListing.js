import "./SecondListing.sass"
import Sofa from "./secondListing-img/Sofa.png"
import Chair1 from "./secondListing-img/Chair1.png"
import Chair2 from "./secondListing-img/Chair2.png"
import Button from "../button/Button";

function SecondListing() {
    return (
        <div>
            <h1 className="sub-title">Our popular products</h1>
            <div className="popular">
                <div className="products">
                    <img src={Sofa} alt="Sofa"/>
                    <div className="info">
                        <p>The Poplar suede sofa</p>
                        <p>£980</p>
                    </div>
                </div>
                <div className="products">
                    <img src={Chair1} alt="Chair1"/>
                    <div className="info">
                        <p>The Dandy chair</p>
                        <p>£250</p>
                    </div>
                </div>
                <div className="products">
                    <img src={Chair2} alt="Chair2"/>
                    <div className="info">
                        <p>The Dandy chair</p>
                        <p>£250</p>
                    </div>
                </div>
            </div>
            <Button />
        </div>
    );
}

export default SecondListing;