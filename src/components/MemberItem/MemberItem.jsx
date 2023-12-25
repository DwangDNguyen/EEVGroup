import React, { useState, useCallback, useEffect } from "react";
import styles from "./MemberItem.module.scss";
import classNames from "classnames/bind";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import AOS from "aos";
import "aos/dist/aos.css";
const cx = classNames.bind(styles);
const MemberItem = ({ data, t }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx("member-item")} data-aos="fade-right">
            <div className={cx("member-item-info")}>
                <div className={cx("member-item-info-header")}>
                    {data.logo && (
                        <div className={cx("member-item-logo")}>
                            <img src={data.logo} />
                        </div>
                    )}
                    <div
                        className={cx("member-item-info-header-separate")}
                    ></div>
                    <h2>{t(`member.${data.name}`)}</h2>
                </div>
                <span>{t(`member.${data.desc}`)}</span>
                <p>{data.desc2 && t(`member.${data?.desc2}`)}</p>
                {data.history.length > 0 && (
                    <>
                        <h1>{t("member.Development stage")}</h1>
                        <div className={cx("timeline")}>
                            {data.history.map((item, index) => (
                                <div
                                    className={
                                        index % 2 === 0
                                            ? cx(
                                                  "timeline-container",
                                                  "timeline-container-left"
                                              )
                                            : cx(
                                                  "timeline-container",
                                                  "timeline-container-right"
                                              )
                                    }
                                    key={index}
                                >
                                    <div className={cx("dot")}></div>
                                    <div className={cx("timeline-textbox")}>
                                        <h2>{t(`member.${item.date}`)}</h2>
                                        <span>{t(`member.${item.desc}`)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className={cx("member-item-list")}>
                    {data?.list.map((item, index) => (
                        <div
                            className={cx("member-item-list-item")}
                            key={index}
                        >
                            <div className={cx("member-item-list-item-img")}>
                                <img srcSet={`${item.image} 2x`} alt="member" />
                            </div>
                            <div className={cx("desc-member-item")}>
                                <h3>{t(`member.${item.name}`)}</h3>
                                {item.desc && (
                                    <span>{t(`member.${item?.desc}`)}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {data.images && data.images.length > 0 && (
                <h1>
                    {t("member.Some pictures about")} {t(`member.${data.name}`)}
                </h1>
            )}
            <div className={cx("member-item-image")}>
                <Gallery photos={data.images} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={data.images.map((x) => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    );
};

export default MemberItem;
