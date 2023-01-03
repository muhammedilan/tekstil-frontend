import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCurrency } from "../../../store/slices/currency-slice";
import { t } from "i18next";

const MobileLangCurrChange = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);

  const changeLanguageTrigger = (e) => {
    const languageCode = e.target.value;
    i18n.changeLanguage(languageCode);
    closeMobileMenu();
  };

  const setCurrencyTrigger = (e) => {
    const currencyName = e.target.value;
    dispatch(setCurrency(currencyName));
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">{t('choose_language')}</span>
        <select value={i18n.resolvedLanguage} onChange={changeLanguageTrigger}>
          <option value="TR">Turkish</option>
        </select>
      </div>
      <div className="lang-curr-style">
        <span className="title mb-2">{t('choose_currency')}</span>
        <select value={currency.currencyName} onChange={setCurrencyTrigger}>
          <option value="TRY">TRY</option>
        </select>
      </div>
    </div>
  );
};

export default MobileLangCurrChange;
