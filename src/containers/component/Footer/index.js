import React from "react";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid m-auto bg-primary"
        style={{ minHeight: "250px" }}
      >
        <div className="mx-3">
          {" "}
          <div className="w-100">
            <div className="row">
              <div className="col-3">
                <div
                  className="d-flex align-items-ceter flex-column justify-content-center"
                  style={{ minHeight: "220px" }}
                >
                  <div className="w-100">
                    <img
                      src="Page-01-Sec-05/001.png"
                      style={{ width: "100px", margin: "auto" }}
                      alt="footor-logo not found"
                    />
                  </div>
                  <div>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-3">card 1</div>
                  <div className="col-3">card 2</div>
                  <div className="col-3">card 3</div>
                  <div className="col-3">card 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid m-auto"
          style={{ height: "50px", backgroundColor: "red" }}
        >
          <div className="row">
            <div className="col-6">
              <p className="text-white p-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="col-6 ">
              <h5 className="text-end p-2">icon</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
