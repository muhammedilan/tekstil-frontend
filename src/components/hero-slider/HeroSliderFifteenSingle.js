import { t } from "i18next";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSliderFifteenSingle = ({ data, sliderClass }) => {
  console.log(data)
  return (
    <div
      className="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + data.image.secure_url
        })`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12 ms-auto">
            <div className="slider-content-2 slider-animated-1">
              {data.small_title && (
                <h3 className="animated no-style">{data.small_title}</h3>
              )}
              {data.title && <h1 className="animated">{data.title}</h1>}
              <div className="slider-btn btn-hover">
                <Link to="collections" className="animated rounden-btn">
                  {t("see_collections")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFifteenSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default HeroSliderFifteenSingle;
