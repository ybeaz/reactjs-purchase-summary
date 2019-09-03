import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class ItemDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { qty, priceDetails, sutotal } = this.props;

    return (
      <div>
        <div
          className="half"
          style={{
            verticalAlign: "top",
            paddingTop: "0.5em"
          }}
        >
          <img
            alt=""
            style={{ paddingLeft: "1em", marginBottom: "-0.1em" }}
            src="https://uploads.codesandbox.io/uploads/user/e5162005-8989-45e9-aead-30aef4e942b0/YmNf-chair.png"
          />
        </div>
        <div className="half l_h_1p2_em">
          <div>
            Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
          </div>
          <div>
            <div className="half f_w_b">${priceDetails}</div>
            <div className="half t_a_r">Qty: {qty}</div>
          </div>
          <div>
            <div className="half f_w_b t_d_l_t c_g">${sutotal}</div>
            <div className="half t_a_r" />
          </div>
        </div>
      </div>
    );
  }
}
ItemDetails.propTypes = {
  qty: PropTypes.number,
  sutotal: PropTypes.number,
  pickupSavings: PropTypes.number,
  taxesFees: PropTypes.number,
  priceDetails: PropTypes.number,
  reduxState: PropTypes.object,
  actions: PropTypes.object
};
