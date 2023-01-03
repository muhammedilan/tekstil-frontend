import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import { t } from "i18next";
import cogoToast from "cogo-toast";
const LoginRegister = () => {
  const [user, setUser] = useState();
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate={t("login")}
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Login Register",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav
                      onClick={(e) => {
                        setUser();
                      }}
                      variant="pills"
                      className="login-register-tab-list"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>{t("login")}</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>{t("register")}</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onClick={(e) => e.preventDefault()}>
                              <input
                                type="text"
                                placeholder={t("email")}
                                onChange={(e) =>
                                  setUser({ ...user, email: e.target.value })
                                }
                              />
                              <input
                                type="password"
                                placeholder={t("password")}
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    password: e.target.value,
                                  })
                                }
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">
                                    {t("remember_me")}
                                  </label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    {t("forgot_password")}?
                                  </Link>
                                </div>
                                <button
                                  onClick={() => {
                                    axios
                                      .post("auth/login", user)
                                      .then((res) =>
                                        res.status === 200
                                          ? (window.location.pathname = "/")
                                          : cogoToast.error(res.data)
                                      )
                                      .catch((err) => {
                                        cogoToast.error(err.response.data);
                                      });
                                  }}
                                  type="submit"
                                >
                                  <span>{t("login")}</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onClick={(e) => e.preventDefault()}>
                              <input
                                type="text"
                                name="first-name"
                                placeholder={t("first_name")}
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    first_name: e.target.value,
                                  })
                                }
                              />
                              <input
                                type="text"
                                name="last-name"
                                placeholder={t("last_name")}
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    last_name: e.target.value,
                                  })
                                }
                              />
                              <input
                                name="user-email"
                                placeholder={t("email")}
                                type="email"
                                onChange={(e) =>
                                  setUser({ ...user, email: e.target.value })
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder={t("password")}
                                onChange={(e) =>
                                  setUser({ ...user, password: e.target.value })
                                }
                              />
                              <div
                                onClick={() => {
                                  axios
                                    .post("user", user)
                                    .then(
                                      (res) =>
                                        res.status === 201 &&
                                        (window.location.pathname = "/")
                                    );
                                }}
                                className="button-box"
                              >
                                <button type="submit">
                                  <span>{t("register")}</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;