import React from 'react';
import Content from './Content';
import Footer from './Footer';
import '../../App.css'

function Homepage() {
    return (
        <div className="contents">
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

