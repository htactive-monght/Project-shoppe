import React from 'react';
import { Row, Col, Button, Input,Carousel } from 'antd';


function Slider() {
    return (
        <div className="slider">
            <Row>
                <Col span={16}>
                    <div className="sliders"> 
                    <Carousel autoplay>
                        <div> <img className="sliderss" width='100%' height='400px' src="https://sonycenter.sony.com.vn/Data/Sites/1/media/File%20upload/summerhotbuy_20150615---copy.jpg" ></img> </div>
                        <div> <img className="sliderss" width='100%' height='400px'  src="https://picas.com.vn/wp-content/uploads/2018/11/Banner-quang-cao-giay-Dr.Martens-1290x800.png" ></img> </div>
                        <div> <img className="sliderss" width='100%' height='400px'  src="https://blog.dmagroup.vn/wp-content/uploads/2018/08/thiet-ke-banner-quang-cao-truc-tuyen-3.jpg" ></img> </div>
                        <div> <img className="sliderss" width='100%' height='400px'  src="https://lambienquangcao.org/wp-content/uploads/2019/11/maxresdefault-e1572593596967.jpg" ></img> </div>
                    </Carousel>   
                    </div>
                </Col>
                <Col span={8}>
                    <Row>
                        <Col span={24}>
                            <div className="slider1">
                            <img className="benner" src="https://alphaschool.edu.vn/wp-content/uploads/2019/03/Banner-Smart-Summer-Joy.jpg" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className="slider2"> 
                            <img className="benner" src="https://media.shoptretho.com.vn/upload/image/news/20170608/615x400.png" ></img> 
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}
export default Slider;
