import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../../components/swiper";
import HeroSliderFifteenSingle from "../../components/hero-slider/HeroSliderFifteenSingle.js";
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
  autoHeight: false,
};

const HeroSliderFifteen = () => {
  const [slidersPictures, setSlidersPictures] = useState([]);

  useEffect(() => {
    axios.get("/slider").then((res) => setSlidersPictures(res.data));
  }, []);

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {slidersPictures && (
          <Swiper options={params}>
            {slidersPictures.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderFifteenSingle data={single} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderFifteen;
