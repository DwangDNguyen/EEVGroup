import { motion } from "framer-motion";
import styles from "../Sidebar.module.scss";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
const cx = classNames.bind(styles);
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Menu = () => {
    const { t } = useTranslation();
    return (
        <motion.div className={cx("links")} variants={variants}>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/"
            >
                {t("home.Home")}
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
            >
                {t("home.About")}
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/service"
            >
                {t("home.Service")}
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/project"
            >
                {t("home.Project")}
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/members"
            >
                {t("home.Member")}
            </motion.a>
        </motion.div>
    );
};

export default Menu;
