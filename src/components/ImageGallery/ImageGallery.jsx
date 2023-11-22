import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./ImageGallery.module.scss";
import classNames from "classnames/bind";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import {} from "../../imgEntry.js";
const cx = classNames.bind(styles);

const ImageGallery = ({ images }) => {
    // const ref = React.useRef();

    // useEffect(() => {
    //     if (data.img) {
    //         ref.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // }, [data, ref]);
    // const viewImage = (img, i) => {
    //     setData({ img, i });
    // };

    // return (
    //     <div className={cx("image-gallery")}>
    //         {data.img && (
    //             <div
    //                 className={cx("modal")}
    //                 onClick={() => setData({ img: "", id: 0 })}
    //             >
    //                 <div className={cx("modal-container")}>
    //                     <button
    //                         className={cx("btn-close")}
    //                         onClick={() => setData({ img: "", id: 0 })}
    //                     >
    //                         <MdOutlineClose />
    //                     </button>

    //                     <img src={data.img} alt="" ref={ref} />
    //                 </div>
    //             </div>
    //         )}
    //         <ResponsiveMasonry
    //             columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    //         >
    //             <Masonry gutter="20px">
    //                 {images.map((image, i) => (
    //                     <img
    //                         key={i}
    //                         src={image}
    //                         style={{
    //                             width: "100%",
    //                             display: "block",
    //                             cursor: "pointer",
    //                         }}
    //                         onClick={() => viewImage(image, i)}
    //                         alt=""
    //                     />
    //                 ))}
    //             </Masonry>
    //         </ResponsiveMasonry>
    //     </div>
    // );
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
        <div className={cx("image-gallery")}>
            <Gallery photos={images} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

export default ImageGallery;
