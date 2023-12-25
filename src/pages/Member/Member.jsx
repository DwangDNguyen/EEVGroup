import React, { useState, useCallback, useEffect } from "react";
import styles from "./Member.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

import MemberItem from "../../components/MemberItem/MemberItem";
import {
    BannerMember,
    MemberEev,
    MemberHc,
    MemberHk,
    MemberIcc,
} from "../../imgEntry.js";
import { members } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
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
const Member = () => {
    const { t } = useTranslation("member");
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx("member")}>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("banner")}
            >
                <img srcSet={`${BannerMember} 2x`} />
                <div className={cx("banner-member-text")}>
                    <h1>{t("member.Member")}</h1>
                    <span>
                        {t("member.Home")} / {t("member.Member")}
                    </span>
                </div>
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={cx("member-wrapper")}
                data-aos="fade-up"
            >
                <div className={cx("member-group-list")}>
                    <div className={cx("member-group-list-container")}>
                        <div className={cx("member-group-list-item")}>
                            <div className={cx("member-group-list-item-img")}>
                                <img srcSet={`${MemberEev} 2x`} alt="member" />
                            </div>
                            <div className={cx("member-group-list-item-name")}>
                                <p>
                                    {t(
                                        "member.Emmanuel Vietnam Group Joint Stock Company"
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className={cx("separate-linear")}></div>
                        <div className={cx("member-group-list-item")}>
                            <div className={cx("member-group-list-item-img")}>
                                <img srcSet={`${MemberIcc} 2x`} alt="member" />
                            </div>
                            <p>
                                {t(
                                    "member.International Project Investment Consulting Joint Stock Company (ICC)"
                                )}
                            </p>
                        </div>
                        <div className={cx("separate-linear")}></div>

                        <div className={cx("member-group-list-item")}>
                            <div className={cx("member-group-list-item-img")}>
                                <img srcSet={`${MemberHc} 2x`} alt="member" />
                            </div>
                            <p>
                                {t(
                                    "member.Hanoi Housing Services & Real Estate Business Limited Liability Company (Hanoi Home Care Company)"
                                )}
                            </p>
                        </div>
                        <div className={cx("separate-linear")}></div>

                        <div className={cx("member-group-list-item")}>
                            <div className={cx("member-group-list-item-img")}>
                                <img srcSet={`${MemberHk} 2x`} alt="member" />
                            </div>
                            <p>
                                {t(
                                    "member.HOANG KHANH TM DVXD JOINT STOCK COMPANY"
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={cx("member-container")} data-aos="fade-right">
                {members.map((item, index) => (
                    <MemberItem t={t} key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Member;
