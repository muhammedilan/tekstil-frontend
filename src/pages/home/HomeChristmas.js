import React, { useEffect, useState } from "react";
import SEO from "../../components/seo";
import LayoutNine from "../../layouts/LayoutNine";
import HeroSliderThirtyThree from "../../wrappers/hero-slider/HeroSliderThirtyThree";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import CountDownSix from "../../wrappers/countdown/CountDownSix";
import TestimonialThree from "../../wrappers/testimonial/TestimonialThree";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import ProductGridFiveContainer from "../../wrappers/product/ProductGridFiveContainer";
import { t } from "i18next";
import axios from "axios";

const HomeChristmas = ({ categories }) => {
  const [products, setProducts] = useState();
  const date = new Date();

  useEffect(() => {
    axios.get("product/newYear").then((res) => {
      res.status === 200 && setProducts(res.data);
    });
  }, []);

  return (
    <>
      <SEO
        titleTemplate="Christmas Home"
        description="Christmas home of flone react minimalist eCommerce template."
      />
      <LayoutNine
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderThirtyThree />

        <ProductGridFiveContainer
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
          category={categories}
        />

        {/* tab product */}
        <TabProductEleven
          products={products}
          category={categories}
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle={t("featured_products")}
          bgColorClass="bg-gray-3"
          bgShape={true}
          colorClass="pro-puce-color"
        />

        {/* countdown */}
        <CountDownSix
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          dateTime={`January 1, ${date.getFullYear() + 1} 23:59`}
        />

        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutNine>
    </>
  );
};

export default HomeChristmas;
