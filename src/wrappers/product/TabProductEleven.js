import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitleFive from "../../components/section-title/SectionTitleFive";
import ProductGridTwelve from "./ProductGridTwelve";
import { t } from "i18next";

const TabProductEleven = ({
  products,
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
  sectionTitle,
  bgShape,
  colorClass,
}) => {
  return (
    <div
      className={clsx(
        "product-area product-area--style2",
        spaceTopClass,
        spaceBottomClass,
        bgColorClass
      )}
    >
      <div className="container">
        <div className="product-tab-slider-wrapper position-relative">
          <Tab.Container defaultActiveKey="saleItems">
            <div className="product-top-bar section-border mb-60">
              <SectionTitleFive titleText={sectionTitle} />
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="newArrival">
                <ProductGridTwelve
                  products={products}
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                  colorClass={colorClass}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="bestSeller">
                <ProductGridTwelve
                  products={products}
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                  colorClass={colorClass}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="saleItems">
                <ProductGridTwelve
                  products={products}
                  category={category}
                  type="saleItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                  colorClass={colorClass}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      {bgShape ? (
        <div className="bg-png-1">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/bg/shape-2.png"}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

TabProductEleven.propTypes = {
  bgColorClass: PropTypes.string,
  colorClass: PropTypes.string,
  bgShape: PropTypes.bool,
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProductEleven;
