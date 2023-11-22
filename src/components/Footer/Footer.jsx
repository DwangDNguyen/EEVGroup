import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { logoFull } from "../../imgEntry";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <div className={cx("wrapper")}>
                <div className={cx("footer-left")}>
                    <img src={logoFull} />
                </div>
                <div className={cx("footer-right")}>
                    <h1>EEV Group</h1>
                    <div className={cx("footer-info")}>
                        <div className={cx("footer-info-item")}>
                            <FaLocationDot className={cx("footer-info-icon")} />
                            <div className={cx("info-text")}>
                                <span>Địa chỉ:</span> Số 28, Phố Hàng Vôi,
                                Phường Lý Thái Tổ, Quận Hoàng Kiếm, Thành phố Hà
                                Nội, Việt Nam
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            <FaPhone className={cx("footer-info-icon")} />
                            <div className={cx("info-text")}>
                                <span>Số điện thoại:</span> 02439260315
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            <MdEmail className={cx("footer-info-icon")} />
                            <div className={cx("info-text")}>
                                <span>Email:</span>
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            <FaBarcode className={cx("footer-info-icon")} />
                            <div className={cx("info-text")}>
                                <span>Mã số thuế/Mã số doanh nghiệp:</span>{" "}
                                0104340018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={cx("footer-bottom")}>
                <span>© 2024. EEV Group.</span>
            </div>
        </footer>
    );
};

export default Footer;
