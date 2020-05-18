import React from "react";
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <header>more coming soon...</header>
                <div className="bendy-cult-dancer">
                    <div className="bendy-cult">
                        <img alt="logo" />
                    </div>
                    <div className="bendy-area top">
                        <div className="item">
                            <div className="bendy-content left">
                                <p>Tuesday</p>
                                <p>12-1 pm</p>
                                <p>Bendy Ballet</p>
                                <p>Bootcamp</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bendy-content right">
                                <p>Thurday</p>
                                <p>6-7 pm</p>
                                <p>Flexibility</p>
                                <p>Foundations</p>
                            </div>
                        </div>
                    </div>
                    <div className="bendy-area bottom">
                        <div className="item">
                            <div className="bendy-content left">
                                <p>Tuesday</p>
                                <p>6-7 pm</p>
                                <p>Friends &</p>
                                <p>Fam Jam</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bendy-content right">
                                <p>Saturday</p>
                                <p>7-9 pm</p>
                                <p>Bendy Cult</p>
                                <p>Clinic</p>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p>Donation Classes - Venmo@karanova</p>
                        <div className="bendy-insta">
                            <a href="https://www.instagram.com/bendycult">
                                <img alt="instagram" />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
