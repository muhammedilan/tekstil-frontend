import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/slices/product-slice";

const ShopSearch = ({ products }) => {
  const [fixedProducts, setFixedProducts] = useState();

  useEffect(() => {
    setFixedProducts(products);
    console.log("set et", fixedProducts);
  }, []);

  let dispatch = useDispatch();
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{t("search")}</h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <div className="pro-sidebar-search-form">
          <input
            onChange={(e) => {
              dispatch(
                setProducts(
                  fixedProducts.filter(
                    (p) =>
                      p.name.includes(e.target.value) ||
                      p.name.toUpperCase().includes(e.target.value)
                  )
                )
              );
            }}
            id="product-search"
            type="text"
            placeholder={`${t("search_here")} ...`}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopSearch;
