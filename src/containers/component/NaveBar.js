import React from "react";

function NaveBar() {
  return (
    <div className="container-fluid">
      <div className="mx-3 bg-danger">
        <div className="row g-0">
          <div className="col-6 text-center " style={{ minHeight: "50px" }}>
            <h6 className="py-2 text-white">Become A 21 century</h6>
          </div>
          <div
            className="col-6 d-flex justify-content-around align-items-center text-white p-2"
            style={{ minHeight: "50px" }}
          >
            <h6>hello@gmail.com</h6>
            <h6>icon</h6>
            <h6>icon</h6>
            <h6>icon</h6>
            <h6>icon</h6>
          </div>
        </div>
      </div>
      <div className="mx-3" style={{ height: "120px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid px-0 w-100">
            <div className="row w-100 g-0">
              <div className="col-6">
                <div className=" w-100 d-flex justify-content-start align-items-center">
                  <img
                    style={{ width: "100px" }}
                    src="/Header Logo.jpg"
                    alt="logo not found"
                    className=""
                  />
                  <div className="px-3">
                    <div className="">
                      <p>INNOVATIVE TECHNOLOGY OF TEACHING</p>
                    </div>
                    <div className="w-100">
                      <p className="text-end">
                        21 century&#39; s style of education that transform
                        lives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="w-100 d-flex justify-content-center align-items-center ">
                  <div className="w-100">
                    <div className="d-flex justify-content-end align-items-center ">
                      <a href="/" className="link-primary text-decoration-none">
                        {" "}
                        create Account
                      </a>
                      <a href="/">
                        Login &nbsp;<span>icon</span>
                      </a>
                    </div>
                    <div className="">
                      <ul className="nav justify-content-center">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Why itot
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Market Place
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Web Portal
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Help
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NaveBar;
{
  /* <div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">
        Features
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">
        Pricing
      </a>
    </li>
  </ul>
</div>;
          */
}
