import "./FirstListing.css";
import Chair from "./firstListing-img/DandyChair.png";
import VaseSet from "./firstListing-img/VaseSet.png";
import Vase from "./firstListing-img/Vase.png";
import Lamp from "./firstListing-img/Lamp.png";
import Button from "../button/Button";

function FirstListing() {
    return (
        <div>
            <h1>New ceramics</h1>
            <div className="ceramics">
                <div className="listing-block">
                    <img src={Chair} alt="DandyChair"/>
                    <div className="details">
                        <p>The Dandy chair</p>
                        <p>£250</p>
                    </div>
                </div>
                <div className="listing-block">
                    <img src={VaseSet} alt="VaseSet"/>
                    <div className="details">
                        <p>Rustic Vase Set</p>
                        <p>£155</p>
                    </div>
                </div>
                <div className="listing-block">
                    <img src={Vase} alt="Vase"/>
                    <div className="details">
                        <p>The Silky Vase</p>
                        <p>£125</p>
                    </div>
                </div>
                <div className="listing-block">
                    <img src={Lamp} alt="Lamp"/>
                    <div className="details">
                        <p>The Lucy Lamp</p>
                        <p>£399</p>
                    </div>
                </div>
            </div>
            <Button />
        </div>
    );
}

export default FirstListing;