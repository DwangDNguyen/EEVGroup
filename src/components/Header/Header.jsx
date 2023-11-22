import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { logoEEV, logoFull, logoPrimary, logoText } from "../../imgEntry";
import Sidebar from "../Sidebar/Sidebar";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n.js";
const cx = classNames.bind(styles);
const Header = () => {
    const { i18n, t } = useTranslation(["home"]);
    const currentLanguage = locales[i18n.language];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Sidebar />

                <nav className={cx("navbar")}>
                    <div className={cx("navbar-item")}>
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className={cx("navbar-item")}>
                        <Link to="/about">Về chúng tôi</Link>
                    </div>
                    <div className={cx("navbar-item")}>
                        <Link to="/service">Dịch vụ</Link>
                    </div>
                    <div className={cx("navbar-item")}>
                        <Link to="/project">Dự án</Link>
                    </div>
                    <div className={cx("navbar-item")}>
                        <Link to="/members">Thành viên</Link>
                    </div>
                </nav>

                <div className={cx("logo-container")}>
                    <div className={cx("logo-res", "logo")}>
                        <img src={logoFull} className={cx("image-logo")} />
                    </div>
                </div>
            </div>
            <div className={cx("language")}>
                <div
                    className={
                        currentLanguage === "Vi"
                            ? cx("language-item", "active")
                            : cx("language-item")
                    }
                    onClick={() => changeLanguage("vi")}
                >
                    Vi
                </div>
                |
                <div
                    className={
                        currentLanguage === "En"
                            ? cx("language-item", "active")
                            : cx("language-item")
                    }
                    onClick={() => changeLanguage("en")}
                >
                    En
                </div>
            </div>
        </header>
    );
};

export default Header;
