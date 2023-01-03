import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import whiteLogo from "../../assets/images/white-logo.png";
const FooterTwo = ({
  backgroundColorClass,
  copyrightColorClass,
  spaceLeftClass,
  spaceRightClass,
  footerTopBackgroundColorClass,
  footerTopSpaceTopClass,
  footerTopSpaceBottomClass,
  backgroundImage,
}) => {
  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceLeftClass,
        spaceRightClass,
        backgroundImage && "bg-img"
      )}
      style={{
        backgroundImage: ` ${
          backgroundImage
            ? `url(${process.env.PUBLIC_URL + backgroundImage})`
            : `url()`
        }`,
      }}
    >
      <div
        className={clsx(
          "footer-top text-center",
          footerTopBackgroundColorClass,
          footerTopSpaceTopClass,
          footerTopSpaceBottomClass
        )}
      >
        <div className="container">
          <div className="footer-logo flex items-center justify-center">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img src={whiteLogo} className="max-h-[100px] !m-0" />
            </Link>
          </div>
          <p>
            Polin Textile, kaıdn giyiminde modanın öncüsü olarak her daim en
            trend ürünleri üretmeyi amaçlayan bir firmadır. Geçmişte olduğu gibi
            günümüzde de daima modaya öncülük edeceğiz.
          </p>
          <div className="footer-social">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/polintextile/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/polintextile/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/polintextile/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div className={clsx("copyright-2", copyrightColorClass)}>
            <p>
              &copy; {new Date().getFullYear()} <a href="/">POLİN</a>{" "}
              {t("all_rights_reserved")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterTwo.propTypes = {
  backgroundColorClass: PropTypes.string,
  copyrightColorClass: PropTypes.string,
  footerLogo: PropTypes.string,
  backgroundImage: PropTypes.string,
  footerTopBackgroundColorClass: PropTypes.string,
  footerTopSpaceBottomClass: PropTypes.string,
  footerTopSpaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterTwo;
