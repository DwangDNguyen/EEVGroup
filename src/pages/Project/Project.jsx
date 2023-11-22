import React from "react";
import styles from "./Project.module.scss";
import classNames from "classnames/bind";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projects } from "../../data";
const cx = classNames.bind(styles);

const Project = () => {
    return (
        <div className={cx("project")}>
            <h1>Dự án</h1>
            <div className={cx("line")}></div>
            <div className={cx("project-container")}>
                {projects.map((item, index) => (
                    <ProjectItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Project;
