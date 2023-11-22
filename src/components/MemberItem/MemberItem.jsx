import React, { useState, useCallback } from "react";
import styles from "./MemberItem.module.scss";
import classNames from "classnames/bind";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import AOS from "aos";
import "aos/dist/aos.css";
const cx = classNames.bind(styles);
const MemberItem = ({ data }) => {
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
    return (
        <div className={cx("member-item")}>
            <div className={cx("member-item-info")}>
                <h2>{data.name}</h2>
                {data.logo && (
                    <div className={cx("member-item-logo")}>
                        <img src={data.logo} />
                    </div>
                )}
                {data.list.length > 0 && (
                    <ul>
                        {data.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                <span>{data.desc}</span>
            </div>
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
            <hr />
        </div>
    );
};

export default MemberItem;
