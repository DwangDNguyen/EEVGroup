import React, { useState, useCallback } from "react";
import styles from "./Member.module.scss";
import classNames from "classnames/bind";

import MemberItem from "../../components/MemberItem/MemberItem";
import { members } from "../../data";
const cx = classNames.bind(styles);

const Member = () => {
    return (
        <div className={cx("member")}>
            <div className={cx("member-container")}>
                {members.map((item, index) => (
                    <MemberItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Member;
