import React, { useEffect } from "react";
import styles from "./Service.module.scss";
import classNames from "classnames/bind";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { services } from "../../data";

const cx = classNames.bind(styles);
const Service = () => {
    return (
        <div className={cx("service")}>
            <h1>Dịch vụ</h1>
            <div className={cx("line")}></div>
            {services.map((item, index) => (
                <ServiceItem
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                    mainService={item.mainService}
                />
            ))}
        </div>
    );
};

export default Service;
