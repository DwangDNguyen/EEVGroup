import React, { useEffect } from "react";
import styles from "./ServiceItem.module.scss";
import classNames from "classnames/bind";

import AOS from "aos";
import "aos/dist/aos.css";
const cx = classNames.bind(styles);
const ServiceItem = ({ title, desc, image, t, mainService }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx("service-item")} data-aos="fade-right">
            <div className={cx("main-service")}>
                <div className={cx("main-service-img")}>
                    <img srcSet={`${image} 2x`} />
                </div>
                <div className={cx("main-service-content")}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    {mainService.length > 0 && (
                        <div className={cx("main-service-bottom")}>
                            <h3>{t("service.Main services")}</h3>
                            <ul className={cx("main-service-list")}>
                                {mainService.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cx("main-service-list-item")}
                                    >
                                        <li>{t("service." + item)}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
