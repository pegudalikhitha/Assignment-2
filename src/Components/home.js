import React from 'react';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import './home.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

class Home extends React.Component {
    render() {
        return (
            <div className="main" id="Home">

                <div className="hom" >

                    <div className="container">
                        <div className="main_txt_home">
                            <div ><h1 className="highlighting_heading">Try 5 frames at home for free</h1></div>
                            <div className="button-wrapper">
                                <button type="submit" className="btn2">Shop Men</button>
                                <button href="#" type="submit" className="btn3">Shop Women</button>
                            </div>
                            <div className="quiz_link"><a href="#" className="link1">Take a quiz to find frames
                            <span><i class='fas fa-angle-right'></i></span></a></div>

                        </div>
                    </div>

                </div>

                <div className="second_division">
                    <div className="secondary_text">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</div>
                </div>

                <div className="third_division">
                    <div className="Imgholder1"><img src={image2} className="img-responsive"></img></div>
                    <div className="Imgholder2"><img src={image3} className="img-responsive"></img>
                        <div className="demo-block">
                            <div className="main_heading">Spotlight on blue light</div>
                            <div className="third_div_text">Our blue-light-filtering lenses are ideal for screen-heavy days. Add them to any optical frame with or without a prescription.</div>
                            <div><button href="#" type="submit" className="btn4">Learn more</button></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;