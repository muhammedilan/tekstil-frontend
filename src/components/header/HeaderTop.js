import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";
import { t } from "i18next";

const HeaderTop = ({ borderStyle }) => {
  const currency = useSelector((state) => state.currency);
  return (
    <div
      className={clsx(
        "header-top-wap min-h-[65px]",
        borderStyle === "fluid-border" && "border-bottom"
      )}
    >
      <LanguageCurrencyChanger currency={currency} />
      <div
        className="text-[1rem] font-medium text-[#F00000] underline"
      >
        Tüm Ürünlerde Ücretsiz Kargo
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
