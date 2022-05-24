import React from "react";
import "./sass/VisitorsBoard.scss";
import VisitorsOderCard from "./VisitorsOderCard";

function VisitorsBoard() {
  return (
    <>
      <div className="visitorsBoard">
        <div className="visitorsBoard__main">
          <h1>Oders</h1>
          <div className="visitorsBoard__content">
            <VisitorsOderCard
              coverImg={6}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={3}
              oderName="Burger"
              veg={false}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={4}
              oderName="Burger"
              veg={false}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={1}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={9}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={1}
              oderName="Burger"
              veg={false}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={5}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="1:67 PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={2}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:27 PM"
              pStatus="paired"
            />
            <VisitorsOderCard
              coverImg={6}
              oderName="Burger"
              veg={false}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67 PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={4}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67 PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={10}
              oderName="Burger"
              veg={false}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
            <VisitorsOderCard
              coverImg={2}
              oderName="Burger"
              veg={true}
              oderId="5646848484d4cwe84846"
              price="345"
              placedTime="2:67PM"
              pStatus="Unpaired"
            />
          </div>
        </div>
      </div>
      {/* <div style={{ padding: "200px", background: "red" }}></div> */}
    </>
  );
}

export default VisitorsBoard;
