import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoryGrid = ({ sliderClassName, spaceBottomClass, category }) => {
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
    <div className="slider-active nav-style-1">
      <Swiper slidesPerView={4} options={params}>
        {category?.map((category) => (
          <SwiperSlide>
            <div
              className={clsx("product-wrap-3 scroll-zoom", spaceBottomClass)}
            >
              <div className="product-img">
                <Link to={process.env.PUBLIC_URL + "/product/" + category.id}>
                  <img
                    className="default-img"
                    src={process.env.PUBLIC_URL + category.image.secure_url}
                  />
                </Link>

                <div className="product-content-3-wrap">
                  <div className="product-content-3">
                    <div className="product-title">
                      <h3>
                        <Link
                          to={
                            process.env.PUBLIC_URL + "/product/" + category.id
                          }
                        >
                          {category.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CategoryGrid.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default CategoryGrid;
