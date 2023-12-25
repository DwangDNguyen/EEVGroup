import React from "react";
import styles from "./Project.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projects } from "../../data";
import { BannerService } from "../../imgEntry";
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
const Project = () => {
    const { t } = useTranslation("project");
    return (
        <div className={cx("project")}>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("banner")}
            >
                <img srcSet={`${BannerService} 2x`} />
                <div className={cx("banner-project-text")}>
                    <h1>{t("project.Project")}</h1>
                    <span>
                        {t("project.Home")} / {t("project.Project")}
                    </span>
                </div>
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("project-content")}
            >
                <div className={cx("project-container")}>
                    {projects.map((item, index) => (
                        <ProjectItem key={index} data={item} t={t} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
