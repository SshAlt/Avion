import './HeroBlocks.css';
import Chair from './heroBlock-img/Chair.png';

function HeroBlocks() {
    return (
            <div className="hero-blocks">
                <section className="container">
                    <div className="top-content">
                        <p className="top-contentText">The furniture brand for the <br/> future, with timeless designs</p>
                        <button className="top-contentBtn">View collection</button>
                    </div>
                    <div className="containerArticle">
                        <p className="containerText">A new era in eco friendly furniture with Avelon, the French luxury retail brand <br/>
                            with nice fonts, tasteful colors and a beautiful way to display things digitally <br/> using modern web technologies.</p>
                    </div>
                    <div className="containerImage">
                        <img src={Chair} alt="Chair"/>
                    </div>
                </section>
            </div>
    );
}

export default HeroBlocks;