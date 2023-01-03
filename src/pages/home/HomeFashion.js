import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";

import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import HeroSliderFifteen from "../../wrappers/hero-slider/HeroSliderFifteen";
import ProductGridFiveContainer from "../../wrappers/product/ProductGridFiveContainer";

const HomeFashion = ({ categories }) => {
  const Card = (slider, index) => {
    return (
      <div className="relative">
        <img
          src={require(`../../assets/images/home/slider${index}.png`)}
          alt="Image"
        />
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 z-10 p-6 bg-white text-center">
          <h1 className="font-normal text-[1.5rem] whitespace-nowrap leading-[36px]">
            Siyah Kombinler 3 <br /> öneri
          </h1>
          <small className="font-light text-[1rem] leading-6">Admin</small>
        </div>
      </div>
    );
  };
  return (
    <>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderFifteen />

        {/* product grid */}
        <ProductGridFiveContainer
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          category={categories}
        />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="mt-[54px]" spaceBottomClass="mb-[71px]" />

        <div className="container mx-auto">
          <div className="flex items-center flex-wrap gap-y-[55px] mb-[104px]">
            <div className="w-full max-w-[518px]">
              <h1 className="font-light leading-[72.61px] text-[3.75rem] mb-[7px] text-dark-blue">
                En Yeni <br /> Koleksiyonlar <br /> Burada
              </h1>
              <p className="font-medium text-[1.25rem] leading-[32.8px] text-dark-blue">
                Kadın giyimine yön veren Polin, en yeni <br /> koleksiyonlarını
                sizlere sunuyor. Çünkü siz <br /> en iyisine layıksınız.
              </p>
              <div className="btn-hover mt-[55px] flex items-center justify-center">
                <button className="px-[18px] py-[16px] text-[1rem]  font-medium leading-[23.9px] animated border-[1px] border-black border-opacity-100 text-dark-blue">
                  Koleksiyonlara Göz At
                </button>
              </div>
            </div>
            <div>
              <img
                src={require("../../assets/images/home/newCollections.png")}
                alt="New Collection Image"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-[55px] mb-[211px]">
            <div>
              <img
                src={require("../../assets/images/home/style.png")}
                alt="New Collection Image"
              />
            </div>
            <div className="w-full max-w-[518px] text-right">
              <h1 className="font-light leading-[72.61px] text-[3.75rem] mb-20 text-dark-blue">
                Tarzını Yansıtan <br /> Modeller Burada!
              </h1>
              <p className="font-medium text-[1.25rem] leading-[32.8px] text-dark-blue">
                Kadın giyimine yön veren Polin, en yeni <br /> koleksiyonlarını
                sizlere sunuyor. Çünkü siz <br /> en iyisine layıksınız.
              </p>
              <div className="btn-hover mt-[55px] flex items-center justify-center">
                <button className="px-[18px] py-[16px] text-[1rem]  font-medium leading-[23.9px] animated border-[1px] border-black border-opacity-100 text-dark-blue">
                  Koleksiyonlara Göz At
                </button>
              </div>
            </div>
          </div>
          <img
            className="w-full h-full max-h-[566px]"
            src={require("../../assets/images/home/dress.png")}
            alt="Dress"
          />
          <div className="mt-[57px] mb-[36px] flex items-center justify-center">
            <div className="w-[75px] h-[7px] bg-black" />
            <div className="mx-[20px] my-[10px] text-dark-blue text-[32px] font-bold">
              BLOG
            </div>
            <div className="w-[75px] h-[7px] bg-black" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,468px)] justify-center gap-[32px] mb-[100px]">
            {[1, 2, 3].map((slider, index) => Card(slider, index + 1))}
          </div>
        </div>
      </LayoutOne>
    </>
  );
};

export default HomeFashion;
