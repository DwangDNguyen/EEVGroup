import React, { useEffect } from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    CoreValuesIcon,
    MissionIcon,
    VisionIcon,
    BannerAbout,
    LogoBlack,
    EEVPolicy,
} from "../../imgEntry";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import { imagesGallery, welfarePolicy } from "../../data";
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
const About = () => {
    const { t } = useTranslation("about");
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={cx("about")}>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("banner")}
            >
                <img srcSet={`${BannerAbout} 2x`} />
                <div className={cx("banner-about-text")}>
                    <h1>{t("about.Welcome to our EEV Group")}</h1>
                    <span>
                        {t("about.Home")} / {t("about.About")}
                    </span>
                </div>
            </motion.div>
            <motion.section
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <div className={cx("section-container")}>
                    <div className={cx("section-container-intro")}>
                        <h1>{t("about.Introduction")}</h1>
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
                            EEV Group{" "}
                            {t(
                                "about.was established in 2009. From initial activities in the field of construction - real estate, in 2022, the Emmanuel brand marks an innovation in orientation. doing business with investment in the field of clean energy through solar cell factory projects. In particular, with the desire to contribute to Vietnam’s financial market, our plan to establish a Commodity Exchange with full functions and scale is being implemented and gradually shaped."
                            )}
                        </p>
                        <p>
                            {t(
                                "about.After more than ten years of operation, with the principle of prestige and quality being put first, along with always learning and looking for business opportunities in new fields of industry in Vietnam, while maintaining and developing good relationships with partners, the Company has developed continuously and is continuing to make efforts to contribute to the country."
                            )}
                        </p>
                    </div>
                    <div className={cx("section-container-img")}>
                        <img srcSet={`${LogoBlack} 2x`} />
                    </div>
                </div>
            </motion.section>
            <section data-aos="fade-right" data-aos-duration="1000">
                <div className={cx("section-container-2")}>
                    <div className={cx("section-container-item")}>
                        <div className={cx("section-icon")}>
                            <div className={cx("img-icon")}>
                                <img src={MissionIcon} />
                            </div>
                            <h1>{t("about.Mission")}</h1>
                        </div>
                        <div className={cx("section-content")}>
                            {t(
                                "about.With Slogan embodying the meaning of 'broad vision for the distant future,' we delineate the development path of our Corporation towards integrating into the 4.0 and 5.0 world, aiming to become a major financial conglomerate by possessing the largest Commodities Exchange in Vietnam. Our goal is to showcase Vietnamese goods to the world at their highest value in terms of quality and standards. We aspire to transform Vietnam into a pivotal transshipment hub in Southeast Asia, contributing to the National GDP and generating employment opportunities for the young workforce of our Nation."
                            )}
                        </div>
                    </div>
                    <div className={cx("section-container-item")}>
                        <div className={cx("section-icon")}>
                            <div className={cx("img-icon")}>
                                <img src={VisionIcon} />
                            </div>
                            <h1>{t("about.Vision")}</h1>
                        </div>
                        <div className={cx("section-content")}>
                            {t(
                                "about.Becoming a large, diversified conglomerate in Vietnam and the region. Establishing a Commodities Exchange to complete the final piece of Vietnam's financial landscape, with the goal of being listed on the New York Stock Exchange."
                            )}
                        </div>
                    </div>
                    <div className={cx("section-container-item")}>
                        <div className={cx("section-icon")}>
                            <div className={cx("img-icon")}>
                                <img src={CoreValuesIcon} />
                            </div>
                            <h1>{t("about.Core Values")}</h1>
                        </div>
                        <div className={cx("section-content")}>
                            {t(
                                "about.A broad and far-reaching vision - Providing the optimal financial services for customers with the principles of Transparency, Sustainability, and Efficiency."
                            )}

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
            </section>
            <section>
                <div
                    className={cx("section-container-3")}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className={cx("section-container-item")}>
                        <div className={cx("section-container-item-title")}>
                            <h1>{t("about.Mr. Hoang Kim Dong")}</h1>
                            <span className={cx("position")}>
                                {t("about.Chairman of the Board of Directors")}
                            </span>
                        </div>
                        <div className={cx("desc")}>
                            {t(
                                "about.Mr. Hoang Kim Dong, in addition to being a lawyer, also has more than 40 years of experience in operating construction businesses, trading services, information technology activities, manufacturing, energy..."
                            )}
                        </div>
                    </div>
                    <div
                        className={cx("section-container-item")}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className={cx("section-container-item-title")}>
                            <h1>{t("about.Mrs. Pham Hong Ha")}</h1>
                            <span className={cx("position")}>
                                {t("about.Deputy General Director")}
                            </span>
                        </div>
                        <div className={cx("desc")}>
                            {t(
                                "about.Mrs. Pham Hong Ha has more than 15 years working in the fields of securities - goods market and service trade. Ms. Ha has extensive experience and a deep understanding of centralized commodity trading market operations."
                            )}
                        </div>
                    </div>
                    <div
                        className={cx("section-container-item")}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className={cx("section-container-item-title")}>
                            <h1>{t("about.Mr. Pham Xuan Duc")}</h1>
                            <span className={cx("position")}>
                                {t("about.General Director")}
                            </span>
                        </div>
                        <div className={cx("desc")}>
                            {t(
                                "about.Mr. Pham Xuan Duc has nearly 40 years of experience in operating construction and commercial service businesses. Currently, he holds leadership positions in many large businesses operating in multiple industries."
                            )}
                        </div>
                    </div>
                    <div
                        className={cx("section-container-item")}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        {/* <h1>{t("about.Mr. Pham Xuan Duc")}</h1> */}
                        <div className={cx("section-container-item-title")}>
                            <h1>{t("about.Mr. Nghiem Anh Tuan")}</h1>
                            <span className={cx("position")}>
                                {t("about.Deputy General Director")}
                            </span>
                        </div>
                        <div className={cx("desc")}>
                            <strong>2009-2018</strong>{" "}
                            {t("about.Ho Chi Minh City Securities Corporation")}{" "}
                            <br />
                            <strong>2019-2023</strong>{" "}
                            {t("about.Viet Nam HCT Joint Stock Company")}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div
                    className={cx("section-container-4")}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1>{t("about.Activities")}</h1>
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
                    <h1>{t("about.Employee Benefits Policy")}</h1>
                    {/* <div className={cx("line")}></div> */}
                    <div className={cx("section-container-5-wrapper")}>
                        <div className={cx("section-container-5-left")}>
                            <h4>
                                {t(
                                    "about.EEV consistently prioritizes employee welfare, creating a stable and satisfying environment for employees to dedicate themselves with peace of mind. This will lead to numerous positive contributions and innovations for the company."
                                )}
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
                                        <div
                                            className={cx(
                                                "welfare-policy-item-img"
                                            )}
                                        >
                                            <img
                                                srcSet={`${item.image} 2x`}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className={cx(
                                                "welfare-policy-item-text"
                                            )}
                                        >
                                            <span>
                                                {t("about." + item.content)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx("section-container-5-right")}>
                            <img srcSet={`${EEVPolicy} 2x`} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
