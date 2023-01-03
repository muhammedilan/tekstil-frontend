import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import LayoutOne from "../../layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { setCollections } from "../../store/slices/collection-slice";

const Collection = () => {
  const { collections } = useSelector((state) => state.collection);
  let dispatch = useDispatch();

  useEffect(() => {
    axios.get("/collection").then((res) => {
      dispatch(setCollections(res.data));
    });
  }, []);

  return (
    <LayoutOne>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] grid-rows-[repeat(auto-fit,260px)] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-rows-[repeat(auto-fit,300px)] min-h-[1000px] container my-[80px] gap-10">
        {collections?.map((collection) => (
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-301d67ad"
            data-id="301d67ad"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated h-full">
              <div className="elementor-widget-wrap h-full">
                <div
                  className="elementor-element elementor-element-1cc07c6f elementor-widget elementor-widget-flone_banner h-full"
                  data-id="1cc07c6f"
                  data-element_type="widget"
                  data-widget_type="flone_banner.default"
                >
                  <div className="elementor-widget-container h-full">
                    <div className="flone-single-banner single-banner align_left h-full">
                      <Link
                        to={
                          "/shop-grid-standard/collections/" +
                          collection.name.replace("/", "-") +
                          "-c-" +
                          collection.id
                        }
                      >
                        <img
                          src={collection.image.secure_url}
                          className="attachment-large size-large w-full h-full"
                          alt="Home 4 - Fashion"
                          decoding="async"
                          loading="lazy"
                          title="Home 4 - Fashion"
                        />
                      </Link>
                      <div className="flone-banner-content banner-content">
                        <h3>{collection.name}</h3>
                        <h4 className="min-h-[24px]">
                          {collection.starting_price && (
                            <>
                              Starting at{" "}
                              <span>₺{collection.starting_price}</span>
                            </>
                          )}
                        </h4>
                        <Link
                          to={
                            "/shop-grid-standard/collections/" +
                            collection.name.replace("/", "-") +
                            "-c-" +
                            collection.id
                          }
                          className="!flex items-center justify-center"
                          rel="nofollow"
                        >
                          <BsArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LayoutOne>
  );
};

export default Collection;
