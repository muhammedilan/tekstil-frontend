import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const ConfirmedOrders = () => {
  const [orders, setOrders] = useState([]);

  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(10);

  const [ordersIds, setOrdersIds] = useState([]);

  useEffect(() => {
    axios.get("/order/1").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="row">
      <div className="card">
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
                      {orders?.length}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {ordersIds.length > 0 && (
              <div className="col-auto">
                <div id="selection-element" style={{ display: "block" }}>
                  <div className="my-n1 d-flex align-items-center text-muted">
                    Select
                    <div
                      id="select-content"
                      className="text-body fw-semibold px-1"
                    >
                      {ordersIds.length}
                    </div>
                    Result
                    <button
                      onClick={() => {
                        var public_ids = [];
                        orders.map(
                          (o) =>
                            ordersIds.includes(o.id) &&
                            o.image.map((img) => public_ids.push(img.public_id))
                        );

                        axios
                          .delete("/order", {
                            data: {
                              ids: ordersIds,
                              public_ids,
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
                            data-column-id="product"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                          >
                            <div className="gridjs-th-content">
                              Product Name
                            </div>
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
                            <div className="gridjs-th-content">
                              Orderer Name
                            </div>
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
                            <div className="gridjs-th-content">Quantity</div>
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
                          >
                            <div className="gridjs-th-content">Total Price</div>
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
                        {orders?.length > 0 &&
                          orders.slice(sliceStart, sliceEnd).map((o) => (
                            <tr className="gridjs-tr">
                              <td data-column-id="#" className="gridjs-td">
                                <span>
                                  <div className="form-check checkbox-product-list">
                                    {" "}
                                    <input
                                      onClick={() => {
                                        if (ordersIds.includes(o.id)) {
                                          return setOrdersIds(
                                            ordersIds.filter(
                                              (id) => id !== o.id
                                            )
                                          );
                                        } else {
                                          setOrdersIds([...ordersIds, o.id]);
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
                              <td data-column-id="name" className="gridjs-td">
                                {o.product_name}
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                {o.orderer_name}
                              </td>
                              <td
                                data-column-id="quantity"
                                className="gridjs-td"
                              >
                                <span>₺{o.quantity}</span>
                              </td>
                              <td
                                data-column-id="total_price"
                                className="gridjs-td"
                              >
                                <span>₺{o.quantity * o.product_price}</span>
                              </td>
                              <td
                                onClick={() => {
                                  axios
                                    .delete("/order", {
                                      data: {
                                        id: o.id,
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
                        <b>{sliceEnd}</b> of <b>{orders?.length}</b> results
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

export default ConfirmedOrders;
