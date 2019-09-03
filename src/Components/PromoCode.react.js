import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class PromoCode extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Promo code</div>
        <div className="d_i_b" style={{ width: "70%" }}>
          <input className="inp_apply" ref="inputPromoCode" />
        </div>
        <div className="d_i_b t_a_r" style={{ width: "30%" }}>
          <button
            className="btn_apply"
            onClick={e => this.props._promoCodeApply()}
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}
PromoCode.propTypes = {
  qty: PropTypes.number,
  sutotal: PropTypes.number,
  pickupSavings: PropTypes.number,
  taxesFees: PropTypes.number,
  priceDetails: PropTypes.number,
  reduxState: PropTypes.object,
  actions: PropTypes.object
};
