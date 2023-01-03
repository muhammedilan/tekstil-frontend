import React from "react";

import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineColorSwatch, HiOutlineShoppingBag } from "react-icons/hi";
import { BsCollection, BsGrid } from "react-icons/bs";
const AdminPanel = () => {
  const downIcon = (
    <BiChevronDown className="ml-auto transition duration-500" size={18} />
  );

  /* Navigation List */
  const navigationList = [
    {
      Menu: [
        {
          title: "Ürünler",
          icon: <AiOutlineShoppingCart size={18} />,
          dropdown: [
            { title: "Tüm Ürünler", to: "Products" },
            { title: "Ürün ekle", to: "Create Product" },
          ],
        },
        {
          title: "Kategoriler",
          icon: <BsGrid size={18} />,
          dropdown: [
            { title: "Tüm Kategoriler", to: "Categories" },
            { title: "Kategori ekle", to: "Create Category" },
          ],
        },
        {
          title: "Renkler",
          icon: <HiOutlineColorSwatch size={18} />,
          dropdown: [
            { title: "Tüm Renkler", to: "Colors" },
            { title: "Renk ekle", to: "Create Color" },
          ],
        },
        {
          title: "Siparişler",
          icon: <HiOutlineShoppingBag size={18} />,
          dropdown: [
            { title: "Onaylanan Siparişler", to: "Confirmed Orders" },
            { title: "Onaylanmayan Siparişler", to: "Unconfirmed Orders" },
          ],
        },
        {
          title: "Koleksiyonlar",
          icon: <BsCollection size={18} />,
          dropdown: [
            { title: "Koleksiyonlar", to: "Collections" },
            { title: "Koleksiyon Ekle", to: "Create Collection" },
          ],
        },
      ],
      Pages: [
        {
          title: "Anasayfa",
          icon: <AiOutlineHome size={18} />,
          dropdown: [
            { title: "Tüm Kaydırıcı Resimleri", to: "Sliders Pictures" },
            { title: "Kaydırıcı Resmi Ekle", to: "Create Slider Picture" },
          ],
        },
      ],
    },
  ];

  function handleClick(e) {
    console.log(e.currentTarget);
    e.currentTarget.lastElementChild?.classList.toggle("rotate-180"); // BiChevronDown Icon

    ["before:!bg-white", "!text-white", "before:!opacity-100"].map(
      (className) => e.currentTarget.classList.toggle(className)
    );
  }

  /* Pathname and Dropdown Name */
  var pathname;
  var dropdownName;

  if (
    window.location.pathname !== "/admin/" &&
    window.location.pathname !== "/admin"
  ) {
    pathname = window.location.pathname
      .split("admin/")[1]
      .split("-")
      .map(
        (text, i) =>
          (i > 0 ? " " : "") + text[0].toLocaleUpperCase() + text.slice(1)
      );
    var navigationArrays = [];

    navigationList.map((value) =>
      Object.entries(value).map((arr) => navigationArrays.push(arr[1]))
    );

    navigationArrays.map((arr) =>
      arr.map((value) => {
        value.dropdown?.map((v) => {
          let editPathname = pathname.join("").trim();
          v == editPathname && (dropdownName = value.title);
          v.dropdown?.map(
            (dv) => dv == editPathname && (dropdownName = v.title)
          );
        });
      })
    );
  }

  const hamburgerIcon = (
    <div className="w-[20px] flex flex-col gap-y-1 cursor-pointer">
      <span className="w-[80%] bg-[#878a99] rounded-[2px] h-[2px]  duration-1000"></span>
      <span className="w-[100%] bg-[#878a99] rounded-[2px] h-[2px] duration-1000"></span>
      <span className="w-[60%] bg-[#878a99] rounded-[2px] h-[2px] duration-1000"></span>
    </div>
  );
  return (
    <div className="overflow-x-hidden">
      {/* Navbar Menu */}
      <nav className="fixed sm:w-[250px] h-full bg-[#151529]">
        {Object.entries(navigationList[0]).map((nav, index) => {
          return (
            <>
              {/* Menu, Pages etc. */}
              <div className="text-[#6d7080] text-[11px] font-semibold tracking-[.05em] uppercase p-3">
                {nav[0]}
              </div>
              {nav[1].map((navDropdown) => (
                <>
                  <div
                    onClick={(e) => {
                      handleClick(e);
                      e.currentTarget.nextElementSibling.classList.toggle(
                        "hidden"
                      );
                    }}
                    className="flex items-center py-[10px] px-6 !text-[#a3a6b7] hover:text-white text-[14.8px] cursor-pointer"
                  >
                    {navDropdown.icon}
                    <span className="ml-[10px] !text-[#a3a6b7] ">
                      {navDropdown.title}
                    </span>
                    {downIcon}
                  </div>

                  {/* First Dropdown */}
                  <div className="text-[13px] pl-[28px] hidden">
                    {navDropdown.dropdown?.map((value) => (
                      <>
                        <Link
                          onClick={(e) => {
                            handleClick(e);
                            value.dropdown &&
                              e.currentTarget.nextElementSibling.classList.toggle(
                                "hidden"
                              );
                          }}
                          to={
                            !value.dropdown &&
                            value.to?.replaceAll(" ", "-").toLowerCase()
                          }
                          className="flex items-center !text-[#a3a6b7] hover:before:bg-white hover:before:opacity-100 hover:text-white cursor-pointer py-[8.8px] px-6 relative before:content-[''] before:absolute before:left-[2px] before:bg-[#7c7f90] before:w-[6px] before:h-[1.5px] before:top-1/2 before:-translate-y-1/2 before:opacity-50"
                        >
                          {value.title}
                          {value.dropdown && downIcon}
                        </Link>

                        {/* Second Dropdown */}
                        {/* {value.dropdown && (
                          <div className="text-[13px] pl-[15px] hidden">
                            {value.dropdown.map((val) => (
                              <Link
                                onClick={(e) => handleClick(e)}
                                to={val.replace(" ", "-").toLowerCase()}
                                className="flex items-center hover:before:opacity-100 !text-[#a3a6b7]  hover:before:bg-white hover:text-white cursor-pointer py-[8.8px] px-6 relative before:content-[''] before:absolute before:left-[2px] before:bg-[#7c7f90] before:w-[5px] before:h-[5px] before:top-1/2 before:-translate-y-1/2 before:opacity-50 before:rounded-full before:border"
                              >
                                {val}
                              </Link>
                            ))}
                          </div>
                        )} */}
                      </>
                    ))}
                  </div>
                </>
              ))}
            </>
          );
        })}
      </nav>
      <main className="sm:ml-[250px] grow flex flex-col min-h-screen">
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="py-[10px] px-6 flex items-center justify-between w-full text-[#495057] shadow-panel">
          <h4 className="font-bold text-[15px] uppercase leading-normal m-0">
            {pathname}
          </h4>
          <div className="flex items-center gap-x-2 text-[#878a99]">
            {dropdownName}
            {dropdownName && <BiChevronRight size={18} />}
            {pathname}
          </div>
        </div>
        <div className="grow bg-[#f2f2f7] mt-[70px] overflow-x-hidden px-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
