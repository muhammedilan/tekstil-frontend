import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Home = () => {
  const [sliderImage, setSliderImage] = useState();

  function handleSetFile(file) {
    const fileType = file.name.split(".")[1];
    if (
      fileType == "png" ||
      fileType == "gif" ||
      fileType == "jpeg" ||
      fileType == "jpg"
    ) {
      setSliderImage(file);
    }
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header" onClick={() => console.log(sliderImage)}>
            <h5 className="card-title mb-0">Product Gallery</h5>
          </div>
          <div className="card-body max-w-[890px]">
            <div>
              <h5 className="fs-14 mb-1">Slider Image</h5>
              <p className="text-muted">Add Slider Image.</p>
              {sliderImage ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(sliderImage)}
                    width="890"
                    height="230"
                    className="w-[890px] h-[230px] object-contain"
                  />
                  <FiTrash2
                    onClick={() => setSliderImage()}
                    className="absolute right-2 top-2 cursor-pointer z-10"
                    size={22}
                    color="#FF0000"
                  />
                </div>
              ) : (
                <div
                  className="dropzone dz-clickable cursor-pointer"
                  onClick={(e) => e.currentTarget.lastElementChild.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleSetFile(e.dataTransfer.files[0]);
                  }}
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
                    onChange={(e) => handleSetFile(e.currentTarget.files[0])}
                    accept="image/*"
                  />
                </div>
              )}
              <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
              {/* end dropzon-preview */}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            axios
              .post(
                "/slider",
                { image: sliderImage },
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then((res) => {
                res.status === 201 && alert("Success");
                console.log(res);
              });
          }}
          className="text-end mb-3"
        >
          <button type="submit" className="btn btn-success w-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
