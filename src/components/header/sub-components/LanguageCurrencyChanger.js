import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCurrency } from "../../../store/slices/currency-slice";
import { t } from "i18next";
import { BsChevronDown } from "react-icons/bs";

const LanguageCurrencyChanger = ({ currency }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguageTrigger = (e) => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
  };

  const setCurrencyTrigger = (e) => {
    const currencyName = e.target.value;
    dispatch(setCurrency(currencyName));
  };
  return (
    <div className="language-currency-wrap text-[0.9375rem] font-medium leading-[22.5px] tracking-[10%]">
      <div className="same-language-currency">
        <div className="flex items-center gap-x-2 cursor-pointer group">
          <span>
            {i18n.resolvedLanguage === "en"
              ? "English"
              : i18n.resolvedLanguage === "fn"
              ? "French"
              : i18n.resolvedLanguage === "de"
              ? "Germany"
              : i18n.resolvedLanguage === "tr"
              ? t("turkish")
              : ""}{" "}
          </span>
          <BsChevronDown strokeWidth={1} size={14} className="text-brown group-hover:text-primary transition duration-300" />
        </div>

        <div className="lang-car-dropdown">
          <ul>
            {/* <li>
              <button value="en" onClick={(e) => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="fn" onClick={(e) => changeLanguageTrigger(e)}>
                French
              </button>
            </li>
            <li>
              <button value="de" onClick={(e) => changeLanguageTrigger(e)}>
                Germany
              </button>
            </li> */}
            <li>
              <button value="tr" onClick={(e) => changeLanguageTrigger(e)}>
                Turkish
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency use-style">
        <div className="flex items-center gap-x-2 cursor-pointer hover:text-primary group">
          <span>{currency.currencyName}</span>
          <BsChevronDown strokeWidth={1} size={14} className="text-brown group-hover:text-primary transition duration-300" />
        </div>
        <div className="lang-car-dropdown">
          <ul>
            {/* <li>
              <button value="USD" onClick={(e) => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={(e) => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="GBP" onClick={(e) => setCurrencyTrigger(e)}>
                GBP
              </button>
            </li> */}
            <li>
              <button value="TRY" onClick={(e) => setCurrencyTrigger(e)}>
                TRY
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-language-currency">
        <p className="font-medium text-brown text-[0.9375rem]">
          {t("call_us")}
        </p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  currency: PropTypes.shape({}),
};

export default LanguageCurrencyChanger;
