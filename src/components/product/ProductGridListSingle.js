import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import { t } from "i18next";
import convertEnglish from "../../hooks/use-convert-english";

const ProductGridListSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate);
  const finalDiscountedPrice = +(discountedPrice * currency.currencyRate);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className={clsx("product-wrap h-full", spaceBottomClass)}>
        <div className="product-img h-[calc(100%-84px)]">
          <Link
            to={
              "/" +
              convertEnglish(product.name).replaceAll(" ", "-") +
              "-p-" +
              product.id
            }
          >
            <img
              className="default-img h-full"
              src={process.env.PUBLIC_URL + product.image[0].secure_url}
              alt="Product main image"
            />
            {product.image.length > 1 && (
              <img
                className="hover-img h-full"
                src={process.env.PUBLIC_URL + product.image[1].secure_url}
                alt="Product hover image"
              />
            )}
          </Link>
          {product.discount || product.new ? (
            <div className="product-img-badges">
              {product.discount ? (
                <span className="pink">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="purple">{t("new")}</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <button
                className={wishlistItem !== undefined ? t("active") : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? t("added_to_wishlist")
                    : t("add_to_wishlist")
                }
                onClick={() => dispatch(addToWishlist(product))}
              >
                <i className="pe-7s-like" />
              </button>
            </div>
            <div className="pro-same-action pro-cart">
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t("buy_now")}
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  to={
                    "/" +
                    convertEnglish(product.name).replaceAll(" ", "-") +
                    "-p-" +
                    product.id
                  }
                >
                  {t("select_option")}
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? t("active")
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined
                      ? t("added_to_cart")
                      : t("add_to_cart")
                  }
                >
                  {" "}
                  <i className="pe-7s-cart"></i>{" "}
                  {cartItem !== undefined && cartItem.quantity > 0
                    ? t("added")
                    : t("add_to_cart")}
                </button>
              ) : (
                <button disabled className="active">
                  {t("out_of_stock")}
                </button>
              )}
            </div>
            <div className="pro-same-action pro-quickview">
              <button
                onClick={() => setModalShow(true)}
                title={t("quick_view")}
              >
                <i className="pe-7s-look" />
              </button>
            </div>
          </div>
        </div>
        <div className="product-content text-center h-[84px]">
          <h3>
            <Link
              to={
                "/" +
                convertEnglish(product.name).replaceAll(" ", "-") +
                "-p-" +
                product.id
              }
            >
              {product.name}
            </Link>
          </h3>
          {product.rating && product.rating > 0 ? (
            <div className="product-rating">
              <Rating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            {discountedPrice !== null ? (
              <Fragment>
                <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
                <span className="old">
                  {currency.currencySymbol + finalProductPrice}
                </span>
              </Fragment>
            ) : (
              <span>{currency.currencySymbol + finalProductPrice} </span>
            )}
          </div>
        </div>
      </div>
      <div className="shop-list-wrap mb-30">
        <div className="row">
          <div className="col-xl-4 col-md-5 col-sm-6">
            <div className="product-list-image-wrap">
              <div className="product-img">
                <Link
                  to={
                    "/" +
                    convertEnglish(product.name).replaceAll(" ", "-") +
                    "-p-" +
                    product.id
                  }
                >
                  <img
                    className="default-img img-fluid"
                    src={process.env.PUBLIC_URL + product.image[0].secure_url}
                    alt="Product main image"
                  />
                  {product.image.length > 1 ? (
                    <img
                      className="hover-img img-fluid"
                      src={process.env.PUBLIC_URL + product.image[1].secure_url}
                      alt="Product hover image"
                    />
                  ) : (
                    ""
                  )}
                </Link>
                {product.discount || product.new ? (
                  <div className="product-img-badges">
                    {product.discount ? (
                      <span className="pink">-{product.discount}%</span>
                    ) : (
                      ""
                    )}
                    {product.new ? (
                      <span className="purple">{t("new")}</span>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7 col-sm-6">
            <div className="shop-list-content">
              <h3>
                <Link
                  to={
                    "/" +
                    convertEnglish(product.name).replaceAll(" ", "-") +
                    "-p-" +
                    product.id
                  }
                >
                  {product.name}
                </Link>
              </h3>
              <div className="product-list-price">
                {discountedPrice !== null ? (
                  <Fragment>
                    <span>
                      {currency.currencySymbol + finalDiscountedPrice}
                    </span>{" "}
                    <span className="old">
                      {currency.currencySymbol + finalProductPrice}
                    </span>
                  </Fragment>
                ) : (
                  <span>{currency.currencySymbol + finalProductPrice} </span>
                )}
              </div>
              {product.rating && product.rating > 0 ? (
                <div className="rating-review">
                  <div className="product-list-rating">
                    <Rating ratingValue={product.rating} />
                  </div>
                </div>
              ) : (
                ""
              )}
              {product.shortDescription ? (
                <p>{product.shortDescription}</p>
              ) : (
                ""
              )}

              <div className="shop-list-actions d-flex align-items-center">
                <div className="shop-list-btn btn-hover">
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t("buy_now")}
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    <Link
                      to={
                        "/" +
                        convertEnglish(product.name).replaceAll(" ", "-") +
                        "-p-" +
                        product.id
                      }
                    >
                      {t("select_option")}
                    </Link>
                  ) : product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className={
                        cartItem !== undefined && cartItem.quantity > 0
                          ? t("active")
                          : ""
                      }
                      disabled={cartItem !== undefined && cartItem.quantity > 0}
                      title={
                        cartItem !== undefined
                          ? t("added_to_cart")
                          : t("add_to_cart")
                      }
                    >
                      {" "}
                      <i className="pe-7s-cart"></i>{" "}
                      {cartItem !== undefined && cartItem.quantity > 0
                        ? t("added")
                        : t("add_to_cart")}
                    </button>
                  ) : (
                    <button disabled className="active">
                      {t("out_of_stock")}
                    </button>
                  )}
                </div>

                <div className="shop-list-wishlist ml-10">
                  <button
                    className={wishlistItem !== undefined ? t("active") : ""}
                    disabled={wishlistItem !== undefined}
                    title={
                      wishlistItem !== undefined
                        ? t("added_to_wishlist")
                        : t("add_to_wishlist")
                    }
                    onClick={() => dispatch(addToWishlist(product))}
                  >
                    <i className="pe-7s-like" />
                  </button>
                </div>
                <div className="shop-list-compare ml-10">
                  <button
                    className={compareItem !== undefined ? t("active") : ""}
                    disabled={compareItem !== undefined}
                    title={
                      compareItem !== undefined
                        ? t("added_to_compare")
                        : t("add_to_compare")
                    }
                    onClick={() => dispatch(addToCompare(product))}
                  >
                    <i className="pe-7s-shuffle" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridListSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.shape({}),
};

export default ProductGridListSingle;
