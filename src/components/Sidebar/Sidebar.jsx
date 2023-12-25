import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton/ToggleButton";
import Menu from "./Menu/Menu";

const cx = classNames.bind(styles);
const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Sidebar = ({ currentLanguage, changeLanguage }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className={cx("sidebar")}
            animate={open ? "open" : "closed"}
        >
            <motion.div className={cx("bg")} variants={variants}>
                {/* <div className={cx("sidebar-logo")}>
                    <img
                        srcSet={`${LogoNav} 2x`}
                        className={cx("image-logo")}
                    />
                </div> */}
                <Menu />
                <div className={cx("language-sidebar")}>
                    <div
                        className={
                            currentLanguage === "Vi"
                                ? cx("language-item-sidebar", "active")
                                : cx("language-item-sidebar")
                        }
                        onClick={() => changeLanguage("vi")}
                    >
                        Vi
                    </div>

                    <div
                        className={
                            currentLanguage === "En"
                                ? cx("language-item-sidebar", "active")
                                : cx("language-item-sidebar")
                        }
                        onClick={() => changeLanguage("en")}
                    >
                        En
                    </div>
                </div>
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
