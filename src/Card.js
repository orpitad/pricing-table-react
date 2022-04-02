import React from "react";

const Card = ({ header, price, features }) => {
  console.log("parent", header);
  return (
    <>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {header}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((item, i) => (
              <>
                <li className={item.active ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  {item.bold ? (
                    <>
                      <strong>{item.detail}</strong>{" "}
                      <span>{item.additional_detail}</span>
                    </>
                  ) : (
                    <>
                      {item.detail} {item.additional_detail}
                    </>
                  )}
                </li>
              </>
            ))}
          </ul>
          <div className="d-grid">
            <a href="/" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
