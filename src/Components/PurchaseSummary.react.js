import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";

import ItemDetails from "./ItemDetails.react";
import PromoCode from "./PromoCode.react";

export default class PurchaseSummary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggleItemDetailsA: "none",
      toggleItemDetailsB: "inline-block",
      togglePromoCodeA: "none",
      togglePromoCodeB: "inline-block",
      togglePromoSavings: "none",
      promoSavings: 0
    };
    /*
    console.info("PurchaseSummary->constructor(props)", {
      reduxState: this.props.reduxState,
      props: this.props
    });
    */
  }

  _toggleFunc = ref => {
    let toggle = this.state[ref];
    if (ref === "toggleItemDetailsA") {
      if (toggle === "none") {
        this.setState({
          toggleItemDetailsA: "inline-block",
          toggleItemDetailsB: "none"
        });
      } else {
        this.setState({
          toggleItemDetailsA: "none",
          toggleItemDetailsB: "inline-block"
        });
      }
    } else if (ref === "togglePromoCodeA") {
      if (toggle === "none") {
        this.setState({
          togglePromoCodeA: "inline-block",
          togglePromoCodeB: "none"
        });
      } else {
        this.setState({
          togglePromoCodeA: "none",
          togglePromoCodeB: "inline-block"
        });
      }
    }
  };

  _promoCodeApply = () => {
    const selector = "input.inp_apply";
    const elems = document.querySelectorAll(selector);
    const { value } = elems[0];
    const { promoCode } = this.props.reduxState.user;
    if (value === promoCode) {
      const { sutotal } = this.props;
      const promoSavings = Math.round(sutotal * 0.1 * 100) / 100;
      const togglePromoSavings = "block";
      this.setState({ promoSavings, togglePromoSavings });
    }
  };

  render() {
    const { qty, sutotal, pickupSavings, taxesFees, priceDetails } = this.props;
    const propsItemDetails = this.props;
    const propsPromoCode = {
      ...propsItemDetails,
      _promoCodeApply: this._promoCodeApply
    };
    const {
      toggleItemDetailsA,
      togglePromoCodeA,
      toggleItemDetailsB,
      togglePromoCodeB,
      togglePromoSavings,
      promoSavings
    } = this.state;
    const estTotal = sutotal - pickupSavings - promoSavings + taxesFees;

    return (
      <div className="box p_t_1_em">
        <div>
          <div className="half">Subtotal</div>
          <div className="half t_a_r f_w_b">${sutotal}</div>
        </div>
        <div>
          <div className="half tooltipApp">
            <span className="t_d_u_l">Pickup savings</span>
            <div className="tooltiptextApp l_h_1p2_em">
              Picking up your order in the store helps cut costs, and we pass
              the savings on to you.
            </div>
          </div>
          <div className="half t_a_r c_r f_w_b">-${pickupSavings}</div>
        </div>
        <div style={{ display: togglePromoSavings }}>
          <div className="half">
            <span>Promo</span>
          </div>
          <div className="psummary__promo_savings half t_a_r c_r f_w_b">
            -${promoSavings}
          </div>
        </div>

        <div>
          <div className="half">
            <div className="l_h_1p2_em">Est. taxes & fees</div>
            <div className="l_h_1p2_em">(Based on 94085)</div>
          </div>
          <div className="half t_a_r f_w_b">${taxesFees}</div>
        </div>
        <hr />
        <div className="f_w_b">
          <div className="half f_s_1p2_em">Est. total</div>
          <div className="psummary__estTotal half f_s_1p4_em t_a_r">
            ${estTotal}
          </div>
        </div>
        <div>
          <div
            className="psummary__item_details d_i_b t_d_u_l c_point"
            onClick={e => this._toggleFunc("toggleItemDetailsA")}
          >
            <span
              className="d_i_b t_d_u_l c_point"
              style={{ display: toggleItemDetailsB }}
            >
              See
            </span>
            <span
              className="d_i_b t_d_u_l c_point"
              style={{ display: toggleItemDetailsA }}
            >
              Hide
            </span>
            <span> item details</span>
          </div>
          <img
            alt=""
            className="c_point icon_min_plus"
            style={{ display: toggleItemDetailsB }}
            onClick={e => this._toggleFunc("toggleItemDetailsA")}
            src="https://uploads.codesandbox.io/uploads/user/e5162005-8989-45e9-aead-30aef4e942b0/JfSS-plus.png"
          />
          <img
            alt=""
            className="c_point icon_min_plus"
            style={{ display: toggleItemDetailsA }}
            onClick={e => this._toggleFunc("toggleItemDetailsA")}
            src="https://uploads.codesandbox.io/uploads/user/e5162005-8989-45e9-aead-30aef4e942b0/rtj4-minus.png"
          />
        </div>
        <div style={{ display: toggleItemDetailsA }}>
          <ItemDetails {...propsItemDetails} />
        </div>
        <hr />
        <div>
          <div
            className="psummary__promo_code d_i_b t_d_u_l c_point"
            onClick={e => this._toggleFunc("togglePromoCodeA")}
          >
            <span
              className="d_i_b t_d_u_l c_point"
              style={{ display: togglePromoCodeB }}
            >
              Apply
            </span>
            <span
              className="d_i_b t_d_u_l c_point"
              style={{ display: togglePromoCodeA }}
            >
              Hide
            </span>
            <span> promo code</span>
          </div>
          <img
            alt=""
            className="c_point icon_min_plus"
            style={{ display: togglePromoCodeB }}
            onClick={e => this._toggleFunc("togglePromoCodeA")}
            src="https://uploads.codesandbox.io/uploads/user/e5162005-8989-45e9-aead-30aef4e942b0/JfSS-plus.png"
          />
          <img
            alt=""
            className="c_point icon_min_plus"
            style={{ display: togglePromoCodeA }}
            onClick={e => this._toggleFunc("togglePromoCodeA")}
            src="https://uploads.codesandbox.io/uploads/user/e5162005-8989-45e9-aead-30aef4e942b0/rtj4-minus.png"
          />
        </div>
        <div style={{ display: togglePromoCodeA }}>
          <PromoCode {...propsPromoCode} />
        </div>
      </div>
    );
  }
}
PurchaseSummary.propTypes = {
  qty: PropTypes.number,
  sutotal: PropTypes.number,
  pickupSavings: PropTypes.number,
  taxesFees: PropTypes.number,
  priceDetails: PropTypes.number,
  reduxState: PropTypes.object,
  actions: PropTypes.object
};
