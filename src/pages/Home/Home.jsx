import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import {
    Bgr,
    Img3,
    Img4,
    Img5,
    ImgBanner1,
    ImgBanner2,
    ImgBanner3,
    ImgBanner4,
    SummaryImg,
} from "../../imgEntry";
import { useNavigate } from "react-router-dom";
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
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
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
                    <div className={cx("home-banner-bgr")}>
                        <img srcSet={`${Bgr} 2x`} />
                    </div>
                    <div className={cx("home-banner-container")}>
                        <div className={cx("home-banner-slogan")}>
                            <div className={cx("home-banner-slogan-text")}>
                                <div className={cx("slogan-text")}>
                                    <h1>{t("home.Big Vision")}</h1>
                                </div>
                                <div className={cx("slogan-text")}>
                                    <h1>{t("home.Far Future")}</h1>
                                </div>
                            </div>
                            <div className={cx("home-banner-slogan-icon")}>
                                <motion.div
                                    variants={textVariants}
                                    animate="scrollButton"
                                    className={cx("mouse")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="20"
                                        viewBox="0 0 14 20"
                                        fill="none"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="13"
                                            height="19"
                                            rx="6.5"
                                            stroke="black"
                                        />
                                        <path d="M7 4V11" stroke="black" />
                                    </svg>
                                </motion.div>
                                <span>{t("home.Scroll Down")}</span>
                            </div>
                        </div>
                        <div className={cx("home-banner-list-image")}>
                            <div className={cx("home-banner-img")}>
                                <img srcSet={`${ImgBanner1} 2x`} />
                            </div>
                            <div className={cx("home-banner-img")}>
                                <img srcSet={`${ImgBanner2} 2x`} />
                            </div>
                            <div className={cx("home-banner-img")}>
                                <img srcSet={`${ImgBanner3} 2x`} />
                            </div>
                            <div className={cx("home-banner-img")}>
                                <img srcSet={`${ImgBanner4} 2x`} />
                            </div>
                        </div>
                    </div>
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
                        <img src={SummaryImg} />
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        className={cx("section-content")}
                        data-aos="fade-right"
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
                                {t("home.See more")}
                            </motion.button>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <div className={cx("home-service")} data-aos="fade-right">
                    <div className={cx("home-service-wrapper")}>
                        <div className={cx("home-service-container")}>
                            <h1>
                                Outstanding <strong>Service</strong>
                            </h1>
                            <span>
                                {t(
                                    "home.With the desire to bring to the market products and services according to international standards and completely new experiences in modern lifestyle, in any field, EEV Group also proves its pioneering and leading role. Lead to changing trend focus"
                                )}
                            </span>
                            <a href="/service">
                                <button>{t("home.View All")}</button>
                            </a>
                        </div>
                        <div className={cx("home-service-list")}>
                            <div className={cx("home-service-item")}>
                                <div
                                    className={cx("home-service-item-content")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="84"
                                        height="84"
                                        viewBox="0 0 84 84"
                                        fill="none"
                                    >
                                        <path
                                            d="M44.9491 46.7327L44.9494 46.7323L55.7706 35.9086C55.9361 35.7428 56.029 35.5181 56.029 35.2838C56.029 35.0495 55.9361 34.8248 55.7706 34.6589L55.7703 34.6586L53.4708 32.3515L53.4704 32.3512M44.9491 46.7327L51.6924 31.8217C51.844 31.6699 52.0239 31.5495 52.222 31.4673C52.4202 31.3851 52.6325 31.3428 52.847 31.3428C53.0615 31.3428 53.2739 31.3851 53.472 31.4673C53.6701 31.5495 53.8501 31.6699 54.0016 31.8217L53.4704 32.3512M44.9491 46.7327C44.8671 46.8147 44.7698 46.8798 44.6627 46.9243C44.5556 46.9687 44.4408 46.9915 44.3248 46.9915C44.2088 46.9915 44.094 46.9687 43.9869 46.9243C43.8798 46.8798 43.7825 46.8147 43.7006 46.7327L43.7001 46.7323L41.396 44.4281L41.3955 44.4276C41.3135 44.3458 41.2484 44.2486 41.2041 44.1415L40.5113 44.4289L41.204 44.1415C41.1597 44.0345 41.1368 43.9198 41.1368 43.8039C41.1368 43.688 41.1597 43.5733 41.204 43.4663C41.2484 43.3592 41.3135 43.262 41.3955 43.1801L41.3974 43.1782L41.5548 43.02L41.5562 43.0186L52.2228 32.352L52.2233 32.3515C52.3051 32.2695 52.4024 32.2045 52.5094 32.1601C52.6164 32.1157 52.7311 32.0928 52.847 32.0928C52.9629 32.0928 53.0776 32.1157 53.1847 32.1601C53.2915 32.2044 53.3886 32.2693 53.4704 32.3512M44.9491 46.7327L53.4704 32.3512M29.6932 28.9126L29.6856 28.9049L29.6778 28.8976L29.6756 28.8955C29.6659 28.8857 29.656 28.8762 29.6459 28.8669L25.5343 24.7516L33.7897 16.4932L48.689 31.3893L40.4312 39.6523L36.2738 35.4948L36.2737 35.4947L29.6932 28.9126ZM33.0857 12.3352L33.0857 12.3403C33.0861 12.4553 33.0636 12.5692 33.0196 12.6754C32.9756 12.7816 32.9109 12.878 32.8293 12.959L32.8274 12.9609L32.6678 13.1205L32.6677 13.1206L22.1361 23.6573L22.0121 23.7773L22.012 23.7772L22.0024 23.7868C21.9206 23.8688 21.8235 23.9339 21.7165 23.9783C21.6095 24.0227 21.4948 24.0455 21.3789 24.0455C21.2631 24.0455 21.1484 24.0227 21.0414 23.9783C20.9344 23.9339 20.8373 23.8688 20.7555 23.7868L20.755 23.7863L18.4492 21.478C18.4492 21.478 18.4492 21.478 18.4492 21.478C18.2837 21.3122 18.1907 21.0876 18.1907 20.8534C18.1907 20.6192 18.2837 20.3946 18.4491 20.2289C18.4492 20.2289 18.4492 20.2289 18.4492 20.2288L29.2723 9.40911C29.2726 9.40882 29.2729 9.40853 29.2732 9.40825C29.4395 9.24347 29.6641 9.151 29.8982 9.151C30.1324 9.151 30.3571 9.24352 30.5234 9.40838C30.5237 9.40862 30.5239 9.40887 30.5242 9.40911L32.8273 11.7131L32.829 11.7148C32.9107 11.7961 32.9755 11.8928 33.0196 11.9992C33.0637 12.1057 33.0861 12.2199 33.0857 12.3352ZM32.8971 36.6146L11.9486 57.5655C11.3719 58.1259 10.5981 58.4371 9.79393 58.4319C8.98824 58.4268 8.21702 58.1044 7.64731 57.5347C7.07759 56.965 6.75524 56.1938 6.75006 55.3881C6.7449 54.5839 7.05615 53.81 7.61653 53.2333L28.5679 32.282L32.8971 36.6146ZM29.5247 66.7883H64.39V74.8492H29.5247V66.7883ZM34.7856 59.2232H59.1291V63.599H34.7856V59.2232Z"
                                            stroke="#C2C2C2"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <h4>
                                        {t("home.Agency, Brokerage, Auction")}
                                    </h4>
                                </div>
                                {/* <div className={cx("see-more-service")}>
                                    <span>Xem thêm</span>
                                    <div className={cx("see-more-line")}></div>
                                </div> */}
                            </div>
                            <div className={cx("home-service-item")}>
                                <div
                                    className={cx("home-service-item-content")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                        fill="none"
                                    >
                                        <path
                                            d="M45 9.00003H49.5C51.718 8.98532 53.8633 9.79017 55.5243 11.2601C57.1853 12.7301 58.245 14.7617 58.5 16.965L57.96 16.4025C57.7502 16.1927 57.5012 16.0263 57.2271 15.9128C56.953 15.7993 56.6592 15.7408 56.3625 15.7408C56.0658 15.7408 55.772 15.7993 55.4979 15.9128C55.2238 16.0263 54.9748 16.1927 54.765 16.4025C54.5552 16.6123 54.3888 16.8614 54.2753 17.1355C54.1617 17.4096 54.1033 17.7033 54.1033 18C54.1033 18.2967 54.1617 18.5905 54.2753 18.8646C54.3888 19.1387 54.5552 19.3877 54.765 19.5975L59.265 24.0975C59.4742 24.3084 59.723 24.4758 59.9972 24.59C60.2714 24.7043 60.5655 24.7631 60.8625 24.7631C61.1595 24.7631 61.4536 24.7043 61.7278 24.59C62.002 24.4758 62.2508 24.3084 62.46 24.0975L66.96 19.5975C67.1698 19.3877 67.3362 19.1387 67.4497 18.8646C67.5633 18.5905 67.6217 18.2967 67.6217 18C67.6217 17.7033 67.5633 17.4096 67.4497 17.1355C67.3362 16.8614 67.1698 16.6123 66.96 16.4025C66.7502 16.1927 66.5012 16.0263 66.2271 15.9128C65.953 15.7993 65.6592 15.7408 65.3625 15.7408C65.0658 15.7408 64.772 15.7993 64.4979 15.9128C64.2238 16.0263 63.9748 16.1927 63.765 16.4025L63 17.1225C62.7768 13.6963 61.2566 10.4839 58.7486 8.13896C56.2407 5.79401 52.9335 4.49277 49.5 4.50003H45C44.4033 4.50003 43.831 4.73708 43.409 5.15904C42.9871 5.581 42.75 6.15329 42.75 6.75003C42.75 7.34677 42.9871 7.91906 43.409 8.34102C43.831 8.76298 44.4033 9.00003 45 9.00003ZM27 63H22.5C20.3014 62.9871 18.1835 62.1699 16.5462 60.7025C14.9089 59.2351 13.8653 57.2191 13.6125 55.035L14.1525 55.5975C14.3617 55.8084 14.6105 55.9758 14.8847 56.09C15.1589 56.2043 15.453 56.2631 15.75 56.2631C16.047 56.2631 16.3411 56.2043 16.6153 56.09C16.8895 55.9758 17.1383 55.8084 17.3475 55.5975C17.5584 55.3884 17.7258 55.1395 17.84 54.8653C17.9542 54.5911 18.0131 54.2971 18.0131 54C18.0131 53.703 17.9542 53.4089 17.84 53.1347C17.7258 52.8605 17.5584 52.6117 17.3475 52.4025L12.8475 47.9025C12.6383 47.6916 12.3895 47.5243 12.1153 47.41C11.8411 47.2958 11.547 47.237 11.25 47.237C10.953 47.237 10.6589 47.2958 10.3847 47.41C10.1105 47.5243 9.86167 47.6916 9.65251 47.9025L5.15251 52.4025C4.72882 52.8262 4.4908 53.4009 4.4908 54C4.4908 54.5992 4.72882 55.1738 5.15251 55.5975C5.57619 56.0212 6.15083 56.2592 6.75001 56.2592C7.34918 56.2592 7.92382 56.0212 8.34751 55.5975L9.00001 54.8775C9.22317 58.3037 10.7434 61.5162 13.2514 63.8611C15.7593 66.206 19.0666 67.5073 22.5 67.5H27C27.5967 67.5 28.169 67.263 28.591 66.841C29.013 66.4191 29.25 65.8468 29.25 65.25C29.25 64.6533 29.013 64.081 28.591 63.659C28.169 63.2371 27.5967 63 27 63ZM5.7375 38.0025L23.7375 47.0025C24.0516 47.1608 24.3983 47.2432 24.75 47.2432C25.1017 47.2432 25.4485 47.1608 25.7625 47.0025L43.7625 38.0025C44.1336 37.8156 44.4456 37.5295 44.664 37.176C44.8825 36.8226 44.9987 36.4155 45 36V15.75C44.9987 15.3345 44.8825 14.9275 44.664 14.574C44.4456 14.2206 44.1336 13.9345 43.7625 13.7475L25.7625 4.74753C25.4485 4.58928 25.1017 4.50684 24.75 4.50684C24.3983 4.50684 24.0516 4.58928 23.7375 4.74753L5.7375 13.7475C5.36645 13.9345 5.05441 14.2206 4.83598 14.574C4.61755 14.9275 4.50126 15.3345 4.50001 15.75V36C4.50126 36.4155 4.61755 36.8226 4.83598 37.176C5.05441 37.5295 5.36645 37.8156 5.7375 38.0025ZM9.00001 19.395L22.5 26.145V41.355L9.00001 34.605V19.395ZM27 41.355V26.145L40.5 19.395V34.605L27 41.355ZM24.75 9.27003L37.71 15.75L24.75 22.23L11.79 15.75L24.75 9.27003Z"
                                            fill="#D9D9D9"
                                        />
                                        <path
                                            d="M66.2625 33.9976L52.7625 27.2476C52.4974 27.0881 52.2022 26.985 51.8955 26.9447C51.5887 26.9044 51.2769 26.9278 50.9796 27.0135C50.6823 27.0991 50.4058 27.2452 50.1675 27.4425C49.9292 27.6398 49.7341 27.8842 49.5945 28.1603C49.4549 28.4364 49.3737 28.7384 49.3561 29.0473C49.3385 29.3562 49.3847 29.6654 49.492 29.9556C49.5993 30.2458 49.7652 30.5108 49.9795 30.734C50.1938 30.9571 50.4519 31.1337 50.7375 31.2526L60.21 36.0001L47.25 42.4801L46.0125 41.8726C45.7474 41.7131 45.4522 41.61 45.1455 41.5697C44.8387 41.5294 44.5269 41.5528 44.2296 41.6385C43.9323 41.7241 43.6558 41.8702 43.4175 42.0675C43.1792 42.2648 42.9841 42.5092 42.8445 42.7853C42.7049 43.0614 42.6237 43.3634 42.6061 43.6723C42.5885 43.9812 42.6347 44.2904 42.742 44.5806C42.8493 44.8708 43.0152 45.1358 43.2295 45.359C43.4438 45.5821 43.7019 45.7587 43.9875 45.8776L45 46.3951V61.6051L31.5 54.8551V51.7501C31.5 51.1534 31.2629 50.5811 30.841 50.1591C30.419 49.7372 29.8467 49.5001 29.25 49.5001C28.6533 49.5001 28.081 49.7372 27.659 50.1591C27.2371 50.5811 27 51.1534 27 51.7501V56.2501C27.0013 56.6656 27.1175 57.0727 27.336 57.4261C27.5544 57.7796 27.8664 58.0657 28.2375 58.2526L46.2375 67.2526C46.5516 67.4109 46.8983 67.4933 47.25 67.4933C47.6017 67.4933 47.9484 67.4109 48.2625 67.2526L66.2625 58.2526C66.6336 58.0657 66.9456 57.7796 67.164 57.4261C67.3825 57.0727 67.4987 56.6656 67.5 56.2501V36.0001C67.4987 35.5846 67.3825 35.1776 67.164 34.8241C66.9456 34.4707 66.6336 34.1846 66.2625 33.9976ZM49.5 61.6051V46.3951L63 39.6451V54.8551L49.5 61.6051Z"
                                            fill="#D9D9D9"
                                        />
                                    </svg>
                                    <h4>{t("home.Commodity Exchange")}</h4>
                                </div>
                                {/* <div className={cx("see-more-service")}>
                                    <span>Xem thêm</span>
                                    <div className={cx("see-more-line")}></div>
                                </div> */}
                            </div>
                            <div className={cx("home-service-item")}>
                                <div
                                    className={cx("home-service-item-content")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                    >
                                        <path
                                            d="M60.25 0H19C16.9321 0 15.25 1.68213 15.25 3.75H1.875C0.839375 3.75 0 4.58938 0 5.625V46.875C0 47.9106 0.839375 48.75 1.875 48.75H20.625C21.6606 48.75 22.5 47.9106 22.5 46.875V37.5H32.125V45H28.375C27.3394 45 26.5 45.8394 26.5 46.875C26.5 47.9106 27.3394 48.75 28.375 48.75H50.875C51.9106 48.75 52.75 47.9106 52.75 46.875C52.75 45.8394 51.9106 45 50.875 45H47.125V37.5H60.25C62.3179 37.5 64 35.8179 64 33.75V3.75C64 1.68213 62.3179 0 60.25 0ZM3.75 15H15.25V18.75H3.75V15ZM15.25 7.5V11.25H3.75V7.5H15.25ZM3.75 45V22.5H15.25V33.75C15.25 35.7334 16.7984 37.3612 18.75 37.4907V45H3.75ZM43.375 45H35.875V37.5H43.375V45ZM60.25 33.75H19V3.75H60.25V33.75Z"
                                            fill="#C2C2C2"
                                        />
                                        <path
                                            d="M13.125 40.75C13.125 41.7856 12.2856 42.625 11.25 42.625C10.2144 42.625 9.375 41.7856 9.375 40.75C9.375 39.7144 10.2144 38.875 11.25 38.875C12.2856 38.875 13.125 39.7144 13.125 40.75Z"
                                            fill="#C2C2C2"
                                        />
                                    </svg>
                                    <h4>
                                        {t(
                                            "home.Information Technology System"
                                        )}
                                    </h4>
                                </div>
                                {/* <div className={cx("see-more-service")}>
                                    <span>Xem thêm</span>
                                    <div className={cx("see-more-line")}></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
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
                <div className={cx("home-partner")} data-aos="fade-right">
                    <SliderPartner />
                </div>
                <div className={cx("home-thanks")} data-aos="fade-right">
                    <div
                        className={cx("home-thanks-section")}
                        data-aos="fade-right"
                    >
                        <div className={cx("home-thanks-content")}>
                            <div className={cx("home-thanks-content-title")}>
                                <h1>
                                    01
                                    <span>{t("home.Thank you")}</span>
                                </h1>
                            </div>
                            <p>
                                {t(
                                    "home.EEV Group respectfully sends to customers and partners the deepest and most sincere gratitude for your trust, cooperation and support in recent times."
                                )}
                            </p>
                        </div>
                        <div className={cx("home-thanks-section-img")}>
                            <div className={cx("home-thanks-img")}>
                                <img src={Img3} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx("home-thanks-section", "section-2")}
                        data-aos="fade-right"
                    >
                        <div className={cx("home-thanks-content")}>
                            <div className={cx("home-thanks-content-title")}>
                                <h1>
                                    02
                                    <span>{t("home.Trust")}</span>
                                </h1>
                            </div>
                            <p>
                                {t(
                                    "home.For EEV Group, the greatest achievement is your trust and support for the services we provide. We always value the effective and sincere cooperative relationship between the parties and hope to continue to strengthen and maintain cooperation in the future."
                                )}
                            </p>
                        </div>
                        <div className={cx("home-thanks-section-img")}>
                            <div className={cx("home-thanks-img")}>
                                <img src={Img4} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx("home-thanks-section")}
                        data-aos="fade-right"
                    >
                        <div className={cx("home-thanks-content")}>
                            <div className={cx("home-thanks-content-title")}>
                                <h1>
                                    03
                                    <span>{t("home.Grateful")}</span>
                                </h1>
                            </div>
                            <p>
                                {t(
                                    "home.We wish our customers and partners health, happiness, success and prosperity"
                                )}
                            </p>
                        </div>
                        <div className={cx("home-thanks-section-img")}>
                            <div className={cx("home-thanks-img")}>
                                <img src={Img5} />
                            </div>
                        </div>
                    </div>
                </div>
                <span className={cx("sincerely")}>
                    {t("home.Yours sincerely!")}
                </span>
            </div>
        </div>
    );
};

export default Home;
