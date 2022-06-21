import React, { useEffect, useState } from "react";
import VisitorsOderCard from "./VisitorsOderCard";
import { getOders } from "../http/index";
import "./sass/VisitorsBoard.scss";

function VisitorsBoard(prams) {
  const { data } = prams;
  const [oders, setOders] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getOders();
        console.log("oder list --->", res.data);
        setOders(res.data.Oder);
      } catch (error) {
        console.log("error while getting oders -->", error);
      }
    };
    getData();
    return () => {};
  }, []);

  return (
    <>
      <div className="visitorsBoard">
        <div className="visitorsBoard__main">
          {data ? (
            <div className="visitorsBoard__content">
              <VisitorsOderCard
                coverImg={6}
                oderName="piza"
                veg={true}
                oderId="5646848484d4cwe84846"
                price="345"
                placedTime="2:67PM"
                pStatus="Unpaired"
              />
            </div>
          ) : (
            <div className="visitorsBoard__content">
              {oders?.map((el) => (
                <VisitorsOderCard
                  data={el}
                  key={el.data_id}
                  coverImg={Math.floor(Math.random() * 11)}
                  oderName={el.oderName}
                  veg={true}
                  oderId={el._id}
                  price="345"
                  placedTime="2:67PM"
                  pStatus={el.paymentStatus}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div style={{ padding: "200px", background: "red" }}></div> */}
    </>
  );
}

export default VisitorsBoard;
