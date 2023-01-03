import { t } from "i18next";
import PropTypes from "prop-types";

const DateTimeDisplay = ({ value, type }) => {
    return (
        <span className="cdown">
            {value} <p>{t(type)}</p>
        </span>
    );
};

DateTimeDisplay.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}

export default DateTimeDisplay;