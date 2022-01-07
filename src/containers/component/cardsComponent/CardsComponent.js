import React from "react";

function CardsComponent() {
  const array = [
    {
      path: "Page-01-Sec-03/001-a.png",
      id: 1,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/002-a.png",
      id: 2,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/006-a.png",
      id: 3,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/010-a.png",
      id: 4,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/010-a.png",
      id: 5,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/002-a.png",
      id: 6,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/001-a.png",
      id: 7,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/006-a.png",
      id: 8,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/001-a.png",
      id: 9,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/002-a.png",
      id: 10,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/001-a.png",
      id: 11,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
    {
      path: "Page-01-Sec-03/002-a.png",
      id: 12,
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cardname: "Card-Name",
    },
  ];
  return (
    <div className=" w-100 m-auto d-flex align-items-center flex-wrap justify-content-center">
      {array.map((card, index) => {
        return (
          <div
            className="d-flex align-items-center flex-column justify-content-center p-2 m-2"
            key={index}
            style={{ width: "320px" }}
          >
            <div>
              <img
                src={card.path}
                alt="pic not foud"
                style={{ width: "200px" }}
              />
            </div>
            <div>
              <h3> {card.cardname}</h3>
            </div>
            <div>
              <p>{card.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsComponent;
