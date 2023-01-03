import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { t } from "i18next";

const ProductDescriptionTab = ({ spaceBottomClass, product }) => {
  function th(title) {
    return (
      <div className="px-4 py-2 flex items-center justify-center border border-white">
        {title}
      </div>
    );
  }

  const bodyList = [
    {
      clothing_size: [36, 38],
      chest_circumference: ["88-90"],
      waist_circumference: ["68-70"],
      hip_circumference: ["94-96"],
    },
    {
      clothing_size: [38, 40],
      chest_circumference: ["92-94"],
      waist_circumference: ["72-74"],
      hip_circumference: ["98-100"],
    },
    {
      clothing_size: [40, 42],
      chest_circumference: ["96-100"],
      waist_circumference: ["76-80"],
      hip_circumference: ["102-104"],
    },
  ];
  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="additionalInfo">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  {t('additional_information')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sizeChart">Beden Tablosu</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li className="grid grid-cols-12">
                      <span className="col-span-4">Kategori : </span>
                      <div className="col-span-8">
                        {product?.category.map(
                          (category, i) => (i > 0 ? "," : "") + category.name
                        )}
                      </div>
                    </li>
                    <li className="grid grid-cols-12">
                      <span className="col-span-4">Renk Adı : </span>
                      <div className="col-span-8">
                        {product?.color.map(
                          (color, i) => (i > 0 ? "," : "") + color.name
                        )}
                      </div>
                    </li>
                    <li className="grid grid-cols-12">
                      <span className="col-span-4">Kumaş Bilgisi : </span>{" "}
                      <div className="col-span-8">
                        {product?.fabric_information}
                      </div>
                    </li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sizeChart">
                <div className="grid grid-cols-[0.7fr,repeat(4,1fr)] !bg-[#e8e8e8] !text-[#343434] font-semibold text-[min(2.35vw,15.5px)]">
                  {th("Beden Numarası")}
                  {th("Kıyafet Bedeni")}
                  {th("Gögüs Çevresi (cm)")}
                  {th("Bel Çevresi (cm)")}
                  {th("Kalça Çevresi (cm)")}
                  {bodyList.map((body, index) => (
                    <>
                      <h1 className="text-[32px] px-4 py-2 flex items-center justify-center border border-white font-bold !m-0">
                        {index+1}
                      </h1>
                      <div className="px-4 py-2 font-bold border border-white text-[min(4vw,15.5px)]">
                        {body.clothing_size.map((cs) => (
                          <div>{cs}</div>
                        ))}
                      </div>
                      <div className="px-4 py-2 font-bold border border-white text-[min(4vw,15.5px)]">
                        {body.chest_circumference.map((cs) => (
                          <div>{cs}</div>
                        ))}
                      </div>
                      <div className="px-4 py-2 font-bold border border-white text-[min(4vw,15.5px)]">
                        {body.waist_circumference.map((wc) => (
                          <div>{wc}</div>
                        ))}
                      </div>
                      <div className="px-4 py-2 font-bold border border-white text-[min(4vw,15.5px)]">
                        {body.hip_circumference.map((hc) => (
                          <div>{hc}</div>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
