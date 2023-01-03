import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useEffect, useState } from "react";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  const [max, setMax] = useState();
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setMax(3);
    } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
      setMax(4);
    } else if (window.innerWidth > 1280) {
      setMax(6);
    }
  }, []);
  const navList = [
    { title: t("renews"), href: "/news" },
    { title: t("bestsellers"), href: "/best-sellers" },
    { title: t("all_products"), href: "/grid-" },
    { title: t("spring/summer"), href: "/grid-" },
    { title: t("autumn/winter"), href: "/grid-" },
    { title: t("on_sale"), href: "/grid-" },
  ];
  return (
    <div className="hidden sm:block whitespace-nowrap">
      <nav>
        <ul className="flex items-center md:gap-x-[42px] font-bold">
          {navList.slice(0, max).map((nav, index) => (
            <li className="p-[10px] hover:text-[#a749ff]">
              <Link
                to={nav.href}
                className={`${
                  index == navList.length - 1 ? "text-[#F00000]" : "text-brown"
                } text-[0.9375rem]`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
