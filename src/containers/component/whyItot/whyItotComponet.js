import React from "react";

function whyItotComponet() {
  const cards = [
    {
      id: "1",
      title: "CONVEY INFORMATION",
      url: "003-Page/001.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "2",
      title: "CONVEY INFORMATION",
      url: "003-Page/002.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "3",
      title: "CONVEY INFORMATION",
      url: "003-Page/003.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "4",
      title: "CONVEY INFORMATION",
      url: "003-Page/004.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "5",
      title: "CONVEY INFORMATION",
      url: "003-Page/005.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "6",
      title: "CONVEY INFORMATION",
      url: "003-Page/006.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "7",
      title: "CONVEY INFORMATION",
      url: "003-Page/007.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    {
      id: "8",
      title: "CONVEY INFORMATION",
      url: "003-Page/008.png",
      descraption:
        "Children collect some data from this new information which is stored in their short-term money",
      color: "yellow",
    },
    // {
    //   id: "9",
    //   title: "CONVEY INFORMATION",
    //   url: "003-Page/009.png",
    //   descraption:
    //     "Children collect some data from this new information which is stored in their short-term money",
    //   color: "yellow",
    // },
    // {
    //   id: "10",
    //   title: "CONVEY INFORMATION",
    //   url: "003-Page/010.png",
    //   descraption:
    //     "Children collect some data from this new information which is stored in their short-term money",
    //   color: "yellow",
    // },
  ];
  return (
    <div>
      <div className="row align-items-start mx-0">
        <div className="col-2">SideBar component</div>
        <div className="col-10">
          <div className="w-100">
            <div>
              <h1>CURRICULUM GOAL 10 STEPS (10 Cs)</h1>
            </div>

            <div className="w-100 d-flex flex-wrap justify-content-center align-items-center">
              {cards.map((item, index) => {
                return (
                  <>
                    {index % 2 === 0 ? (
                      <div className="w-25 my-4" key={index}>
                        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                          <div>
                            {" "}
                            <h2>{item.title}</h2>
                          </div>
                          <div>
                            <img
                              src={item.url}
                              style={{ width: "180px", margin: "auto" }}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            <p>{item.descraption}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-25 my-4" key={index}>
                        <div className="w-100 d-flex justify-content-center align-items-center flex-column ">
                          <div>
                            <p>{item.descraption}</p>
                          </div>
                          <div>
                            <img
                              src={item.url}
                              style={{ width: "180px", margin: "auto" }}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            {" "}
                            <h2>{item.title}</h2>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whyItotComponet;
