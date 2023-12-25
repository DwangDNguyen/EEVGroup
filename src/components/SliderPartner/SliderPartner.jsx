import classNames from "classnames/bind";
import styles from "./SliderPartner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    Hitc,
    HnCab,
    Interbuild,
    Kyoto,
    MB,
    MBLand,
    Vietcombank,
} from "../../imgEntry";

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SliderPartner() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className={cx("slider-partner")}>
            <Slider {...settings}>
                <div className={cx("item-container")}>
                    <img src={Hitc} />
                </div>
                <div className={cx("item-container")}>
                    <img src={MB} />
                </div>
                <div className={cx("item-container")}>
                    <img src={MBLand} />
                </div>
                <div className={cx("item-container")}>
                    <img src={Vietcombank} />
                </div>
                <div className={cx("item-container")}>
                    <img src={Interbuild} />
                </div>
                <div className={cx("item-container")}>
                    <img src={Kyoto} />
                </div>
                <div className={cx("item-container")}>
                    <img src={HnCab} />
                </div>
            </Slider>
        </div>
    );
}

export default SliderPartner;
