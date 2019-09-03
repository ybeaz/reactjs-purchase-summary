import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";

import PurchaseSummary from "../PurchaseSummary.react";

Enzyme.configure({ adapter: new Adapter() });

//Enzyme.configure({ adapter: new Adapter() });

const props = {
  qty: 1,
  sutotal: 102.96,
  pickupSavings: 3.85,
  taxesFees: 8.92,
  priceDetails: 99.11,
  reduxState: {
    user: {
      id: 0,
      promoCode: "DISCOUNT"
    }
  },
  actions: {}
};
const wrapper = shallow(<PurchaseSummary {...props} />);

describe("Feature tests", function() {
  //psummary__promo_savings
  it("05 Should .psummary__estTotal elem be calculated correctly", function() {
    wrapper.setState({ promoSavings: 10.3 });
    expect(wrapper.find("div.psummary__estTotal").text()).toEqual("$97.73");
  });

  it("04 Should <PromoCode /> be visible after onclick", function() {
    wrapper.find("div.psummary__promo_code").simulate("click");
    expect(wrapper.state().togglePromoCodeA).toEqual("inline-block");
  });

  it("03 Should <ItemDetails /> be visible after onclick", function() {
    wrapper.find("div.psummary__item_details").simulate("click");
    expect(wrapper.state().toggleItemDetailsA).toEqual("inline-block");
  });

  it("02 Should find tooltiptextApp", function() {
    expect(wrapper.find(".tooltiptextApp").length).toEqual(1); //Work to be true
  });

  it("01 Should be rendered", function() {
    expect(wrapper.find(PurchaseSummary)).toBeDefined(); //Work to be true
  });
});

describe("Test test environment", function() {
  const sum = (a, b) => {
    return a + b;
  };
  it("Should be Ok", function() {
    expect(sum(2, 3)).toBe(5); //Work to be true
  });
});
