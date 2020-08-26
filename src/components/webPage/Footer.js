import React from 'react';
import { Row, Col, Button, Input } from 'antd';

function Footer() {
    return (
        <div className="contents_footer">
            <div className="footers">
                <Row>
                    <Col span={24}>
                        <div className="footerContent">
                            <h3>SHOPEE - MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</h3>
                            <p>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn hiệu quả dành cho bạn. Bản chất của Shopee là một social ecommerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tùy chọn các tính năng “Shop tạm nghỉ” hoặc tự tạo riêng cho mình một chương trình khuyến mãi để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.</p>
                            <h3>TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI</h3>
                            <p>Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng miễn phí mà không phải chịu bất kỳ một khoản phí hoa hồng nào. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau: - Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay. - Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng. - Cập nhập thông tin khuyến mãi, Shopee flash sale nhanh chóng và liên tục. Tại Shopee, bạn có thể lấy các mã khuyến mãi, mã giảm giá Shopee và mã miễn phí vận chuyển toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như Shopee 9.9 sale, Shopee 10.10 sale, Shopee 11.11 sale, Shopee 12.12 sale, Shopee Tết Sale. Đây là thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với mức giá giảm kỉ lục.</p>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                    Trung Tâm Trợ Giúp
                    Shopee Blog
                    Shopee Mall
                    Hướng Dẫn Mua Hàng
                    Hướng Dẫn Bán Hàng
                    Thanh Toán
                    Shopee Xu
                    Vận Chuyển
                    Trả Hàng & Hoàn Tiền
                    Chăm Sóc Khách Hàng
                    Chính Sách Bảo Hành
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <h1>VỀ SHOPEE</h1>
                            Giới Thiệu Về Shopee Việt Nam
                            Tuyển Dụng
                            Điều Khoản Shopee
                            Chính Sách Bảo Mật
                            Chính Hãng
                            Kênh Người Bán
                            Flash Sales
                            Chương Trình Tiếp Thị Liên Kết Shopee
                            Liên Hệ Với Truyền Thông
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <h1>LOGO</h1>
                   <img src="y-nghia-logo-shopee.jpg" width="200px" height="150px"></img>
                 </Col>
            </Row>
            </div>
        </div>

    )
}
export default Footer;
