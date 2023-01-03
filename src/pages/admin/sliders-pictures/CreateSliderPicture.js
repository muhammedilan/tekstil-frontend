import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import axios from "axios";
import cogoToast from "cogo-toast";

const CreateSliderPicture = () => {
  const [sliderPicture, setSliderPicture] = useState();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <label className="form-label">Small Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter small title"
            onChange={(e) =>
              setSliderPicture({
                ...sliderPicture,
                small_title: e.target.value,
              })
            }
          />
        </div>
        <div className="card-body">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            onChange={(e) =>
              setSliderPicture({
                ...sliderPicture,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="card-body relative">
          {sliderPicture?.image ? (
            <div className="w-[275px] h-[367px] relative">
              <img
                width="100%"
                height="230"
                className="w-full h-full"
                src={URL.createObjectURL(sliderPicture.image)}
                alt="Product Image"
              />
              <FiTrash2
                className="p-1 absolute right-2 top-2 cursor-pointer text-[#ff0000]"
                onClick={() => {
                  setSliderPicture({ ...sliderPicture, image: null });
                }}
                size={24}
              />
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setSliderPicture({
                  ...sliderPicture,
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
                    setSliderPicture({
                      ...sliderPicture,
                      image: e.target.files[0],
                    });
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="text-end mb-3">
        <button
          onClick={() => {
            const formData = new FormData();
            Object.entries(sliderPicture).map((value) =>
              formData.append(value[0], value[1])
            );
            axios
              .post("/slider", formData)
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
    </>
  );
};

export default CreateSliderPicture;
