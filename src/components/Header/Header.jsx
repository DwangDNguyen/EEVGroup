import React, { useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useLocation } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { LogoNav, logoFull } from "../../imgEntry";
import Sidebar from "../Sidebar/Sidebar";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n.js";
const cx = classNames.bind(styles);
const Header = () => {
    const { i18n, t } = useTranslation(["home"]);
    const [activeLine, setActiveLine] = useState(0);
    const [openLanguageOption, setOpenLanguageOption] = useState(false);
    const currentLanguage = locales[i18n.language];
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname);
    console.log(currentLanguage);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <Sidebar
                    currentLanguage={currentLanguage}
                    changeLanguage={changeLanguage}
                />

                <nav className={cx("navbar")}>
                    <img
                        srcSet={`${LogoNav} 2x`}
                        className={cx("image-logo")}
                    />
                    <div className={cx("navbar-menu")}>
                        <div
                            onClick={() => {
                                setActiveLine(0);
                                navigate("/");
                            }}
                            className={
                                pathname === "/"
                                    ? cx("navbar-item", "navbar-item-active")
                                    : cx("navbar-item")
                            }
                        >
                            {t("home.Home")}
                        </div>
                        <div
                            onClick={() => {
                                setActiveLine(1);
                                navigate("/about");
                            }}
                            className={
                                pathname === "/about"
                                    ? cx("navbar-item", "navbar-item-active")
                                    : cx("navbar-item")
                            }
                        >
                            {t("home.About")}
                        </div>
                        <div
                            onClick={() => {
                                setActiveLine(2);
                                navigate("/service");
                            }}
                            className={
                                pathname === "/service"
                                    ? cx("navbar-item", "navbar-item-active")
                                    : cx("navbar-item")
                            }
                        >
                            {t("home.Service")}
                        </div>
                        <div
                            onClick={() => {
                                setActiveLine(3);
                                navigate("/project");
                            }}
                            className={
                                pathname === "/project"
                                    ? cx("navbar-item", "navbar-item-active")
                                    : cx("navbar-item")
                            }
                        >
                            {t("home.Project")}
                        </div>
                        <div
                            onClick={() => {
                                setActiveLine(4);
                                navigate("/members");
                            }}
                            className={
                                pathname === "/members"
                                    ? cx("navbar-item", "navbar-item-active")
                                    : cx("navbar-item")
                            }
                        >
                            {t("home.Member")}
                        </div>
                    </div>
                </nav>

                <div className={cx("logo-container")}>
                    <div className={cx("logo-res", "logo")}>
                        <img src={logoFull} className={cx("image-logo")} />
                    </div>
                </div>
            </div>
            <div className={cx("language")}>
                {/* <div
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
                </div> */}
                <div
                    className={cx("language-selected")}
                    onClick={() => setOpenLanguageOption(!openLanguageOption)}
                >
                    {currentLanguage}{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                    >
                        <path
                            d="M11.2649 1.265L6.26492 6.265C6.19461 6.33523 6.0993 6.37467 5.99992 6.37467C5.90055 6.37467 5.80524 6.33523 5.73492 6.265L0.734923 1.265C0.668683 1.19391 0.632622 1.09989 0.634336 1.00274C0.63605 0.905588 0.675406 0.812896 0.744112 0.744189C0.812819 0.675483 0.905511 0.636126 1.00266 0.634412C1.09981 0.632698 1.19384 0.66876 1.26492 0.735L5.99992 5.46937L10.7349 0.735C10.806 0.66876 10.9 0.632698 10.9972 0.634412C11.0943 0.636126 11.187 0.675483 11.2557 0.744189C11.3244 0.812896 11.3638 0.905588 11.3655 1.00274C11.3672 1.09989 11.3312 1.19391 11.2649 1.265Z"
                            fill="black"
                        />
                    </svg>
                </div>
                {openLanguageOption && (
                    <div className={cx("language-options")}>
                        <div
                            className={
                                currentLanguage === "Vi"
                                    ? cx("language-item", "active")
                                    : cx("language-item")
                            }
                            onClick={() => {
                                changeLanguage("vi");
                                setOpenLanguageOption(false);
                            }}
                        >
                            <span>Vi</span>
                            {currentLanguage === "Vi" ? (
                                <MdDone className={cx("language-icon")} />
                            ) : (
                                <></>
                            )}
                        </div>
                        <div
                            className={
                                currentLanguage === "En"
                                    ? cx("language-item", "active")
                                    : cx("language-item")
                            }
                            onClick={() => {
                                changeLanguage("en");
                                setOpenLanguageOption(false);
                            }}
                        >
                            <span>En</span>
                            {currentLanguage === "En" ? (
                                <MdDone className={cx("language-icon")} />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
