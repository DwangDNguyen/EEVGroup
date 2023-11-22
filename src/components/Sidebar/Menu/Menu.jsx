import { motion } from "framer-motion";
import styles from "../Sidebar.module.scss";
import classNames from "classnames/bind";
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
    return (
        <motion.div className={cx("links")} variants={variants}>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/"
            >
                Trang chủ
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
            >
                Về chúng tôi
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/service"
            >
                Dịch vụ
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/project"
            >
                Dự án
            </motion.a>
            <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/members"
            >
                Thành viên
            </motion.a>
        </motion.div>
    );
};

export default Menu;
