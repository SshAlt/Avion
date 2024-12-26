import "./Email.css"

function Email() {
    return (
        <div className="email">
            <div className="text-container">
                <h1 className="join">Join the club and get the benefits</h1>
                <p>Sign up for our newsletter and receive exclusive offers on new <br/>
                    ranges, sales, pop up stores and more</p>
                <div className="sign-up">
                    <input type="email" className="sign-up" placeholder="your@email.com" />
                    <button className="sign-up-button">Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Email;