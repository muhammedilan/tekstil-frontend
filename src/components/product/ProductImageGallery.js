import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "../../../node_modules/yet-another-react-lightbox/dist/plugins/thumbnails";
import Zoom from "../../../node_modules/yet-another-react-lightbox/dist/plugins/zoom";
import Fullscreen from "../../../node_modules/yet-another-react-lightbox/dist/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../swiper";

const ProductImageGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
    src: process.env.PUBLIC_URL + img.secure_url,
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
    slidesPerView: product?.image?.length >= 4 ? 4 : product?.image?.length,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };
  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product?.discount || product?.new ? (
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
        {product?.image.length ? (
          <Swiper options={gallerySwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single.secure_url}
                    className="img-fluid"
                    alt="Product Image"
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.image.length ? (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((single, key) => {
              return (
                <>
                  <SwiperSlide key={key}>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + single.secure_url}
                        className="img-fluid"
                        alt="Product Image"
                      />
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({}),
};

export default ProductImageGallery;
