import { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getSortedProducts } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { setProducts } from "../../store/slices/product-slice";
import axios from "axios";
import { useCallback } from "react";
import { useMemo } from "react";

const ShopGridStandard = () => {
  const { category, collection } = useParams();

  let categoryId = category?.split("-c-")[1];
  let collectionId = collection?.split("-c-")[1];

  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState(
    (category && "category") || (collection && "collection")
  );
  const [sortValue, setSortValue] = useState(categoryId || collectionId);
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [ready, setReady] = useState(false);

  const { products } = useSelector((state) => state.product);

  const pageLimit = 15;

  let { pathname } = useLocation();
  let dispatch = useDispatch();

  const getLayout = useCallback((layout) => {
    setLayout(layout);
  }, []);

  const getSortParams = useCallback((sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  }, []);

  const getFilterSortParams = useCallback((sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  }, []);

  useEffect(() => {
    if (category) {
      axios.get(`product/category/${categoryId}`).then((res) => {
        if (res.status === 200) {
          dispatch(setProducts(res.data));
        }
        setReady(true);
      });
    } else if (collection) {
      axios.get(`product/collection/${collectionId}`).then((res) => {
        if (res.status === 200) {
          dispatch(setProducts(res.data));
        }
        setReady(true);
      });
    } else {
      axios.get("product").then((res) => {
        res.status === 200 && dispatch(setProducts(res.data));
        setReady(true);
      });
    }
  }, []);

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  const BreadCrumb = useMemo(
    () => (
      <Breadcrumb
        pages={[
          { label: "Home", path: process.env.PUBLIC_URL + "/" },
          { label: "Shop", path: process.env.PUBLIC_URL + pathname },
        ]}
      />
    ),
    []
  );

  return (
    <>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {BreadCrumb}
        
        <div className="shop-area pt-95 pb-100">
          <div className="container">
            {ready ? (
              <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                  {/* shop sidebar */}
                  <ShopSidebar
                    products={products}
                    getSortParams={getSortParams}
                    sideSpaceClass="mr-30"
                  />
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                  {/* shop topbar default */}
                  <ShopTopbar
                    getLayout={getLayout}
                    getFilterSortParams={getFilterSortParams}
                  />

                  {/* shop page content default */}
                  <ShopProducts layout={layout} products={currentData} />

                  {/* shop product pagination */}
                  <div className="pro-pagination-style text-center mt-30">
                    <Paginator
                      totalRecords={sortedProducts.length}
                      pageLimit={pageLimit}
                      pageNeighbours={2}
                      setOffset={setOffset}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pageContainerClass="mb-0 mt-0"
                      pagePrevText="«"
                      pageNextText="»"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </>
  );
};

export default ShopGridStandard;
