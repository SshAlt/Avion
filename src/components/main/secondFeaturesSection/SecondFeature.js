import "./SecondFeature.sass";
import Interior from "./secondFeature-img/Interior.png";

function SecondFeature() {
    return (
        <div className="second-feature-block">
            <div className="left-content">
                <h1>From a studio in London to a global brand with <br/>
                    over 400 outlets</h1>
                <p>When we started Avion, the idea was simple. Make high quality furniture <br/>
                    affordable and available for the mass market.</p>
                <p> Handmade, and lovingly crafted furniture and homeware is what we live, <br/>
                    breathe and design so our Chelsea boutique become the hotbed for the <br/>
                    London interior design community.</p>
                <button className="second-feature-btn">Get in touch</button>
            </div>
            <img src={Interior} alt="Interior" className="interior-img"/>
        </div>
    );
}

export default SecondFeature;