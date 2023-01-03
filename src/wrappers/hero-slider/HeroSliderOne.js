import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../../components/swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import { useEffect, useState } from "react";
import axios from "axios";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
};

const HeroSliderOne = () => {
  const [sliderPictures, setSliderPictures] = useState();

  useEffect(() => {
    axios.get("/slider").then((res) => {
      setSliderPictures(res.data);
    });
  }, []);

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper options={params}>
          {sliderPictures?.map((json) => {
            const image = json.image;
            return (
              <SwiperSlide className="slider-height-1">
                <img
                  className="w-full slider-height-1 object-contain"
                  src={image.secure_url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;
