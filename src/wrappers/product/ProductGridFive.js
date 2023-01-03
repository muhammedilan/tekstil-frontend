import PropTypes from "prop-types";
import { Fragment, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductGridFive = ({ category }) => {
  const params = {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    modules: [EffectFade],
    loop: true,
    speed: 1000,
    navigation: true,
    autoHeight: false,
  };
  return (
    <Swiper
      options={params}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {category?.length > 0 &&
        category.map((category) => (
          <SwiperSlide>
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-301d67ad "
              data-id="301d67ad"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated ">
                <div className="elementor-widget-wrap ">
                  <div
                    className="elementor-element elementor-element-1cc07c6f elementor-widget elementor-widget-flone_banner "
                    data-id="1cc07c6f"
                    data-element_type="widget"
                    data-widget_type="flone_banner.default"
                  >
                    <div className="elementor-widget-container ">
                      <div className="flone-single-banner single-banner align_left ">
                        <Link
                          to={
                            "shop-grid-standard/" +
                            category.name +
                            "-c-" +
                            category.id
                          }
                        >
                          <img
                            src={category.image.secure_url}
                            className="attachment-large size-large w-full max-h-[302px] object-cover"
                            alt="Home 4 - Fashion"
                            decoding="async"
                            loading="lazy"
                            title="Home 4 - Fashion"
                          />
                        </Link>
                        <div className="flone-banner-content banner-content">
                          <h3>{category.name}</h3>
                          <h4 className="min-h-[24px]">
                            {category.starting_price && (
                              <>
                                Starting at
                                <span>₺{category.starting_price}</span>
                              </>
                            )}
                          </h4>
                          <Link
                            to={
                              "shop-grid-standard/" +
                              category.name +
                              "-c-" +
                              category.id
                            }
                            className="!flex items-center justify-center"
                            rel="nofollow"
                          >
                            <BsArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

ProductGridFive.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGridFive;
