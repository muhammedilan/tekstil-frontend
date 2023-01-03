import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

const CreateColor = () => {
  const [color, setColor] = useState();
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <label className="form-label">Color Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter color name"
              onChange={(e) => setColor({ ...color, name: e.target.value })}
            />
            <label className="form-label my-6">Color Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter color code"
              onChange={(e) => setColor({ ...color, code: e.target.value })}
            />
          </div>
        </div>
        {/* end card */}
        <div
          className="text-end mt-3"
          onClick={() => {
            axios
              .post("/color", color)
              .then(
                (res) =>
                  res.status === 201 &&
                  cogoToast.success(res.data, { position: "bottom-right" })
              );
          }}
        >
          <button type="submit" className="btn btn-success w-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateColor;
