import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import { t } from "i18next";
import { memo } from "react";
const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const footerList = [
    {
      title: t("about_us"),
      list: [
        { title: t("who_are_we") + "?", href: "/who-are-we" },
        { title: t("communication"), href: "/contact-us" },
        { title: t("order_tracking"), href: "/order-tracking" },
      ],
    },
    {
      title: t("useful_links"),
      list: [
        {
          title: "Facebook",
          href: "https://www.instagram.com/polintextile",
        },
        { title: "Twitter", href: "https://www.instagram.com/polintextile" },
        { title: "Instagram", href: "https://www.instagram.com/polintextile/" },
        { title: "Pinterest", href: "" },
      ],
    },
    {
      title: t("follow_us"),
      list: [
        {
          title: "Facebook",
          href: "https://www.instagram.com/polintextile",
        },
        { title: "Twitter", href: "https://www.instagram.com/polintextile" },
        { title: "Instagram", href: "https://www.instagram.com/polintextile/" },
        { title: "Pinterest", href: "" },
      ],
    },
  ];
  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass,
        spaceLeftClass,
        spaceRightClass
      )}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright spaceBottomClass="mb-30" />
          </div>
          <div className="flex gap-y-[60px] gap-x-[122px] flex-wrap">
            {footerList.map((l) => (
              <div>
                <h3 className="text-brown font-bold text-[1.25rem] leading-[30px] mb-[18px]">
                  {l.title}
                </h3>
                <div className="flex flex-col gap-y-[20px]">
                  {l.list.map((v) => (
                    <a
                    href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[1rem] text-brown leading-6"
                    >
                      {v.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-brown font-bold text-[1.25rem] leading-[30px]">
                {t("subscribe")}
              </h3>
              <p className="font-medium text-brown text-[1rem] leading-[24px] mb-[24px] mt-[17px] 2xl:max-w-[250px]">
                {t(
                  "subscribe_to_the_e-mail_newsletter_to_be_informed_about_the_latest_products_and_discounts"
                )}
              </p>
              <input
                type="text"
                className="text-brown font-medium text-[1rem] leading-6 mb-[15px]"
                placeholder={t("enter_your_e-mail_address") + "..."}
              />
              <div className="w-full h-[2px] bg-brown mb-6" />
              <button className="text-[1rem] font-medium text-brown leading-6 underline">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
