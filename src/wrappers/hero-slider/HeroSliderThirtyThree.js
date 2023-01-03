import { t } from "i18next";
import { Link } from "react-router-dom";
import sliderData from "../../data/hero-sliders/hero-slider-thirty-three.json";
import img from "../../assets/images/new-year-slider-removebg.png";
const HeroSliderThirtyThree = () => {
  return (
    <div className="slider-area position-relative">
      <span
        className="body-effect effect-snow"
        style={{
          backgroundImage: `url(${"/assets/img/icon-img/snow1.png"})`,
        }}
      />
      <div
        className="single-slider slider-height-14 bg-img"
        style={{
          backgroundImage: `url(${sliderData.backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 align-self-center">
              <div className="slider-content-14">
                <h3>{t("christmas_sale")}</h3>
                <h1>{t("new_year_offer_collection")}</h1>
                <div className="slider-btn btn-hover">
                  <Link to="collections">{t("see_collections")}</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
              <div className="slider-single-img-14">
                <img src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderThirtyThree;
