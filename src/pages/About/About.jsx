import React, { useEffect } from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    CoreValuesIcon,
    LogoBgBlack,
    LogoBgWhite,
    MVC,
    MissionIcon,
    VisionIcon,
    logoPrimary,
    logoEEV,
} from "../../imgEntry";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { imagesGallery, welfarePolicy } from "../../data";

const cx = classNames.bind(styles);

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={cx("about")}>
            <motion.section
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <div className={cx("section-container")}>
                    <div className={cx("section-container-img")}>
                        <div className={cx("img-parent")}>
                            <span>Welcome to our EEV Group</span>
                            <div className={cx("img")}>
                                <img src={LogoBgBlack} />
                            </div>
                        </div>
                    </div>
                    <div className={cx("section-container-intro")}>
                        <h1>Giới thiệu</h1>
                        <p>
                            {/* Emmanuel Vietnam Trading Services Joint Stock
                            Company (EMMANUEL) was established in 2009. From
                            initial activities in the field of construction -
                            real estate, in 2022, the Emmanuel brand marks an
                            innovation in orientation. doing business with
                            investment in the field of clean energy through
                            solar cell factory projects. In particular, with the
                            desire to contribute to Vietnam&rsquo;s financial
                            market, our plan to establish a Commodity Exchange
                            with full functions and scale is being implemented
                            and gradually shaped. */}
                            EEV Group được thành lập vào năm 2009. Từ hoạt động
                            ban đầu trong lĩnh vực xây dựng - bất động sản, năm
                            2022, thương hiệu Emmanuel đánh dấu sự đổi mới trong
                            định hướng kinh doanh với việc đầu tư vào lĩnh vực
                            năng lượng sạch qua các dự án nhà máy sản xuất pin
                            mặt trời. Đặc biệt, với khát vọng đóng góp cho thị
                            trường tài chính Việt Nam, kế hoạch thành lập một Sở
                            Giao dịch hàng hoá với đầy đủ chức năng và quy mô
                            đang được chúng tôi triển khai và từng bước định
                            hình.
                        </p>
                        <p>
                            Qua hơn mười năm hoạt động, với tôn chỉ uy tín, chất
                            lượng được đưa lên hàng đầu, cùng việc luôn học hỏi,
                            tìm kiếm cơ hội kinh doanh trong các lĩnh vực ngành
                            nghề mới tại Việt Nam, đồng thời duy trì và phát
                            triển quan hệ tốt đẹp với các đối tác, Công ty đã
                            phát triển không ngừng và vẫn đang tiếp tục nỗ lực
                            để đóng góp cho đất nước.
                        </p>
                    </div>
                </div>
            </motion.section>
            <section data-aos="fade-right" data-aos-duration="1000">
                <div className={cx("section-container-2")}>
                    <div className={cx("section-container-2-left")}>
                        <div className={cx("section-container-item")}>
                            <div className={cx("section-icon")}>
                                <img src={MissionIcon} />
                            </div>
                            <div className={cx("section-content")}>
                                <h1>Sứ mệnh</h1>
                                <p>
                                    Với Sologen mang ý nghĩa “ tầm nhìn lớn
                                    tương lai xa” – chúng tôi xác định con đường
                                    phát triển của Tập đoàn là hội nhập thế giới
                                    4.0 và 5.0 trở thành tập đoàn tài chính lớn
                                    với việc sở hữu Sở giao dịch hàng hóa lớn
                                    nhất Việt Nam. Đưa hàng hóa Việt Nam ra thế
                                    giới với đúng giá trị cao nhất về chất lượng
                                    và tiêu chuẩn. Đưa việt nam trở thành một “
                                    Bến Cảng” trung chuyển hàng hóa lớn nhất khu
                                    vực Đông Nam Á, đóng góp GDP Quốc Gia và tạo
                                    công ăn việc làm cho nhiều nhân lực trẻ Đất
                                    Nước.
                                </p>
                            </div>
                        </div>
                        <div className={cx("section-container-item")}>
                            <div className={cx("section-icon")}>
                                <img src={VisionIcon} />
                            </div>
                            <div className={cx("section-content")}>
                                <h1>Tầm nhìn</h1>
                                <p>
                                    Trở thành tập đoàn lớn đa lĩnh vực chuyên
                                    nghiệp tại Việt Nam và khu vực. Xây dựng sở
                                    giao dịch Hàng Hóa để hoàn thiện mảnh ghép
                                    cuối cùng của nền tài chính Việt Nam với mục
                                    tiêu niêm yết trên sàn chứng khoán New York.
                                </p>
                            </div>
                        </div>
                        <div className={cx("section-container-item")}>
                            <div className={cx("section-icon")}>
                                <img src={CoreValuesIcon} />
                            </div>
                            <div className={cx("section-content")}>
                                <h1>Giá trị cốt lõi</h1>
                                <p>
                                    Tầm nhìn lớn tương lai xa - Mang lại những
                                    dịch vụ tài chính tối ưu nhất cho khách hàng
                                    với tôn chỉ Minh Bạch – Bền Vững - Hiệu quả.
                                </p>
                                {/* <p>
                                    Keepup with the market changing, always
                                    change and adapt to provide the best quality
                                    service to customers.
                                </p>
                                <p>
                                    Provide always-available support for
                                    Customers and partners to achieve success.
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className={cx("section-container-2-right")}>
                        <img src={MVC} />
                    </div>
                </div>
            </section>
            <section>
                <div
                    className={cx("section-container-3")}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className={cx("section-container-item")}>
                        <h1>Ông. Hoàng Kim Đồng</h1>
                        <span className={cx("position")}>Tổng giám đốc</span>
                        <span className={cx("desc")}>
                            Ông Hoàng Kim Đồng, ngoài vai trò là một luật sư,
                            Ông còn có hơn 40 năm kinh nghiệm trong điều hành
                            các doanh nghiệp xây dựng, thương mại dịch vụ, hoạt
                            động công nghệ thông tin, sản xuất, năng lượng...
                        </span>
                    </div>
                    <div
                        className={cx("section-container-item")}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h1>Bà. Phạm Hồng Hà</h1>
                        <span className={cx("position")}>
                            Phó Tổng Giám đốc
                        </span>
                        <span className={cx("desc")}>
                            Bà Phạm Hồng Hà có hơn 15 năm làm việc trong các
                            lĩnh vực chứng khoán – thị trường hàng hoá và thương
                            mại dịch vụ. Bà Hà có kinh nghiệm dày dạn và sự am
                            hiểu sâu sắc về vận hành thị trường giao dịch hàng
                            hoá tập trung.
                        </span>
                    </div>
                    <div
                        className={cx("section-container-item")}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h1>Ông. Phạm Xuân Đức</h1>
                        <span className={cx("position")}>
                            Chủ tịch Hội đồng quản trị
                        </span>
                        <span className={cx("desc")}>
                            Ông Phạm Xuân Đức có gần 40 năm kinh nghiệm trong
                            điều hành các doanh nghiệp xây dựng và thương mại
                            dịch vụ. Hiện Ông đảm nhận vị trí lãnh đạo của nhiều
                            doanh nghiệp lớn hoạt động đa ngành nghề.
                        </span>
                    </div>
                </div>
            </section>
            <section>
                <div
                    className={cx("section-container-4")}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1>Hoạt động</h1>
                    <div className={cx("line")}></div>
                    <ImageGallery images={imagesGallery} />
                </div>
            </section>
            <section>
                <div
                    className={cx("section-container-5")}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1>Chính sách phúc lợi</h1>
                    <div className={cx("line")}></div>
                    <h4>
                        EEV luôn chú trọng đến phúc lợi của Nhân viên tạo môi
                        trường hài lòng ổn định để nhân viên yên tâm cống hiến.
                        Từ đó sẽ có nhiều đóng góp tích cực và sáng tạo cho Công
                        ty.
                    </h4>
                    <div
                        className={cx("welfare-policy")}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        {welfarePolicy.map((item, index) => (
                            <div
                                className={cx("welfare-policy-item")}
                                key={index}
                            >
                                <div className={cx("welfare-policy-item-img")}>
                                    <img src={logoEEV} alt="" />
                                </div>
                                <div className={cx("welfare-policy-item-text")}>
                                    <span>{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
