import React, { useState, useCallback, useEffect } from "react";
import styles from "./ProjectItem.module.scss";
import classNames from "classnames/bind";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import AOS from "aos";
import "aos/dist/aos.css";
const cx = classNames.bind(styles);

const ProjectItem = ({ data }) => {
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
        <div
            className={cx("project-item")}
            data-aos="fade-right"
            data-aos-duration="3000"
        >
            <div className={cx("project-item-info")}>
                <div className={cx("project-img")}>
                    <img src={data.images[0].src} />
                </div>
                <div className={cx("project-content")}>
                    <h1>{data.name}</h1>
                    <div className={cx("project-content-info")}>
                        <span>Địa chỉ: {data.address}</span>
                        <span>Chủ đầu tư: {data.ownOfProject}</span>
                        <span>Đơn vị tư vấn: {data.consultingUnit}</span>
                    </div>
                    {/* <div className={cx("project-content-btn")}>
                    <button>View</button>
                </div> */}
                </div>
            </div>
            <div
                className={cx("project-item-bottom")}
                data-aos="fade-right"
                data-aos-duration="3000"
            >
                <h3>Một số hình ảnh dự án</h3>
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

export default ProjectItem;
