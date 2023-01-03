import { Suspense, lazy, useEffect, useState } from "react";
import { t } from "i18next";
import axios from "axios";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";

import { setUser, deleteUser } from "./store/slices/user-slice";
import { useDispatch } from "react-redux";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const HomeChristmas = lazy(() => import("./pages/home/HomeChristmas"));

// collection pages
const Collection = lazy(() => import("./pages/shop/Collection"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));

const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const CookiePolicy = lazy(() => import("./pages/other/CookiePolicy"));
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

// admin pages
const pagesAdmin = "./pages/admin/";
const Login = lazy(() => import(pagesAdmin + "Login"));

const AdminPanel = lazy(() => import(pagesAdmin + "AdminPanel"));

const CreateProduct = lazy(() => import(pagesAdmin + "products/CreateProduct"));
const Products = lazy(() => import(pagesAdmin + "products/Products"));

const Colors = lazy(() => import(pagesAdmin + "colors"));
const CreateColor = lazy(() => import(pagesAdmin + "colors/CreateColor"));

const Categories = lazy(() => import(pagesAdmin + "categories"));
const CreateCategory = lazy(() =>
  import(pagesAdmin + "categories/CreateCategory")
);

const SlidersPictures = lazy(() =>
  import(pagesAdmin + "sliders-pictures/SlidersPictures")
);
const CreateSliderPicture = lazy(() =>
  import(pagesAdmin + "sliders-pictures/CreateSliderPicture")
);

const ConfirmedOrders = lazy(() =>
  import(pagesAdmin + "orders/ConfirmedOrders")
);
const UnConfirmedOrders = lazy(() =>
  import(pagesAdmin + "orders/UnConfirmedOrders")
);

const Collections = lazy(() => import(pagesAdmin + "collections"));
const CreateCollection = lazy(() =>
  import(pagesAdmin + "collections/CreateCollection")
);

const Home = lazy(() => import(pagesAdmin + "home"));

const isProduction = process.env.NODE_ENV?.trim() == "production";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://tekstil-backend.web.app/";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isNewYear, setIsNewYear] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    axios.get("/category").then((res) => {
      console.log(res);
      setCategories(res.data);
    });

    axios
      .get("auth")
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          res.data.is_admin === 1 && setIsAdmin(true);
          dispatch(setUser(res.data));
        } else {
          dispatch(deleteUser());
        }
      })
      .catch(() => dispatch(deleteUser()));

    window.addEventListener("error", (e) => {
      if (/Loading chunk [\d]+ failed/.test(e.message)) {
        window.location.reload();
      }
    });

    const date = new Date();

    if (date.getMonth() == 11 && date.getDate() >= 25) {
      setIsNewYear(true);
    } else {
      setIsNewYear(false);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span className={isNewYear ? "bg-[#df262b]" : ""}></span>
                <span className={isNewYear ? "bg-[#df262b]" : ""}></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={
                isNewYear ? (
                  <HomeChristmas categories={categories || []} />
                ) : (
                  <HomeFashion categories={categories || []} />
                )
              }
            />

            {/* Shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/collections"}
              element={<Collection />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            <Route
              path={
                process.env.PUBLIC_URL +
                "/shop-grid-standard/collections/:collection"
              }
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard/:category"}
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
              element={<ShopGridTwoColumn />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
              element={<ShopGridNoSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
              element={<ShopGridFullWidth />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
              element={<ShopGridRightSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-standard"}
              element={<ShopListStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-full-width"}
              element={<ShopListFullWidth />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-two-column"}
              element={<ShopListTwoColumn />}
            />

            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/:product"}
              element={<Product />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
              element={<ProductTabRight />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              element={<ProductSticky />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />

            {/* Blog pages */}
            <Route
              path={process.env.PUBLIC_URL + "/blog-standard"}
              element={<BlogStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
              element={<BlogNoSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
              element={<BlogRightSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-details-standard"}
              element={<BlogDetailsStandard />}
            />

            {/* Other pages */}
            <Route
              path={process.env.PUBLIC_URL + "/cookie-policy"}
              element={<CookiePolicy />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              element={<MyAccount />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/login-register"}
              element={<LoginRegister />}
            />
            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />

            {/* Admin pages */}
            <Route
              path="admin/"
              element={isAdmin === true ? <AdminPanel /> : <Login />}
            >
              <Route path="products" element={<Products />} />
              <Route
                path="create-product"
                element={<CreateProduct isNewYear={isNewYear} />}
              />

              <Route path="categories" element={<Categories />} />
              <Route path="create-category" element={<CreateCategory />} />

              <Route path="colors" element={<Colors />} />
              <Route path="create-color" element={<CreateColor />} />

              <Route path="sliders-pictures" element={<SlidersPictures />} />
              <Route
                path="create-slider-picture"
                element={<CreateSliderPicture />}
              />

              <Route path="confirmed-orders" element={<ConfirmedOrders />} />
              <Route
                path="unconfirmed-orders"
                element={<UnConfirmedOrders />}
              />

              <Route path="collections" element={<Collections />} />
              <Route path="create-collection" element={<CreateCollection />} />

              <Route path="home" element={<Home />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Cookie Policy */}
          {!localStorage.getItem("cookie_policy") && (
            <div className="w-[98%] max-w-[300px] min-h-[50px] transition duration-500 rounded-md text-[1rem] font-medium text-center p-2 shadow-[0px_0px_6px_rgba(0,0,0,0.5)] fixed left-2 bottom-2 bg-white z-[100]">
              <FaCookieBite size={38} color="#C7A317" className="mx-auto" />
              <h1 className="text-[1.1rem] font-semibold">Çerez Politikası</h1>
              <p>Bu Website Çerezleri Kullanmaktadır.</p>
              <div
                onClick={(e) =>
                  ["opacity-0", "-z-[100]"].map((className) => {
                    e.currentTarget.parentElement.classList.toggle(className);
                    localStorage.setItem("cookie_policy", true);
                  })
                }
                className="absolute top-4 right-2 cursor-pointer rounded-full flex items-center justify-center"
              >
                <div className="w-4 h-1 bg-[#C7A317] rounded-full -rotate-45 absolute" />
                <div className="w-4 h-1 bg-[#C7A317] rounded-full rotate-45 " />
              </div>
              <div className="flex items-center justify-center gap-x-2 my-2">
                <button
                  className="px-4 py-1 rounded-sm bg-[#C7A317] text-[0.9rem] text-white border-2 border-[#C7A317] hover:brightness-[0.85] transition duration-300"
                  onClick={(e) =>
                    ["opacity-0", "-z-[100]"].map((className) => {
                      e.currentTarget.parentElement.parentElement.classList.toggle(
                        className
                      );
                      localStorage.setItem("cookie_policy", true);
                    })
                  }
                >
                  Tamam
                </button>
              </div>
              <a
                href="cookie-policy"
                className="text-sm hover:text-[#C7A317] transition duration-300"
              >
                Daha Fazla Bilgi
              </a>
            </div>
          )}
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
