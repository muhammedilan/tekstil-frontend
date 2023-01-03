import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { t } from "i18next";
import { useState } from "react";
import countries from "../../data/countries.json";
import axios from "axios";
import cogoToast from "cogo-toast";

const MyAccount = () => {
  let { pathname } = useLocation();

  const [user, setUser] = useState();
  const [bills, setBills] = useState();
  const [createBills, setCreateBills] = useState();

  useEffect(() => {
    axios.get("user").then((res) => {
      const { name, email, password } = res.data;
      setUser({
        first_name: name.split(" ")[0],
        last_name: name.split(" ")[1],
        email: email,
      });

      let addressList = [];
      const bills = res.data.bills;

      if (bills?.length > 0) {
        bills.map((json, index) => {
          addressList.push({
            id: index,
            ...json,
          });
        });
        setBills(addressList);
      }
    });
  }, []);

  function handleChange(name, value) {
    setCreateBills({ ...createBills, [name]: value });
  }

  function handleChangeBill(e, key, index) {
    setBills(
      [
        ...bills.filter((json) => json.id !== index),
        {
          [index]: {
            ...bills[index],
            [key]: e.target.value,
          },
        }[index],
      ].sort((a, b) => a.id - b.id)
    );
  }

  return (
    <Fragment>
      <SEO
        titleTemplate={t("my_account")}
        description={t(
          "my_account_page_of_flone_react_minimalist_ecommerce_template" + "."
        )}
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "My Account", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>1 .</span> {t("edit_your_account_information")}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>{t("my_account_information")}</h4>
                            <h5>{t("your_personal_details")}</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>{t("first_name")}</label>
                                <input
                                  readOnly={true}
                                  value={user?.first_name}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      first_name: e.target.value,
                                    })
                                  }
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>{t("last_name")}</label>
                                <input
                                  readOnly={true}
                                  value={user?.last_name}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      last_name: e.target.value,
                                    })
                                  }
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>{t("email_address")}</label>
                                <input
                                  readOnly={true}
                                  value={user?.email}
                                  onChange={(e) =>
                                    setUser({
                                      ...user,
                                      email: e.target.value,
                                    })
                                  }
                                  type="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div
                              onClick={(e) => {
                                const formDiv =
                                  e.currentTarget.parentElement
                                    .previousElementSibling;
                                for (
                                  let i = 0;
                                  i < formDiv.childElementCount;
                                  i++
                                ) {
                                  const input =
                                    formDiv.children[i].firstElementChild
                                      .lastElementChild;

                                  input.toggleAttribute("readonly");
                                }
                              }}
                              className="billing-btn"
                            >
                              <button type="submit">{t("edit")}</button>
                            </div>
                            <div
                              onClick={(e) => {
                                const filterUser = Object.entries(user).filter(
                                  (value) => value[1].length > 0
                                );
                                if (filterUser.length === 3) {
                                  axios
                                    .patch("user", user)
                                    .then((res) => {
                                      res.status === 200
                                        ? cogoToast.success(res.data)
                                        : cogoToast.error(res.data);
                                    })
                                    .catch((err) => {
                                      cogoToast.error(err.response.data);
                                    });
                                } else {
                                  cogoToast.error(
                                    t("all_information_is_required")
                                  );
                                }
                              }}
                              className="billing-btn"
                            >
                              <button type="submit">{t("send")}</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>2 .</span> {t("change_your_password")}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div>
                            <div className="account-info-wrapper">
                              <h4>{t("change_password")}</h4>
                              <h5>{t("your_password")}</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>{t("password")}</label>
                                  <input id="passInput" type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>{t("password_confirm")}</label>
                                  <input id="passInputConfirm" type="text" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div
                              onClick={() => {
                                const passwordInput =
                                  document.getElementById("passInput");
                                const passwordInputConfirm =
                                  document.getElementById("passInputConfirm");
                                if (
                                  passwordInput.value.length > 0 &&
                                  passwordInput.value ===
                                    passwordInputConfirm.value
                                ) {
                                  axios
                                    .patch("user/changePassword", {
                                      id: user.id,
                                      password: passwordInput.value,
                                    })
                                    .then((res) => {
                                      res.status === 200
                                        ? cogoToast.success(res.data)
                                        : cogoToast.error(res.data);
                                    })
                                    .catch((err) => {
                                      cogoToast.error(err.response.data);
                                    });
                                } else {
                                  cogoToast.error(t("passwords_do_not_match"));
                                }
                              }}
                              className="billing-btn"
                            >
                              <button type="submit">{t("send")}</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="2"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>3 .</span> {t("edit_your_billing_information")}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>{t("billing_information")}</h4>
                          </div>
                          <div className="entries-wrapper">
                            <div className="row">
                              <div className="entries-info">
                                {bills?.map((json, index) => {
                                  return (
                                    <div className="row">
                                      {index + 1}
                                      <div>
                                        {Object.entries(json).map((value) => (
                                          <>
                                            {value[0] !== "id" && (
                                              <div className="col-lg-12 col-md-12">
                                                <div className="billing-info mb-20">
                                                  <label>{t(value[0])}</label>
                                                  {value[0] !== "country" ? (
                                                    <input
                                                      value={json[value[0]]}
                                                      readOnly={true}
                                                      onChange={(e) =>
                                                        handleChangeBill(
                                                          e,
                                                          value[0],
                                                          index
                                                        )
                                                      }
                                                      type="text"
                                                    />
                                                  ) : (
                                                    <select
                                                      disabled={true}
                                                      onChange={(e) =>
                                                        handleChangeBill(
                                                          e,
                                                          value[0],
                                                          index
                                                        )
                                                      }
                                                    >
                                                      <option>
                                                        {value[1]}
                                                      </option>
                                                      {countries.map(
                                                        (country) => (
                                                          <option>
                                                            {country.name}
                                                          </option>
                                                        )
                                                      )}
                                                    </select>
                                                  )}
                                                </div>
                                              </div>
                                            )}
                                          </>
                                        ))}
                                      </div>
                                      <div className="billing-back-btn">
                                        <div
                                          onClick={(e) => {
                                            const formDiv =
                                              e.currentTarget.parentElement
                                                .previousElementSibling;
                                            for (
                                              let i = 0;
                                              i < formDiv.childElementCount;
                                              i++
                                            ) {
                                              const input =
                                                formDiv.children[i]
                                                  .firstElementChild
                                                  .lastElementChild;

                                              input.toggleAttribute("readonly");

                                              input.nodeName == "SELECT" &&
                                                input.toggleAttribute(
                                                  "disabled"
                                                );
                                            }
                                          }}
                                          className="billing-btn"
                                        >
                                          <button>{t("edit")}</button>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div
                                onClick={() => {
                                  let array = [];
                                  let isMissingValue = [];

                                  function filterBill(bill) {
                                    return Object.entries(bill).filter(
                                      (value) =>
                                        value[1].length > 0 && value[0] !== "id"
                                    );
                                  }

                                  bills.map((bill) => {
                                    const filteredBill = filterBill(bill);
                                    array.push(filteredBill);

                                    isMissingValue.push(
                                      filteredBill.length === 10
                                    );
                                  });

                                  if (!isMissingValue.includes(false)) {
                                    let arrayConvertJson = [];

                                    // I'm converting the jsons I made object entries back to json
                                    array.map((objectJson) => {
                                      let json = {};
                                      objectJson.map((value) => {
                                        json = {
                                          ...json,
                                          [value[0]]: value[1],
                                        };
                                      });
                                      arrayConvertJson.push(json);
                                    });

                                    axios
                                      .put("user/bill", arrayConvertJson)
                                      .then((res) => {
                                        res.status === 200
                                          ? cogoToast.success(res.data)
                                          : cogoToast.error(res.data);
                                      })
                                      .catch((err) => {
                                        cogoToast.error(err.response.data);
                                      });
                                  } else {
                                    cogoToast.error(
                                      "all_information_is_required"
                                    );
                                  }
                                }}
                                className="billing-btn"
                              >
                                <button type="submit">{t("send")}</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="3"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>4 .</span> {t("create_billing")}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="entries-wrapper">
                            <div className="row">
                              <div className="entries-info">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="billing-info mb-20">
                                      <label>{t("first_name")}</label>
                                      <input
                                        onChange={(e) =>
                                          handleChange(
                                            "first_name",
                                            e.target.value
                                          )
                                        }
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="billing-info mb-20">
                                      <label>{t("last_name")}</label>
                                      <input
                                        onChange={(e) =>
                                          handleChange(
                                            "last_name",
                                            e.target.value
                                          )
                                        }
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="billing-info mb-20">
                                      <label>{t("company_name")}</label>
                                      <input
                                        onChange={(e) =>
                                          handleChange(
                                            "company_name",
                                            e.target.value
                                          )
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
                                          handleChange(
                                            "country",
                                            e.target.value
                                          )
                                        }
                                      >
                                        {!createBills?.country && (
                                          <option>
                                            {t("select_a_country")}
                                          </option>
                                        )}
                                        {countries.map((country) => (
                                          <option>{country.name}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="billing-info mb-20 gap-y-5">
                                      <label>{t("street_address")}</label>
                                      <input
                                        onChange={(e) =>
                                          handleChange(
                                            "street_address",
                                            e.target.value
                                          )
                                        }
                                        className="billing-address"
                                        placeholder={t(
                                          "house_number_and_street_name"
                                        )}
                                        type="text"
                                      />
                                      <input
                                        onChange={(e) =>
                                          handleChange(
                                            "apartment",
                                            e.target.value
                                          )
                                        }
                                        placeholder={
                                          t("Apartment, suite, unit etc") + "."
                                        }
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
                                          handleChange(
                                            "postcode",
                                            e.target.value
                                          )
                                        }
                                        type="number"
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
                                        type="number"
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
                                      />
                                    </div>
                                  </div>
                                  <div className="billing-back-btn">
                                    <div
                                      onClick={() => {
                                        if (
                                          Object.entries(createBills).length ===
                                          11
                                        ) {
                                          console.log(createBills);
                                          axios
                                            .post("user/bill", createBills)
                                            .then((res) =>
                                              res.status === 201
                                                ? cogoToast.success(res.data)
                                                : cogoToast.error(res.data)
                                            )
                                            .catch((err) => {
                                              cogoToast.error(err);
                                            });
                                        } else {
                                          cogoToast.error(
                                            t("Tüm Bilgiler Zorunludur")
                                          );
                                        }
                                      }}
                                      className="billing-btn"
                                    >
                                      <button type="submit">{t("send")}</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
