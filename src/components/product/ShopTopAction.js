import PropTypes from "prop-types";

import { setActiveLayout } from "../../helpers/product";
import { t } from "i18next";
const ShopTopAction = ({ getLayout, getFilterSortParams }) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={(e) => getFilterSortParams("filterSort", e.target.value)}
          >
            <option value="default">{t("default")}</option>
            <option value="priceHighToLow">{t("price_high_to_low")}</option>
            <option value="priceLowToHigh">{t("price_low_to_high")}</option>
          </select>
        </div>
      </div>

      <div className="shop-tab">
        <button
          onClick={(e) => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={(e) => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
        <button
          onClick={(e) => {
            getLayout("list");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-list-ul" />
        </button>
      </div>
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default ShopTopAction;
