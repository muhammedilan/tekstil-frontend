import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import { t } from "i18next";

const CreateProduct = ({ isNewYear }) => {
  const [categories, setCategories] = useState();
  const [product, setProduct] = useState();
  const [colors, setColors] = useState();
  const [collections, setCollections] = useState();

  useEffect(() => {
    axios.get("/category").then((res) => {
      setCategories(res.data);
    });
    axios.get("/color").then((res) => setColors(res.data));
    axios.get("/collection").then((res) => setCollections(res.data));
  }, []);

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body flex flex-col gap-y-6">
            <div>
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="form-label">Product Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter product price"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className="form-label">Product Fabric Information</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product fabric information"
                onChange={(e) =>
                  setProduct({ ...product, fabric_information: e.target.value })
                }
              />
            </div>
            <div>
              <label className="form-label">Product Stock</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter product stock"
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
                }
              />
            </div>
            <p onClick={() => console.log(product)}>asdsa</p>
            {isNewYear && (
              <td data-column-id="#" className="gridjs-td">
                <span>
                  <div className="form-check checkbox-product-list">
                    <input
                      onClick={() => {
                        setProduct({
                          ...product,
                          new_year_special: !product?.new_year_special,
                        });
                      }}
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={1}
                      id="checkbox-1"
                    />
                    {t("is_the_product_special_for_christmas")}?
                    <label className="form-check-label" htmlFor="checkbox-1" />
                  </div>
                </span>
              </td>
            )}
          </div>
        </div>
        {/* end card */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Product Gallery</h5>
          </div>
          <div className="card-body relative">
            <h5 className="fs-14 mb-1">Product Gallery</h5>
            <p className="text-muted">Add Product Gallery Images.</p>
            {product?.image?.map((img) => {
              return (
                <div className="w-[275px] h-[367px] relative">
                  <img
                    width="100%"
                    height="230"
                    className="w-full h-full"
                    src={URL.createObjectURL(img)}
                    alt="Product Image"
                  />
                  <FiTrash2
                    className="p-1 absolute right-2 top-2 cursor-pointer text-[#ff0000]"
                    onClick={() => {
                      setProduct({
                        ...product,
                        image: product.image.filter(
                          (filterImg) => filterImg !== img
                        ),
                      });
                    }}
                    size={24}
                  />
                </div>
              );
            })}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setProduct({
                  ...product,
                  image: [...(product.image || ""), e.dataTransfer.files[0]],
                });
              }}
              onClick={(e) => e.currentTarget.lastElementChild.click()}
              className="dropzone dz-clickable"
            >
              <div className="dz-message needsclick">
                <div className="mb-3">
                  <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                </div>
                <h5>Drop files here or click to upload.</h5>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg,.gif"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setProduct({
                      ...product,
                      image: [...(product?.image || ""), e.target.files[0]],
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-end mb-3">
          <button
            onClick={() => {
              const formData = new FormData();
              if (Object.entries(product).length > 0) {
                Object.entries(product)?.map((value) => {
                  if (value[0] !== "image") {
                    formData.append(value[0], value[1]);
                  }
                });
              }
              product?.image?.map((img) => {
                formData.append("image", img);
              });
              axios
                .post("product", formData)
                .then((res) => {
                  console.log(res);
                  res.status === 201
                    ? cogoToast.success(res.data, { position: "bottom-right" })
                    : cogoToast.error(res.data, { position: "bottom-right" });
                })
                .catch((err) => {
                  console.log(err);
                  cogoToast.error(err.response.data.message, {
                    position: "bottom-right",
                  });
                });
            }}
            className="btn btn-success w-sm"
          >
            Submit
          </button>
        </div>
      </div>
      {/* end col */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header" onClick={() => console.log(product)}>
            <h5 className="card-title mb-0">Product Categories</h5>
          </div>
          <div className="card-body">
            <p className="text-muted mb-2">
              <Link
                to="/admin/create-category"
                className="float-end text-decoration-underline"
              >
                Add New
              </Link>
              Select product category
            </p>
            <div
              onClick={(e) =>
                e.currentTarget.lastElementChild.classList.toggle("hidden")
              }
              className="w-full p-[0.25rem_3.6rem_0.1rem_0.5rem] cursor-pointer bg-white border focus:border-[#a59cd9] border-[#ced4da] text-[13px] min-h-[37.5px] shadow-panel rounded-[4px] relative"
            >
              <div className="p-1 pr-4"></div>
              <BiChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
              <div className="w-full pt-[10px] pb-[20px] absolute z-20 left-0 rounded-[4px] translate-y-[4px] text-[13px] bg-white top-full animate-dropdown transition-all duration-700 hidden shadow-[0px_5px_10px_rgb(30 32 37 / 12%)]">
                {categories?.length > 0 &&
                  categories.map((category) => (
                    <p
                      onClick={(e) => {
                        const textDiv =
                          e.currentTarget.parentElement.previousElementSibling
                            .previousElementSibling;

                        if (
                          !textDiv.textContent.split(",").includes(category)
                        ) {
                          textDiv.textContent +=
                            (textDiv.textContent.length > 0 ? "," : "") +
                            e.currentTarget.textContent;
                        }
                        setProduct({
                          ...product,
                          category: category.id,
                        });
                      }}
                      className="hover:bg-[#f3f6f9] p-[.35rem_1.2rem_.35rem_16px] m-0"
                      id={category.id}
                    >
                      {category.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        <div className="card my-6">
          <div className="card-header">
            <h5 className="card-title mb-0">Product Color</h5>
          </div>
          <div className="card-body">
            <p className="text-muted mb-2">
              <Link
                to="/admin/create-color"
                className="float-end text-decoration-underline"
              >
                Add New
              </Link>
              Select product color
            </p>
            <div
              onClick={(e) =>
                e.currentTarget.lastElementChild.classList.toggle("hidden")
              }
              className="w-full p-[0.25rem_3.6rem_0.1rem_0.5rem] cursor-pointer bg-white border focus:border-[#a59cd9] border-[#ced4da] text-[13px] min-h-[37.5px] shadow-panel rounded-[4px] relative z-10"
            >
              <div className="p-1 pr-4"></div>
              <BiChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
              <div className="w-full pt-[10px] pb-[20px] absolute left-0 rounded-[4px] translate-y-[4px] text-[13px] bg-white top-full animate-dropdown transition-all duration-700 hidden shadow-[0px_5px_10px_rgb(30 32 37 / 12%)]">
                {colors?.map((color) => (
                  <p
                    onClick={(e) => {
                      const textDiv =
                        e.currentTarget.parentElement.previousElementSibling
                          .previousElementSibling;

                      if (!textDiv.textContent.split(",").includes(color)) {
                        textDiv.textContent +=
                          (textDiv.textContent.length > 0 ? "," : "") +
                          e.currentTarget.textContent;
                      }
                      if (!product.color) {
                        setProduct({
                          ...product,
                          color: [color.id],
                        });
                      }
                      if (product?.color?.includes(color.id) == false) {
                        setProduct({
                          ...product,
                          color: [...(product.color || ""), color.id],
                        });
                      }
                    }}
                    className="hover:bg-[#f3f6f9] p-[.35rem_1.2rem_.35rem_16px] m-0"
                    id={color.id}
                  >
                    {color.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        <div className="card my-6">
          <div className="card-header">
            <h5 className="card-title mb-0">Product Body Size</h5>
          </div>
          <div className="card-body">
            <p className="text-muted mb-2">Select product body size</p>
            <div
              onClick={(e) =>
                e.currentTarget.lastElementChild.classList.toggle("hidden")
              }
              className="w-full p-[0.25rem_3.6rem_0.1rem_0.5rem] cursor-pointer bg-white border focus:border-[#a59cd9] border-[#ced4da] text-[13px] min-h-[37.5px] shadow-panel rounded-[4px] relative"
            >
              <div className="p-1 pr-4"></div>
              <BiChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
              <div className="w-full pt-[10px] z-10 pb-[20px] absolute left-0 rounded-[4px] translate-y-[4px] text-[13px] bg-white top-full animate-dropdown transition-all duration-700 hidden shadow-[0px_5px_10px_rgb(30 32 37 / 12%)]">
                {["1", "2", "3"].map((body) => (
                  <p
                    onClick={(e) => {
                      const textDiv =
                        e.currentTarget.parentElement.previousElementSibling
                          .previousElementSibling;

                      if (!textDiv.textContent.split(",").includes(body)) {
                        textDiv.textContent +=
                          (textDiv.textContent.length > 0 ? "," : "") +
                          e.currentTarget.textContent;
                      }
                      if (!product?.body) {
                        setProduct({
                          ...product,
                          body: [body],
                        });
                      }
                      if (product?.body?.includes(body) == false) {
                        setProduct({
                          ...product,
                          body: [...(product.body || ""), body],
                        });
                      }
                    }}
                    className="hover:bg-[#f3f6f9] p-[.35rem_1.2rem_.35rem_16px] m-0"
                  >
                    {body}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Product Collection</h5>
          </div>
          <div className="card-body">
            <p className="text-muted mb-2">Select product collection</p>
            <div
              onClick={(e) =>
                e.currentTarget.lastElementChild.classList.toggle("hidden")
              }
              className="w-full p-[0.25rem_3.6rem_0.1rem_0.5rem] cursor-pointer bg-white border focus:border-[#a59cd9] border-[#ced4da] text-[13px] min-h-[37.5px] shadow-panel rounded-[4px] relative"
            >
              <div className="p-1 pr-4"></div>
              <BiChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
              <div className="w-full pt-[10px] pb-[20px] absolute left-0 rounded-[4px] translate-y-[4px] text-[13px] bg-white top-full animate-dropdown transition-all duration-700 hidden shadow-[0px_5px_10px_rgb(30 32 37 / 12%)]">
                {collections?.length > 0 &&
                  collections.map((collection) => (
                    <p
                      onClick={(e) => {
                        const textDiv =
                          e.currentTarget.parentElement.previousElementSibling
                            .previousElementSibling;

                        if (
                          !textDiv.textContent.split(",").includes(collection)
                        ) {
                          textDiv.textContent = e.currentTarget.textContent;
                        }
                        setProduct({
                          ...product,
                          collection: [collection.id],
                        });
                      }}
                      className="hover:bg-[#f3f6f9] p-[.35rem_1.2rem_.35rem_16px] m-0"
                    >
                      {collection.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
      </div>
      {/* end col */}
    </div>
  );
};

export default CreateProduct;
