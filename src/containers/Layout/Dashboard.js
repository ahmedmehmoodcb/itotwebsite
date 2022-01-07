import React from "react";
import CardComponents from "../component/cardsComponent/CardsComponent";
import WelcomeCard from "../component/welcomecard";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="mx-3">
        <WelcomeCard />
        <CardComponents />
      </div>
    </div>
  );
}

export default Dashboard;
