import React, { useEffect } from "react";
import styles from "./ServiceItem.module.scss";
import classNames from "classnames/bind";
import { EEVGROUP } from "../../imgEntry";
import AOS from "aos";
import "aos/dist/aos.css";
const cx = classNames.bind(styles);
const ServiceItem = ({ title, desc, image, mainService }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx("service-item")} data-aos="fade-up">
            <div className={cx("service-item-container")}>
                <div className={cx("main-service")}>
                    <div className={cx("main-service-img")}>
                        <img src={image} />
                    </div>
                    <div className={cx("main-service-content")}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        {mainService.length > 0 && (
                            <div className={cx("main-service-bottom")}>
                                <h3>Dịch vụ chính</h3>
                                <ul className={cx("main-service-list")}>
                                    {mainService.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ServiceItem;
