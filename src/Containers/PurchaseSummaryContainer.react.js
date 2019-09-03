import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PurchaseSummary from "../Components/PurchaseSummary.react";
import * as actions from "../Shared/action";

const mapStateToProps = state => {
  return {
    reduxState: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseSummary);
