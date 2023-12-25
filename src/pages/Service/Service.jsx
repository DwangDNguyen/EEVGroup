import React, { useEffect } from "react";
import styles from "./Service.module.scss";
import classNames from "classnames/bind";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { services } from "../../data";
import { BannerService } from "../../imgEntry";
import { motion } from "framer-motion";
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
const Service = () => {
    const { t } = useTranslation("service");
    return (
        <div className={cx("service")}>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("banner")}
            >
                <img srcSet={`${BannerService} 2x`} />
                <div className={cx("banner-service-text")}>
                    <h1>{t("service.Service")}</h1>
                    <span>
                        {t("service.Home")} / {t("service.Service")}
                    </span>
                </div>
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("service-container")}
            >
                {/* <h1>{t("service.Service")}</h1>
                <div className={cx("line")}></div> */}
                {services.map((item, index) => (
                    <ServiceItem
                        key={index}
                        title={t("service." + item.title)}
                        desc={t("service." + item.desc)}
                        image={item.image}
                        t={t}
                        mainService={item.mainService}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Service;
