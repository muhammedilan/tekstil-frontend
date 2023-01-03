import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map";
import { t } from "i18next";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Contact = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      {/* <p>+</p>
                      <p>+</p> */}
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:support@polintextile.com">
                          support@polintextile.com
                        </a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">
                          yourwebsitename.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>{t("contact_info_address")}</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>{t("follow_us")}</h3>
                    <ul>
                      <li>
                        <a
                          href="https://www.instagram.com/polintextile"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/polintextile/?igshid=YmMyMTA2M2Y%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GrInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/polintextile/?igshid=YmMyMTA2M2Y%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTiktok />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>{t("get_in_touch")}</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder={t("name") + "*"}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder={t("email") + "*"}
                          type="email"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder={t("subject") + "*"}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder={t("your_message") + "*"}
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          {t("send")}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
