import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";

import axios from "axios";
import { deleteUser } from "../../store/slices/user-slice";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
const IconGroup = ({ iconWhiteClass }) => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);

  const [user, setUser] = useState();
  useEffect(() => {
    if (localStorage.getItem("cp") !== "false") {
      axios.get("auth").then((res) => {
        res.status === 200 && setUser(res.data);
      });
    } else {
      reduxUser && setUser(reduxUser);
    }
  }, []);

  const handleClick = (e) => {
    e.currentTarget.nextSibling.firstElementChild.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  const iconList = [
    { icon: <BsArrowDownUp strokeWidth={0.4} />, href: "/compare" },
    { icon: <FaRegHeart />, href: "/wishlist" },
  ];
  return (
    <>
      <div
        onClick={() => triggerMobileMenu()}
        className="cursor-pointer my-auto inline-block sm:hidden"
      >
        <div className="w-[18px] h-[3px] rounded-full bg-dark-blue"></div>
        <div className="w-[18px] h-[3px] rounded-full bg-dark-blue my-1"></div>
        <div className="w-[18px] h-[3px] rounded-full bg-dark-blue"></div>
      </div>
      <div
        className={
          clsx("header-right-wrap", iconWhiteClass) +
          " invisible absolute sm:!visible sm:static"
        }
      >
        <FiSearch
          size={24}
          onClick={(e) => handleClick(e)}
          className="text-dark-blue cursor-pointer hover:text-primary duration-300 mr-[22px] lg:mr-0"
        />

        <div className="same-style header-search d-none d-lg-block">
          <div className="search-content">
            <form action="#">
              <input type="text" placeholder={t("search")} />
              <button className="button-search">
                <i className="pe-7s-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="same-style account-setting d-none d-lg-block">
          <button
            className="account-setting-active"
            onClick={(e) =>
              e.currentTarget.nextElementSibling.classList.toggle("active")
            }
          >
            <MdOutlineAccountCircle
              size={26}
              className="text-dark-blue cursor-pointer mx-[35px] hover:text-primary duration-300"
            />
          </button>
          <div className="account-dropdown">
            <ul>
              {!user ? (
                <>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/login-register"}>
                      {t("login")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/login-register"}>
                      {t("register")}
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    {t("my_account")}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-[22px]">
          {iconList.map((json, index) => (
            <Link to={json.href}>
              <div
                className="text-[22px] relative text-dark-blue hover:text-primary duration-300 cursor-pointer group"
                key={index}
              >
                {json.icon}
                <div className="w-7 h-[27px] leading-[27px] rounded-full bg-dark-blue group-hover:bg-primary duration-300 text-white font-bold text-[0.9375rem] absolute bottom-[14px] left-[10px] flex items-center justify-center">
                  0
                </div>
              </div>
            </Link>
          ))}
          <div className="same-style cart-wrap d-none d-lg-block">
            <button
              className="icon-cart"
              onClick={(e) =>
                e.currentTarget.nextElementSibling.classList.toggle("active")
              }
            >
              <div className="text-[22px] relative text-dark-blue hover:text-primary duration-300 cursor-pointer group">
                <HiOutlineShoppingBag size={26} />
                <div className="w-7 h-[27px] leading-[27px] rounded-full bg-dark-blue group-hover:bg-primary duration-300 text-white font-bold text-[0.9375rem] absolute bottom-[14px] left-[10px] flex items-center justify-center">
                  0
                </div>
              </div>
            </button>
            {/* menu cart */}
            <MenuCart />
          </div>
        </div>
      </div>
    </>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
