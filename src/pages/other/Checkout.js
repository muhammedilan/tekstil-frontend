import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import countries from "../../data/countries.json";
import axios from "axios";
import { t } from "i18next";
import { BsChevronDown } from "react-icons/bs";

const Checkout = () => {
  const [bill, setBill] = useState();

  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);

  function handleChange(key, value) {
    setBill({
      ...bill,
      [key]: value,
    });
  }

  const { user } = useSelector((state) => state.user);
  return (
    <>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>{t("billing_details")}</h3>
                    <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.3)] inline-block rounded-md">
                      <div
                        className="flex items-center gap-x-1 cursor-pointer px-2 py-1"
                        onClick={(e) => {
                          const dropdown = e.currentTarget.nextElementSibling;
                          dropdown.classList.toggle("hidden");
                        }}
                      >
                        {t("choose_bill")}
                        <BsChevronDown size={16} />
                      </div>
                      <div className="hidden px-2 flex flex-col gap-y-1">
                        {user.bills?.map((bill, index) => (
                          <div
                            onClick={(e) => {
                              const textField =
                                e.currentTarget.parentElement
                                  .previousElementSibling.firstElementChild;

                              textField.textContent = `Bill ${index + 1}`;
                              setBill(bill);
                            }}
                            className="cursor-pointer"
                          >
                            Bill {index + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("first_name")}</label>
                          <input
                            value={bill?.first_name}
                            type="text"
                            onChange={(e) =>
                              handleChange("first_name", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("last_name")}</label>
                          <input
                            value={bill?.last_name}
                            type="text"
                            onChange={(e) =>
                              handleChange("last_name", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("company_name")}</label>
                          <input
                            onChange={(e) =>
                              handleChange("company_name", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>{t("country")}</label>
                          <select
                            onChange={(e) =>
                              handleChange("company_name", e.target.value)
                            }
                          >
                            <option>{t("select_a_country")}</option>
                            {countries.map((country) => (
                              <option>{country.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("street_address")}</label>
                          <input
                            onChange={(e) =>
                              handleChange("street_address", e.target.value)
                            }
                            className="billing-address"
                            placeholder={t("house_number_and_street_name")}
                            type="text"
                          />
                          <input
                            onChange={(e) =>
                              handleChange("apartment", e.target.value)
                            }
                            placeholder={t("Apartment, suite, unit etc") + "."}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>
                            {t("town")} / {t("city")}
                          </label>
                          <input
                            onChange={(e) =>
                              handleChange("city", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>
                            {t("state")} / {t("county")}
                          </label>
                          <input
                            onChange={(e) =>
                              handleChange("state", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("postcode")} / ZIP</label>
                          <input
                            onChange={(e) =>
                              handleChange("postcode", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("phone")}</label>
                          <input
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("email_address")}</label>
                          <input
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4> {t("additional_information")}</h4>
                      <div className="additional-info">
                        <label>{t("order_notes")}</label>
                        <textarea
                          onChange={(e) =>
                            handleChange("order_notes", e.target.value)
                          }
                          placeholder={t("notes_about_your_order")}
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>{t("your_order")}</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>{t("product")}</li>
                            <li>{t("total")}</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice =
                                cartItem.price * currency.currencyRate;
                              const finalDiscountedPrice =
                                discountedPrice * currency.currencyRate;

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        finalDiscountedPrice * cartItem.quantity
                                      : currency.currencySymbol +
                                        finalProductPrice * cartItem.quantity}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">
                              {t("shipping")}
                            </li>
                            <li>{t("free_shipping")}</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">{t("total")}</li>
                            <li>{currency.currencySymbol + cartTotalPrice}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button
                        className="btn-hover"
                        onClick={() => {
                          axios
                            .post("payment/3DPayOdemeSuccess", {
                              ...bill,
                              purch_amount: cartTotalPrice,
                              cartItems: cartItems.map((item) => {
                                return { id: item.id, quantity: item.quantity };
                              }),
                            })
                            .then((res) => console.log(res));
                        }}
                      >
                        {t("place_order")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      {t("no_items_found_in_cart_to_checkout")} <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        {t("shop_now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </>
  );
};

export default Checkout;
