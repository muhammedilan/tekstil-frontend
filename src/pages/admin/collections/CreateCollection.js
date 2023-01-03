import axios from "axios";
import React, { useState } from "react";
import cogoToast from "cogo-toast";
import { FiTrash2 } from "react-icons/fi";

const CreateCollection = () => {
  const [collection, setCollection] = useState();

  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <label className="form-label">Collection Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter collection name"
            onChange={(e) =>
              setCollection({ ...collection, name: e.target.value })
            }
          />
        </div>
        <div className="card-body relative">
          {collection?.image ? (
            <div className="w-[275px] h-[367px] relative">
              <img
                width="100%"
                height="230"
                className="w-full h-full"
                src={URL.createObjectURL(collection.image)}
                alt="Product Image"
              />
              <FiTrash2
                className="p-1 absolute right-2 top-2 cursor-pointer text-[#ff0000]"
                onClick={() => {
                  setCollection({ name: collection.name });
                }}
                size={24}
              />
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setCollection({
                  ...collection,
                  image: e.dataTransfer.files[0],
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
                    setCollection({
                      ...collection,
                      image: e.target.files[0],
                    });
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
      {/* end card */}
      <div className="text-end mb-3">
        <button
          onClick={() => {
            const formData = new FormData();
            Object.entries(collection).map((value) => {
              formData.append(value[0], value[1]);
            });
            axios
              .post("/collection", formData)
              .then(
                (res) =>
                  res.status === 201 &&
                  cogoToast.success(res.data, { position: "bottom-right" })
              );
          }}
          type="submit"
          className="btn btn-success w-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateCollection;
