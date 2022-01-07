import React from "react";

function WelcomeCard() {
  return (
    <div className="w-100 m-auto my-4 mx-2">
      <div className="w-100 m-auto">
        <div className="row w-100">
          <div className="col-6">
            <div
              className="d-flex align-items-center flex-column justify-content-center px-4"
              style={{ minHeight: "300px" }}
            >
              <div className="text-center">
                <h3 className="text-primary">welcome to Itot</h3>
              </div>
              <div className="w-100 text-center">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div
              className="d-flex align-items-center flex-column justify-content-center px-4 "
              style={{ minHeight: "300px" }}
            >
              <div className="text-center">
                <h3 className="text-dark">Become Itot Member</h3>
              </div>
              <div className="w-100 text-center">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used
                </p>
              </div>
              <div>
                <button type="button" className="btn btn-outline-primary px-4">
                  Learn More &nbsp;&gt;
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div
              className="d-flex align-items-center flex-column justify-content-center px-4 "
              style={{ minHeight: "300px" }}
            >
              <div className="text-center">
                <h3 className="text-dark">Itot MarketPlace</h3>
              </div>
              <div className="w-100 text-center">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used
                </p>
              </div>
              <div>
                <button type="button" className="btn btn-primary px-2">
                  Learn More &nbsp;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 m-auto">
        <div className="row" style={{ minHeight: "230px" }}>
          <div className="col-2 bg-danger">
            <div className="h-100 d-flex align-items-center flex-column justify-content-center p-3">
              <div className=" m-auto p-4 w-100">
                <img
                  src="Page-01-Sec-02/Icon-01-a.png"
                  alt="icon not show"
                  className="w-100 m-auto "
                />
              </div>
              <div className="text-center">
                <h6 className="text-white text-uppercase">Register Now</h6>
              </div>
              <div
                className="w-25 m-auto bg-white"
                style={{ height: "2px" }}
              ></div>
            </div>
          </div>
          <div className="col-10 bg-primary">
            <div className="row">
              <div className="col-3  ">
                <div
                  className="d-flex align-items-center flex-column justify-content-center p-3  "
                  // style={{ bottom: "0px", left: "0px", right: "0px" }}
                >
                  <div className=" m-auto p-4 w-100">
                    <img
                      src="Page-01-Sec-02/Icon-02-a.png"
                      alt="icon not show"
                      className="w-75 "
                      style={{ marginLeft: "20px" }}
                    />
                  </div>
                  <div className="text-center">
                    <h6 className="text-white text-uppercase">Latest News</h6>
                  </div>
                  <div
                    className="w-25 m-auto bg-white"
                    style={{ height: "2px" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 position-relative ">
                <div
                  className="d-flex align-items-center flex-column justify-content-center p-3 position-absolute "
                  style={{ bottom: "0px", left: "0px", right: "0px" }}
                >
                  <div className=" m-auto p-4 w-100">
                    <h1 className="text-white text-center">18000</h1>
                  </div>
                  <div className="text-center">
                    <h6 className="text-white text-uppercase">
                      {" "}
                      students Enrolled
                    </h6>
                  </div>
                  <div
                    className="w-25 m-auto bg-white"
                    style={{ height: "2px" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 position-relative">
                <div
                  className="d-flex align-items-center flex-column justify-content-center p-3 position-absolute "
                  style={{ bottom: "0px", left: "0px", right: "0px" }}
                >
                  <div className=" m-auto p-4 w-100">
                    <h1 className="text-white text-center">10000</h1>
                  </div>
                  <div className="text-center">
                    <h6 className="text-white text-uppercase">
                      school registerd
                    </h6>
                  </div>
                  <div
                    className="w-25 m-auto bg-white"
                    style={{ height: "2px" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 position-relative">
                <div
                  className="d-flex align-items-center flex-column justify-content-center p-3 position-absolute "
                  style={{ bottom: "0px", left: "0px", right: "0px" }}
                >
                  <div className=" m-auto p-4 w-100">
                    <h1 className="text-white text-center">68</h1>
                  </div>
                  <div className="text-center">
                    <h6 className="text-white text-uppercase">client</h6>
                  </div>
                  <div
                    className="w-25 m-auto bg-white"
                    style={{ height: "2px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
