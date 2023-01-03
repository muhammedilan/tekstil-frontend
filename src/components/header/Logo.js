import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Logo = ({ imageUrl, logoClass }) => {
  return (
    <Link to={process.env.PUBLIC_URL + "/"} className="inline-block">
      <img src={logo} className="w-[90px] h-[90px] !m-0 my-[15.5px]" />
    </Link>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
