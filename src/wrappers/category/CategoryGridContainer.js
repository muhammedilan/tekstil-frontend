import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryGrid from "../../components/category/CategoryGrid";


const CategoryGridContainer = ({
  spaceTopClass,
  spaceBottomClass,
  category,
}) => {
  return (
    <div
      className={clsx(
        "product-area hm5-section-padding",
        spaceTopClass,
        spaceBottomClass
      )}
    >
      <div className="container-fluid">
        <div className="row">
          <CategoryGrid
            category={category}
            limit={12}
            spaceBottomClass="mb-20"
          />
        </div>
      </div>
    </div>
  );
};

CategoryGridContainer.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CategoryGridContainer;
