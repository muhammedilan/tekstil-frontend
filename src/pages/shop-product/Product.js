import React, { Fragment, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useSelector } from "react-redux";
const Product = () => {
  let { pathname } = useLocation();
  let { product } = useParams();

  const productId = product.split("-p-")[1];
  const { products } = useSelector((state) => state.product);
  const findProduct = products.find((product) => product.id == productId);
  console.log(products);
  const galleryType = product?.image?.length == 1 ? "fixedImage" : undefined;
  return (
    <>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />{" "}
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Shop Product",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />

        {/* product description with image */}
        <ProductImageDescription
          galleryType={galleryType}
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={findProduct}
        />

        {/* product description tab */}
        <ProductDescriptionTab spaceBottomClass="pb-90" product={findProduct} />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={findProduct?.category}
          id={findProduct?.id}
        />
      </LayoutOne>
    </>
  );
};

export default Product;
