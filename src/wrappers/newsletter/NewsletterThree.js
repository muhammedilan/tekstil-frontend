import PropTypes from "prop-types";
import clsx from "clsx";
import SubscribeEmailTwo from "../../components/newsletter/SubscribeEmailTwo";
import { t } from "i18next";

const NewsletterThree = ({
  spaceTopClass,
  spaceBottomClass,
  subscribeBtnClass,
  bgColorClass,
  subscribeColorClass,
}) => {
  return (
    <div
      className={clsx(
        "subscribe-area-3",
        bgColorClass,
        spaceTopClass,
        spaceBottomClass
      )}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-10 mx-auto">
            <div
              className={clsx(
                "subscribe-style-3 text-center",
                subscribeColorClass
              )}
            >
              <h2>{t("join_with_us")}!</h2>
              <p>
                {t("subscribe_to_our_newsletter_to_receive_news_on_update")}
              </p>
              {/* subscription form */}
              <SubscribeEmailTwo
                mailchimpUrl=""
                spaceTopClass="mt-35"
                subscribeBtnClass={subscribeBtnClass}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterThree.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  bgColorClass: PropTypes.string,
  subscribeColorClass: PropTypes.string,
};

export default NewsletterThree;
