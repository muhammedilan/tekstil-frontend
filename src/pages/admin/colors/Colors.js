import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const Products = () => {
  const [colors, setColors] = useState();

  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(10);

  const [colorsIds, setColorsIds] = useState([]);

  useEffect(() => {
    axios.get("/color").then((res) => {
      setColors(res.data);
    });
  }, []);

  return (
    <div className="row">
      <div className="card">
        <div className="card-header border-0">
          <div className="row g-4">
            <Link to="/admin/create-color" className="col-sm-auto">
              <div>
                <div className="btn btn-success" id="addproduct-btn">
                  <i className="ri-add-line align-bottom me-1" /> Add Color
                </div>
              </div>
            </Link>
            <div className="col-sm">
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input
                    type="text"
                    className="form-control"
                    id="searchProductList"
                    placeholder="Search Products..."
                  />
                  <i className="ri-search-line search-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <ul
                className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active fw-semibold"
                    data-bs-toggle="tab"
                    href="#productnav-all"
                    role="tab"
                    aria-selected="true"
                  >
                    All
                    <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                      {colors?.length}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {colorsIds.length > 0 && (
              <div className="col-auto">
                <div id="selection-element" style={{ display: "block" }}>
                  <div className="my-n1 d-flex align-items-center text-muted">
                    Select
                    <div
                      id="select-content"
                      className="text-body fw-semibold px-1"
                    >
                      {colorsIds.length}
                    </div>
                    Result
                    <button
                      onClick={() => {
                        axios
                          .delete("/color", {
                            data: {
                              ids: colorsIds,
                            },
                          })
                          .then(
                            (res) =>
                              res.status === 200 && window.location.reload()
                          );
                      }}
                      type="button"
                      className="btn btn-link link-danger p-0 ms-3 shadow-none"
                      data-bs-toggle="modal"
                      data-bs-target="#removeItemModal"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="tab-content text-muted">
            <div
              className="tab-pane active"
              id="productnav-all"
              role="tabpanel"
            >
              <div
                id="table-product-list-all"
                className="table-card gridjs-border-none"
              >
                <div
                  role="complementary"
                  className="gridjs gridjs-container"
                  style={{ width: "100%" }}
                >
                  <div className="gridjs-wrapper" style={{ height: "auto" }}>
                    <table
                      role="grid"
                      className="gridjs-table"
                      style={{ height: "auto" }}
                    >
                      <thead className="gridjs-thead">
                        <tr className="gridjs-tr">
                          <th
                            data-column-id="#"
                            className="gridjs-th text-muted"
                            style={{ width: "40px" }}
                          >
                            <div className="gridjs-th-content">#</div>
                          </th>
                          <th
                            data-column-id="color"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                          >
                            <div className="gridjs-th-content">Color Name</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="stock"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                          >
                            <div className="gridjs-th-content">Color</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="action"
                            className="gridjs-th text-muted"
                            style={{ width: "80px" }}
                          >
                            <div className="gridjs-th-content">Action</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="gridjs-tbody">
                        {colors?.slice(sliceStart, sliceEnd).map((color) => (
                          <tr className="gridjs-tr">
                            <td data-column-id="#" className="gridjs-td">
                              <span>
                                <div className="form-check checkbox-product-list">
                                  {" "}
                                  <input
                                    onClick={() => {
                                      if (colorsIds.includes(color.id)) {
                                        return setColorsIds(
                                          colorsIds.filter(
                                            (id) => id !== color.id
                                          )
                                        );
                                      } else {
                                        setColorsIds([...colorsIds, color.id]);
                                      }
                                    }}
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue={1}
                                    id="checkbox-1"
                                  />{" "}
                                  <label
                                    className="form-check-label"
                                    htmlFor="checkbox-1"
                                  />{" "}
                                </div>
                              </span>
                            </td>
                            <td data-column-id="product" className="gridjs-td">
                              <span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1">
                                    <h5 className="fs-14 mb-1">
                                      <a
                                        href="apps-ecommerce-product-details.html"
                                        className="text-dark"
                                      >
                                        {color.name}
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </span>
                            </td>
                            <td
                              data-column-id="color"
                              className="gridjs-td flex items-center gap-x-2"
                            >
                              <span
                                className="w-[17px] h-[17px] rounded-full cursor-pointer border-[1px] border-gray-300 hover:border-0 hover:scale-105 transition duration-500"
                                style={{ backgroundColor: color.code }}
                              ></span>
                            </td>

                            <td
                              onClick={() => {
                                axios
                                  .delete("/color", {
                                    data: {
                                      id: color.id,
                                    },
                                  })
                                  .then(
                                    (res) =>
                                      res.status === 200 &&
                                      window.location.reload()
                                  );
                              }}
                              data-column-id="action"
                              className="gridjs-td"
                            >
                              <button className="p-1 bg-[#ff0000] rounded-[4px]">
                                <FiTrash2 size={18} color="#fff" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="gridjs-footer">
                    <div className="gridjs-pagination">
                      <div
                        role="status"
                        aria-live="polite"
                        className="gridjs-summary"
                        title="Page 1 of 2"
                      >
                        Showing <b>{sliceStart == 0 ? 1 : sliceStart}</b> to{" "}
                        <b>{sliceEnd}</b> of <b>{colors?.length}</b> results
                      </div>
                      <div className="gridjs-pages">
                        <button
                          onClick={() => {
                            setSliceStart(sliceStart - 10);
                            setSliceEnd(sliceEnd - 10);
                          }}
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => {
                            setSliceStart(sliceEnd);
                            setSliceEnd(sliceEnd + 10);
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="gridjs-temp" className="gridjs-temp" />
                </div>
              </div>
            </div>
            {/* end tab pane */}
            <div className="tab-pane" id="productnav-published" role="tabpanel">
              <div
                id="table-product-list-published"
                className="table-card gridjs-border-none"
              >
                <div
                  role="complementary"
                  className="gridjs gridjs-container"
                  style={{ width: "100%" }}
                >
                  <div className="gridjs-wrapper" style={{ height: "auto" }}>
                    <table
                      role="grid"
                      className="gridjs-table"
                      style={{ height: "auto" }}
                    >
                      <thead className="gridjs-thead">
                        <tr className="gridjs-tr">
                          <th
                            data-column-id="#"
                            className="gridjs-th text-muted"
                            style={{ width: "40px" }}
                          >
                            <div className="gridjs-th-content">#</div>
                          </th>
                          <th
                            data-column-id="product"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "360px" }}
                          >
                            <div className="gridjs-th-content">Product</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="stock"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "94px" }}
                          >
                            <div className="gridjs-th-content">Stock</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="price"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "101px" }}
                          >
                            <div className="gridjs-th-content">Price</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="published"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "220px" }}
                          >
                            <div className="gridjs-th-content">Published</div>
                            <button
                              tabIndex={-1}
                              aria-label="Sort column ascending"
                              title="Sort column ascending"
                              className="gridjs-sort gridjs-sort-neutral"
                            />
                          </th>
                          <th
                            data-column-id="action"
                            className="gridjs-th text-muted"
                            style={{ width: "80px" }}
                          >
                            <div className="gridjs-th-content">Remove</div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div id="gridjs-temp" className="gridjs-temp" />
                </div>
              </div>
            </div>
            {/* end tab pane */}
            <div className="tab-pane" id="productnav-draft" role="tabpanel">
              <div className="py-4 text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="loop"
                  colors="primary:#405189,secondary:#0ab39c"
                  style={{ width: "72px", height: "72px" }}
                ></lord-icon>
                <h5 className="mt-4">Sorry! No Result Found</h5>
              </div>
            </div>
            {/* end tab pane */}
          </div>
          {/* end tab content */}
        </div>
        {/* end card body */}
      </div>
    </div>
  );
};

export default Products;
