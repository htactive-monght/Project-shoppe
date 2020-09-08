import React, {useState}from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row, Col, Button } from 'antd';
import '../../App.css';
import { StarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
function DetailProduct(props) {
    const item = props.location.params;

    return (
        <div className="contents">
            <div className="header">
                <Header />
            </div>
            <div className="contentDetail">
                <div className="all_contents">
                    <Row className="center">
                        <Col span={24}>
                            <div class="vertical-menuss">
                                <a href="#home">Shopee  </a>
                                <a href="#home">Túi Ví </a>
                                <a href="#home">Túi đeo chéo nữ</a>
                                <a href="#home"> Túi đeo chéo nữ</a>
                                <a href="#home">Áo thể thao</a>
                                <a href="#home"> Áo dài </a>
                                <a href="#home">Mũ</a>
                                <a href="#home"> Túi xách đeo chéo đựng điện thoại + Móc treo gấu BEIBAOBAO DC31 </a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="contentpicture">
                        <Col span={8}>
                            <Row  className="contentpictureMain">
                                <Col span={24}>
                                    <img  width="100%" height="100%" src={item.item.avata}></img>
                                </Col>
                            </Row>
                            <Row className="danhmucs">
                                <Col span={24} >
                                    <div class="vertical-menus">
                                        <a href="#home">
                                            <div className="menucons">
                                                <img width="70px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlmMAlfrpT7RtfRuK3U0a9VFH8VXB131xExg&usqp=CAU"></img>
                                                <div> Thiết bị điện</div>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <img width="70px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfja1Yvh6R8kMDrjzXhhiEjeGHVfSPvGcURg&usqp=CAU"></img>
                                                <div> Thiết bị nhà bếp</div>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <img width="70px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT45W0Qx34mMR08NMqYVoIwk3fpm7P2Bk2rxA&usqp=CAU"></img>
                                                <div> Quần áo</div>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <img width="70px" height="50px" src="https://storage.googleapis.com/cdn.nhanh.vn/store/13829/ps/20180711/bo_____do_____the_____thao_nam_vansydical_vs99___Den_739x739.jpg"></img>
                                                <div> Đồ thể thao</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Row className="danhmucs">
                                <Col span={24}>
                                    <label>Yêu thích</label>
                                    <h3>Túi xách đeo chéo đựng điện thoại + Móc treo gấu BEIBAOBAO DC31</h3><br />
                                    <div class="vertical-menus">
                                        <a href="#home">
                                            <div className="menucons">
                                                <div> <u>4.9</u> <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></div>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <div><u>404</u> Đánh giá</div>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <div> <u>1.9k</u> Đã bán</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="contentPrices">
                                <Row className="header3ss">
                                    <Col span={24}>
                                        <div class="vertical-menus">
                                            <a href="#home">
                                                <div className="menucons">
                                                    <p><del>đ 800.000 </del></p>
                                                </div>
                                            </a>
                                            <a href="#home">
                                                <div className="menucons">
                                                    <p><h2>đ 699.000 </h2></p>
                                                </div>
                                            </a>
                                            <a href="#home">
                                                <div className="menucons">
                                                    <p><label>Giảm giá</label></p>
                                                </div>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <div class="vertical-menus">
                                    <a href="#home">
                                        <div className="menucons">
                                            <img src="y-nghia-logo-shopee.jpg" width="50px" height="30px"></img>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="menucons">
                                            <p>Ở đâu rẻ hơn, Shopee hoàn tiền</p>
                                        </div>
                                    </a>
                                    <a href="#home">
                                        <div className="menucons">
                                            <QuestionCircleOutlined />
                                        </div>
                                    </a>
                                </div>
                            </Row>
                            <Row>
                                <Col  className="buttomButtom" span={4}>
                                    <p>Vận chuyển</p>
                                </Col>
                                <Col  className="buttomButtom" span={10}>
                                    <img width="30px" height="20px" src="https://f1.pngfuel.com/png/708/153/284/trucking-icon-car-icon-cargo-truck-icon-line-vehicle-png-clip-art.png"></img>
                                    Miễn Phí Vận Chuyển
                                    Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                                </Col>
                            </Row>
                            <Row>
                                <Col  className="buttomButtom" span={4}>
                                    <p>Màu sắc</p>
                                </Col>
                                <Col  className="buttomButtom" span={10}>
                                    <div class="vertical-menus">
                                        <a href="#home">
                                            <div className="menucons">
                                                <Button> Đen </Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <Button> Vàng </Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                            <Button> Nâu </Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                            <Button> Trắng </Button>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col  className="buttomButtom" span={4}>
                                    <p>Size</p>
                                </Col>
                                <Col  className="buttomButtom" span={10}>
                                    <div class="vertical-menus">
                                        <a href="#home">
                                            <div className="menucons">
                                                <Button> S</Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                                <Button> M </Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                            <Button> XL </Button>
                                            </div>
                                        </a>
                                        <a href="#home">
                                            <div className="menucons">
                                            <Button> XXL </Button>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col  className="buttomButtom" span={14}>
                                   <Row>
                                       <Col span={18}><Button>Thêm vào giỏ hàng</Button></Col>
                                       <Col span={6}><Button>Mua hàng</Button></Col>
                                   </Row>
                                </Col>
                            </Row>
                            <Row className="contentPricesss">
                                <Col span={24}> <hr/></Col>
                           
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="contentDetailss">
                        <Col span={5}></Col>
                        <Col span={5}></Col>
                        <Col span={5}></Col>
                        <Col span={5}></Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>

    )
}
export default DetailProduct;
