import PropTypes from "prop-types";
import React, { memo } from "react";
import ShopTopAction from "../../components/product/ShopTopAction";

const ShopTopbar = ({ getLayout, getFilterSortParams }) => {
  return (
    <>
      {/* shop top action */}
      <ShopTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
      />
    </>
  );
};

ShopTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default memo(ShopTopbar);
