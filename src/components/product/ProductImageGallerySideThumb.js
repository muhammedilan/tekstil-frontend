import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade, Thumbs } from "swiper";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "../../../node_modules/yet-another-react-lightbox/dist/plugins/thumbnails";
import Zoom from "../../../node_modules/yet-another-react-lightbox/dist/plugins/zoom";
import Fullscreen from "../../../node_modules/yet-another-react-lightbox/dist/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../swiper";

const ProductImageGalleryLeftThumb = ({ product, thumbPosition }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
    src: process.env.PUBLIC_URL + img,
    key: i,
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      320: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      1200: {
        slidesPerView: 4,
        direction: "vertical",
      },
    },
  };

  return (
    <Fragment>
      <div className="row row-5 test">
        <div
          className={clsx(
            thumbPosition && thumbPosition === "left"
              ? "col-xl-10 order-1 order-xl-2"
              : "col-xl-10"
          )}
        >
          <div className="product-large-image-wrapper">
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}
            {product?.image?.length ? (
              <Swiper options={gallerySwiperParams}>
                {product?.image.map((single, key) => (
                  <SwiperSlide key={key}>
                    <button
                      className="lightgallery-button"
                      onClick={() => setIndex(key)}
                    >
                      <i className="pe-7s-expand1"></i>
                    </button>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + single}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <Lightbox
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  slides={slides}
                  plugins={[Thumbnails, Zoom, Fullscreen]}
                />
              </Swiper>
            ) : null}
          </div>
        </div>
        <div
          className={clsx(
            thumbPosition && thumbPosition === "left"
              ? "col-xl-2 order-2 order-xl-1"
              : "col-xl-2"
          )}
        >
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            {product?.image?.length ? (
              <Swiper options={thumbnailSwiperParams}>
                {product.image.map((single, key) => (
                  <SwiperSlide key={key}>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + single}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductImageGalleryLeftThumb.propTypes = {
  product: PropTypes.shape({}),
  thumbPosition: PropTypes.string,
};

export default ProductImageGalleryLeftThumb;
