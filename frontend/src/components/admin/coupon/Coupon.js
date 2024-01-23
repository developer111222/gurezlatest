import React, { useState } from "react";
import { Aside } from "../aside/Aside";
import { Input } from "@material-ui/core";
import CouponTab from "./asset/CouponTab";
import "./coupon.css";

const Coupon = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    dtype: "",
    camount: "",
    allowFreeShipping: false,
    couponExpiryDate: "",
    minimumSpend: 0,
    maximumSpend: 0,
    individualUseOnly: false,
    excludeSaleItems: false,
    products: "",
    excludeProducts: "",
    productCategories: "",
    excludeCategories: "",
    emails: "",
    usageLimitPerCoupon: 0,
    limitUsageToXItems: 0,
    usageLimitPerUser: 0,
  });

  const onchageInputValue = (e) => {
    const { name, value, type, checked } = e.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: type === "checkbox" ? checked : value,
    }));
 
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue);
  };

  return (
    <>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <section className="ad-section">
                <div className="all-post">
                  <div className="all-post-heading">
                    <h1>Coupon</h1>
                    <div className="form-div">
                      <form onSubmit={handleSubmit}> 
                        <div className="input-field-area">
                          <label>Name</label>
                          <input
                            type="text"
                            value={inputValue.name}
                            name="name"
                            onChange={onchageInputValue}
                          />
                        </div>
                        <div className="input-field-area">
                          <label>Description</label>
                          <textarea
                            name="desscription"
                            rows="4"
                            cols="50"
                          ></textarea>
                          <input
                            type="text"
                            value={inputValue.desscription}
                            name="desscription"
                            onChange={onchageInputValue}
                          />
                        </div>
                        <div className="coupon-tabs">
                          <CouponTab
                            setInputValue={setInputValue}
                            onchageInputValue={onchageInputValue}
                            inputValue={inputValue}
                          />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
