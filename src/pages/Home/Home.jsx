import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import {
    Banner,
    Hitc,
    HnCab,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Interbuild,
    Kyoto,
    MB,
    MBLand,
    Vietcombank,
} from "../../imgEntry";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderPartner from "../../components/SliderPartner/SliderPartner";
import { useTranslation } from "react-i18next";
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

const Home = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx("home")}>
            <div className={cx("home-container")}>
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className={cx("home-banner")}
                >
                    <img src={Banner} />
                </motion.div>
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className={cx("home-section")}
                >
                    <motion.div
                        variants={textVariants}
                        className={cx("section-img")}
                    >
                        <motion.div className={cx("img-1")}>
                            <img src={Img1} />
                        </motion.div>
                        <motion.div className={cx("img-2")}>
                            <img src={Img2} />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        className={cx("section-content")}
                    >
                        <motion.h5>EEV Group</motion.h5>{" "}
                        {t(
                            "home.was established in 2009. From initial activities in the field of construction - real estate, in 2022, the Emmanuel brand marks an innovation in orientation. doing business with investment in the field of clean energy through solar cell factory projects. In particular, with the desire to contribute to Vietnam’s financial market, our plan to establish a Commodity Exchange with full functions and scale is being implemented and gradually shaped."
                        )}
                        <motion.a
                            href="/about"
                            className={cx("section-button")}
                        >
                            <motion.button variants={textVariants}>
                                See more
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <div className={cx("home-service")} data-aos="fade-up">
                    <div className={cx("home-service-title")}>
                        <h2>Featured Services</h2>
                        <div className={cx("line")}></div>
                    </div>
                    <div className={cx("home-service-container")}>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-img")}>
                                <img src="https://img.freepik.com/free-vector/isometric-credit-isolated-concept-bank-manager-tells-person-who-took-loan-from-bank-about-his-debt-vector-illustration_1284-79409.jpg?w=740&t=st=1700360807~exp=1700361407~hmac=fc0a54ddef09e17d484b2fa014ffa18e00e690959ce06f415b2a9df9b8f547bc" />
                            </div>
                            <h4>Đại lý, môi giới, đấu giá</h4>
                        </div>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-img")}>
                                <img src="https://img.freepik.com/free-vector/stock-exchange-data_23-2148595254.jpg?w=996&t=st=1700360976~exp=1700361576~hmac=a5e722666162a2754c0acbfe7897f00cee6efb182f321ed35f8874e7a8d464e0" />
                            </div>
                            <h4>Trao đổi hàng hóa</h4>
                        </div>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-img")}>
                                <img src="https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=900&t=st=1700360686~exp=1700361286~hmac=e56a665fe23b6ecb053f9aa91c06911340e0b0cd92af43fd7e092be8e767f415" />
                            </div>
                            <h4>Hệ thống công nghệ thông tin</h4>
                        </div>
                    </div>
                    <a href="/service" className={cx("home-service-footer")}>
                        <button>View All Service</button>
                    </a>
                </div>
                {/* <div className={cx("home-leadership")}>
                    <div className={cx("home-leadership-title")}>
                        <p>
                            After more than ten years of operation, with the
                            principle of prestige and quality being put first,
                            along with always learning and looking for business
                            opportunities in new fields of industry in Vietnam,
                            while maintaining and developing good relationships
                            with partners, the Company has developed
                            continuously and is continuing to make efforts to
                            contribute to the country.
                        </p>
                    </div>
                    <div className={cx("home-leadership-container")}>
                        <div className={cx("home-leadership-item")}>
                            <div className={cx("home-leadership-img")}>
                                <img src={Img1} />
                            </div>
                            <h4>Hoàng Kim Đồng</h4>
                            <span>Tổng giám đốc</span>
                        </div>
                        <div className={cx("home-leadership-item")}>
                            <div className={cx("home-leadership-img")}>
                                <img src={Img1} />
                            </div>
                            <h4>Hoàng Kim Đồng</h4>
                            <span>Tổng giám đốc</span>
                        </div>
                        <div className={cx("home-leadership-item")}>
                            <div className={cx("home-leadership-img")}>
                                <img src={Img1} />
                            </div>
                            <h4>Hoàng Kim Đồng</h4>
                            <span>Tổng giám đốc</span>
                        </div>
                    </div>
                </div> */}
                <div className={cx("home-partner")} data-aos="fade-up">
                    <SliderPartner />
                </div>
                <div className={cx("home-thanks")} data-aos="fade-up">
                    <div
                        className={cx("home-thanks-section")}
                        data-aos="fade-up"
                    >
                        <div className={cx("home-thanks-title")}>
                            <h1>01</h1>
                            <p>
                                EEV GROUP trân trọng gửi tới Quý khách hàng, đối
                                tác những lời tri ân sâu sắc và chân thành nhất
                                vì sự tin tưởng hợp tác và hỗ trợ của Quý vị
                                trong thời gian qua.
                            </p>
                        </div>
                        <div className={cx("home-thanks-img")}>
                            <img src={Img3} />
                        </div>
                    </div>
                    <div
                        className={cx("home-thanks-section", "section-2")}
                        data-aos="fade-up"
                    >
                        <div
                            className={cx(
                                "home-thanks-section-item",
                                "home-thanks-img"
                            )}
                        >
                            <img src={Img4} />
                        </div>
                        <div
                            className={cx(
                                "home-thanks-title",
                                "home-thanks-section-item"
                            )}
                        >
                            <h1>02</h1>
                            <p>
                                Với EEV GROUP, thành tựu lớn nhất chính là lòng
                                tin và sự ủng hộ của Quý vị đối với những dịch
                                vụ mà chúng tôi cung cấp. Chúng tôi luôn quý
                                trọng mối quan hệ hợp tác hiệu quả và trân thành
                                giữa các bên và hy vọng tiếp tục củng cố, duy
                                trì sự hợp tác trong thời gian tới.
                            </p>
                        </div>
                    </div>
                    <div
                        className={cx("home-thanks-section")}
                        data-aos="fade-up"
                    >
                        <div className={cx("home-thanks-title")}>
                            <h1>03</h1>
                            <p>
                                Kính chúc Quý khách hàng, đối tác sức khoẻ, hạnh
                                phúc, thành công và thịnh vượng
                            </p>
                            <span>Xin trân trọng cảm ơn!</span>
                        </div>
                        <div className={cx("home-thanks-img")}>
                            <img src={Img5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
