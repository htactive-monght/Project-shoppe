import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Slider from './Slider'
import '../../App.css'

function Homepage() {
    return (
        <div className="contents">
              <div className="header">
                <Header />
            </div>
            <div className="slider">
                <Slider />
            </div>
            <div className="content">
                <Content />
            </div>
            <div className="footer">
                <Footer />
            </div>
           
        </div>
    )
}
export default Homepage;

