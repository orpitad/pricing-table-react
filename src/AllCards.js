import React from "react";
import Card from "./Card";

import Jsondata from "./data/data.json";

const AllCards = () => {
  console.log(Jsondata);

  const listData = Object.keys(Jsondata);

  console.log(listData);

  // setData("This is data from Parent Component to the Child Component.");
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {Object.keys(Jsondata).map((keyName, i) => (
              <div className="col-lg-4" key={i}>
                <Card
                  header={keyName}
                  price={Jsondata[keyName].price}
                  features={Jsondata[keyName].features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCards;
